"use client";

import React from "react";
import TextReveal from "@/components/fancy/text-reveal";
import MotionWrap from "@/components/motion-wrap";
import { artistProfiles } from "@/components/sections/artistProfiles/config";
import Autoplay from "embla-carousel-auto-scroll";

import { Carousel, CarouselContent, CarouselItem } from "@repo/ui/carousel";

import ArtistCard from "./artistCard";

const firstRow = [...artistProfiles];
const secondRow = [...artistProfiles];

function ArtistProfiles() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="testimonials">
      <div className="grid gap-10">
        <div className="flex w-full flex-col items-center justify-center px-4 text-center md:px-6 lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <TextReveal
              as="h2"
              className="flex flex-col -space-y-4 text-4xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight"
            >
              Artist Profiles
            </TextReveal>
          </div>
          <p className="mt-4 hidden text-gray-500 lg:mt-0 lg:block lg:w-[35%] dark:text-gray-400">
            Kingtaro와 아이들
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
              loop: true,
            }}
            plugins={[
              Autoplay({
                speed: 600 / 1000,
                startDelay: 100,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {firstRow.map((artist, index) => (
                <CarouselItem
                  key={`testimonial_${index}`}
                  className="basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                >
                  <div className="h-full p-1">
                    <ArtistCard
                      key={`artist_${index}`}
                      index={index + 1}
                      name={artist.name}
                      shortDescription={artist.shortDescription}
                      fullDescription={artist.fullDescription}
                      nickname={artist.nickname}
                      image={artist.image}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel
            opts={{
              align: "start",
              dragFree: true,
              loop: true,
            }}
            plugins={[
              Autoplay({
                speed: 600 / 1000,
                direction: "backward",
                startDelay: 100,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {secondRow.map((artist, index) => (
                <CarouselItem
                  key={`artist-reverse_${index}`}
                  className="basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                >
                  <div className="h-full p-1">
                    <ArtistCard
                      key={`artist_${index}`}
                      index={index + 1}
                      name={artist.name}
                      shortDescription={artist.shortDescription}
                      fullDescription={artist.fullDescription}
                      nickname={artist.nickname}
                      image={artist.image}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="md:dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 md:bg-linear-to-r md:from-white"></div>
          <div className="md:dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 md:bg-linear-to-l md:from-white"></div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default ArtistProfiles;
