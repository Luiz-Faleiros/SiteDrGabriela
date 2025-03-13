"use client"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Reviews() {
  const reviews = [
    {
      author: "Eliana Cristina",
      rating: 5,
      text: "Dra Gbriela é muito atenciosa, gentil e nos deixou muito à vontade em todo momento da consulta.",
    },
    {
      author: "PAULINHO BOCARRI",
      rating: 5,
      text: "Ótimo ambiente, ótimo atendimento",
    },
  ]

  return (
    <section>
      <div className="container mx-auto px-4 pb-10">
        <div className="flex flex-col items-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full my-6 border-2 border-primary text-primary hover:bg-primary hover:text-white w-fit"
          >
            <a href="https://wa.me/5519989117379"  className="!font-bold">Agende uma consulta</a>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">EXCELENTE</h3>
              <p className="text-sm text-gray-600">Com base em 28 avaliações</p>
            </div>
          </div>
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-2">{review.text}</p>
              <p className="text-sm text-gray-600">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

