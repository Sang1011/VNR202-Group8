"use client"

import { cn } from "@/lib/utils"

interface HeaderProps {
  activeTab: "home" | "game"
  setActiveTab: (tab: "home" | "game") => void
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">Nhóm 8 - VNR202</span>
        </div>

        <nav className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("home")}
            className={cn(
              "px-4 py-2 rounded-lg font-medium transition-colors hover:cursor-pointer",
              activeTab === "home"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab("game")}
            className={cn(
              "px-4 py-2 rounded-lg font-medium transition-colors hover:cursor-pointer",
              activeTab === "game"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            Game
          </button>
        </nav>
      </div>
    </header>
  )
}
