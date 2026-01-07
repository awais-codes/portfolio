"use client"

import { useEffect, useState } from "react"

export function Clock() {
    const [mounted, setMounted] = useState(false)
    const [time, setTime] = useState<Date>(new Date())

    useEffect(() => {
        setMounted(true)
        const timer = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    if (!mounted) {
        return <div className="h-4 w-32" /> // Placeholder to prevent jump
    }

    const timeStr = time.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    })

    const dateStr = time.toLocaleDateString('en-GB', {
        weekday: 'short',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace(',', '')

    return (
        <div className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground/80">
            GMT / {timeStr} &nbsp; {dateStr}
        </div>
    )
}
