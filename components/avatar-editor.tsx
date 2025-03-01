"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AvatarDisplay from "@/components/avatar-display"
import AvatarCustomizer from "@/components/avatar-customizer"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

// Define avatar part types
export type AvatarPart = "hair" | "face" | "clothes"

// Define the avatar data structure
export interface AvatarData {
  hair: number
  face: number
  clothes: number
}

// Default avatar configuration
const defaultAvatar: AvatarData = {
  hair: 0,
  face: 0,
  clothes: 0,
}

export default function AvatarEditor() {
  // State to track the current avatar configuration
  const [avatar, setAvatar] = useState<AvatarData>(defaultAvatar)
  // State to track which part is being edited
  const [activePart, setActivePart] = useState<AvatarPart>("hair")

  // Load saved avatar data from localStorage on component mount
  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatarData")
    if (savedAvatar) {
      try {
        setAvatar(JSON.parse(savedAvatar))
      } catch (error) {
        console.error("Failed to parse saved avatar data:", error)
      }
    }
  }, [])

  // Save avatar data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("avatarData", JSON.stringify(avatar))
  }, [avatar])

  // Handle changing a specific avatar part
  const handlePartChange = (part: AvatarPart, value: number) => {
    setAvatar((prev) => ({
      ...prev,
      [part]: value,
    }))
  }

  // Reset avatar to default
  const handleReset = () => {
    setAvatar(defaultAvatar)
  }

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Customize Your Avatar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Avatar display area */}
          <div className="flex flex-col items-center justify-center">
            <AvatarDisplay avatarData={avatar} />
            <Button variant="outline" className="mt-4" onClick={handleReset} size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset to Default
            </Button>
          </div>

          {/* Customization controls */}
          <div>
            <Tabs defaultValue="hair" onValueChange={(value) => setActivePart(value as AvatarPart)}>
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="hair">Hair</TabsTrigger>
                <TabsTrigger value="face">Face</TabsTrigger>
                <TabsTrigger value="clothes">Clothes</TabsTrigger>
              </TabsList>

              <TabsContent value="hair">
                <AvatarCustomizer
                  part="hair"
                  currentValue={avatar.hair}
                  onChange={(value) => handlePartChange("hair", value)}
                />
              </TabsContent>

              <TabsContent value="face">
                <AvatarCustomizer
                  part="face"
                  currentValue={avatar.face}
                  onChange={(value) => handlePartChange("face", value)}
                />
              </TabsContent>

              <TabsContent value="clothes">
                <AvatarCustomizer
                  part="clothes"
                  currentValue={avatar.clothes}
                  onChange={(value) => handlePartChange("clothes", value)}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

