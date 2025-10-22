import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Users, Lightbulb, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">About Wrize Media</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering South African businesses with beautiful, high-performing websites
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wrize Media is a South African web design agency that believes in creativity, functionality, and
                  affordability. We're passionate about helping small businesses establish their online presence and
                  grow their digital footprint.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower small businesses with beautiful, high-performing websites that drive results. We believe
                  that every business deserves a professional online presence, regardless of budget.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Consult</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We listen to your needs and understand your business goals
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Design</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We create beautiful, functional designs tailored to your brand
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Launch</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We build and deploy your website with attention to detail
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Support</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We provide ongoing support to keep your site running smoothly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Clients Love Us */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Clients Love Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Transparent Pricing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No hidden fees or surprise charges. You know exactly what you're paying for from the start.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Fast Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most projects are completed within 1-2 weeks, so you can start growing your business quickly.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Ongoing Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're here for you even after launch with maintenance packages and priority support.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Quality Focused</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We never compromise on quality, delivering professional results at affordable prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to work with us?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and see how we can help your business grow online.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
