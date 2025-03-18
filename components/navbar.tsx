"use client"
import Link from "next/link"
import { useCallback, useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, target: string) => {
    e.preventDefault()
    const el = document.getElementById(target)
    el?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false) // Close menu on link click
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 w-full bg-primary backdrop-blur-sm z-[70]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white uppercase w-full justify-center">
            <a href="#profile" onClick={(e) => handleScroll(e, "profile")}>
              Sobre Mim
            </a>
            <span className="divider"></span>
            <a href="#ajuda" onClick={(e) => handleScroll(e, "ajuda")}>
              Como Posso Ajudar
            </a>
            <span className="divider"></span>
            <a href="#tratamentos" onClick={(e) => handleScroll(e, "tratamentos")}>
              Tratamentos
            </a>
            <span className="divider"></span>
            <a href="#contato" onClick={(e) => handleScroll(e, "contato")}>
              Contato
            </a>
          </div>
          <Link
            href="https://wa.me/5519989117379"
            className="flex items-center gap-2 bg-primary text-white px-4 rounded-full hover:bg-primary/90 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="28px"
              height="28px"
              fillRule="nonzero"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(8,8)">
                  <path d="M24.5,7.5c-2.3,-2.3 -5.3,-3.5 -8.5,-3.5c-6.5,0 -11.9,5.4 -11.9,11.9c0,2.1 0.5,4.2 1.6,6l-1.7,6.2l6.3,-1.7c1.7,1 3.7,1.5 5.7,1.5v0v0c6.6,0 11.9,-5.4 12,-11.9c0,-3.2 -1.2,-6.2 -3.5,-8.5zM16,25.9v0c-1.8,0 -3.5,-0.5 -5.1,-1.4l-0.4,-0.2l-3.8,1l1,-3.7l-0.2,-0.4c-1,-1.6 -1.5,-3.4 -1.5,-5.3c0,-5.5 4.5,-9.9 9.9,-9.9c2.7,0 5.1,1 7,2.9c1.9,1.9 2.9,4.4 2.9,7c0.2,5.5 -4.3,10 -9.8,10zM21.5,18.4c-0.3,-0.1 -1.8,-0.9 -2,-1c-0.3,-0.1 -0.5,-0.1 -0.7,0.1c-0.2,0.3 -0.8,1 -0.9,1.2c-0.1,0.2 -0.3,0.2 -0.6,0.1c-0.3,-0.1 -1.3,-0.5 -2.4,-1.5c-0.9,-0.8 -1.5,-1.8 -1.7,-2.1c-0.2,-0.3 0,-0.5 0.1,-0.6c0.1,-0.1 0.3,-0.3 0.4,-0.5c0.1,-0.2 0.2,-0.3 0.3,-0.5c0.1,-0.2 0.1,-0.4 0,-0.5c-0.1,-0.1 -0.7,-1.6 -0.9,-2.2c-0.2,-0.6 -0.5,-0.5 -0.7,-0.5c-0.2,0 -0.4,0 -0.6,0c-0.2,0 -0.5,0.1 -0.8,0.4c-0.3,0.3 -1,1 -1,2.5c0,1.5 1.1,2.9 1.2,3.1c0.1,0.2 2.1,3.2 5.1,4.5c0.7,0.3 1.3,0.5 1.7,0.6c0.7,0.2 1.4,0.2 1.9,0.1c0.6,-0.1 1.8,-0.7 2,-1.4c0.2,-0.7 0.2,-1.3 0.2,-1.4c-0.1,-0.1 -0.3,-0.2 -0.6,-0.4z"/>
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <div className={`fixed inset-y-0 left-0 bg-primary transform w-full h-auto ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-start p-4 mt-12 space-y-4 bg-primary w-full h-auto">
          <a href="#profile" onClick={(e) => handleScroll(e, "profile")} className="text-white text-xl">
            Sobre Mim
          </a>
          <a href="#ajuda" onClick={(e) => handleScroll(e, "ajuda")} className="text-white text-xl">
            Como Posso Ajudar
          </a>
          <a href="#tratamentos" onClick={(e) => handleScroll(e, "tratamentos")} className="text-white text-xl">
            Tratamentos
          </a>
          <a href="#contato" onClick={(e) => handleScroll(e, "contato")} className="text-white text-xl">
            Contato
          </a>
        </div>
      </div>
    </nav>
  )
}

