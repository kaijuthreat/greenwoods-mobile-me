import { motion } from 'framer-motion'
import { Phone, Wrench, Clock, MapPin, Lightning, CheckCircle, Gauge, Drop, BatteryCharging, Hammer, PaperPlaneRight, Star, ArrowRight, ShieldCheck } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useState } from 'react'

const galleryIconMap: Record<string, React.ElementType> = {
  'Engine Work': Wrench,
  'Brake Service': Gauge,
  'Transmission': Hammer,
  'Electrical': Lightning,
  'Maintenance': Drop,
  'Suspension': BatteryCharging,
}

function App() {
  const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSfbz658-jNCCwfeg-Cx53tmGQZa4NgeRNkJ7K2Dg4sRta8XGA/formResponse';

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

  const galleryImages = [
    {
      id: 1,
      title: 'Engine Overhaul',
      description: 'Complete engine rebuild on 2018 Ford F-150',
      category: 'Engine Work',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f3f4f6" width="800" height="600"/%3E%3Cpath fill="%234b5563" d="M300 200h200v200h-200z"/%3E%3Ccircle fill="%236b7280" cx="400" cy="300" r="60"/%3E%3Crect fill="%239ca3af" x="350" y="240" width="100" height="40"/%3E%3Ctext x="400" y="450" font-family="Arial" font-size="24" fill="%234b5563" text-anchor="middle"%3EEngine Overhaul%3C/text%3E%3C/svg%3E'
    },
    {
      id: 2,
      title: 'Brake System Replacement',
      description: 'Full brake pad and rotor replacement on Honda Civic',
      category: 'Brake Service',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23e0e7ff" width="800" height="600"/%3E%3Ccircle fill="%234f46e5" cx="400" cy="300" r="100"/%3E%3Ccircle fill="%23312e81" cx="400" cy="300" r="60"/%3E%3Cpath fill="%236366f1" d="M340 300h120M400 240v120"/%3E%3Ctext x="400" y="450" font-family="Arial" font-size="24" fill="%234f46e5" text-anchor="middle"%3EBrake System%3C/text%3E%3C/svg%3E'
    },
    {
      id: 3,
      title: 'Transmission Service',
      description: 'Transmission fluid change and diagnostics on Toyota Camry',
      category: 'Transmission',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23fef3c7" width="800" height="600"/%3E%3Crect fill="%23d97706" x="300" y="250" width="80" height="100" rx="10"/%3E%3Crect fill="%23f59e0b" x="420" y="250" width="80" height="100" rx="10"/%3E%3Crect fill="%23fbbf24" x="360" y="200" width="80" height="80" rx="10"/%3E%3Ctext x="400" y="450" font-family="Arial" font-size="24" fill="%23d97706" text-anchor="middle"%3ETransmission%3C/text%3E%3C/svg%3E'
    },
    {
      id: 4,
      title: 'Electrical Diagnostics',
      description: 'Complete electrical system diagnostic and repair',
      category: 'Electrical',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23dbeafe" width="800" height="600"/%3E%3Cpath fill="%232563eb" d="M400 150l-60 150h50l-40 150 110-180h-60z"/%3E%3Ccircle fill="none" stroke="%233b82f6" stroke-width="4" cx="400" cy="300" r="120"/%3E%3Ctext x="400" y="520" font-family="Arial" font-size="24" fill="%232563eb" text-anchor="middle"%3EElectrical Systems%3C/text%3E%3C/svg%3E'
    },
    {
      id: 5,
      title: 'Oil Change & Filter',
      description: 'Synthetic oil change with premium filter on BMW 3 Series',
      category: 'Maintenance',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f0fdf4" width="800" height="600"/%3E%3Cellipse fill="%2316a34a" cx="400" cy="280" rx="80" ry="40"/%3E%3Crect fill="%2322c55e" x="360" y="280" width="80" height="120"/%3E%3Cellipse fill="%2316a34a" cx="400" cy="400" rx="80" ry="40"/%3E%3Ctext x="400" y="480" font-family="Arial" font-size="24" fill="%2316a34a" text-anchor="middle"%3EOil Change%3C/text%3E%3C/svg%3E'
    },
    {
      id: 6,
      title: 'Suspension Repair',
      description: 'Front suspension struts and alignment on Jeep Cherokee',
      category: 'Suspension',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23fce7f3" width="800" height="600"/%3E%3Crect fill="%23db2777" x="280" y="200" width="40" height="200" rx="20"/%3E%3Crect fill="%23db2777" x="480" y="200" width="40" height="200" rx="20"/%3E%3Ccircle fill="%23ec4899" cx="300" cy="420" r="40"/%3E%3Ccircle fill="%23ec4899" cx="500" cy="420" r="40"/%3E%3Ctext x="400" y="520" font-family="Arial" font-size="24" fill="%23db2777" text-anchor="middle"%3ESuspension Repair%3C/text%3E%3C/svg%3E'
    }
  ]

  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      location: 'Downtown Metro',
      rating: 5,
      text: 'Absolutely incredible service! My car broke down at 2 AM and Greenwood\'s was there within 30 minutes. Professional, fast, and got me back on the road. Highly recommend!',
      service: 'Emergency Roadside Repair',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Riverside District',
      rating: 5,
      text: 'I\'ve used mobile mechanics before, but Greenwood\'s is on another level. They diagnosed and fixed my transmission issue right in my driveway. Saved me a huge towing fee!',
      service: 'Transmission Repair',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Jennifer Rodriguez',
      location: 'Westside',
      rating: 5,
      text: 'Best mechanic experience I\'ve ever had. They came to my office, fixed my brake system during my work day, and the price was very reasonable. Will definitely use again!',
      service: 'Brake Service',
      date: '3 weeks ago'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'North Hills',
      rating: 5,
      text: 'Professional, courteous, and extremely knowledgeable. They explained everything clearly and fixed my electrical issues that two other shops couldn\'t figure out. Worth every penny!',
      service: 'Electrical Diagnostics',
      date: '1 week ago'
    },
    {
      id: 5,
      name: 'Amanda Parks',
      location: 'Eastview',
      rating: 5,
      text: 'Called them for an oil change and they showed up on time, were super clean and organized, and finished quickly. The convenience of mobile service is unbeatable!',
      service: 'Oil Change',
      date: '4 days ago'
    },
    {
      id: 6,
      name: 'Robert Williams',
      location: 'Southgate',
      rating: 5,
      text: 'Had a battery die in a parking lot. They came out, tested everything, replaced my battery, and even checked my alternator. Great service and peace of mind!',
      service: 'Battery Replacement',
      date: '2 months ago'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        weight={index < rating ? 'fill' : 'regular'}
        className={index < rating ? 'text-accent' : 'text-muted-foreground/30'}
        size={18}
      />
    ))
  }

  const handleCall = () => {
    window.location.href = 'tel:+17063020163'
  }

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ]

  const trustStats = [
    { label: '500+ Jobs Completed', icon: CheckCircle },
    { label: '24/7 Service', icon: Clock },
    { label: 'Licensed & Insured', icon: ShieldCheck },
    { label: 'Same-Day Response', icon: Lightning },
  ]

  return (
    <div className="min-h-screen font-[family-name:var(--font-inter)]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <Wrench className="text-accent-foreground" size={24} weight="bold" />
            </div>
            <div>
              <h1 className="font-[family-name:var(--font-space)] font-bold text-lg leading-none">Greenwood's</h1>
              <p className="text-xs text-muted-foreground">Mobile Mechanic</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-sm font-[family-name:var(--font-space)] font-medium text-foreground/75 hover:text-accent transition-colors px-2 py-1 hover:underline underline-offset-4"
              >
                {link.label}
              </button>
            ))}
          </nav>
          <Button onClick={handleCall} size="sm" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shrink-0">
            <Phone weight="bold" size={18} />
            <span className="hidden sm:inline">Call Now</span>
          </Button>
        </div>
      </header>

      <section className="hero-gradient min-h-[85vh] flex items-center py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-accent/20 text-accent-foreground border-accent/40 hover:bg-accent/25 font-[family-name:var(--font-space)] font-semibold uppercase tracking-wider">
                <Clock weight="bold" size={16} className="mr-1.5" />
                24/7 Available
              </Badge>
              <h1 className="font-[family-name:var(--font-space)] font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-none tracking-tight">
                Expert Mobile Mechanic Services, Anytime, Anywhere
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                Professional automotive repair and maintenance that comes to you. Fast, reliable, and always available when you need us most.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Button onClick={handleCall} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-[family-name:var(--font-space)] font-bold text-lg tracking-wide uppercase gap-3 hover:scale-105 transition-transform">
                <Phone weight="bold" size={24} />
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent/40 text-white hover:bg-accent/20 font-[family-name:var(--font-space)] font-semibold"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Services
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              {trustStats.map(({ label, icon: TrustIcon }) => (
                <span key={label} className="stat-pill font-[family-name:var(--font-space)]">
                  <TrustIcon weight="fill" size={14} className="text-accent" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-[family-name:var(--font-space)] font-bold text-3xl md:text-4xl text-foreground tracking-tight">
              Our Services
            </h2>
            <span className="section-header-line"></span>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Comprehensive automotive solutions delivered right to your location
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                  <Card className="p-5 hover:shadow-lg transition-[transform,box-shadow] duration-200 hover:-translate-y-1 border-border h-full service-card group flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="icon-circle-sm shrink-0">
                        <Icon size={18} weight="duotone" className="text-accent" />
                      </div>
                      <h3 className="font-[family-name:var(--font-space)] font-bold text-lg text-foreground leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-accent text-sm font-[family-name:var(--font-space)] font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span>Learn more</span>
                      <ArrowRight size={14} weight="bold" />
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-[family-name:var(--font-space)] font-bold text-3xl md:text-4xl text-foreground tracking-tight">
              Why Choose Us
            </h2>
            <span className="section-header-line"></span>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Experience the difference with our professional mobile mechanic services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-5 hover:shadow-md transition-[transform,box-shadow] duration-200 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="icon-circle-sm shrink-0">
                        <Icon size={18} weight="duotone" className="text-accent" />
                      </div>
                      <h3 className="font-[family-name:var(--font-space)] font-bold text-base text-foreground leading-tight">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6 bg-muted/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-[family-name:var(--font-space)] font-bold text-3xl md:text-4xl text-foreground tracking-tight">
              Our Work Gallery
            </h2>
            <span className="section-header-line"></span>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Take a look at some of our recent repair and maintenance projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {galleryImages.map((item, index) => {
              const GalleryIcon = galleryIconMap[item.category] || Wrench
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card 
                        className="overflow-hidden cursor-pointer group border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        onClick={() => setSelectedImage(item)}
                      >
                        <div className="gallery-placeholder relative aspect-[16/10] overflow-hidden">
                          <div className="absolute inset-0 z-0 flex items-center justify-center">
                            <GalleryIcon size={64} weight="duotone" className="text-white/15 group-hover:scale-110 transition-transform duration-500" aria-hidden="true" />
                          </div>
                          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                          <div className="absolute top-3 right-3 z-20">
                            <Badge className="bg-accent text-accent-foreground border-0 font-[family-name:var(--font-space)] font-semibold text-xs">
                              {item.category}
                            </Badge>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 z-20 p-4 text-white">
                            <h3 className="font-[family-name:var(--font-space)] font-bold text-base mb-0.5 leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-xs text-white/80 line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden border-border">
                      <div className="gallery-placeholder relative w-full h-64 md:h-80">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <GalleryIcon size={100} weight="duotone" className="text-white/25" aria-hidden="true" />
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-accent text-accent-foreground border-0 font-[family-name:var(--font-space)] font-semibold text-base px-4 py-1.5">
                            {item.category}
                          </Badge>
                        </div>
                      </div>
                    <div className="p-6 md:p-8">
                      <h3 className="font-[family-name:var(--font-space)] font-bold text-2xl md:text-3xl mb-3 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-[family-name:var(--font-space)] font-bold text-3xl md:text-4xl text-foreground tracking-tight">
              What Our Customers Say
            </h2>
            <span className="section-header-line"></span>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
              Don't just take our word for it - hear from satisfied customers who experienced our service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => {
              const initials = testimonial.name
                .split(' ')
                .map(n => n[0])
                .join('')
              
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-12 h-12 border-2 border-accent/20">
                        <AvatarFallback className="bg-accent/10 text-accent font-[family-name:var(--font-space)] font-bold">
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-[family-name:var(--font-space)] font-semibold text-base text-foreground leading-tight">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                          <MapPin size={12} weight="fill" />
                          {testimonial.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <Badge variant="secondary" className="font-[family-name:var(--font-space)] font-medium text-xs">
                        {testimonial.service}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {testimonial.date}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {renderStars(5)}
                </div>
                <span className="font-[family-name:var(--font-space)] font-bold text-2xl text-foreground">
                  5.0
                </span>
              </div>
              <Separator orientation="vertical" className="h-8" />
              <div className="text-left">
                <p className="font-[family-name:var(--font-space)] font-semibold text-foreground">
                  150+ Happy Customers
                </p>
                <p className="text-sm text-muted-foreground">
                  Average rating from verified reviews
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/40">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-[family-name:var(--font-space)] font-bold text-3xl md:text-4xl text-foreground tracking-tight mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let us know about your car's problem and we'll get back to you as soon as possible
            </p>

            <div className="flex flex-col items-center gap-8 mb-12">
              <Button 
                onClick={() => window.open(GOOGLE_FORM_ACTION.replace('/formResponse', '/viewform'), '_blank')}
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-[family-name:var(--font-space)] font-bold text-lg tracking-wide uppercase gap-3 hover:scale-105 transition-transform px-8 py-6"
              >
                <PaperPlaneRight weight="bold" size={24} />
                Let Us Know Your Car's Problem
              </Button>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                  <Phone weight="duotone" size={28} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Or call us directly at</span>
                </div>
                <a 
                  href="tel:+17063020163" 
                  className="text-2xl font-[family-name:var(--font-space)] font-bold text-accent hover:text-accent/80 transition-colors"
                >
                  (706) 302-0163
                </a>
              </div>
            </div>

            <Card className="p-8 md:p-12 border-border">
              <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
                <div>
                  <h4 className="font-[family-name:var(--font-space)] font-semibold text-lg mb-2 text-foreground">
                    Email
                  </h4>
                  <a 
                    href="mailto:service@greenwoodmobilemechanic.com" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    greenwoodc233@gmail.com
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
            </Card>
          </motion.div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Wrench className="text-accent-foreground" size={24} weight="bold" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-space)] font-bold text-lg leading-none">Greenwood's</h3>
                  <p className="text-xs opacity-90">24 Hour Mobile Mechanic Services</p>
                </div>
              </div>
              <p className="text-sm opacity-70 max-w-xs leading-relaxed">
                Professional mobile mechanic services available 24/7, right at your location.
              </p>
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-space)] font-semibold mb-4 text-sm uppercase tracking-wider opacity-90">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button
                      onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-sm opacity-75 hover:text-accent hover:opacity-100 transition-all font-[family-name:var(--font-space)]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-space)] font-semibold mb-4 text-sm uppercase tracking-wider opacity-90">Contact Us</h4>
              <div className="space-y-3">
                <a href="tel:+17063020163" className="flex items-center gap-2 text-sm opacity-80 hover:text-accent hover:opacity-100 transition-all">
                  <Phone size={16} weight="fill" />
                  (706) 302-0163
                </a>
                <a href="mailto:greenwoodc233@gmail.com" className="flex items-center gap-2 text-sm opacity-80 hover:text-accent hover:opacity-100 transition-all">
                  <PaperPlaneRight size={16} weight="fill" />
                  greenwoodc233@gmail.com
                </a>
                <p className="flex items-center gap-2 text-sm opacity-80">
                  <Clock size={16} weight="fill" />
                  Available 24/7
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-6 text-center">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} Greenwood's Mobile Mechanic Services. All rights reserved.
            </p>
          </div>
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
