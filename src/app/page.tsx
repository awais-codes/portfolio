"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Folder, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { Input } from "@/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { Clock } from "@/components/clock"
import { Separator } from "@/ui/separator"
import { Button } from "@/ui/button"

export default function Home() {
  const [name, setName] = React.useState("")

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background text-foreground transition-colors duration-300">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03] dark:opacity-[0.05]">
        <h1 className="text-[40vw] font-bold leading-none tracking-tighter">
          grey/jnr
        </h1>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col px-4 py-4 md:px-8 md:py-6">
        {/* Header */}
        <header className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex w-full items-center justify-between md:w-auto">
            <div className="text-xl font-bold tracking-tight">grey/jnr</div>
            <div className="md:hidden">
              <ModeToggle />
            </div>
          </div>

          <div className="flex w-full max-w-sm items-center justify-center">
            <Input
              type="text"
              placeholder="What's your name?"
              className="h-10 w-full rounded-full border-none bg-secondary/50 px-6 text-center shadow-inner transition-all hover:bg-secondary/70 focus:bg-secondary focus:ring-1 focus:ring-ring/20 md:w-[300px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Clock />
            <ModeToggle />
            <Button variant="ghost" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="mt-12 flex flex-1 flex-col gap-12 md:flex-row">
          {/* Sidebar / Folders */}
          <div className="flex flex-row gap-8 md:w-64 md:flex-col md:gap-12">
            <FolderItem label="Projects" delay={0.1} />
            <FolderItem label="Tools" delay={0.2} />
          </div>

          {/* Hero Text */}
          <div className="flex flex-1 flex-col justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                HI {name ? name.toUpperCase() : "STRANGER"} ,
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-2"
            >
              <h1 className="text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl">
                I am John
              </h1>
              <h1 className="text-6xl font-bold tracking-tight md:text-8xl lg:text-9xl">
                Software Dev.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="max-w-xl text-lg text-muted-foreground md:text-xl"
            >
              <p>
                I solve problems and make things happen, all with a few keystrokes.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 grid grid-cols-1 gap-8 border-t border-border/10 pt-8 md:grid-cols-4 md:border-none md:pt-0">
          <div className="flex flex-col gap-4">
            {/* About Me placeholder or logo */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background">
              <span className="text-2xl font-bold">/g</span>
            </div>
            <span className="text-sm text-muted-foreground">About Me</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Socials</span>
            <Link href="#" className="font-medium hover:underline">DISCORD</Link>
            <Link href="#" className="font-medium hover:underline">LINKEDIN</Link>
          </div>

          <div className="flex flex-col gap-2">
            <span className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Get in Touch</span>
            <Link href="mailto:jaygrey.jg@gmail.com" className="font-medium hover:underline">JAYGREY.JG@GMAIL.COM</Link>
            <span className="font-medium">+233271600543</span>
          </div>

          <div className="flex items-end justify-end">
            <span className="text-xs text-muted-foreground">
              © 2026, grey/jnr. Design by vikers.
            </span>
          </div>
        </footer>
      </div>
    </main>
  )
}

function FolderItem({ label, delay }: { label: string; delay: number }) {
  const href = `/${label.toLowerCase()}`
  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        className="group flex cursor-pointer flex-col items-center gap-2"
      >
        <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
          {/* Custom Folder Icon using SVGs or Framer ideally, but Lucide for now */}
          <Folder className="h-16 w-16 fill-foreground text-foreground md:h-24 md:w-24" />
          {/* Could overlay a "paper" inside to look more like the design */}
        </div>
        <span className="text-sm font-medium">{label}</span>
      </motion.div>
    </Link>
  )
}
