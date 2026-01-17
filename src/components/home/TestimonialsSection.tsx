import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Tan Wei Ming",
    role: "Property Developer",
    company: "Sunrise Properties",
    content: "Mitrathina exceeded all our expectations. Their attention to detail and commitment to quality transformed our vision into a stunning reality. The project was delivered on time and within budget.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Abdullah",
    role: "Homeowner",
    company: "Private Residence",
    content: "Working with Mitrathina on our dream home was an incredible experience. Their team understood exactly what we wanted and brought it to life with exceptional craftsmanship.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Lee",
    role: "CEO",
    company: "Tech Innovations Sdn Bhd",
    content: "Our new corporate headquarters is a testament to Mitrathina's expertise. The modern design perfectly reflects our brand identity while maximizing functionality for our team.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-charcoal overflow-hidden">
      <div className="luxury-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl lg:text-5xl font-bold text-white mb-6"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 mb-8"
            >
              Don't just take our word for it. Hear from our satisfied clients 
              who have experienced the Mitrathina difference.
            </motion.p>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-4"
            >
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-charcoal transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-charcoal transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Right Content - Testimonial Card */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 text-primary/20">
              <Quote className="w-24 h-24" />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative bg-charcoal-light p-8 lg:p-10 rounded-lg border border-white/10"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <p className="text-white font-semibold text-lg">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-white/60 text-sm">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>

                {/* Indicator */}
                <div className="flex gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-8 bg-primary"
                          : "w-4 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
