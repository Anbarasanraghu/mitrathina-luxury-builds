import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* =========================
   CATEGORIES (LOCATIONS)
========================= */
const categories = [
  "All",
  "Port Klang",
  "Rawang",
  "Subang airport",
  "Sunway Office",
  "Brickfields",
];

/* =========================
   PROJECT DATA (IMAGES ONLY)
   👉 ADD IMAGES LATER
========================= */
// Auto-import project images from `src/assets/<folder>/*`
const imagesModules = import.meta.glob(
  "../assets/*/*.{jpg,jpeg,png,webp}",
  { as: "url", eager: true }
) as Record<string, any>;

const folderMap: Record<string, string[]> = {};
Object.entries(imagesModules).forEach(([path, url]) => {
  // Only include valid string URLs
  if (typeof url !== "string") return;
  // path looks like "../assets/Port klang/filename.jpg"
  const parts = path.split("/");
  const folder = parts[2];
  folderMap[folder] = folderMap[folder] || [];
  folderMap[folder].push(url);
});

const folderToCategory: Record<string, string> = {
  "Port klang": "Port Klang",
  Rawang: "Rawang",
  "Subang airport": "Subang airport",
  "Sunway office": "Sunway Office",
  "Brickfields kl": "Brickfields",
};

const projects = Object.entries(folderToCategory).map(([folder, category], i) => ({
  id: i + 1,
  title: category,
  category,
  images: (folderMap[folder] || []).sort(),
}));

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="pt-32 pb-20 bg-charcoal">
          <div className="luxury-container">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-white/60 max-w-2xl">
              Explore our completed projects across key locations.
            </p>
          </div>
        </section>

        {/* FILTERS */}
        <section className="py-16 bg-cream">
          <div className="luxury-container">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                    activeCategory === cat
                      ? "bg-primary text-charcoal"
                      : "bg-white text-slate hover:bg-charcoal hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* GRID */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative h-72 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.images[0] ? (
                      <div
                        className="absolute inset-0 bg-center bg-cover transition-transform duration-500 hover:scale-105"
                        style={{ backgroundImage: `url('${project.images[0]}')` }}
                        aria-hidden
                      />
                    ) : (
                      <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                        <span className="text-slate-600">No image</span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute left-6 bottom-6">
                      <h3 className="text-white text-2xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm mt-1">
                        {project.images.length} photo{project.images.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      {/* IMAGE GALLERY LIGHTBOX */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 p-6 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.images.length === 0 && (
                <p className="text-white col-span-full text-center">
                  Add images for this project
                </p>
              )}

              {selectedProject.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Projects;
