import type { AvatarPart } from "@/components/avatar-editor";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the available options for each avatar part
const avatarOptions = {
  hair: [
    "/avatars/hairs/hair1.svg",
    "/avatars/hairs/hair2.svg",
    "/avatars/hairs/hair3.svg",
    "/avatars/hairs/hair4.svg",
    "/avatars/hairs/hair5.svg",
    "/avatars/hairs/hair6.svg",
  ],
  dress: [
    "/avatars/dresses/dress1.svg",
    "/avatars/dresses/dress2.svg",
    "/avatars/dresses/dress3.svg",
    "/avatars/dresses/dress4.svg",
    "/avatars/dresses/dress5.svg",
    "/avatars/dresses/dress6.svg",
  ],
  eyes: [
    "/avatars/eyes/eyes1.svg",
    "/avatars/eyes/eyes2.svg",
    "/avatars/eyes/eyes3.svg",
    "/avatars/eyes/eyes4.svg",
  ],
  mouth: [
    "/avatars/mouths/mouth1.svg",
    "/avatars/mouths/mouth2.svg",
    "/avatars/mouths/mouth3.svg",
    "/avatars/mouths/mouth4.svg",
    "/avatars/mouths/mouth5.svg",
    "/avatars/mouths/mouth6.svg",
    "/avatars/mouths/mouth7.svg",
    "/avatars/mouths/mouth8.svg",
  ],
  glasses: ["/avatars/glasses/glass1.svg", "/avatars/glasses/no-glass.svg"],
};

interface AvatarCustomizerProps {
  part: AvatarPart;
  currentValue: number;
  onChange: (value: number) => void;
}

export default function AvatarCustomizer({
  part,
  currentValue,
  onChange,
}: AvatarCustomizerProps) {
  const options = avatarOptions[part];

  const handlePrevious = () => {
    const newValue = currentValue === 0 ? options.length - 1 : currentValue - 1;
    onChange(newValue);
  };

  const handleNext = () => {
    const newValue = currentValue === options.length - 1 ? 0 : currentValue + 1;
    onChange(newValue);
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-medium mb-4 capitalize">{part} Style</h3>

      <div className="flex items-center justify-center gap-4 w-full">
        <Button variant="outline" size="icon" onClick={handlePrevious}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous {part}</span>
        </Button>

        <div className="w-24 h-24 relative border rounded-md overflow-hidden bg-white">
          {options[currentValue] == "/avatars/glasses/no-glass.svg" ? (
            <div className="flex items-center justify-center h-full">
              <p>No Glass</p>
            </div>
          ) : (
            <img
              src={options[currentValue] || "/placeholder.svg"}
              alt={`${part} option ${currentValue + 1}`}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        <Button variant="outline" size="icon" onClick={handleNext}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next {part}</span>
        </Button>
      </div>

      <div className="mt-2 text-sm text-gray-500">
        Option {currentValue + 1} of {options.length}
      </div>
    </div>
  );
}
