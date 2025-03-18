"use client"
import Image from 'next/image'

export default function Profile() {
  return (
    <section id="profile" className="relative py-16 px-6 bg-[#ebe5da]">
      <div className="container mx-auto bg-tertiary rounded-lg p-4 md:p-10">
        <div className="items-center flex flex-wrap md:flex-nowrap justify-center">
          <div className="flex md:hidden -mt-36 z-[60]">
            <Image
              src="/profile.png"
              alt="Dra. Gabriela Cardozo"
              width={400}
              height={600}
              className="rounded-[50px] w-full max-w-md mx-auto"
            />
          </div>
          <div className=" max-w-[75%] pt-4 md:pt-0 md:pr-6 text-center md:text-start">
            <h2 className="text-xl md:text-3xl font-medium text-primary">Dra. Gabriela Cardozo</h2>
            <p className="text-xs text-primary/60 pb-4">
              Médica Psiquiatra
              <br />
              CRM 210115 RQE 125807
            </p>
            <p className="text-primary/70 leading-relaxed pb-4">
            Uma psiquiatra fascinada pela mente humana e motivada a fazer a diferença na vida das pessoas através do cuidado humanizado. Tem como principais
              valores éticos a empatia, e uma abordagem integral, respeitando a singularidade e necessidade de cada
              paciente.
            </p>
            <p className="text-primary/90 font-bold leading-relaxed">
              Busca com seriedade e através de acolhimento e escuta ativa, oferecer propostas terapêuticas longitudinais
              e tratamentos que vão além do uso da medicação.
            </p>
          </div>
          <div className="-mt-36 hidden md:flex z-[60]">
            <Image
              src="/profile.png"
              alt="Dra. Gabriela Cardozo"
              width={400}
              height={600}
              className="rounded-[50px] w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

