import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Palette, 
  Hammer, 
  PenTool, 
  ClipboardList, 
  Key,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    title: "Building Construction",
    description: "Premium residential and commercial construction with uncompromising quality standards.",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Sophisticated interior solutions that blend aesthetics with functionality.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces into modern masterpieces with expert renovation.",
  },
  {
    icon: PenTool,
    title: "Architectural Design",
    description: "Innovative architectural concepts that push the boundaries of design.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end project oversight ensuring timely and budget-conscious delivery.",
  },
  {
    icon: Key,
    title: "Turnkey Solutions",
    description: "Complete design-build solutions from concept to key handover.",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="luxury-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-charcoal mb-6"
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate max-w-2xl mx-auto"
          >
            From concept to completion, we deliver exceptional construction and design 
            services that exceed expectations.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                <service.icon className="w-7 h-7 text-primary group-hover:text-charcoal transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-slate-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/services" className="gap-2">
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
