"use client"
import Image from 'next/image';

export default function Services() {
  return (
    <section id="ajuda" className="relative flex">
      <div className="hidden md:block">
        <Image
          src="/services.png"
          alt="Serviços"
          width={400}
          height={400}
          className="h-full"
        />
      </div>
      <div className="block md:hidden absolute inset-0 bg-cover bg-left" style={{ backgroundImage: "url('/services.png')", backgroundPositionX: '1px' }}>
        <div className="absolute inset-0 bg-primary opacity-50"></div>
      </div>
      <div className="relative py-12 md:py-6 px-6 md:pl-8 bg-white bg-opacity-90 text-primary ">
        <h2 className="text-3xl font-medium mb-8">Como posso te ajudar.</h2>
        <div className="max-w-3xl">
          <p className="leading-relaxed mb-6">
            Muito além de diagnosticar e tratar os transtornos mentais, juntos iremos reestabelecer sua qualidade de vida, funcionalidade e bem estar.
          </p>
          <p className="leading-relaxed mb-6">
            Sendo assim, além de avaliação, diagnóstico e tratamento medicamentoso quando necessário, busco através do acompanhamento psiquiátrico longitudinal, oferecer aos meus pacientes uma escuta ativa e empática, planos de tratamento personalizados que envolvem gestão de crise, prevenção de recaídas, mudança de estilo de vida e psicoeducação.
          </p>
          <p className="leading-relaxed">
            Se você está lidando com sentimentos de tristeza intensa, ansiedade, pensamentos confusos ou qualquer outro sintoma que afete seu bem-estar, vamos juntos neste processo.
          </p>
        </div>
      </div>
    </section>
  )
}

