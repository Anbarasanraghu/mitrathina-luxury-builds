import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInterior from "@/assets/project-interior.jpg";

const categories = ["All", "Residential", "Commercial", "Interior"];

const projects = [
  {
    id: 1,
    title: "The Pinnacle Residence",
    category: "Residential",
    location: "Kuala Lumpur",
    year: "2023",
    description: "A stunning 4-storey luxury home featuring contemporary design with sustainable materials.",
    image: projectResidential,
  },
  {
    id: 2,
    title: "Horizon Corporate Tower",
    category: "Commercial",
    location: "Selangor",
    year: "2023",
    description: "Modern 15-storey corporate headquarters with state-of-the-art facilities.",
    image: projectCommercial,
  },
  {
    id: 3,
    title: "Serene Heights Villa",
    category: "Interior",
    location: "Penang",
    year: "2022",
    description: "Luxurious interior transformation of a heritage bungalow with modern amenities.",
    image: projectInterior,
  },
  {
    id: 4,
    title: "Marina Bay Apartments",
    category: "Residential",
    location: "Johor",
    year: "2022",
    description: "Exclusive waterfront apartments with panoramic sea views and premium finishes.",
    image: projectResidential,
  },
  {
    id: 5,
    title: "Tech Hub Center",
    category: "Commercial",
    location: "Kuala Lumpur",
    year: "2021",
    description: "Innovation-focused workspace designed for tech startups and creative agencies.",
    image: projectCommercial,
  },
  {
    id: 6,
    title: "Orchid Boutique Hotel",
    category: "Interior",
    location: "Penang",
    year: "2021",
    description: "Complete interior redesign of a heritage boutique hotel in George Town.",
    image: projectInterior,
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
                Our Portfolio
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Featured
                <br />
                <span className="text-primary">Projects</span>
              </h1>
              <p className="text-white/70 text-lg">
                Explore our portfolio of completed projects spanning residential, commercial, 
                and interior design across Malaysia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="luxury-container">
            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-charcoal"
                      : "bg-white text-slate hover:bg-charcoal hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <span className="text-primary text-sm font-medium mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-semibold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-sm mb-4">
                        {project.location} • {project.year}
                      </p>
                      <div className="flex items-center gap-2 text-white hover:text-primary transition-colors w-fit">
                        <span className="text-sm font-medium">View Details</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-charcoal">
          <div className="luxury-container text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
            >
              Want to See Your Project Here?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss your vision and create something extraordinary together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-charcoal/80 rounded-full flex items-center justify-center text-white hover:bg-charcoal transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="grid lg:grid-cols-2">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="p-8 lg:p-10">
                  <span className="text-primary text-sm font-medium">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mt-2 mb-4">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate mb-4">{selectedProject.description}</p>
                  <div className="space-y-2 mb-6">
                    <p className="text-sm">
                      <span className="text-slate-light">Location:</span>{" "}
                      <span className="text-charcoal font-medium">{selectedProject.location}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-slate-light">Year:</span>{" "}
                      <span className="text-charcoal font-medium">{selectedProject.year}</span>
                    </p>
                  </div>
                  <Button variant="gold" asChild>
                    <Link to="/contact">Enquire About Similar Project</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Projects;
