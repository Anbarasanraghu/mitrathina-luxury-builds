import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";
import { useGallery } from "@/hooks/useGallery";
import { workPhotos, categories, locations } from "@/data/galleryData";
// Gallery Grid Component with Dynamic Layout
const ImpressionGallery = ({
  photos,
  onSelectPhoto,
}: {
  photos: any[];
  onSelectPhoto: (index: number) => void;
}) => {
  const getGridClass = (index: number) => {
    const patterns = [
      "lg:col-span-2 lg:row-span-2",
      "lg:col-span-1 lg:row-span-1",
      "lg:col-span-1 lg:row-span-1",
      "lg:col-span-1 lg:row-span-2",
      "lg:col-span-1 lg:row-span-1",
      "lg:col-span-2 lg:row-span-1",
      "lg:col-span-1 lg:row-span-1",
      "lg:col-span-1 lg:row-span-1",
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="w-full">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[280px] lg:auto-rows-[320px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className={`group relative overflow-hidden rounded-xl lg:rounded-2xl cursor-pointer ${getGridClass(index)}`}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: (index % 12) * 0.08,
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ y: -8 }}
            onClick={() => onSelectPhoto(index)}
          >
            <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-charcoal/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl lg:rounded-2xl" />

            <motion.div
              className="relative w-full h-full overflow-hidden"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <LazyImage
                src={photo.image}
                alt={photo.title}
                className="w-full h-full"
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent"
                initial={{ opacity: 0.4 }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="absolute inset-0 border-2 border-primary/0 rounded-xl lg:rounded-2xl"
                whileHover={{ borderColor: "rgba(212, 175, 55, 0.5)" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 flex flex-col justify-between p-4 lg:p-6 z-20"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <motion.span
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-primary/20 text-primary border border-primary/60 px-3 py-1.5 rounded-full backdrop-blur-md"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.3)" }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 bg-primary rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {photo.category}
                </motion.span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <motion.h3
                  className="text-white font-light text-base lg:text-lg mb-2 leading-tight"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  {photo.title}
                </motion.h3>

                <div className="flex items-center justify-between">
                  <motion.p
                    className="text-white/70 text-xs font-light tracking-wide"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {photo.location}
                  </motion.p>

                  <motion.div
                    className="flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    View
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-3 h-3" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-sm font-bold border border-white/20"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 12) * 0.08 + 0.2, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(212, 175, 55, 0.2)" }}
            >
              {index + 1}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-charcoal/60 text-sm font-light tracking-widest uppercase mb-6">
          Explore {photos.length} Premium Projects
        </p>
        <motion.div
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            Scroll to discover
            <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronLeft className="w-4 h-4 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const LibraryOfWork = () => {
  const gallery = useGallery({
    photos: workPhotos,
    initialCategory: "All",
    itemsPerPage: 12,
  });

  const {
    activeCategory,
    activeLocation,
    filteredPhotos,
    selectedPhoto,
    selectedIndex,
    handleCategoryChange,
    handleLocationChange,
    handleSearch,
    handleSelectPhoto,
    handlePrevPhoto,
    handleNextPhoto,
    setSelectedIndex,
  } = gallery;

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-cream" ref={containerRef}>
      <Navbar />

      <main className="overflow-hidden">
        {/* Enhanced Hero Section */}
        <section className="pt-32 pb-24 lg:pt-44 lg:pb-32 bg-charcoal relative overflow-hidden">
          {/* Animated background elements */}
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
              className="max-w-4xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-6 border-l-2 border-primary pl-3"
              >
                Curated Collection
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight"
              >
                Our Architectural
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

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-white/60 text-lg max-w-2xl leading-relaxed font-light"
              >
                A curated selection of premium construction, interior design, and renovation projects that exemplify our commitment to excellence and architectural innovation.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Premium Filter Section */}
        <section className="py-12 lg:py-16 bg-cream border-b border-slate/10">
          <div className="luxury-container">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Category Filters */}
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-2.5 rounded-none text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                      activeCategory === category
                        ? "bg-charcoal text-primary border-charcoal"
                        : "bg-transparent text-charcoal border-charcoal/20 hover:border-charcoal/50"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>

              {/* Photo Count */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-8 bg-charcoal/20" />
                <span className="text-charcoal/60 text-sm font-light tracking-wide">
                  {filteredPhotos.length} {filteredPhotos.length === 1 ? "project" : "projects"}
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Masonry Gallery Grid */}
        <section className="py-24 lg:py-40 bg-cream relative overflow-hidden">
          {/* Background Elements */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="luxury-container relative z-10">
            {/* Gallery Header with Stats */}
            <motion.div
              className="mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex-1">
                <motion.span
                  className="inline-block text-primary text-xs font-bold tracking-widest uppercase mb-6 border-l-2 border-primary pl-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Curated Collection
                </motion.span>

                <motion.h2
                  className="text-4xl lg:text-5xl font-light text-charcoal mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Premium <span className="text-primary">Projects</span>
                </motion.h2>

                <motion.p
                  className="text-charcoal/60 font-light max-w-xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Experience our finest architectural creations and design excellence across every project category
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                className="flex gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-center">
                  <motion.p
                    className="text-3xl lg:text-4xl font-bold text-primary"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                  >
                    {filteredPhotos.length}+
                  </motion.p>
                  <p className="text-charcoal/60 text-xs font-light tracking-widest uppercase">Projects</p>
                </div>

                <div className="w-px bg-charcoal/10" />

                <div className="text-center">
                  <motion.p
                    className="text-3xl lg:text-4xl font-bold text-primary"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  >
                    100%
                  </motion.p>
                  <p className="text-charcoal/60 text-xs font-light tracking-widest uppercase">Quality</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Impressive Gallery */}
            <ImpressionGallery photos={filteredPhotos} onSelectPhoto={handleSelectPhoto} />
          </div>
        </section>

        {/* Refined CTA Section */}
        <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
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
                Begin Your <span className="text-primary">Project</span> Today
              </motion.h2>

              <motion.p
                className="text-white/50 text-lg font-light mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Transform your vision into architectural excellence. Our team of experts is ready to deliver premium construction and design solutions.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Button variant="gold" size="lg" asChild className="rounded-none">
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
                <Button variant="goldOutline" size="lg" asChild className="rounded-none">
                  <Link to="/projects">Explore More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Premium Lightbox */}
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
            {/* Navigation Buttons */}
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
                className="w-full h-auto max-h-[90vh] object-contain"
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
