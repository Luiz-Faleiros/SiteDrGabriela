"use client"
import * as React from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


export default function Reviews() {
  const [expandedReview, setExpandedReview] = React.useState<number | null>(null)
  const reviews = [
    {
      author: "Elaine Pires",
      rating: 5,
      text: "A Drª, é excelente! Desde a primeira consulta, exerceu não somente a profissão. Mas obteve todo acolhimento, compreensão e muito amor no que faz. Conseguiu em meio ao caos, tirar o preconceito (e medo), que eu tinha sobre remédios psiquiatricos. E de fato, comprovou que seria apenas pra ajudar. E em todas as consultas foi muito parceira.Ressaltou desde o inicio que tudo isso iria passar, e de fato está passando! :)",
    },
    {
      author: "Larissa Fortunato",
      rating: 5,
      text: "Dra Gabi é extremamente humana! Amei as consultas e todo o tratamento que ela propôs, ela é parte fundamental de todo o meu processo e melhora. Obrigada Dra!",
    },
    {
      author: "Evandro Braga",
      rating: 5,
      text: "A Dra. Gabriela é uma profissional extremamente atenciosa, sempre dedicada em esclarecer todas as minhas dúvidas de forma clara e acolhedora. Já a recomendei a pessoas próximas e continuaria recomendando a todos que buscam uma excelente psiquiatra.",
    },
    {
      author: "Vinicius Lima",
      rating: 5,
      text: "Ótima profissional, coesa, paciente e qualificada. Te escuta com atenção e é certeira quando diz respeito a resolução do problema. Super recomendo, parabéns!!",
    },
    {
      author: "Carolina Ponciano Gonçalves",
      rating: 5,
      text: "Passo em consultas online com a Dra. Gabriela desde o ano passado, e só posso dizer que ela é uma médica maravilhosa, como poucos são no que fazem hoje em dia! Recomendo a todos que procuram um psiquiatra que realmente te acolha e entenda suas verdadeiras demandas!",
    },
    {
      author: "Isadora Dantas",
      rating: 5,
      text: "Psiquiatra incrível! Empática, paciente e competente. Ótimos resultados com o tratamento.",
    },
    {
      author: "Dayane Barcelos",
      rating: 5,
      text: `Eu adoro a Dra!!
            O profissionalismo dela é surreal!!!
            Amo nossas consultas 💞
            Melhor de todas❤️`,
    },
    {
      author: "Victoria Pinhati",
      rating: 5,
      text: "Profissional extremamente competente e empática, me senti acolhida e sai muito melhor da consulta",
    },
  ]

  return (
    <section>
      <div className="container mx-auto px-4 pb-4">
        <div className="flex flex-col items-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full my-6 border-2 border-primary text-primary hover:bg-primary hover:text-white w-fit"
          >
            <a href="https://wa.me/5519989117379"  className="!font-bold">Agende uma consulta</a>
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h3 className="text-xl font-bold">EXCELENTE</h3>
          <p className="text-sm text-gray-600">Com base nas avaliações do Google</p>
        </div>
        <Carousel
          className="relative w-full"
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="p-4">
            {reviews.map((review, index) => {
              const isExpanded = expandedReview === index
              return (
                <CarouselItem key={index} className="p-2 basis-full md:basis-1/2 lg:basis-1/3 flex">
                  <Card className="h-full flex flex-col">
                    <CardContent className="p-4 flex flex-col justify-between h-full">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className={`text-gray-700 ${!isExpanded ? "line-clamp-3" : ""} break-words overflow-hidden`}>
                        {review.text}
                      </p>
                      {review.text.length > 150 && (
                        <button
                          onClick={() => setExpandedReview(isExpanded ? null : index)}
                          className="text-inherit flex items-start"
                        >
                          {!isExpanded ? "ver mais" : "ver menos"}
                        </button>
                      )}
                      <p className="text-sm text-gray-600 mt-2">{review.author}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}

