import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Shield, CheckCircle, X, Download, FileText } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import cidbCertificate from "@/assets/certificates/cidb-certificate.jpg";
import mofCertificate from "@/assets/certificates/mof-certificate.jpg";
import scoreLetter from "@/assets/certificates/score-letter.jpg";
import scoreCertificate from "@/assets/certificates/score-certificate.jpg";

const certificates = [
  {
    id: 1,
    title: "CIDB Registration Certificate",
    issuer: "Lembaga Pembangunan Industri Pembinaan Malaysia (CIDB)",
    registrationNo: "0120230816-WP123029",
    validFrom: "17/06/2024",
    validUntil: "-",
    grade: "G5",
    categories: ["B04 - Building Construction", "CE21 - Civil Engineering", "M15 - Mechanical"],
    description: "Official registration certificate from CIDB Malaysia confirming Mitrathina Builders as a registered Grade G5 contractor for building construction, civil engineering, and mechanical works.",
    image: cidbCertificate,
    icon: Shield,
  },
  {
    id: 2,
    title: "Ministry of Finance (MOF) Certificate",
    issuer: "Kementerian Kewangan Malaysia",
    registrationNo: "357-0002367005",
    validFrom: "22/09/2023",
    validUntil: "21/09/2026",
    grade: "Registered",
    categories: ["Professional Personnel Services", "Labour Services"],
    description: "Certificate of company registration with the Ministry of Finance Malaysia for government procurement in supply and services sectors.",
    image: mofCertificate,
    icon: FileText,
  },
  {
    id: 3,
    title: "SCORE Rating Certificate",
    issuer: "CIDB Malaysia",
    registrationNo: "SD148987",
    validFrom: "08/08/2025",
    validUntil: "07/08/2027",
    grade: "2 Star",
    categories: ["Management Capability", "Technical Capability"],
    description: "SCORE (Contractor Capability and Capacity Evaluation) certificate confirming satisfactory management and technical capabilities with a 2-star rating.",
    image: scoreCertificate,
    icon: Award,
  },
  {
    id: 4,
    title: "SCORE Approval Letter",
    issuer: "CIDB Malaysia",
    registrationNo: "WS012025080800148987",
    validFrom: "08/08/2025",
    validUntil: "-",
    grade: "2 Star",
    categories: ["15 CCD Points"],
    description: "Official approval letter from CIDB confirming the SCORE evaluation results and 2-star rating achievement for contractor capability assessment.",
    image: scoreLetter,
    icon: CheckCircle,
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

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
                Our Credentials
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Certifications &
                <br />
                <span className="text-primary">Accreditations</span>
              </h1>
              <p className="text-white/70 text-lg">
                Our certifications demonstrate our commitment to quality, professionalism, 
                and compliance with Malaysian construction industry standards.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-cream border-b border-slate-light/20">
          <div className="luxury-container">
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
              {[
                { label: "CIDB G5 Registered", icon: Shield },
                { label: "MOF Certified", icon: FileText },
                { label: "SCORE 2-Star Rated", icon: Award },
              ].map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <badge.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-charcoal font-semibold">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="luxury-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Our Official Certifications
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Click on any certificate to view full details and verification information
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain bg-slate-light/10 p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-primary text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                        {cert.grade}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <cert.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-charcoal mb-1 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-slate text-sm mb-3">{cert.issuer}</p>
                        <div className="flex flex-wrap gap-2">
                          {cert.categories.slice(0, 2).map((cat) => (
                            <span
                              key={cat}
                              className="text-xs bg-cream px-2 py-1 rounded text-slate"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-light/20 flex justify-between text-sm">
                      <span className="text-slate-light">Valid: {cert.validFrom} - {cert.validUntil}</span>
                      <span className="text-primary font-medium">View Details →</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Certifications Matter */}
        <section className="py-20 lg:py-28 bg-charcoal">
          <div className="luxury-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                  Why It Matters
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Building Trust Through
                  <br />
                  <span className="text-primary">Verified Excellence</span>
                </h2>
                <p className="text-white/70 mb-8">
                  Our certifications aren't just badges—they represent our commitment to 
                  maintaining the highest standards in construction quality, safety, and 
                  professional conduct required by Malaysian regulatory bodies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { label: "Quality Assurance", desc: "Certified processes and standards" },
                  { label: "Legal Compliance", desc: "Full regulatory adherence" },
                  { label: "Professional Staff", desc: "Accredited skilled workers" },
                  { label: "Financial Stability", desc: "Government-verified credentials" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="bg-charcoal-light p-6 rounded-lg border border-primary/20"
                  >
                    <CheckCircle className="w-8 h-8 text-primary mb-3" />
                    <h4 className="text-white font-semibold mb-1">{item.label}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Certificate Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-xl overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-charcoal/80 rounded-full flex items-center justify-center text-white hover:bg-charcoal transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="bg-slate-light/10 p-8 flex items-center justify-center">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[500px] object-contain rounded-lg shadow-lg"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <selectedCert.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="bg-primary text-charcoal px-3 py-1 rounded-full text-sm font-semibold">
                      {selectedCert.grade}
                    </span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-2">
                    {selectedCert.title}
                  </h2>
                  <p className="text-slate mb-6">{selectedCert.issuer}</p>

                  <p className="text-slate-light mb-6">{selectedCert.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between py-2 border-b border-slate-light/20">
                      <span className="text-slate-light">Registration No.</span>
                      <span className="text-charcoal font-medium">{selectedCert.registrationNo}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-light/20">
                      <span className="text-slate-light">Valid From</span>
                      <span className="text-charcoal font-medium">{selectedCert.validFrom}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-light/20">
                      <span className="text-slate-light">Valid Until</span>
                      <span className="text-charcoal font-medium">{selectedCert.validUntil}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-charcoal mb-3">Categories / Scope:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.categories.map((cat) => (
                        <span
                          key={cat}
                          className="text-sm bg-cream px-3 py-1 rounded-full text-slate"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Verified & Active Certificate</span>
                  </div>
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

export default Certifications;
