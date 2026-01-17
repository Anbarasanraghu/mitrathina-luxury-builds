import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const locations = [
  {
    city: "Kuala Lumpur",
    description: "Our headquarters in the heart of Malaysia's capital city.",
    address: "Level 15, Tower A, KLCC, 50088 Kuala Lumpur",
    phone: "+60 3-2345 6789",
    services: ["Building Construction", "Interior Design", "Project Management"],
  },
  {
    city: "Selangor",
    description: "Serving the greater Klang Valley with premium construction services.",
    address: "Unit 8-1, Menara Centara, Petaling Jaya, 46100 Selangor",
    phone: "+60 3-7890 1234",
    services: ["Residential Construction", "Commercial Fit-out", "Renovation"],
  },
  {
    city: "Penang",
    description: "Northern region office specializing in heritage and modern builds.",
    address: "Level 10, Gurney Plaza, George Town, 10250 Penang",
    phone: "+60 4-234 5678",
    services: ["Heritage Restoration", "Villa Construction", "Interior Design"],
  },
  {
    city: "Johor",
    description: "Southern hub serving Johor Bahru and surrounding areas.",
    address: "Suite 5-2, Menara JB, 80000 Johor Bahru",
    phone: "+60 7-345 6789",
    services: ["Industrial Construction", "Commercial Projects", "Turnkey Solutions"],
  },
];

const Locations = () => {
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
                Our Locations
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Serving
                <br />
                <span className="text-primary">All of Malaysia</span>
              </h1>
              <p className="text-white/70 text-lg">
                With offices in key cities across Malaysia, we bring premium construction 
                and design services closer to you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="luxury-container">
            <div className="bg-charcoal/5 rounded-lg overflow-hidden mb-16">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4078740.7025689585!2d99.41721979999999!3d4.140634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3034d3975f6730af%3A0x745969328211cd8!2sMalaysia!5e0!3m2!1sen!2smy!4v1699999999999!5m2!1sen!2smy"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mitrathina locations in Malaysia"
              />
            </div>

            {/* Locations Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.city}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-cream p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-charcoal mb-2">
                        {location.city}
                      </h3>
                      <p className="text-slate text-sm">{location.description}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <p className="text-slate-light text-sm flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {location.address}
                    </p>
                    <p className="text-slate-light text-sm flex items-center gap-2">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs text-slate-light uppercase tracking-wider mb-2">
                      Services Available
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 bg-white rounded-full text-xs text-charcoal"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="goldOutline" size="sm" asChild>
                    <Link to="/contact" className="gap-2">
                      Contact This Office
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-20 lg:py-28 bg-charcoal">
          <div className="luxury-container">
            <div className="text-center max-w-3xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4"
              >
                Nationwide Coverage
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                Beyond Our Office Locations
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/60 mb-8"
              >
                While our main offices are in Kuala Lumpur, Selangor, Penang, and Johor, 
                we serve clients throughout Malaysia. Contact us to discuss your project 
                anywhere in the country.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {["Sabah", "Sarawak", "Melaka", "Pahang", "Perak", "Kedah", "Negeri Sembilan"].map((state) => (
                  <span
                    key={state}
                    className="px-4 py-2 border border-white/20 rounded-full text-white/60 text-sm"
                  >
                    {state}
                  </span>
                ))}
              </motion.div>
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
              Find Your Nearest Office
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate mb-8 max-w-2xl mx-auto"
            >
              Get in touch with our team to discuss your project requirements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact" className="gap-2">
                  Contact Us
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

export default Locations;
