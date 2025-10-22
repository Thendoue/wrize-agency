import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Check, Zap, Palette, HeadphonesIcon, Sparkles, Rocket, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton />

      <main className="flex-1">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-slide-in">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">South Africa's Premier Web Design Agency</span>
              </div>

              {/* Main Heading */}
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance animate-slide-in"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Build Your Dream
                </span>
                <br />
                <span className="text-foreground">Website Today</span>
              </h1>

              {/* Subheading */}
              <p
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-in"
                style={{ animationDelay: "0.2s" }}
              >
                Professional Shopify & custom websites from just <span className="text-primary font-bold">R1500</span>.
                Fast delivery, modern design, and full support included.
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in"
                style={{ animationDelay: "0.3s" }}
              >
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    Get Started Free
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-primary/30 hover:bg-primary/10 transition-colors bg-transparent"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div
                className="flex flex-wrap justify-center items-center gap-8 pt-8 animate-slide-in"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">16 Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-secondary" />
                  <span className="text-sm text-muted-foreground">1-2 Week Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">5-Star Rated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Services Snapshot */}
        <section className="py-24 bg-background relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Our Services</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  Transparent Pricing, Premium Quality
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Choose the perfect package for your business needs
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <ScrollReveal delay={0}>
                <Card className="hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105 h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-primary font-bold text-3xl">R1500</div>
                    <h3 className="text-2xl font-semibold text-foreground">Shopify Websites</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Up to 3 pages, responsive design, basic contact form, and 1 integration
                    </p>
                    <Button
                      asChild
                      className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <Card className="hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105 h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-secondary font-bold text-3xl">R2500</div>
                    <h3 className="text-2xl font-semibold text-foreground">Custom Theme Shopify</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tailored theme setup with branding alignment and advanced features
                    </p>
                    <Button
                      asChild
                      className="w-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    >
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105 h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-accent font-bold text-3xl">R800</div>
                    <h3 className="text-2xl font-semibold text-foreground">Logo Design</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      3 concepts, 2 revisions, delivered in PNG, SVG, and PDF formats
                    </p>
                    <Button
                      asChild
                      className="w-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <Card className="hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105 h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-primary font-bold text-3xl">R3000</div>
                    <h3 className="text-2xl font-semibold text-foreground">Custom Websites</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Full custom build, up to 10 pages, mobile-friendly and speed optimized
                    </p>
                    <Button
                      asChild
                      className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <Card className="hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105 h-full">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-secondary font-bold text-3xl">R500/mo</div>
                    <h3 className="text-2xl font-semibold text-foreground">Hosting & Maintenance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Domain setup, secure hosting, SSL, backups, and priority support
                    </p>
                    <Button
                      asChild
                      className="w-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    >
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <Card className="hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 border-2 border-accent/50 bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm hover:scale-105 h-full">
                  <CardContent className="p-8 space-y-4 flex flex-col justify-center items-center text-center h-full">
                    <Sparkles className="h-12 w-12 text-accent" />
                    <h3 className="text-2xl font-semibold text-foreground">Ready to Start?</h3>
                    <p className="text-muted-foreground">Get a free consultation today</p>
                    <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      <Link href="/contact">Get Free Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-muted/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm mb-4">
                  <Award className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium text-foreground">Why Choose Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Excellence at Every Step</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We're committed to delivering exceptional results
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <ScrollReveal delay={0}>
                <div className="text-center space-y-4 group">
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform border border-primary/20">
                    <Check className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Affordable Pricing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Quality websites that fit your budget, starting from just R1500
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="text-center space-y-4 group">
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform border border-secondary/20">
                    <Zap className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Fast Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most projects completed within 1-2 weeks without compromising quality
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="text-center space-y-4 group">
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform border border-accent/20">
                    <Palette className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Modern Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contemporary, responsive designs that look great on all devices
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="text-center space-y-4 group">
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform border border-primary/20">
                    <HeadphonesIcon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Full Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ongoing support and maintenance to keep your site running smoothly
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Recent Work */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-4">
                  <Palette className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">Portfolio</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
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
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">See what we've built for our clients</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <ScrollReveal delay={0}>
                <Link href="/portfolio" className="group">
                  <Card className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                      <img
                        src="/modern-ecommerce-website.png"
                        alt="E-commerce Project"
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        Modern E-commerce Store
                      </h3>
                      <p className="text-muted-foreground">Online store with custom theme and payment integration</p>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <Link href="/portfolio" className="group">
                  <Card className="overflow-hidden hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                    <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 relative overflow-hidden">
                      <img
                        src="/professional-business-website.png"
                        alt="Business Website"
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-secondary transition-colors">
                        Professional Business Site
                      </h3>
                      <p className="text-muted-foreground">Full-featured website with advanced functionality and SEO</p>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Link href="/portfolio" className="group">
                  <Card className="overflow-hidden hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 relative overflow-hidden">
                      <img
                        src="/creative-portfolio-website.png"
                        alt="Portfolio Website"
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                        Creative Portfolio
                      </h3>
                      <p className="text-muted-foreground">
                        Stunning portfolio site with smooth animations and interactions
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300}>
              <div className="text-center mt-12">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/30 hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/portfolio">View All Projects</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />

          <ScrollReveal>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">
                Let's Build Something Amazing Together!
              </h2>
              <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ready to take your business online? Get in touch for a free consultation and quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-foreground/20 hover:bg-foreground/5 bg-transparent"
                >
                  <Link href="https://wa.me/27123456789">Chat on WhatsApp</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  )
}
