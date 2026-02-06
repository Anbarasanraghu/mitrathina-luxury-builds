import { useState, useCallback, useMemo } from "react";
import { GalleryPhoto } from "@/data/galleryData";

export interface UseGalleryOptions {
  photos: GalleryPhoto[];
  initialCategory?: string;
  itemsPerPage?: number;
}

export const useGallery = ({
  photos,
  initialCategory = "All",
  itemsPerPage = 12,
}: UseGalleryOptions) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter photos based on active filters
  const filteredPhotos = useMemo(() => {
    let filtered = photos;

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Filter by location
    if (activeLocation) {
      filtered = filtered.filter((p) => p.location === activeLocation);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [photos, activeCategory, activeLocation, searchQuery]);

  // Get featured photos
  const featuredPhotos = useMemo(
    () => filteredPhotos.filter((p) => p.featured),
    [filteredPhotos]
  );

  // Paginate photos
  const paginatedPhotos = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPhotos.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPhotos, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);

  // Navigation handlers
  const handleNextPage = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    setSelectedIndex(null);
  }, [totalPages]);

  const handlePrevPage = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    setSelectedIndex(null);
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
    setSelectedIndex(null);
    setCurrentPage(1);
    setActiveLocation(null);
  }, []);

  const handleLocationChange = useCallback((location: string | null) => {
    setActiveLocation(location);
    setSelectedIndex(null);
    setCurrentPage(1);
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setSelectedIndex(null);
  }, []);

  const handleSelectPhoto = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handlePrevPhoto = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex]);

  const handleNextPhoto = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < filteredPhotos.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex, filteredPhotos.length]);

  const selectedPhoto =
    selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

  return {
    // State
    activeCategory,
    activeLocation,
    selectedIndex,
    searchQuery,
    currentPage,
    // Data
    filteredPhotos,
    paginatedPhotos,
    featuredPhotos,
    selectedPhoto,
    totalPages,
    // Handlers
    handleCategoryChange,
    handleLocationChange,
    handleSearch,
    handleSelectPhoto,
    handlePrevPhoto,
    handleNextPhoto,
    handleNextPage,
    handlePrevPage,
    setSelectedIndex,
  };
};

export type UseGalleryReturn = ReturnType<typeof useGallery>;
