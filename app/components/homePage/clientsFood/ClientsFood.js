"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";

const ClientsFood = () => {
  const clientsItem = [
    { image: "/assets/clientscarousel1.png" },
    { image: "/assets/clientscarousel2.png" },
    { image: "/assets/clientscarousel3.png" },
    { image: "/assets/clientscarousel4.png" },
  ];
  const sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  const settings = {
    dots: false,
    autoplay: true,
    autoplayspeed: 500,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="md:py-[56px] py-[26px]" style={{ background: "#4f1111" }}>
        <Container>
          <div className="row">
            <div className="col-12">
              <div className="flex flex-col sm:gap-[16px] gap-[20px]">
                <h2 className="sm:text-center text-left text-yellow-500 font-bold text-5xl">
                  What Our Clients Say?
                  <br /> Voices of Success
                </h2>
                <div className="flex justify-center">
                  <p className="ParaTestimonialHeadSection sm:text-center text-left lg:max-w-[893px]">
                    These testimonials are not just words; they are the voices
                    of success, reflecting the tangible impact our services have
                    had on their businesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 pt-[24px] sm:pt-[72px]">
              <Slider ref={sliderRef} {...settings}>
                {clientsItem.map((item, index) => (
                  <div key={index} className="px-2">
                    <div
                      className="flex items-center justify-center"
                      style={{ height: "100px" }}
                    >
                      <div
                        style={{
                          width: "300px",
                          height: "100px",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={item.image}
                          alt="clients"
                          layout="fill"
                          objectFit="cover"
                          className="img"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ClientsFood;
