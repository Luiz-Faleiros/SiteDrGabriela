import Image from 'next/image';

export default function Treatments() {
  const treatments = [
    "Depressão",
    "Transtornos Ansiosos (ansiedade generalizada, crises de pânico, fobia social e outras fobias)",
    "Transtorno Afetivo Bipolar",
    "TOC (Transtorno Obsessivo compulsivo)",
    "Transtorno do Estresse Pós Traumático (TEPT)",
    "Transtornos de Adaptação",
    "Transtornos do Controle do Impulso (compulsões por compras, jogos, tricotilomania, Transtorno Explosivo Intermitentes, Transtornos de Escoriação)",
    "Transtornos de Personalidade",
    "Esquizofrenia e outros Transtornos Psicóticos",
    "TDAH, TEA",
    "Transtornos Alimentares",
    "Entre outros",
  ]

  return (
    <section className="bg-secondary/30 relative" id="tratamentos">
      <div className="md:hidden absolutWe inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/treatments.png')" }}>
        <div className="absolute inset-0 bg-primary opacity-50"></div>
      </div>
      <div className="relative py-6 md:py-0 md:pl-8 text-white md:text-primary">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="container py-6 md:mx-4">
            <h2 className="text-3xl font-medium mb-8">
              Transtornos que
              <br />
              eu posso Tratar:
            </h2>
            <ul className="space-y-4 list-disc list-inside">
              {treatments.map((treatment, index) => (
                <li key={index}>
                  {treatment}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative hidden md:block h-full">
            <Image src="/treatments.png" width={400} height={400} alt="foto profissional" className="w-full h-full object-cover"></Image>
          </div>
        </div>
      </div>
    </section>
  )
}

