import { motion } from 'framer-motion'
import { Phone, Wrench, Clock, MapPin, Lightning, CheckCircle, Gauge, Drop, BatteryCharging, Hammer } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

function App() {
  const services = [
    { icon: Wrench, title: 'General Repairs', description: 'Engine diagnostics, brake service, and general maintenance' },
    { icon: BatteryCharging, title: 'Battery Service', description: 'Jump starts, testing, and battery replacement' },
    { icon: Gauge, title: 'Diagnostics', description: 'Computer diagnostics and troubleshooting' },
    { icon: Drop, title: 'Fluid Services', description: 'Oil changes, coolant, and transmission fluid' },
    { icon: Hammer, title: 'Emergency Repairs', description: 'Roadside assistance and urgent fixes' },
    { icon: Lightning, title: 'Electrical Systems', description: 'Alternator, starter, and electrical diagnostics' },
  ]

  const benefits = [
    { icon: Clock, title: '24/7 Availability', description: 'Available around the clock for your automotive emergencies' },
    { icon: MapPin, title: 'Mobile Service', description: 'We come to you - home, office, or roadside' },
    { icon: CheckCircle, title: 'Certified Technicians', description: 'Experienced and fully licensed mechanics' },
    { icon: Lightning, title: 'Fast Response', description: 'Quick arrival times when you need help most' },
  ]

  const handleCall = () => {
    window.location.href = 'tel:+1234567890'
  }

  return (
    <div className="min-h-screen font-[family-name:var(--font-inter)]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Wrench className="text-primary-foreground" size={24} weight="bold" />
            </div>
            <div>
              <h1 className="font-[family-name:var(--font-space)] font-bold text-lg leading-none">Greenwood's</h1>
              <p className="text-xs text-muted-foreground">Mobile Mechanic</p>
            </div>
          </div>
          <Button onClick={handleCall} size="sm" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
            <Phone weight="bold" size={18} />
            <span className="hidden sm:inline">Call Now</span>
          </Button>
        </div>
      </header>

      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 font-[family-name:var(--font-space)] font-semibold uppercase tracking-wider">
              <Clock weight="bold" size={16} className="mr-1.5" />
              24/7 Available
            </Badge>
            <h1 className="font-[family-name:var(--font-space)] font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-none tracking-tight mb-6">
              Expert Mobile Mechanic Services, Anytime, Anywhere
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 max-w-2xl">
              Professional automotive repair and maintenance that comes to you. Fast, reliable, and always available when you need us most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleCall} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-[family-name:var(--font-space)] font-bold text-lg tracking-wide uppercase gap-3 hover:scale-105 transition-transform">
                <Phone weight="bold" size={24} />
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-[family-name:var(--font-space)] font-semibold"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-space)] font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive automotive solutions delivered right to your location
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border h-full">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Icon size={28} weight="duotone" className="text-accent" />
                    </div>
                    <h3 className="font-[family-name:var(--font-space)] font-semibold text-xl mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-[family-name:var(--font-space)] font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the difference with our professional mobile mechanic services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon size={32} weight="duotone" className="text-primary" />
                  </div>
                  <h3 className="font-[family-name:var(--font-space)] font-semibold text-lg mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Separator />

      <section id="contact" className="py-16 md:py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-[family-name:var(--font-space)] font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Need automotive assistance? We're here to help 24/7
            </p>

            <Card className="p-8 md:p-12 border-border">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Phone weight="duotone" size={32} className="text-accent" />
                    <h3 className="font-[family-name:var(--font-space)] font-semibold text-2xl text-foreground">
                      Call Us Anytime
                    </h3>
                  </div>
                  <a 
                    href="tel:+1234567890" 
                    className="text-3xl md:text-4xl font-[family-name:var(--font-space)] font-bold text-accent hover:text-accent/80 transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>

                <Separator />

                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-[family-name:var(--font-space)] font-semibold text-lg mb-2 text-foreground">
                      Email
                    </h4>
                    <a 
                      href="mailto:service@greenwoods.com" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      service@greenwoods.com
                    </a>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-space)] font-semibold text-lg mb-2 text-foreground">
                      Service Area
                    </h4>
                    <p className="text-muted-foreground">
                      Greater Metro Area & Surrounding Communities
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Wrench className="text-accent-foreground" size={24} weight="bold" />
            </div>
            <div className="text-left">
              <h3 className="font-[family-name:var(--font-space)] font-bold text-lg leading-none">Greenwood's</h3>
              <p className="text-xs text-primary-foreground/80">24 Hour Mobile Mechanic Services</p>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Greenwood's Mobile Mechanic Services. All rights reserved.
          </p>
        </div>
      </footer>

      <motion.div 
        className="fixed bottom-6 right-6 z-50 md:hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <Button 
          onClick={handleCall} 
          size="lg" 
          className="rounded-full w-16 h-16 shadow-2xl bg-accent hover:bg-accent/90 text-accent-foreground p-0 hover:scale-110 transition-transform"
        >
          <Phone weight="bold" size={28} />
        </Button>
      </motion.div>
    </div>
  )
}

export default App