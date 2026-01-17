import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInterior from "@/assets/project-interior.jpg";

// Real project photos
import craneNight from "@/assets/library/crane-night.jpg";
import projectSignboard1 from "@/assets/library/project-signboard-1.jpg";
import concreteBeams from "@/assets/library/concrete-beams.jpg";
import pilingMachine from "@/assets/library/piling-machine.jpg";
import nightConstruction from "@/assets/library/night-construction.jpg";
import equipmentLoading from "@/assets/library/equipment-loading.jpg";
import projectSignboard2 from "@/assets/library/project-signboard-2.jpg";
import constructionSite from "@/assets/library/construction-site.jpg";
import doorInstallation from "@/assets/library/door-installation.jpg";
import interiorRenovation from "@/assets/library/interior-renovation.jpg";

const categories = ["All", "Construction", "Piling", "Renovation", "Site Progress"];

const workPhotos = [
  {
    id: 1,
    title: "Heavy Equipment Transport",
    category: "Piling",
    location: "Kuala Lumpur",
    image: craneNight,
  },
  {
    id: 2,
    title: "DBKL Project Signboard - Brickfields",
    category: "Construction",
    location: "Kuala Lumpur",
    image: projectSignboard1,
  },
  {
    id: 3,
    title: "Concrete Pile Beams",
    category: "Piling",
    location: "Kuala Lumpur",
    image: concreteBeams,
  },
  {
    id: 4,
    title: "Piling Machine Operation",
    category: "Piling",
    location: "Kuala Lumpur",
    image: pilingMachine,
  },
  {
    id: 5,
    title: "Night Shift Construction Work",
    category: "Construction",
    location: "Kuala Lumpur",
    image: nightConstruction,
  },
  {
    id: 6,
    title: "Equipment Loading Operations",
    category: "Construction",
    location: "Kuala Lumpur",
    image: equipmentLoading,
  },
  {
    id: 7,
    title: "Project Signboard - Lucky Ideas",
    category: "Construction",
    location: "Kuala Lumpur",
    image: projectSignboard2,
  },
  {
    id: 8,
    title: "Building Construction Progress",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: constructionSite,
  },
  {
    id: 9,
    title: "Security Door Installation",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: doorInstallation,
  },
  {
    id: 10,
    title: "Interior Renovation Work",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: interiorRenovation,
  },
  {
    id: 11,
    title: "Luxury Residential Project",
    category: "Construction",
    location: "Selangor",
    image: projectResidential,
  },
  {
    id: 12,
    title: "Commercial Building",
    category: "Construction",
    location: "Kuala Lumpur",
    image: projectCommercial,
  },
  {
    id: 13,
    title: "Interior Design Showcase",
    category: "Renovation",
    location: "Penang",
    image: projectInterior,
  },
];

const LibraryOfWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "All"
      ? workPhotos
      : workPhotos.filter((p) => p.category === activeCategory);

  const handlePrev = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < filteredPhotos.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const selectedPhoto = selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

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
                Photo Gallery
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Library of
                <br />
                <span className="text-primary">Our Work</span>
              </h1>
              <p className="text-white/70 text-lg">
                Browse through our collection of project photos showcasing our craftsmanship 
                in construction, interior design, renovation, and architectural works.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter & Stats */}
        <section className="py-8 bg-cream border-b border-slate-light/20">
          <div className="luxury-container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setSelectedIndex(null);
                    }}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-primary text-charcoal"
                        : "bg-white text-slate hover:bg-charcoal hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <span className="text-slate text-sm">
                Showing {filteredPhotos.length} {filteredPhotos.length === 1 ? 'photo' : 'photos'}
              </span>
            </div>
          </div>
        </section>

        {/* Photo Gallery Grid */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="luxury-container">
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredPhotos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/70 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                        <p className="text-white text-sm font-medium px-4">{photo.title}</p>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary/90 text-charcoal text-xs px-2 py-1 rounded font-medium">
                        {photo.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-charcoal">
          <div className="luxury-container text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 mb-8 max-w-2xl mx-auto"
            >
              Let us bring your vision to life with our expertise in construction and design.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            {selectedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Button */}
            {selectedIndex < filteredPhotos.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <motion.div
              key={selectedPhoto.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-white">{selectedPhoto.title}</h3>
                <p className="text-white/60 text-sm mt-1">
                  {selectedPhoto.category} • {selectedPhoto.location}
                </p>
                <p className="text-white/40 text-sm mt-2">
                  {selectedIndex + 1} of {filteredPhotos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default LibraryOfWork;
