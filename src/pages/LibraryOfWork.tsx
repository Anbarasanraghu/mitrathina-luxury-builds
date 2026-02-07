import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight, ZoomIn, Grid3x3, Layers } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Import all your images here (keeping your existing imports)
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
  {
    id: 14,
    title: "Project Photo 1",
    category: "Construction",
    location: "Kuala Lumpur",
    image: photo1,
  },
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

// Animated Grid Gallery Component
const AnimatedGridGallery = ({ photos, onSelectPhoto }: { photos: any[]; onSelectPhoto: (index: number) => void }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4">
        {photos.map((photo, index) => {
          // Create dynamic sizes for visual interest
          const isLarge = index % 7 === 0;
          const isTall = index % 11 === 0;
          const isWide = index % 13 === 0;
          
          const gridClass = isLarge 
            ? "md:col-span-2 md:row-span-2" 
            : isTall 
            ? "md:row-span-2" 
            : isWide 
            ? "md:col-span-2" 
            : "";

          return (
            <motion.div
              key={photo.id}
              className={`relative group cursor-pointer overflow-hidden ${gridClass}`}
              style={{ 
                aspectRatio: isLarge ? "1" : isTall ? "1/2" : isWide ? "2/1" : "1" 
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: (index % 24) * 0.03,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onHoverStart={() => setHoveredId(photo.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => onSelectPhoto(index)}
            >
              {/* Image Container with Parallax Effect */}
              <motion.div 
                className="absolute inset-0 overflow-hidden bg-charcoal"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ 
                    boxShadow: "inset 0 0 0 0px rgba(212, 175, 55, 0)" 
                  }}
                  whileHover={{ 
                    boxShadow: "inset 0 0 0 3px rgba(212, 175, 55, 0.6)" 
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                {/* Top Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ 
                    opacity: hoveredId === photo.id ? 1 : 0,
                    y: hoveredId === photo.id ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-between items-start"
                >
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-primary/90 text-charcoal px-2 py-1 backdrop-blur-sm">
                    {photo.category}
                  </span>
                  
                  <motion.div
                    whileHover={{ rotate: 90, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ZoomIn className="w-4 h-4 text-white/80" />
                  </motion.div>
                </motion.div>

                {/* Bottom Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredId === photo.id ? 1 : 0,
                    y: hoveredId === photo.id ? 0 : 10
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <h3 className="text-white font-medium text-sm mb-1 line-clamp-2">
                    {photo.title}
                  </h3>
                  <p className="text-white/60 text-xs">{photo.location}</p>
                </motion.div>
              </div>

              {/* Number Badge */}
              <motion.div
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-charcoal/80 backdrop-blur-sm flex items-center justify-center z-20"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: (index % 24) * 0.03 + 0.2,
                  type: "spring",
                  stiffness: 400
                }}
                whileHover={{ scale: 1.2, backgroundColor: "rgba(212, 175, 55, 0.9)" }}
              >
                <span className="text-[10px] font-bold text-white">{index + 1}</span>
              </motion.div>

              {/* Shimmer Effect on Hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ 
                  x: hoveredId === photo.id ? "100%" : "-100%" 
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const LibraryOfWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for scroll
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const filteredPhotos = activeCategory === "All"
    ? workPhotos
    : workPhotos.filter((p) => p.category === activeCategory);

  const selectedPhoto = selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      <Navbar />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scaleProgress }}
      />

      <main className="overflow-hidden">
        {/* Hero Section with Animated Text */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal overflow-hidden">
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-32 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -30, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5
              }}
            />
          </div>

          <div className="luxury-container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Animated Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 mb-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Layers className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
                  Our Portfolio
                </span>
                <motion.div
                  className="w-12 h-px bg-primary/50"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>

              {/* Main Heading with Stagger Animation */}
              <div className="mb-8">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                >
                  Projects That
                  <motion.span
                    className="block text-primary mt-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Define Excellence
                  </motion.span>
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
              >
                Explore our comprehensive collection of premium construction, renovation, 
                and design projects that showcase our commitment to quality and innovation.
              </motion.p>

              {/* Animated Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex justify-center gap-12 mt-12"
              >
                {[
                  { label: "Projects", value: workPhotos.length },
                  { label: "Categories", value: categories.length - 1 },
                  { label: "Years Experience", value: "10+" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 1 + index * 0.1
                    }}
                    className="text-center"
                  >
                    <motion.div
                      className="text-3xl lg:text-4xl font-bold text-primary mb-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-white/60 text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* Filter Section with Pills */}
        <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg border-b border-slate/10 py-6 shadow-sm">
          <div className="luxury-container">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setSelectedIndex(null);
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-charcoal text-white"
                        : "bg-slate/5 text-charcoal/60 hover:bg-slate/10"
                    }`}
                  >
                    {activeCategory === category && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-charcoal rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </motion.button>
                ))}
              </div>

              {/* Project Count with Animation */}
              <motion.div
                key={filteredPhotos.length}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <Grid3x3 className="w-4 h-4 text-primary" />
                <span className="text-charcoal/60 text-sm font-medium">
                  <motion.span
                    key={filteredPhotos.length}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="inline-block font-bold text-charcoal"
                  >
                    {filteredPhotos.length}
                  </motion.span>
                  {" "}projects
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-cream/30">
          <div className="luxury-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedGridGallery 
                  photos={filteredPhotos} 
                  onSelectPhoto={setSelectedIndex} 
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="luxury-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Start Your
                  <span className="block text-primary mt-2">Dream Project?</span>
                </h2>
                
                <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                  Let's transform your vision into reality with our expert team 
                  and proven track record of excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="gold" size="lg" asChild className="rounded-full">
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="goldOutline" size="lg" asChild className="rounded-full">
                      <Link to="/projects">View All Projects</Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedIndex(null)}
              className="fixed top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Navigation Buttons */}
            {selectedIndex > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="fixed left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            )}

            {selectedIndex < filteredPhotos.length - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="fixed right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            )}

            {/* Image Container */}
            <div className="fixed inset-0 flex items-center justify-center p-4 md:p-12">
              <motion.div
                key={selectedPhoto.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <motion.img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                  layoutId={`image-${selectedPhoto.id}`}
                />

                {/* Info Panel */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 text-center"
                >
                  <div className="inline-flex items-center gap-3 mb-3">
                    <span className="text-primary text-xs font-bold tracking-widest uppercase px-3 py-1 bg-primary/10 rounded-full">
                      {selectedPhoto.category}
                    </span>
                    <span className="text-white/40 text-xs">•</span>
                    <span className="text-white/60 text-sm">{selectedPhoto.location}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {selectedPhoto.title}
                  </h3>

                  <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
                    <span>{selectedIndex + 1}</span>
                    <span>/</span>
                    <span>{filteredPhotos.length}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Keyboard Hints */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 text-white/40 text-xs"
            >
              <span>← → Navigate</span>
              <span>•</span>
              <span>ESC Close</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default LibraryOfWork;