import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGallery } from "@/hooks/useGallery";
import { workPhotos, categories } from "@/data/galleryData";
import DomeGallery from "@/components/DomeGallery";

const LibraryOfWork = () => {
  const gallery = useGallery({
    photos: workPhotos,
    initialCategory: "All",
    itemsPerPage: 12,
  });

  const {
    activeCategory,
    filteredPhotos,
    selectedPhoto,
    selectedIndex,
    handleCategoryChange,
    handlePrevPhoto,
    handleNextPhoto,
    setSelectedIndex,
  } = gallery;

  const containerRef = useRef<HTMLDivElement>(null);

  // Transform workPhotos to DomeGallery format
  const domeImages = filteredPhotos.map(photo => ({
    src: photo.image,
    alt: photo.title
  }));

  return (
    <div className="min-h-screen bg-charcoal" ref={containerRef}>
      <Navbar />

      <main className="overflow-hidden">
        {/* Enhanced Hero Section */}
        <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 bg-charcoal relative overflow-hidden">
          {/* Animated background orbs */}
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          <div className="luxury-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Badge */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-6"
              >
                Interactive 3D Gallery
              </motion.span>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight"
              >
                Explore Our
                <br />
                <motion.span
                  className="text-primary font-extralight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Masterpieces
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-white/60 text-lg max-w-2xl leading-relaxed font-light mx-auto mb-8"
              >
                <span className="text-primary">Drag to rotate</span> • <span className="text-primary">Click to view details</span> • Experience our premium construction and design projects in an immersive 3D environment
              </motion.p>

              {/* Category Filters */}
              <motion.div
                className="flex flex-wrap justify-center gap-3 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-primary text-charcoal shadow-lg shadow-primary/20"
                        : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/10"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>

              {/* Photo Count */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6"
              >
                <span className="text-white/40 text-sm font-light tracking-wide">
                  {filteredPhotos.length} {filteredPhotos.length === 1 ? "project" : "projects"} available
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 3D Dome Gallery Section */}
        <section className="relative bg-charcoal">
          {/* Background gradients for depth */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          {/* Gallery Container */}
          <div className="relative z-10" style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
            <DomeGallery
              images={domeImages}
              fit={0.55}
              minRadius={750}
              maxVerticalRotationDeg={8}
              segments={34}
              dragDampening={0}
              grayscale={false}
              overlayBlurColor="#2A2A2A"
              imageBorderRadius="16px"
              openedImageBorderRadius="20px"
              openedImageWidth="600px"
              openedImageHeight="600px"
            />
          </div>

          {/* Instructions Overlay */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex items-center gap-6 bg-charcoal/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs">↔</span>
                </div>
                <span className="font-light">Drag to rotate</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xs">⊙</span>
                </div>
                <span className="font-light">Click to expand</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-20 bg-charcoal border-t border-white/5">
          <div className="luxury-container">
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center">
                <motion.p
                  className="text-4xl lg:text-5xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                >
                  {filteredPhotos.length}+
                </motion.p>
                <p className="text-white/60 text-sm font-light tracking-widest uppercase">Projects</p>
              </div>

              <div className="text-center">
                <motion.p
                  className="text-4xl lg:text-5xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                >
                  100%
                </motion.p>
                <p className="text-white/60 text-sm font-light tracking-widest uppercase">Quality</p>
              </div>

              <div className="text-center">
                <motion.p
                  className="text-4xl lg:text-5xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                >
                  15+
                </motion.p>
                <p className="text-white/60 text-sm font-light tracking-widest uppercase">Years</p>
              </div>

              <div className="text-center">
                <motion.p
                  className="text-4xl lg:text-5xl font-bold text-primary mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                >
                  500+
                </motion.p>
                <p className="text-white/60 text-sm font-light tracking-widest uppercase">Clients</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden border-t border-white/5">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="luxury-container relative z-10">
            <motion.div
              className="max-w-3xl text-center mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8 }}
              >
                Ready to Start Your <span className="text-primary">Project</span>?
              </motion.h2>

              <motion.p
                className="text-white/50 text-lg font-light mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Transform your vision into architectural excellence. Our team of experts is ready to deliver premium construction and design solutions tailored to your needs.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Button variant="gold" size="lg" asChild className="rounded-full px-8">
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button variant="goldOutline" size="lg" asChild className="rounded-full px-8">
                  <Link to="/projects">View All Projects</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Premium Lightbox - Fallback for non-3D interaction */}
      <AnimatePresence>
        {selectedPhoto && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-charcoal/98 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Previous Button */}
            {selectedIndex > 0 && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevPhoto();
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
            )}

            {/* Next Button */}
            {selectedIndex < filteredPhotos.length - 1 && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextPhoto();
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            )}

            {/* Image Container */}
            <motion.div
              key={selectedPhoto.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              />

              {/* Image Info */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl text-white font-light mb-3">
                  {selectedPhoto.title}
                </h3>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                    {selectedPhoto.category}
                  </span>
                  <div className="h-px w-4 bg-white/20" />
                  <span className="text-white/50 text-sm font-light">
                    {selectedPhoto.location}
                  </span>
                </div>
                <p className="text-white/40 text-xs mt-4 tracking-wider">
                  {selectedIndex + 1} OF {filteredPhotos.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default LibraryOfWork;