"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AvatarDisplay from "@/components/avatar-display";
import AvatarCustomizer from "@/components/avatar-customizer";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

// Define avatar part types
export type AvatarPart = "hair" | "dress" | "eyes" | "mouth" | "glasses";

// Define the avatar data structure
export interface AvatarData {
  hair: number;
  dress: number;
  eyes: number;
  mouth: number;
  glasses: number;
}

// Default avatar configuration
const defaultAvatar: AvatarData = {
  hair: 0,
  dress: 0,
  eyes: 0,
  mouth: 0,
  glasses: 0,
};

export default function AvatarEditor() {
  // State awal tanpa membaca localStorage langsung (menghindari SSR error)
  const [avatar, setAvatar] = useState<AvatarData>(defaultAvatar);

  // State untuk cek apakah data sudah dimuat dari localStorage
  const [isLoaded, setIsLoaded] = useState(false);

  // Load avatar dari localStorage hanya di client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedAvatar = localStorage.getItem("avatarData");
        if (savedAvatar) {
          setAvatar(JSON.parse(savedAvatar));
        }
      } catch (error) {
        console.error("Failed to load avatar from localStorage:", error);
      }
      setIsLoaded(true);
    }
  }, []);

  // Simpan avatar ke localStorage setiap ada perubahan (hanya setelah data dimuat)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("avatarData", JSON.stringify(avatar));
    }
  }, [avatar, isLoaded]);

  // Handle perubahan avatar
  const handlePartChange = (part: AvatarPart, value: number) => {
    setAvatar((prev) => ({
      ...prev,
      [part]: value,
    }));
  };

  // Reset avatar ke default
  const handleReset = () => {
    setAvatar(defaultAvatar);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Customize Your Avatar
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Avatar display area */}
          <div className="flex flex-col items-center justify-center">
            <AvatarDisplay avatarData={avatar} />
            <Button
              variant="outline"
              className="mt-4"
              onClick={handleReset}
              size="sm"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset to Default
            </Button>
          </div>

          {/* Customization controls */}
          <div>
            <Tabs
              defaultValue="dress"
              onValueChange={(value) =>
                handlePartChange(
                  value as AvatarPart,
                  avatar[value as AvatarPart]
                )
              }
            >
              <TabsList className="flex mb-4 overflow-x-auto">
                <TabsTrigger className="w-[100px]" value="dress">
                  Dress
                </TabsTrigger>
                <TabsTrigger className="w-[100px]" value="hair">
                  Hair
                </TabsTrigger>
                <TabsTrigger className="w-[100px]" value="eyes">
                  Eyes
                </TabsTrigger>
                <TabsTrigger className="w-[100px]" value="mouth">
                  Mouth
                </TabsTrigger>
                <TabsTrigger className="w-[100px]" value="glasses">
                  Glasses
                </TabsTrigger>
              </TabsList>

              <TabsContent value="dress">
                <AvatarCustomizer
                  part="dress"
                  currentValue={avatar.dress}
                  onChange={(value) => handlePartChange("dress", value)}
                />
              </TabsContent>

              <TabsContent value="hair">
                <AvatarCustomizer
                  part="hair"
                  currentValue={avatar.hair}
                  onChange={(value) => handlePartChange("hair", value)}
                />
              </TabsContent>

              <TabsContent value="eyes">
                <AvatarCustomizer
                  part="eyes"
                  currentValue={avatar.eyes}
                  onChange={(value) => handlePartChange("eyes", value)}
                />
              </TabsContent>

              <TabsContent value="mouth">
                <AvatarCustomizer
                  part="mouth"
                  currentValue={avatar.mouth}
                  onChange={(value) => handlePartChange("mouth", value)}
                />
              </TabsContent>

              <TabsContent value="glasses">
                <AvatarCustomizer
                  part="glasses"
                  currentValue={avatar.glasses}
                  onChange={(value) => handlePartChange("glasses", value)}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
