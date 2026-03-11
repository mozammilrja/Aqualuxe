"use client";

import { useEffect, useState, useCallback } from "react";

// Preload images for faster rendering
export function useImagePreload(imageSrcs: string[]): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imageSrcs.length === 0) {
      setLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageSrcs.length;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setLoaded(true);
      }
    };

    imageSrcs.forEach((src) => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Count failed images as loaded to prevent hanging
      img.src = src;
    });

    return () => {
      loadedCount = 0;
    };
  }, [imageSrcs]);

  return loaded;
}

// In-memory image cache
const imageCache = new Map<string, string>();

export function getCachedImage(src: string): string {
  return imageCache.get(src) || src;
}

export function setCachedImage(src: string, blobUrl: string): void {
  imageCache.set(src, blobUrl);
}

// Preload and cache images with blob URLs
export async function preloadAndCacheImage(src: string): Promise<string> {
  if (imageCache.has(src)) {
    return imageCache.get(src)!;
  }

  try {
    const response = await fetch(src);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    imageCache.set(src, blobUrl);
    return blobUrl;
  } catch (error) {
    console.warn("Failed to cache image:", src);
    return src;
  }
}

// Hook for lazy loading images with intersection observer
export function useLazyImage(
  src: string,
  options: { threshold?: number; rootMargin?: string } = {}
): {
  ref: React.RefObject<HTMLElement | null>;
  isVisible: boolean;
  imageSrc: string;
} {
  const [isVisible, setIsVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const ref = { current: null as HTMLElement | null };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setImageSrc(src);
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "100px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [src, options.threshold, options.rootMargin]);

  return { ref, isVisible, imageSrc };
}

// Preload critical resources
export function preloadCriticalAssets(): void {
  if (typeof window === "undefined") return;

  // Preconnect to external domains
  const preconnectDomains = [
    "https://images.unsplash.com",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com",
  ];

  preconnectDomains.forEach((domain) => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = domain;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  });
}

// DNS prefetch for faster external resource loading
export function dnsPrefetch(domains: string[]): void {
  if (typeof window === "undefined") return;

  domains.forEach((domain) => {
    const link = document.createElement("link");
    link.rel = "dns-prefetch";
    link.href = domain;
    document.head.appendChild(link);
  });
}
