"use client"

import {
  Bold,
  Italic,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ImageIcon,
  Link,
  Pencil,
  Bell,
  Moon,
  Sun,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Toolbar() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="border-b flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ArrowLeft size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ArrowRight size={16} />
        </Button>
        <div className="ml-4">
          <span className="font-medium">Planets</span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bold size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Italic size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Strikethrough size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <AlignLeft size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <AlignCenter size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <AlignRight size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <ImageIcon size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Link size={16} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Pencil size={16} />
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button variant="ghost" size="icon" className="h-8 w-8 relative">
          <Bell size={16} />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-amber-500"></span>
        </Button>
        <div className="flex items-center gap-1 bg-muted rounded-md px-2 py-1">
          <span className="text-sm">19</span>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={toggleTheme}>
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
      </div>
    </div>
  )
}

