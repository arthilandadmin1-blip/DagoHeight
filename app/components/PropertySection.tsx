"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type PropertyImage = {
  id: number;
  image_url: string;
  sort_order: number;
};

type Property = {
  id: number;
  name: string;
  location: string | null;
  price: string | null;
  description: string | null;
  land_area: string | null;
  building_area: string | null;
  floors: string | null;
  bedrooms: string | null;
  bathrooms: string | null;
  whatsapp: string | null;
  status: string | null;
  featured: boolean | null;
  property_images: PropertyImage[];
};

export default function PropertySection() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  // Menyimpan posisi foto untuk setiap property
  const [currentImages, setCurrentImages] = useState<Record<number, number>>(
    {}
  );

  useEffect(() => {
    async function getProperties() {
      const { data, error } = await supabase
        .from("properties")
        .select(`
          *,
          property_images (
            id,
            image_url,
            sort_order
          )
        `)
        .order("featured", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading properties:", error);
        setLoading(false);
        return;
      }

      const formattedProperties = (data || []).map((property) => ({
        ...property,
        property_images: [...(property.property_images || [])].sort(
          (a, b) => a.sort_order - b.sort_order
        ),
      }));

      setProperties(formattedProperties);
      setLoading(false);
    }

    getProperties();
  }, []);

  // Previous image
  function previousImage(propertyId: number, imageCount: number) {
    setCurrentImages((prev) => {
      const currentIndex = prev[propertyId] || 0;

      return {
        ...prev,
        [propertyId]:
          currentIndex === 0 ? imageCount - 1 : currentIndex - 1,
      };
    });
  }

  // Next image
  function nextImage(propertyId: number, imageCount: number) {
    setCurrentImages((prev) => {
      const currentIndex = prev[propertyId] || 0;

      return {
        ...prev,
        [propertyId]:
          currentIndex === imageCount - 1 ? 0 : currentIndex + 1,
      };
    });
  }

  if (loading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-gray-500">Loading properties...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="properties" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-estate">
            Our Properties
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
            Find Your Perfect Home
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-500">
            Discover our selection of quality properties in Itaewon Village,
            Tangerang.
          </p>
        </div>

        {/* Properties */}
        {properties.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 p-10 text-center">
            <p className="text-gray-500">
              No properties available yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {properties.map((property) => {
              const images = property.property_images || [];

              const currentIndex = currentImages[property.id] || 0;

              const currentImage = images[currentIndex]?.image_url;

              return (
                <div
                  key={property.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* ========================================= */}
                  {/* IMAGE CAROUSEL */}
                  {/* ========================================= */}

                  <div className="relative h-56 overflow-hidden bg-gray-100">

                    {currentImage ? (
                      <img
                        src={currentImage}
                        alt={property.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-400">
                        Property Image
                      </div>
                    )}

                    {/* Featured */}
                    {property.featured && (
                      <span className="absolute left-4 top-4 z-10 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-estate">
                        Featured
                      </span>
                    )}

                    {/* Previous button */}
                    {images.length > 1 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          previousImage(property.id, images.length);
                        }}
                        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:bg-white"
                        aria-label="Previous image"
                      >
                        ←
                      </button>
                    )}

                    {/* Next button */}
                    {images.length > 1 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(property.id, images.length);
                        }}
                        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:bg-white"
                        aria-label="Next image"
                      >
                        →
                      </button>
                    )}

                    {/* Image counter */}
                    {images.length > 1 && (
                      <div className="absolute bottom-3 right-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                        {currentIndex + 1} / {images.length}
                      </div>
                    )}

                    {/* Dots */}
                    {images.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                        {images.map((image, index) => (
                          <button
                            key={image.id}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();

                              setCurrentImages((prev) => ({
                                ...prev,
                                [property.id]: index,
                              }));
                            }}
                            className={`h-1.5 rounded-full transition-all ${
                              index === currentIndex
                                ? "w-5 bg-white"
                                : "w-1.5 bg-white/60"
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    )}

                  </div>

                  {/* ========================================= */}
                  {/* PROPERTY INFORMATION */}
                  {/* ========================================= */}

                  <div className="p-6">

                    <p className="mb-2 text-sm text-gray-500">
                      {property.location}
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900">
                      {property.name}
                    </h3>

                    <p className="mt-3 text-lg font-semibold text-estate">
                      {property.price}
                    </p>

                    {property.description && (
                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
                        {property.description}
                      </p>
                    )}

                    {/* Property details */}
                    <div className="mt-5 flex flex-wrap gap-3 text-xs text-gray-500">

                      {property.land_area && (
                        <span>Land {property.land_area}</span>
                      )}

                      {property.building_area && (
                        <span>Building {property.building_area}</span>
                      )}

                      {property.bedrooms && (
                        <span>{property.bedrooms} Beds</span>
                      )}

                      {property.bathrooms && (
                        <span>{property.bathrooms} Baths</span>
                      )}

                    </div>

                    {/* WhatsApp */}
                    {property.whatsapp && (
                      <a
                        href={`https://wa.me/${property.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                          `Halo, saya tertarik dengan property ${property.name} di ${property.location}. Saya ingin mendapatkan informasi lebih lanjut mengenai property tersebut.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 block rounded-xl bg-estate px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
                      >
                        Hubungi via WhatsApp
                      </a>
                    )}

                  </div>
                </div>
              );
            })}

          </div>
        )}
      </div>
    </section>
  );
}