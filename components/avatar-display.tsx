import type { AvatarData } from "@/components/avatar-editor"

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

interface AvatarDisplayProps {
  avatarData: AvatarData
}

export default function AvatarDisplay({ avatarData }: AvatarDisplayProps) {
  return (
    <div className="relative w-64 h-64 bg-white rounded-full border-2 border-gray-200 overflow-hidden">
      {/* Face layer (bottom) */}
      <div className="absolute inset-0 -translate-y-3 flex items-center justify-center">
        <img
          src={avatarOptions.face[avatarData.face] || "/placeholder.svg"}
          alt="Face"
          className="w-1/2 h-1/2 object-contain"
        />
      </div>

      {/* Clothes layer (middle) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={avatarOptions.clothes[avatarData.clothes] || "/placeholder.svg"}
          alt="Clothes"
          className="w-[80%] h-[80%] object-contain"
        />
      </div>

      {/* Hair layer (top) */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <img
          src={avatarOptions.hair[avatarData.hair] || "/placeholder.svg"}
          alt="Hair"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
    </div>
  )
}

