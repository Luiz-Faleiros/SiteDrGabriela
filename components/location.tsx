"use client"
export default function Location() {
  return (
    <section id="contato">
      <div className=" flex flex-col">
        <h2 className="text-base md:text-xl font-bold text-primary mb-4 text-center tracking-[1rem] md:tracking-[2rem]">LOCALIZAÇÃO</h2>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356219833384!2d-47.06014868503454!3d-22.907899785015583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8f8b8b8b8b7%3A0x1b2b2b2b2b2b2b2b!2sR.%20Salvador%20Penteado%2C%2085%20-%20Vila%20Rossi%20Borghi%20e%20Siqueira%2C%20Campinas%20-%20SP%2C%2013070-270!5e0!3m2!1spt-BR!2sbr!4v1625147147147!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

