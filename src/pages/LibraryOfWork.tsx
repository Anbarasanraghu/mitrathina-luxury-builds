import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// import projectResidential from "@/assets/project-residential.jpg";
// import projectCommercial from "@/assets/project-commercial.jpg";
// import projectInterior from "@/assets/project-interior.jpg";

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

// Additional photos
import photo1 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.19 PM (1).jpeg";
// import photo2 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.19 PM.jpeg";
import photo3 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.20 PM (1).jpeg";
import photo4 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.20 PM (2).jpeg";
import photo5 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.20 PM.jpeg";
import photo6 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.21 PM (1).jpeg";
import photo7 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.21 PM (2).jpeg";
import photo8 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.21 PM.jpeg";
import photo9 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.22 PM (1).jpeg";
import photo10 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.22 PM (2).jpeg";
import photo11 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.22 PM (3).jpeg";
import photo12 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.22 PM.jpeg";
import photo13 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.23 PM (1).jpeg";
import photo14 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.23 PM (2).jpeg";
import photo15 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.23 PM.jpeg";
import photo16 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.24 PM (1).jpeg";
// import photo17 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.24 PM (2).jpeg";
// import photo18 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.24 PM (3).jpeg";
import photo19 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.24 PM.jpeg";
import photo20 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.25 PM (1).jpeg";
import photo21 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.25 PM (2).jpeg";
import photo22 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.25 PM (3).jpeg";
import photo23 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.25 PM.jpeg";
import photo24 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.26 PM (1).jpeg";
import photo25 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.26 PM.jpeg";
import photo26 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.27 PM (1).jpeg";
import photo27 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.27 PM (2).jpeg";
import photo28 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.27 PM.jpeg";
import photo29 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.28 PM (1).jpeg";
import photo30 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.28 PM (2).jpeg";
import photo31 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.28 PM.jpeg";
import photo32 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.29 PM (1).jpeg";
import photo33 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.29 PM (2).jpeg";
import photo34 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.29 PM (3).jpeg";
import photo35 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.29 PM.jpeg";
import photo36 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.30 PM (1).jpeg";
import photo37 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.30 PM (2).jpeg";
import photo38 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.30 PM.jpeg";
import photo39 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.31 PM (1).jpeg";
import photo40 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.31 PM (2).jpeg";
import photo41 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.31 PM (3).jpeg";
import photo42 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.31 PM.jpeg";
import photo43 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.32 PM (1).jpeg";
import photo44 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.32 PM (2).jpeg";
import photo45 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.32 PM.jpeg";
import photo46 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.33 PM (1).jpeg";
import photo47 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.33 PM (2).jpeg";
// import photo48 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.33 PM (3).jpeg";
import photo49 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.33 PM.jpeg";
import photo50 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.34 PM (1).jpeg";
import photo51 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.34 PM (2).jpeg";
import photo52 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.34 PM.jpeg";
import photo53 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.35 PM (1).jpeg";
import photo54 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.35 PM (2).jpeg";
import photo55 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.35 PM.jpeg";
import photo56 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.36 PM (1).jpeg";
import photo57 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.36 PM (2).jpeg";
import photo58 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.36 PM (3).jpeg";
import photo59 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.36 PM.jpeg";
import photo60 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.37 PM (1).jpeg";
import photo61 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.37 PM (2).jpeg";
import photo62 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.37 PM.jpeg";
import photo63 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.38 PM (1).jpeg";
import photo64 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.38 PM (2).jpeg";
import photo65 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.38 PM.jpeg";
import photo66 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.39 PM (1).jpeg";
import photo67 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.39 PM (2).jpeg";
import photo68 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.39 PM (3).jpeg";
import photo69 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.39 PM.jpeg";
import photo70 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.40 PM (1).jpeg";
import photo71 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.40 PM (2).jpeg";
import photo72 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.40 PM.jpeg";
import photo73 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.41 PM (1).jpeg";
import photo74 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.41 PM (2).jpeg";
import photo75 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.41 PM.jpeg";
import photo76 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.42 PM (1).jpeg";
import photo77 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.42 PM (2).jpeg";
import photo78 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.42 PM (3).jpeg";
import photo79 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.42 PM.jpeg";
import photo80 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.43 PM (1).jpeg";
import photo81 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.43 PM (2).jpeg";
import photo82 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.43 PM.jpeg";
import photo83 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.44 PM (1).jpeg";
import photo84 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.44 PM (2).jpeg";
import photo85 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.44 PM (3).jpeg";
import photo86 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.44 PM.jpeg";
import photo87 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.45 PM (1).jpeg";
import photo88 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.45 PM (2).jpeg";
import photo89 from "@/assets/library/WhatsApp Image 2026-01-17 at 4.34.45 PM.jpeg";

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
  // {
  //   id: 11,
  //   title: "Luxury Residential Project",
  //   category: "Construction",
  //   location: "Selangor",
  //   image: projectResidential,
  // },
  // {
  //   id: 12,
  //   title: "Commercial Building",
  //   category: "Construction",
  //   location: "Kuala Lumpur",
  //   image: projectCommercial,
  // },
  // {
  //   id: 13,
  //   title: "Interior Design Showcase",
  //   category: "Renovation",
  //   location: "Penang",
  //   image: projectInterior,
  // },
  {
    id: 14,
    title: "Project Photo 1",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo1,
  },
  // {
  //   id: 15,
  //   title: "Project Photo 2",
  //   category: "Construction",
  //   location: "Kuala Lumpur",
  //   image: photo2,
  // },
  {
    id: 16,
    title: "Project Photo 3",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo3,
  },
  {
    id: 17,
    title: "Project Photo 4",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo4,
  },
  {
    id: 18,
    title: "Project Photo 5",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo5,
  },
  {
    id: 19,
    title: "Project Photo 6",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo6,
  },
  {
    id: 20,
    title: "Project Photo 7",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo7,
  },
  {
    id: 21,
    title: "Project Photo 8",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo8,
  },
  {
    id: 22,
    title: "Project Photo 9",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo9,
  },
  {
    id: 23,
    title: "Project Photo 10",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo10,
  },
  {
    id: 24,
    title: "Project Photo 11",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo11,
  },
  {
    id: 25,
    title: "Project Photo 12",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo12,
  },
  {
    id: 26,
    title: "Project Photo 13",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo13,
  },
  {
    id: 27,
    title: "Project Photo 14",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo14,
  },
  {
    id: 28,
    title: "Project Photo 15",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo15,
  },
  {
    id: 29,
    title: "Project Photo 16",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo16,
  },
  // {
  //   id: 30,
  //   title: "Project Photo 17",
  //   category: "Renovation",
  //   location: "Kuala Lumpur",
  //   image: photo17,
  // },
  // {
  //   id: 31,
  //   title: "Project Photo 18",
  //   category: "Construction",
  //   location: "Kuala Lumpur",
  //   image: photo18,
  // },
  {
    id: 32,
    title: "Project Photo 19",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo19,
  },
  {
    id: 33,
    title: "Project Photo 20",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo20,
  },
  {
    id: 34,
    title: "Project Photo 21",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo21,
  },
  {
    id: 35,
    title: "Project Photo 22",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo22,
  },
  {
    id: 36,
    title: "Project Photo 23",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo23,
  },
  {
    id: 37,
    title: "Project Photo 24",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo24,
  },
  {
    id: 38,
    title: "Project Photo 25",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo25,
  },
  {
    id: 39,
    title: "Project Photo 26",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo26,
  },
  {
    id: 40,
    title: "Project Photo 27",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo27,
  },
  {
    id: 41,
    title: "Project Photo 28",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo28,
  },
  {
    id: 42,
    title: "Project Photo 29",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo29,
  },
  {
    id: 43,
    title: "Project Photo 30",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo30,
  },
  {
    id: 44,
    title: "Project Photo 31",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo31,
  },
  {
    id: 45,
    title: "Project Photo 32",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo32,
  },
  {
    id: 46,
    title: "Project Photo 33",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo33,
  },
  {
    id: 47,
    title: "Project Photo 34",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo34,
  },
  {
    id: 48,
    title: "Project Photo 35",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo35,
  },
  {
    id: 49,
    title: "Project Photo 36",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo36,
  },
  {
    id: 50,
    title: "Project Photo 37",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo37,
  },
  {
    id: 51,
    title: "Project Photo 38",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo38,
  },
  {
    id: 52,
    title: "Project Photo 39",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo39,
  },
  {
    id: 53,
    title: "Project Photo 40",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo40,
  },
  {
    id: 54,
    title: "Project Photo 41",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo41,
  },
  {
    id: 55,
    title: "Project Photo 42",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo42,
  },
  {
    id: 56,
    title: "Project Photo 43",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo43,
  },
  {
    id: 57,
    title: "Project Photo 44",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo44,
  },
  {
    id: 58,
    title: "Project Photo 45",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo45,
  },
  {
    id: 59,
    title: "Project Photo 46",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo46,
  },
  {
    id: 60,
    title: "Project Photo 47",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo47,
  },
  // {
  //   id: 61,
  //   title: "Project Photo 48",
  //   category: "Construction",
  //   location: "Kuala Lumpur",
  //   image: photo48,
  // },
  {
    id: 62,
    title: "Project Photo 49",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo49,
  },
  {
    id: 63,
    title: "Project Photo 50",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo50,
  },
  {
    id: 64,
    title: "Project Photo 51",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo51,
  },
  {
    id: 65,
    title: "Project Photo 52",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo52,
  },
  {
    id: 66,
    title: "Project Photo 53",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo53,
  },
  {
    id: 67,
    title: "Project Photo 54",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo54,
  },
  {
    id: 68,
    title: "Project Photo 55",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo55,
  },
  {
    id: 69,
    title: "Project Photo 56",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo56,
  },
  {
    id: 70,
    title: "Project Photo 57",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo57,
  },
  {
    id: 71,
    title: "Project Photo 58",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo58,
  },
  {
    id: 72,
    title: "Project Photo 59",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo59,
  },
  {
    id: 73,
    title: "Project Photo 60",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo60,
  },
  {
    id: 74,
    title: "Project Photo 61",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo61,
  },
  {
    id: 75,
    title: "Project Photo 62",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo62,
  },
  {
    id: 76,
    title: "Project Photo 63",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo63,
  },
  {
    id: 77,
    title: "Project Photo 64",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo64,
  },
  {
    id: 78,
    title: "Project Photo 65",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo65,
  },
  {
    id: 79,
    title: "Project Photo 66",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo66,
  },
  {
    id: 80,
    title: "Project Photo 67",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo67,
  },
  {
    id: 81,
    title: "Project Photo 68",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo68,
  },
  {
    id: 82,
    title: "Project Photo 69",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo69,
  },
  {
    id: 83,
    title: "Project Photo 70",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo70,
  },
  {
    id: 84,
    title: "Project Photo 71",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo71,
  },
  {
    id: 85,
    title: "Project Photo 72",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo72,
  },
  {
    id: 86,
    title: "Project Photo 73",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo73,
  },
  {
    id: 87,
    title: "Project Photo 74",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo74,
  },
  {
    id: 88,
    title: "Project Photo 75",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo75,
  },
  {
    id: 89,
    title: "Project Photo 76",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo76,
  },
  {
    id: 90,
    title: "Project Photo 77",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo77,
  },
  {
    id: 91,
    title: "Project Photo 78",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo78,
  },
  {
    id: 92,
    title: "Project Photo 79",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo79,
  },
  {
    id: 93,
    title: "Project Photo 80",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo80,
  },
  {
    id: 94,
    title: "Project Photo 81",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo81,
  },
  {
    id: 95,
    title: "Project Photo 82",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo82,
  },
  {
    id: 96,
    title: "Project Photo 83",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo83,
  },
  {
    id: 97,
    title: "Project Photo 84",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo84,
  },
  {
    id: 98,
    title: "Project Photo 85",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo85,
  },
  {
    id: 99,
    title: "Project Photo 86",
    category: "Site Progress",
    location: "Kuala Lumpur",
    image: photo86,
  },
  {
    id: 100,
    title: "Project Photo 87",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo87,
  },
  {
    id: 101,
    title: "Project Photo 88",
    category: "Renovation",
    location: "Kuala Lumpur",
    image: photo88,
  },
  {
    id: 102,
    title: "Project Photo 89",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo89,
  },
];

// Impressive Premium Gallery Component
const ImpressionGallery = ({ photos, onSelectPhoto }: { photos: any[]; onSelectPhoto: (index: number) => void }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Create dynamic grid layout with varying sizes
  const getGridClass = (index: number) => {
    const patterns = [
      "lg:col-span-2 lg:row-span-2", // Large
      "lg:col-span-1 lg:row-span-1", // Normal
      "lg:col-span-1 lg:row-span-1", // Normal
      "lg:col-span-1 lg:row-span-2", // Tall
      "lg:col-span-1 lg:row-span-1", // Normal
      "lg:col-span-2 lg:row-span-1", // Wide
      "lg:col-span-1 lg:row-span-1", // Normal
      "lg:col-span-1 lg:row-span-1", // Normal
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="w-full">
      {/* Gallery Grid with Masonry Layout */}
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
            {/* Background Blur */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-charcoal/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl lg:rounded-2xl"
            />

            {/* Image */}
            <motion.div
              className="relative w-full h-full overflow-hidden"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover"
              />

              {/* Dark Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent"
                initial={{ opacity: 0.4 }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.4 }}
              />

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/0 rounded-xl lg:rounded-2xl"
                whileHover={{ borderColor: "rgba(212, 175, 55, 0.5)" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Content Container */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-between p-4 lg:p-6 z-20"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Top Content */}
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

              {/* Bottom Content */}
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

            {/* Number Badge */}
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

      {/* Floating CTA */}
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

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
                    onClick={() => {
                      setActiveCategory(category);
                      setSelectedIndex(null);
                    }}
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
            <ImpressionGallery photos={filteredPhotos} onSelectPhoto={setSelectedIndex} />
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
                  handlePrev();
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
                  handleNext();
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
