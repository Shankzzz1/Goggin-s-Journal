import React, { useState, useRef } from 'react';

interface RichEditorProps {
  value: string;
  onChange: (value: string) => void;
  onImageAdd?: (file: File) => void;
}

interface EditorContent {
  text: string;
  images: Array<{
    id: string;
    url: string;
    position: number;
  }>;
}

const RichEditor: React.FC<RichEditorProps> = ({ value, onChange, onImageAdd }) => {
  const [content, setContent] = useState<EditorContent>({
    text: value,
    images: []
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleImageClick = () => {
    if (content.images.length >= 3) {
      alert('Maximum of 3 images allowed');
      return;
    }
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && content.images.length < 3) {
      const imageUrl = URL.createObjectURL(file);
      const newImage = {
        id: Date.now().toString(),
        url: imageUrl,
        position: content.images.length
      };

      setContent(prev => ({
        ...prev,
        images: [...prev.images, newImage]
      }));

      if (onImageAdd) {
        onImageAdd(file);
      }
    }
  };

  const handleImageDelete = (imageId: string) => {
    setContent(prev => ({
      ...prev,
      images: prev.images.filter(img => img.id !== imageId)
    }));
  };

  return (
    <div className="w-full h-full min-h-[500px] bg-[#1a1a1a] rounded-xl p-6 relative border border-purple-400">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />

      {/* Main Content Container - Side by Side Layout */}
      <div className="flex h-full gap-6">
        {/* Text Editor Section - Left Side */}
        <div className="flex-1 min-w-0">
          <textarea
            value={content.text}
            onChange={(e) => {
              setContent(prev => ({
                ...prev,
                text: e.target.value
              }));
              onChange(e.target.value);
            }}
            className="w-full h-full min-h-[450px] bg-transparent text-purple-400 focus:outline-none resize-none p-4 rounded-lg border border-purple-400/30"
            placeholder="Start writing here..."
          />
        </div>

        {/* Images Section - Right Side */}
        <div className="w-72 flex flex-col gap-4">
          {/* Existing Images */}
          {content.images.map((image) => (
            <div 
              key={image.id}
              className="relative w-full h-48 rounded-lg border-2 border-purple-400 overflow-hidden group"
            >
              <img 
                src={image.url} 
                alt="Uploaded content"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => handleImageDelete(image.id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </div>
          ))}
          
          {/* Add Image Button - Only shown if less than 3 images */}
          {content.images.length < 3 && (
            <button
              onClick={handleImageClick}
              className="w-full h-48 rounded-lg border-2 border-purple-400 border-dashed flex items-center justify-center text-purple-400 hover:bg-purple-400/10 transition-colors"
            >
              <span className="text-lg">+ Add Image</span>
            </button>
          )}

          {/* Image Count Indicator */}
          <div className="text-purple-400 text-sm text-center">
            {content.images.length}/3 images
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichEditor;