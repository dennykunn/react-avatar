import AvatarEditor from "@/components/avatar-editor"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Avatar Editor</h1>
        <p className="text-center text-gray-600 mb-8">
          Customize your avatar by changing the hair, face, and clothes. Your selections will be saved automatically.
        </p>
        <AvatarEditor />
      </div>
    </main>
  )
}

