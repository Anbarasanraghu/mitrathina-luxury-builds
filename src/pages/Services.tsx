import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Palette,
  Hammer,
  PenTool,
  ClipboardList,
  Key,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    title: "Building Construction",
    description: "Premium residential and commercial construction with uncompromising quality standards.",
    features: [
      "Residential homes and villas",
      "Commercial buildings",
      "Industrial facilities",
      "Mixed-use developments",
    ],
  },
  {
    icon: Palette,
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    title: "Interior Design",
    description: "Sophisticated interior solutions that blend aesthetics with functionality.",
    features: [
      "Space planning",
      "Custom furniture design",
      "Material selection",
      "Lighting design",
    ],
  },
  {
    icon: Hammer,
    imageUrl: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
    title: "Renovation & Remodeling",
    description: "Transform existing spaces into modern masterpieces with expert renovation.",
    features: [
      "Home renovations",
      "Office refurbishments",
      "Kitchen & bathroom remodels",
      "Structural modifications",
    ],
  },
  {
    icon: PenTool,
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    title: "Architectural Design",
    description: "Innovative architectural concepts that push the boundaries of design.",
    features: [
      "Concept development",
      "3D visualization",
      "Technical drawings",
      "Permit applications",
    ],
  },
  {
    icon: ClipboardList,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    title: "Project Management",
    description: "End-to-end project oversight ensuring timely and budget-conscious delivery.",
    features: [
      "Timeline management",
      "Budget control",
      "Quality assurance",
      "Contractor coordination",
    ],
  },
  {
    icon: Key,
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    title: "Turnkey Solutions",
    description: "Complete design-build solutions from concept to key handover.",
    features: [
      "Single-point responsibility",
      "Integrated design-build",
      "Furnishing & fit-out",
      "Ready-to-move delivery",
    ],
  },
];

const Services = () => {
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
                Our Services
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Comprehensive
                <br />
                <span className="text-primary">Construction & Design</span>
              </h1>
              <p className="text-white/70 text-lg">
                From initial concept to final handover, we offer a complete range of construction 
                and interior design services tailored to your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="luxury-container">
            <div className="grid gap-8 lg:gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="bg-white p-8 lg:p-10 rounded-lg shadow-sm">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                        {service.title}
                      </h2>
                      <p className="text-slate mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-slate-light">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="goldOutline" asChild>
                        <Link to="/contact" className="gap-2">
                          Get Quote
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className={`hidden lg:block ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="aspect-square bg-charcoal/5 rounded-lg overflow-hidden">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28 bg-charcoal">
          <div className="luxury-container">
            <div className="text-center mb-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4"
              >
                Our Process
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-4xl font-bold text-white"
              >
                How We Work
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your vision and requirements" },
                { step: "02", title: "Design", desc: "Creating detailed plans and visualizations" },
                { step: "03", title: "Build", desc: "Expert construction with quality materials" },
                { step: "04", title: "Handover", desc: "Final inspection and key delivery" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <span className="text-5xl font-bold text-primary/30 mb-4 block">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </motion.div>
              ))}
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
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate mb-8 max-w-2xl mx-auto"
            >
              Contact us today for a free consultation and personalized quote.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact" className="gap-2">
                  Get Free Quote
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

export default Services;