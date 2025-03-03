import type { AvatarData } from "@/components/avatar-editor";

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
  eyes: [
    "/avatars/eyes/eyes1.svg",
    "/avatars/eyes/eyes2.svg",
    "/avatars/eyes/eyes3.svg",
    "/avatars/eyes/eyes4.svg",
  ],
  glasses: ["/avatars/glasses/glass1.svg", "/avatars/glasses/no-glass.svg"],
};

interface AvatarDisplayProps {
  avatarData: AvatarData;
}

export default function AvatarDisplay({ avatarData }: AvatarDisplayProps) {
  return (
    <div className="relative w-64 h-64 bg-white rounded-full border-2 border-gray-200 overflow-hidden">
      {/* Hair layer (top) */}
      <div className="absolute inset-0 top-10 flex items-start justify-center">
        <img
          src={avatarOptions.hair[avatarData.hair] || "/placeholder.svg"}
          alt="Hair"
          className="w-[40%] h-[40%] object-contain z-10"
        />
      </div>

      {/* Eyes layer (middle) */}
      <div className="absolute inset-0 -top-5 flex items-center justify-center">
        <img
          src={avatarOptions.eyes[avatarData.eyes] || "/placeholder.svg"}
          alt="Eyes"
          className="w-[20%] h-[20%] object-contain z-20"
        />
      </div>

      {/* Glassess layer (middle) */}
      {avatarOptions.glasses[avatarData.glasses] ==
      "/avatars/glasses/no-glass.svg" ? (
        ""
      ) : (
        <div className="absolute inset-0 -top-2.5 flex items-center justify-center">
          <img
            src={
              avatarOptions.glasses[avatarData.glasses] || "/placeholder.svg"
            }
            alt="glasses"
            className="w-[30%] h-[30%] object-contain z-20"
          />
        </div>
      )}

      {/* Mouth layer (middle) */}
      <div className="absolute inset-0 top-12 flex items-center justify-center">
        <img
          src={avatarOptions.mouth[avatarData.mouth] || "/placeholder.svg"}
          alt="Mouth"
          className="w-[10%] h-[10%] object-contain z-20"
        />
      </div>

      {/* Clothes layer (bottom) */}
      <div className="absolute inset-0 flex items-end justify-center">
        <img
          src={avatarOptions.dress[avatarData.dress] || "/placeholder.svg"}
          alt="Dress"
          className="w-[70%]"
        />
      </div>
    </div>
  );
}
