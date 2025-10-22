import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Creative Agency Website",
    description: "Modern site built for a creative agency inspired by contemporary SA design trends.",
    image: "/modern-creative-agency-website.jpg",
    category: "E-commerce",
  },
  {
    title: "Local Bakery Store",
    description: "Online store for a food business with ordering and payment integration.",
    image: "/bakery-e-commerce-website.jpg",
    category: "E-commerce",
  },
  {
    title: "Elegant Landing Page",
    description: "Responsive site with elegant design and smooth user experience.",
    image: "/elegant-business-landing-page.jpg",
    category: "Business",
  },
  {
    title: "Professional Law Firm",
    description: "Corporate website with case studies, team profiles, and contact forms.",
    image: "/professional-law-firm-website.png",
    category: "Business",
  },
  {
    title: "Fitness Studio Brand",
    description: "Complete branding package including logo, color palette, and brand guidelines.",
    image: "/fitness-studio-branding-logo.jpg",
    category: "Branding",
  },
  {
    title: "Tech Startup Website",
    description: "Modern SaaS landing page with animations and lead capture forms.",
    image: "/tech-startup-landing-page.jpg",
    category: "Business",
  },
  {
    title: "Restaurant Online Menu",
    description: "Online ordering platform for restaurant with delivery integration.",
    image: "/restaurant-online-menu-website.jpg",
    category: "E-commerce",
  },
  {
    title: "Real Estate Portfolio",
    description: "Property listing website with search filters and contact forms.",
    image: "/real-estate-property-website.jpg",
    category: "Business",
  },
  {
    title: "Fashion Boutique Logo",
    description: "Elegant logo design for upscale fashion boutique with multiple variations.",
    image: "/fashion-boutique-logo-design.jpg",
    category: "Branding",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                  <span className="inline-block">
                    {"Recent Work".split("").map((letter, index) => (
                      <span
                        key={index}
                        className="letter-bounce inline-block"
                        style={{
                          animationDelay: `${index * 0.05}s`,
                          animationFillMode: "both",
                        }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </span>
                    ))}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Explore our recent projects and see the quality we deliver for every client
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={index} delay={index * 50}>
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group h-full">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <ScrollReveal>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to start your project?</h2>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                Let's create something amazing together. Get in touch for a free quote.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  )
}
