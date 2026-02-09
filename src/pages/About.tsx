import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users, Shield, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in every project we undertake.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with clients to bring their vision to life.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest and transparent in all our business dealings.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Delivering on time and within budget, every time.",
  },
];

const timeline = [
  { year: "2008", title: "Founded", description: "Mitrathina Builders established in Kuala Lumpur" },
  { year: "2012", title: "Expansion", description: "Opened offices in Selangor and Penang" },
  { year: "2016", title: "100 Projects", description: "Completed our 100th major project" },
  { year: "2020", title: "Award Winning", description: "Received CIDB Excellence Award" },
  { year: "2024", title: "350+ Projects", description: "Continuing to build excellence" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-charcoal-light opacity-80" />
          <div className="luxury-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                About Us
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Building Excellence
                <br />
                <span className="text-primary">Since 2008</span>
              </h1>
              <p className="text-white/70 text-lg">
                Mitrathina Builders is Malaysia's premier construction and interior design company, 
                dedicated to creating exceptional spaces that inspire and endure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="luxury-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                  Our Story
                </h2>
                <p className="text-slate mb-4">
                  Founded in 2008, Mitrathina Builders began as a small construction firm with a big vision: 
                  to transform the Malaysian construction landscape through excellence, innovation, 
                  and unwavering commitment to quality.
                </p>
                <p className="text-slate mb-4">
                  Over 15 years later, we have grown into one of Malaysia's most trusted names in 
                  construction and interior design, completing over 350 projects across residential, 
                  commercial, and institutional sectors as Mitrathina Builders.
                </p>
                <p className="text-slate">
                  Our success is built on a foundation of skilled craftsmanship, innovative design thinking, 
                  and deep respect for our clients' visions. We don't just build structures; we create 
                  spaces that inspire, function beautifully, and stand the test of time.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-cream p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-primary mb-2">350+</p>
                  <p className="text-slate text-sm">Projects Completed</p>
                </div>
                <div className="bg-cream p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-primary mb-2">15+</p>
                  <p className="text-slate text-sm">Years Experience</p>
                </div>
                <div className="bg-cream p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-slate text-sm">Expert Team</p>
                </div>
                <div className="bg-cream p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-primary mb-2">4</p>
                  <p className="text-slate text-sm">Locations</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="luxury-container">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 lg:p-10 rounded-lg shadow-sm"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Our Vision</h3>
                <p className="text-slate">
                  To be Malaysia's most trusted construction and interior design company, 
                  recognized for transforming spaces and creating architectural legacies that 
                  inspire generations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 lg:p-10 rounded-lg shadow-sm"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">Our Mission</h3>
                <p className="text-slate">
                  To deliver exceptional construction and design solutions through innovation, 
                  craftsmanship, and unwavering commitment to client satisfaction, while 
                  contributing positively to Malaysia's built environment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4"
              >
                Our Values
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-4xl font-bold text-charcoal"
              >
                What Drives Us
              </motion.h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{value.title}</h3>
                  <p className="text-slate-light text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28 bg-charcoal">
          <div className="luxury-container">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4"
              >
                Our Journey
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-4xl font-bold text-white"
              >
                Milestones Along the Way
              </motion.h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-white/20 lg:-translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} hidden lg:block`}>
                      <div className={`${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                        <span className="text-primary font-bold text-2xl">{item.year}</span>
                        <h3 className="text-white font-semibold text-lg mt-1">{item.title}</h3>
                        <p className="text-white/60 text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Dot */}
                    <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-primary rounded-full lg:-translate-x-1/2 ring-4 ring-charcoal" />
                    
                    <div className="flex-1 pl-12 lg:pl-0">
                      <div className={`lg:hidden ${index % 2 === 0 ? "" : ""}`}>
                        <span className="text-primary font-bold text-xl">{item.year}</span>
                        <h3 className="text-white font-semibold mt-1">{item.title}</h3>
                        <p className="text-white/60 text-sm mt-1">{item.description}</p>
                      </div>
                      <div className="hidden lg:block">
                        {index % 2 !== 0 && (
                          <div className="lg:pr-12">
                            <span className="text-primary font-bold text-2xl">{item.year}</span>
                            <h3 className="text-white font-semibold text-lg mt-1">{item.title}</h3>
                            <p className="text-white/60 text-sm mt-1">{item.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="luxury-container text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-charcoal mb-6"
            >
              Ready to Work Together?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how we can bring your vision to life. Contact us today for a consultation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact" className="gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
