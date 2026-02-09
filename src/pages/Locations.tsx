import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Locations = () => {
  const contactInfo = {
    address: "No. 510-1A.1, Jalan Sultan Azlan Shah, Batu 3, Jalan Ipoh, 51200 Kuala Lumpur",
    phone: "+60-16 9657705",
    email: "mitrathina84@gmail.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  };

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-charcoal via-charcoal-light to-primary relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 border border-primary/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 border border-gold/10 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="luxury-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <MapPin className="w-20 h-20 text-primary" strokeWidth={1} />
              </motion.div>
              <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 tracking-tight">
                Our Location
              </h1>
              <div className="w-24 h-px bg-primary/50 mx-auto mb-6" />
              <p className="text-white/80 text-lg font-light">
                Visit us at our headquarters in Kuala Lumpur
              </p>
            </motion.div>
          </div>
        </section>

        {/* Map & Info Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="luxury-container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-gold/5 to-primary/10 rounded-2xl blur-xl group-hover:from-primary/20 group-hover:via-gold/10 group-hover:to-primary/20 transition-all duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.010964479836!2d101.678424!3d3.1823244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49128e186d89%3A0x8948f9ea71470f39!2sMITRATHINA%20BUILDERS%20SDN%20BHD!5e0!3m2!1sen!2smy!4v1700000000001!5m2!1sen!2smy"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mitrathina Builders Location"
                  />
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-light text-charcoal mb-4 tracking-tight"
                  >
                    Kuala Lumpur
                  </motion.h2>
                  <div className="w-16 h-px bg-primary mb-8" />
                  <p className="text-slate text-lg font-light leading-relaxed">
                    Our headquarters in the heart of Malaysia's capital city, where excellence meets innovation.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Address */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="group flex gap-6 p-6 bg-cream border border-primary/20 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Address
                      </h3>
                      <p className="text-charcoal font-light leading-relaxed">
                        {contactInfo.address}
                      </p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.a
                    href={`tel:${contactInfo.phone}`}
                    whileHover={{ x: 10 }}
                    className="group flex gap-6 p-6 bg-cream border border-primary/20 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Phone
                      </h3>
                      <p className="text-charcoal font-light text-lg">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href={`mailto:${contactInfo.email}`}
                    whileHover={{ x: 10 }}
                    className="group flex gap-6 p-6 bg-cream border border-primary/20 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Email
                      </h3>
                      <p className="text-charcoal font-light text-lg">
                        {contactInfo.email}
                      </p>
                    </div>
                  </motion.a>

                  {/* Hours */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="group flex gap-6 p-6 bg-cream border border-primary/20 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                        Business Hours
                      </h3>
                      <p className="text-charcoal font-light text-lg">
                        {contactInfo.hours}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="pt-6"
                >
                  <Button
                    variant="gold"
                    size="lg"
                    asChild
                    className="w-full rounded-xl py-6 text-lg font-light"
                  >
                    <Link to="/contact" className="gap-3">
                      Get In Touch
                      <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Strip */}
        <section className="py-16 bg-black">
          <div className="luxury-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-white/40 text-sm font-semibold uppercase tracking-wider mb-6">
                Our Services
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Building Construction", "Interior Design", "Project Management", "Renovation & Remodeling", "Architectural Design", "Turnkey Solutions"].map((service, index) => (
                  <motion.span
                    key={service}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 border border-white/20 text-white font-light rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Locations;