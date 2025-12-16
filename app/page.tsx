"use client"

import { useState } from "react"
import { Home } from "@/components/home"
import { Header } from "@/components/header"
import { Game } from "@/components/game"

export default function Page() {
  const [activeTab, setActiveTab] = useState<"home" | "game">("home")

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-2 py-8">{activeTab === "home" ? <Home /> : <Game />}</main>
    </div>
  )
}
