"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Container } from "@mui/material";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  const words = [
    "Delicious Delights",
    "Tasty Temptations",
    "Flavorful Feasts",
    "Yummy Yields",
    "Nutritious & Fresh",
  ];

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 140;
    const delay = isDeleting ? deletingSpeed : typingSpeed;

    const loop = setInterval(() => {
      const currentWord = words[loopIndex % words.length];
      const isWordComplete = isDeleting ? text === "" : text === currentWord;

      if (isWordComplete) {
        setIsDeleting(!isDeleting);
        setLoopIndex(isDeleting ? loopIndex + 1 : loopIndex);
      }

      const nextText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(nextText);
    }, delay);

    return () => clearInterval(loop);
  }, [text, isDeleting, loopIndex]);

  const images = [
    { src: "/assets/foodherosectionmainhome.jpg" },
    { src: "/assets/foodherosectionmainhome2.jpg" },
    { src: "/assets/foodherosectionmainhome3.jpg" },
    { src: "/assets/foodherosectionmainhome4.jpg" },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {images.map((item, index) => (
            <Box key={index} sx={{ width: "100%", height: "100vh" }}>
              <Image
                src={item.src}
                alt={`slide-${index}`}
                layout="fill"
                objectFit="cover"
                quality={100}
                draggable={false}
              />
            </Box>
          ))}
        </Slider>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            height: "calc(100% + 6px)",
          }}
        />
      </Box>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: "center",
            color: "darkorange",
            fontSize: { xs: "40px", md: "130px" },
            fontWeight: "800",
            fontFamily: "Josefin Sans",
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            textAlign: "center",
            mt: 2,
            color: "lightgreen",
            fontSize: { xs: "16px", md: "30px" },
            fontFamily: "Sedan SC, serif",
          }}
        >
          Savor the best recipes and culinary tips from around the world. Your
          journey to gastronomic pleasure begins here!
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
