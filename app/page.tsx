"use client"

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import Link from "next/link";
import { toast } from "sonner";

export default function Home() {
  return (
    <main className="w-full p-8 flex flex-col items-center justify-center gap-8">
      <style>
        {`.waviy {
  position: relative;
}
.waviy span {
  position: relative;
  display: inline-block;
  font-size: 40px; 
  text-transform: uppercase;
  animation: flip 3s infinite;
  animation-delay: calc(.2s * var(--i))
}
@keyframes flip {
  0%,80% {
    transform: rotateY(360deg) 
  }
}`}
      </style>
      <section>
        <div className="waviy font-serif text-foreground">
          <span style={{ "--i": 1 } as React.CSSProperties}>H</span>
          <span style={{ "--i": 2 } as React.CSSProperties}>e</span>
          <span style={{ "--i": 3 } as React.CSSProperties}>l</span>
          <span style={{ "--i": 4 } as React.CSSProperties}>l</span>
          <span style={{ "--i": 5 } as React.CSSProperties}>o</span>
          <span style={{ "--i": 6 } as React.CSSProperties}>&nbsp;&nbsp;</span>
          <span style={{ "--i": 7 } as React.CSSProperties}>W</span>
          <span style={{ "--i": 8 } as React.CSSProperties}>o</span>
          <span style={{ "--i": 9 } as React.CSSProperties}>r</span>
          <span style={{ "--i": 10 } as React.CSSProperties}>l</span>
          <span style={{ "--i": 11 } as React.CSSProperties}>d</span>
        </div>
      </section>
      {/* eslint-disable-next-line */}
      <Link href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} target="_blank" className="relative flex items-center justify-end">
        <img
          className="w-96 rounded-xl"
          src="https://i.giphy.com/VbnUQpnihPSIgIXuZv.webp"
          alt="test"
        />
        <p className="absolute bottom-2 left-2 text-white text-lg font-bold">CLICK ME!!!</p>
      </Link>
      <code className="p-2 px-4 text-gray-700 dark:text-gray-400 bg-gray-100 border-2 dark:border-white/10 rounded dark:bg-white/5">
        You can start editing app/page.tsx to start coding!
      </code>
      <p className="text-muted-foreground text-sm font-bold">
        ( or you can bake somes cookies 🍪 )
      </p>
      <p className="text-muted-foreground text-sm font-bold">
        ( I love cookies ❤️ )
      </p>
      <div className="flex items-center justify-center gap-4">
        <ThemeToggle />
        <Button onClick={() => {
          toast.success("Toasted!!")
        }}>
          Toast
        </Button>
      </div>
    </main>
  );
}
