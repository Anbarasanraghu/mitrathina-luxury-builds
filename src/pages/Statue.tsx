import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Sparkles, Mountain, Palette, Award, Users, Eye, X, Trash2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type GalleryImage = {
  id: string;
  src: string;
  place: string;
  name: string;
  isUploaded: boolean;
};

const UPLOADED_GALLERY_STORAGE_KEY = "statue-gallery-uploads";
const MAX_STORAGE_SIZE = 5 * 1024 * 1024; // 5MB max for uploads (localStorage limit)
const MAX_UPLOADS = 200; // Keep only last 200 uploads

// Helper to estimate string size in bytes
const estimateSize = (str: string): number => new Blob([str]).size;

// Safely save to localStorage with size management
const saveUploadsToStorage = (uploads: GalleryImage[]): void => {
  if (typeof window === "undefined") return;

  try {
    // Keep only recent uploads if too many
    const limitedUploads = uploads.slice(0, MAX_UPLOADS);
    const serialized = JSON.stringify(limitedUploads);
    const size = estimateSize(serialized);

    if (size > MAX_STORAGE_SIZE) {
      // Remove oldest uploads until it fits
      let trimmed = [...limitedUploads];
      while (trimmed.length > 1 && estimateSize(JSON.stringify(trimmed)) > MAX_STORAGE_SIZE) {
        trimmed.pop();
      }
      localStorage.setItem(UPLOADED_GALLERY_STORAGE_KEY, JSON.stringify(trimmed));
    } else {
      localStorage.setItem(UPLOADED_GALLERY_STORAGE_KEY, serialized);
    }
  } catch (error) {
    console.warn("Storage limit exceeded, removing oldest uploads:", error);
    // Silent fail - don't break the app
  }
};

const statueImageModules = import.meta.glob(
  "../assets/statue/**/*.{jpg,jpeg,png,webp}",
  { as: "url", eager: true }
) as Record<string, string>;

const statueGallery = Object.entries(statueImageModules)
  .map(([path, url]) => {
    const segments = path.split("/");
    const place = segments[segments.length - 2];
    return { id: path, src: url, place };
  })
  .sort((a, b) => a.place.localeCompare(b.place) || a.src.localeCompare(b.src));

const statuePlaces = [
  "Seremban",
  "Klang",
  //"Rawang",
  "BatuCave",
  "Kuantan",
  "Bahau",
 // "Kluang",
  //"Ipoh",
  //"Puchong",
  "Tanga",
];

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
  const [selectedPlace, setSelectedPlace] = useState("Seremban");
  const [activeFolder, setActiveFolder] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(() => {
    let uploadedImages: GalleryImage[] = [];

    if (typeof window !== "undefined") {
      const savedUploads = localStorage.getItem(UPLOADED_GALLERY_STORAGE_KEY);
      if (savedUploads) {
        try {
          const parsed = JSON.parse(savedUploads) as GalleryImage[];
          uploadedImages = Array.isArray(parsed)
            ? parsed.filter(
                (item) =>
                  item &&
                  typeof item.id === "string" &&
                  typeof item.src === "string" &&
                  item.src.startsWith("data:") &&
                  typeof item.place === "string" &&
                  typeof item.name === "string" &&
                  item.isUploaded === true
              )
            : [];
        } catch {
          uploadedImages = [];
        }
      }
    }

    const importedImages = statueGallery.map((item) => ({
      ...item,
      name: item.src.split("/").pop() || "Statue image",
      isUploaded: false,
    }));

    return [...uploadedImages, ...importedImages];
  });

  const galleryByPlace = useMemo(
    () =>
      statuePlaces.map((place) => ({
        place,
        images: galleryImages.filter((image) => image.place === place),
      })),
    [galleryImages]
  );

  const activeImages = activeFolder
    ? galleryImages.filter((image) => image.place === activeFolder)
    : [];

  useEffect(() => {
    if (activeFolder) {
      setCurrentImageIndex(0);
    }
  }, [activeFolder]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const uploadedImages = galleryImages.filter((image) => image.isUploaded);
    saveUploadsToStorage(uploadedImages);
  }, [galleryImages]);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    if (!files.length) return;

    const fileToDataUrl = (file: File) =>
      new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      });

    const newImages = await Promise.all(
      files.map(async (file, index) => ({
        id: `uploaded-${Date.now()}-${file.name}-${index}`,
        src: await fileToDataUrl(file),
        place: selectedPlace,
        name: file.name,
        isUploaded: true,
      }))
    );

    setGalleryImages((current) => [...newImages, ...current]);
    event.target.value = "";
  };

  const handleDeleteImage = (imageId: string) => {
    setGalleryImages((current) => current.filter((img) => img.id !== imageId));
  };

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

      {/* Statue Gallery */}
      <section className="py-24 relative bg-white/5 backdrop-blur">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Statue <span className="text-primary">Gallery</span>
            </h2>
          </motion.div>

         {/* Hide temporarily - Add Statue Images section
          <div className="grid gap-8 lg:grid-cols-1 mb-12">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Add Statue Images</h3>
              <label className="block mb-4 text-white/80">Location</label>
              <select
                value={selectedPlace}
                onChange={(event) => setSelectedPlace(event.target.value)}
                className="w-full rounded-2xl border border-white/20 bg-charcoal px-4 py-3 text-white"
              >
                {statuePlaces.map((place) => (
                  <option key={place} value={place}>
                    {place}
                  </option>
                ))}
              </select>

              <label className="mt-6 block text-white/80">Choose images</label>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                onChange={handleImageUpload}
                className="mt-2 w-full rounded-2xl border border-white/20 bg-charcoal px-4 py-3 text-white"
              />

              <p className="text-sm text-white/60 mt-4">
                Uploaded images are added to the gallery and shown in the folder overlay.
              </p>
            </div>
          </div>
          */ }
          

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-10">
            {galleryByPlace.map((folder) => (
              <button
                key={folder.place}
                type="button"
                onClick={() => setActiveFolder(folder.place)}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-primary"
              >
                <div className="h-52 overflow-hidden rounded-3xl bg-slate-950">
                  {folder.images[0] ? (
                    <img
                      src={folder.images[0].src}
                      alt={folder.place}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-white/60">
                      No images yet
                    </div>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xl font-semibold text-white">{folder.place}</p>
                    <p className="text-sm text-white/70">{folder.images.length} photo{folder.images.length !== 1 ? "s" : ""}</p>
                  </div>
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                    Open
                  </span>
                </div>
              </button>
            ))}
          </div>

          {activeFolder ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 py-6">
              <div className="relative w-full max-w-6xl">
                <button
                  type="button"
                  onClick={() => setActiveFolder(null)}
                  className="absolute right-4 top-4 rounded-full bg-black/70 p-3 text-white transition hover:bg-primary"
                >
                  <X className="h-5 w-5" />
                </button>
                {activeImages[currentImageIndex]?.isUploaded && (
                  <button
                    type="button"
                    onClick={() => handleDeleteImage(activeImages[currentImageIndex].id)}
                    className="absolute right-16 top-4 rounded-full bg-red-600/70 p-3 text-white transition hover:bg-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                )}
                {activeImages.length ? (
                  <div className="rounded-3xl bg-slate-950 p-6 shadow-2xl">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase text-white/70">{activeFolder}</p>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <span>{currentImageIndex + 1}</span>
                        <span>/</span>
                        <span>{activeImages.length}</span>
                      </div>
                    </div>
                    <div className="relative overflow-hidden rounded-3xl bg-black">
                      <img
                        src={activeImages[currentImageIndex].src}
                        alt={`Statue in ${activeFolder}`}
                        className="h-[80vh] w-full object-contain"
                      />

                      {activeImages.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? activeImages.length - 1 : prev - 1))}
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-primary"
                          >
                            ‹
                          </button>
                          <button
                            type="button"
                            onClick={() => setCurrentImageIndex((prev) => (prev === activeImages.length - 1 ? 0 : prev + 1))}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-primary"
                          >
                            ›
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-3xl bg-slate-950 p-12 text-center text-white/70 shadow-2xl">
                    <p className="text-xl font-semibold text-white mb-2">{activeFolder}</p>
                    <p>No images in this folder yet. Upload some to view them here.</p>
                  </div>
                )}
              </div>
            </div>
          ) : null}
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
