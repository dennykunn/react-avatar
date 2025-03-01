import type { AvatarPart } from "@/components/avatar-editor"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define the available options for each avatar part
const avatarOptions = {
  hair: [
    "/avatars/hair/hair-1.svg",
    "/avatars/hair/hair-2.svg",
    "/avatars/hair/hair-3.svg",
    "/avatars/hair/hair-4.svg",
  ],
  face: [
    "/avatars/faces/face-1.svg",
    "/avatars/faces/face-2.svg",
    "/avatars/faces/face-3.svg",
    "/avatars/faces/face-4.svg",
  ],
  clothes: [
    "/avatars/clothes/clothes-1.svg",
    "/avatars/clothes/clothes-2.svg",
    "/avatars/clothes/clothes-3.svg",
    "/avatars/clothes/clothes-4.svg",
  ],
}

interface AvatarCustomizerProps {
  part: AvatarPart
  currentValue: number
  onChange: (value: number) => void
}

export default function AvatarCustomizer({ part, currentValue, onChange }: AvatarCustomizerProps) {
  const options = avatarOptions[part]

  const handlePrevious = () => {
    const newValue = currentValue === 0 ? options.length - 1 : currentValue - 1
    onChange(newValue)
  }

  const handleNext = () => {
    const newValue = currentValue === options.length - 1 ? 0 : currentValue + 1
    onChange(newValue)
  }

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-medium mb-4 capitalize">{part} Style</h3>

      <div className="flex items-center justify-center gap-4 w-full">
        <Button variant="outline" size="icon" onClick={handlePrevious}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous {part}</span>
        </Button>

        <div className="w-24 h-24 relative border rounded-md overflow-hidden bg-white">
          <img
            src={options[currentValue] || "/placeholder.svg"}
            alt={`${part} option ${currentValue + 1}`}
            className="w-full h-full object-contain"
          />
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
  )
}

