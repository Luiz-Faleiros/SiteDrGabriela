"use client"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Gradient in the background on mobile */}
      <div className="md:hidden absolute top-[15%] left-0 w-full h-[85%] bg-gradient-to-b from-white to-[#ebe5da] z-0"></div>
      <div className="container mx-auto px-10 flex items-center flex-wrap md:flex-nowrap justify-center md:justify-start relative z-10">
        <div className="flex items-center gap-4 mb-8 md:pr-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={300}
            height={300}
            className="w-48 h-48 md:max-w-md mx-auto" // Adjusted for mobile view
          />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center text-center md:justify-start md:items-start md:text-start mb-6 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-light text-primary flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start">
            <p className="flex md:hidden">Somos</p>
            <p className="flex md:hidden">processos em</p>
            <p className="hidden md:flex">Somos processos em</p>
            <span className="font-bold">transformação</span>
          </h1>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white w-fit"
          >
            <a href="https://wa.me/5519989117379" className="!font-bold">Agende uma consulta</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

