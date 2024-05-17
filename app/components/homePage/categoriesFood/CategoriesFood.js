import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

const CategoriesFood = () => {
  return (
    <>
      <div className="md:py-[56px] py-[26px]" style={{ background: "#daabff" }}>
        <Container>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "700px",
            }}
          >
            <Image
              src="/assets/recipelisthome.jpg"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
            />
            <div
              style={{
                position: "absolute",
                top: "85%",
                left: "20%",
                transform: "translate(-50%, -50%)",
                background: "rgba(255, 255, 255)",
                padding: "20px",
                border: "2px solid green",
                borderRadius: "16px 0px",
                width: "400px",
              }}
            >
              <h4 style={{ fontSize: "26px", color: "red" }}>
                Vegan cocoa pudding{" "}
              </h4>
              <p style={{ fontSize: "12px", color: "black" }}>
                Lorem ipsum dolor sit amet, consectetur adipicibe elit, sed do
                eiusmod tempor inci didunt ut labore e dolore magnna ad aliquam.
                Ut enim ad mini
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CategoriesFood;
