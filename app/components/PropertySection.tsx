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

  // Menyimpan status description yang sedang dibuka
  const [expandedDescriptions, setExpandedDescriptions] = useState<
    Record<number, boolean>
  >({});

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
    <section
      id="properties"
      className="relative overflow-hidden bg-[#071512] px-4 py-24 text-white sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(183,145,78,0.12),_transparent_38%)]" />
      <div className="mx-auto max-w-7xl px-6">

        {/* Section heading */}
        <div className="relative mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.32em] text-[#c7a96b]">
            Our Properties
          </p>

          <h2 className="text-3xl font-medium tracking-[0.04em] text-[#f2eee5] md:text-4xl">
            Find Your Perfect Home
          </h2>

          <div className="mx-auto mt-5 h-px w-12 bg-[#b89555]" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55">
            Discover our selection of quality properties in Dago atas,
            Bandung.
          </p>
        </div>

        {/* Properties */}
        {properties.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="text-white/50">
              No properties available yet.
            </p>
          </div>
        ) : (
          <div className="relative grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">

            {properties.map((property) => {
              const images = property.property_images || [];

              const currentIndex = currentImages[property.id] || 0;

              const currentImage = images[currentIndex]?.image_url;

              return (
                <div
                  key={property.id}
                  className="group flex h-full min-h-[570px] flex-col overflow-hidden rounded-xl border border-white/[0.07] bg-[#0b1d19] shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-1 hover:border-[#b89555]/40 hover:shadow-[0_22px_55px_rgba(0,0,0,0.4)]"
                >

                  {/* ========================================= */}
                  {/* IMAGE CAROUSEL */}
                  {/* ========================================= */}

                  <div className="relative h-72 shrink-0 overflow-hidden bg-[#10231e]">

                    {currentImage ? (
                      <img
                        src={currentImage}
                        alt={property.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-white/35">
                        Property Image
                      </div>
                    )}

                    {/* Featured */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071512]/90 via-transparent to-black/10" />

                    {property.featured && (
                      <span className="absolute left-4 top-4 z-10 rounded-full border border-[#d2b676]/40 bg-[#071512]/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#e0c98f] backdrop-blur-md">
                        Featured
                      </span>
                    )}

                    {property.status && (
                      <span className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md">
                        {property.status}
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
                        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/60"
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
                        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/60"
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

                  <div className="flex flex-1 flex-col p-6">

                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#c7a96b]">
                      {property.location}
                    </p>

                    <h3 className="text-xl font-medium tracking-wide text-[#f3efe7]">
                      {property.name}
                    </h3>

                    <p className="mt-3 text-lg font-medium text-[#d6bb7f]">
                      {property.price}
                    </p>

                    {property.description && (
                      <div className="mt-3 text-sm leading-6 text-white/55">
                        <p
                          className={
                            expandedDescriptions[property.id]
                              ? ""
                              : "line-clamp-2"
                          }
                        >
                          {property.description}
                        </p>

                        {property.description.length > 110 && (
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedDescriptions((prev) => ({
                                ...prev,
                                [property.id]: !prev[property.id],
                              }))
                            }
                            className="mt-1 text-xs font-medium text-[#d6bb7f] transition hover:text-[#efd79e]"
                            aria-expanded={!!expandedDescriptions[property.id]}
                          >
                            {expandedDescriptions[property.id]
                              ? "Show less"
                              : "Read more"}
                          </button>
                        )}
                      </div>
                    )}

                    {/* Property details */}
                    <div className="mb-6 mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.08] pt-4 text-xs text-white/50">

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
                        className="mt-auto block rounded-lg border border-[#b89555] bg-[#b89555] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#071512] transition hover:bg-[#d0b474]"
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