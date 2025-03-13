import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Profile from "@/components/profile"
import Services from "@/components/services"
import Treatments from "@/components/treatments"
import Reviews from "@/components/reviews"
import Location from "@/components/location"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <div className="curved-decoration hidden md:block"></div>
      <Navbar />
      <Hero />
      <Profile />
      <Services />
      <Treatments />
      <Reviews />
      <Location />
      <Footer />
    </main>
  )
}

