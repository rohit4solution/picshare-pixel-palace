
import { useState } from "react";
import { Upload as UploadIcon, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handlePost = () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please select an image to share.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Post shared!",
      description: "Your photo has been shared successfully.",
    });

    // Reset form
    setSelectedImage(null);
    setCaption("");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create New Post</h1>

        {!selectedImage ? (
          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
              dragActive
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <UploadIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Drag photos here
            </h3>
            <p className="text-gray-500 mb-4">
              or click to select from your computer
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button className="cursor-pointer">
                Select from computer
              </Button>
            </label>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Selected Image */}
            <div className="relative">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full rounded-xl object-cover max-h-96"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Caption */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Write a caption
              </label>
              <Textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Write a caption..."
                className="resize-none"
                rows={3}
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {caption.length}/2,200
              </div>
            </div>

            {/* Post Button */}
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"
                onClick={() => setSelectedImage(null)}
              >
                Cancel
              </Button>
              <Button onClick={handlePost}>
                Share Post
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
