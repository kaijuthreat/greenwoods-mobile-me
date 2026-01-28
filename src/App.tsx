import { motion } from 'framer-motion'
import { Phone, Wrench, Clock, MapPin, Lightning, CheckCircle, Gauge, Drop, BatteryCharging, Hammer, PaperPlaneRight, Images, Star, Quotes } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { toast } from 'sonner'
import { useState } from 'react'

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

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    year: '',
    make: '',
    model: '',
    engine: '',
    problem: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

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
    window.location.href = 'tel:+1234567890'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    toast.success('Request received!', {
      description: 'We\'ll contact you shortly to discuss your vehicle needs.'
    })

    setFormData({
      name: '',
      phone: '',
      email: '',
      year: '',
      make: '',
      model: '',
      engine: '',
      problem: ''
    })

    setIsSubmitting(false)
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

      <section id="gallery" className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Images size={32} weight="duotone" className="text-accent" />
            </div>
            <h2 className="font-[family-name:var(--font-space)] font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
              Our Work Gallery
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Take a look at some of our recent repair and maintenance projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((item, index) => (
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
                      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-accent text-accent-foreground border-0 font-[family-name:var(--font-space)] font-semibold">
                            {item.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                          <h3 className="font-[family-name:var(--font-space)] font-bold text-lg mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-primary-foreground/90 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden border-border">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-auto max-h-[70vh] object-contain bg-muted"
                      />
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
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section id="testimonials" className="py-16 md:py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Quotes size={32} weight="duotone" className="text-accent" />
            </div>
            <h2 className="font-[family-name:var(--font-space)] font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied customers who experienced our service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

      <Separator />

      <section id="contact" className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-space)] font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
                Contact Us
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <Phone weight="duotone" size={28} className="text-accent" />
                <span className="text-sm text-muted-foreground">Or call us directly at</span>
              </div>
              <a 
                href="tel:+1234567890" 
                className="text-2xl font-[family-name:var(--font-space)] font-bold text-accent hover:text-accent/80 transition-colors"
              >
                (123) 456-7890
              </a>
            </div>

            <Card className="p-8 md:p-12 border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-[family-name:var(--font-space)] font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="font-[family-name:var(--font-inter)]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-[family-name:var(--font-space)] font-semibold">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="font-[family-name:var(--font-inter)]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-[family-name:var(--font-space)] font-semibold">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="font-[family-name:var(--font-inter)]"
                  />
                </div>

                <Separator />

                <div>
                  <h3 className="font-[family-name:var(--font-space)] font-semibold text-lg mb-4 text-foreground">
                    Vehicle Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="year" className="font-[family-name:var(--font-space)] font-semibold">
                        Year *
                      </Label>
                      <Input
                        id="year"
                        required
                        placeholder="2020"
                        value={formData.year}
                        onChange={handleInputChange}
                        className="font-[family-name:var(--font-inter)]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="make" className="font-[family-name:var(--font-space)] font-semibold">
                        Make *
                      </Label>
                      <Input
                        id="make"
                        required
                        placeholder="Toyota"
                        value={formData.make}
                        onChange={handleInputChange}
                        className="font-[family-name:var(--font-inter)]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="model" className="font-[family-name:var(--font-space)] font-semibold">
                        Model *
                      </Label>
                      <Input
                        id="model"
                        required
                        placeholder="Camry"
                        value={formData.model}
                        onChange={handleInputChange}
                        className="font-[family-name:var(--font-inter)]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="engine" className="font-[family-name:var(--font-space)] font-semibold">
                        Engine
                      </Label>
                      <Input
                        id="engine"
                        placeholder="2.5L 4-Cylinder"
                        value={formData.engine}
                        onChange={handleInputChange}
                        className="font-[family-name:var(--font-inter)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="problem" className="font-[family-name:var(--font-space)] font-semibold">
                    Problem Description *
                  </Label>
                  <Textarea
                    id="problem"
                    required
                    placeholder="Please describe the issue you're experiencing with your vehicle..."
                    value={formData.problem}
                    onChange={handleInputChange}
                    className="min-h-32 font-[family-name:var(--font-inter)] resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-[family-name:var(--font-space)] font-bold text-lg tracking-wide uppercase gap-3"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <PaperPlaneRight weight="bold" size={24} />
                      Submit Request
                    </>
                  )}
                </Button>
              </form>

              <Separator className="my-8" />

              <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
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