import { motion } from "framer-motion";
import { Sparkles, Mountain, Palette, Award, Users, Eye } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const statueExpertise = [
  {
    icon: Sparkles,
    title: "Monument Design",
    description: "Custom monument and statue design that captures the essence and legacy of your vision.",
    details: [
      "Conceptual design development",
      "3D modeling and visualization",
      "Monument specifications",
      "Heritage considerations",
    ],
  },
  {
    icon: Mountain,
    title: "Statue Fabrication",
    description: "Expert fabrication using premium materials with meticulous attention to detail.",
    details: [
      "Stone sculpture carving",
      "Bronze casting",
      "Composite materials",
      "Metal sculpture creation",
    ],
  },
  {
    icon: Palette,
    title: "Artistic Installation",
    description: "Professional installation and finishing that brings your statue to life.",
    details: [
      "Site preparation",
      "Foundation engineering",
      "Precise installation",
      "Protective finishing",
    ],
  },
  {
    icon: Award,
    title: "Heritage & Cultural",
    description: "Specialized experience with heritage monuments and culturally significant statues.",
    details: [
      "Cultural monument design",
      "Heritage preservation",
      "Historical accuracy",
      "Conservation practices",
    ],
  },
  {
    icon: Users,
    title: "Public & Private",
    description: "Creating impactful statues for both public installations and private collections.",
    details: [
      "Public sculpture parks",
      "Private estate sculptures",
      "Commercial installations",
      "Commemorative pieces",
    ],
  },
  {
    icon: Eye,
    title: "Quality Assurance",
    description: "Rigorous quality control ensuring every statue meets our exacting standards.",
    details: [
      "Material inspection",
      "Craftsmanship verification",
      "Durability testing",
      "Final aesthetic review",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Statue() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />

        <div className="luxury-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Monument & <span className="text-primary">Statue Artistry</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Creating timeless sculptures and monuments that stand as testament to excellence, heritage, and artistic vision.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Commission Your Statue</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 relative">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Statue <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From concept to installation, we excel in every aspect of monument and statue creation
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {statueExpertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-white/60 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative bg-white/5 backdrop-blur">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-primary">Creative Process</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              A meticulous approach to bringing your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your vision, requirements, and artistic goals" },
              { step: "02", title: "Design", description: "Creating detailed designs with 3D visualization and approval" },
              { step: "03", title: "Fabrication", description: "Expert craftsmanship using premium materials" },
              { step: "04", title: "Installation", description: "Professional installation and finishing touches" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="text-6xl font-bold text-primary/20 mb-2">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Monument?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a timeless piece that will be cherished for generations.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
