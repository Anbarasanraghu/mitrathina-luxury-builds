import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Home, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InteriorDesign = () => {
  const services = [
    {
      icon: Palette,
      title: "Design Consultation",
      description: "Expert guidance on color schemes, layouts, and aesthetic direction for your space.",
    },
    {
      icon: Home,
      title: "Space Planning",
      description: "Optimize your interior layout for functionality, flow, and maximum visual impact.",
    },
    {
      icon: Zap,
      title: "Lighting Design",
      description: "Strategic lighting solutions that enhance ambiance and highlight key architectural features.",
    },
    {
      icon: Award,
      title: "Material Selection",
      description: "Curated selection of premium materials and finishes that align with luxury standards.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-charcoal text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-charcoal via-charcoal to-black pt-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gold/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="luxury-container relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center min-h-screen text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Interior Design
              <span className="block text-primary mt-2">Excellence</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your spaces with sophisticated design solutions that blend elegance, functionality, and timeless style.
            </motion.p>

            <motion.div
              className="flex gap-4 flex-wrap justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/library">View Portfolio</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="luxury-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Design Services
            </h2>
            <p className="text-white/70 text-lg">
              Comprehensive interior design solutions tailored to your vision
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 hover:border-primary/50 transition-all group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ y: -10, borderColor: "var(--primary)" }}
                >
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="luxury-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Interior Design Portfolio
            </h2>
            <p className="text-white/70 text-lg">
              Explore our stunning collection of interior design projects
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "/Interior/1.webp",
              "/Interior/10.jpeg",
              "/Interior/11.jpeg",
              "/Interior/12.jpeg",
              "/Interior/13.jpeg",
              "/Interior/14.jpeg",
              "/Interior/15.jpg",
              "/Interior/2.jpg",
              "/Interior/3.jpg",
              "/Interior/4.webp",
              "/Interior/5.webp",
              "/Interior/6.webp",
              "/Interior/7.jpg",
              "/Interior/8.jpg",
              "/Interior/9.webp",
            ].map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`Interior Design Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 px-4 bg-black/40">
        <div className="luxury-container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Design Process
            </h2>
            <p className="text-white/70 text-lg">
              A systematic approach to creating exceptional interiors
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and vision" },
              { step: "02", title: "Concept", description: "Creating design concepts and mood boards" },
              { step: "03", title: "Development", description: "Refining designs and selecting materials" },
              { step: "04", title: "Implementation", description: "Bringing your design to life" },
            ].map((process, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="relative">
                  <div className="text-primary text-5xl font-bold opacity-20 mb-2">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-white/70 text-sm">{process.description}</p>
                  {index < 3 && (
                    <ArrowRight className="absolute top-0 -right-8 w-6 h-6 text-primary/50 hidden md:block" />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="luxury-container">
          <motion.div
            className="bg-gradient-to-r from-primary/20 to-gold/20 border border-primary/30 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let our expert designers create a personalized interior design solution for your home or business.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InteriorDesign;
