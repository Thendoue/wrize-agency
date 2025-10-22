import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Check, ShoppingBag, Palette, Code, Sparkles, Server } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Our Services</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transparent pricing and exceptional quality for every project
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
            {/* Shopify Website Design */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ShoppingBag className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-3xl">Shopify Website Design</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-primary">R1500</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Perfect for small businesses starting their online journey. Get a professional Shopify store that's
                  ready to sell.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Up to 3 pages with responsive design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Basic contact form integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>1 third-party integration (payment gateway, shipping, etc.)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Foundational SEO setup</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>1 round of revisions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Theme Shopify */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Palette className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-3xl">Custom Theme Shopify Design</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-primary">R2500</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Stand out from the competition with a fully customized Shopify theme that reflects your brand
                  identity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tailored theme setup with brand alignment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Custom animations and interactions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Advanced contact form with custom fields</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>2 third-party integrations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>2 rounds of revisions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Website Design */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Code className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-3xl">Custom Website Design</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-primary">R3000</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Full custom build tailored to your exact needs. Perfect for businesses that need complete control and
                  flexibility.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Up to 10 pages with custom design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fully mobile-friendly and responsive</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Speed optimized for fast loading</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>WordPress or coded HTML/CSS/JavaScript</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Perfect for portfolios and small business sites</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Logo Design */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-3xl">Logo Design</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-primary">R800</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Create a memorable brand identity with a professional logo that represents your business perfectly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>3 unique logo concepts to choose from</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>2 rounds of revisions on chosen concept</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Delivered in PNG, SVG, and PDF formats</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Full ownership and commercial rights</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hosting & Maintenance */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Server className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-3xl">Hosting & Maintenance</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-primary">R500/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Keep your website secure, fast, and up-to-date with our comprehensive hosting and maintenance package.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Domain setup and management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Secure hosting with SSL certificate</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Monthly backups for data security</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Regular security updates and patches</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Priority support and performance monitoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Let's get your business online</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact us today for a free consultation and discover how we can help your business grow.
            </p>
            <Button asChild size="lg" className="text-lg">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
