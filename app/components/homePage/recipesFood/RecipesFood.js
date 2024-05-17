import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

const RecipesFood = () => {
  return (
    <>
      <div className="md:py-[56px] py-[26px]" style={{ background: "#ffffff" }}>
        <Container>
          <div>
            <h4 style={{ color: "red", fontStyle: "italic", fontSize: "36px" }}>
              Recipes for true foodies
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "400px",
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
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(255, 255, 255, 0.9)",
                      padding: "20px",
                      border: "2px solid green",
                      borderRadius: "16px 0px",
                      width: "350px",
                    }}
                  >
                    <h4 style={{ fontSize: "16px", color: "red" }}>
                      Vegan cocoa pudding{" "}
                    </h4>
                    <p style={{ fontSize: "12px", color: "black" }}>
                      Lorem ipsum dolor sit amet, consectetur adipicibe elit
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "400px",
                  }}
                >
                  <Image
                    src="/assets/recipelisthome.jpg"
                    alt="Image 2"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "85%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(255, 255, 255, 0.9)",
                      padding: "20px",
                      border: "2px solid green",
                      borderRadius: "16px 0px",
                      width: "350px",
                    }}
                  >
                    <h4 style={{ fontSize: "16px", color: "red" }}>
                      Vegan cocoa pudding{" "}
                    </h4>
                    <p style={{ fontSize: "12px", color: "black" }}>
                      Lorem ipsum dolor sit amet, consectetur adipicibe elit
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "400px",
                  }}
                >
                  <Image
                    src="/assets/recipelisthome.jpg"
                    alt="Image 3"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "85%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "rgba(255, 255, 255, 0.9)",
                      padding: "20px",
                      border: "2px solid green",
                      borderRadius: "16px 0px",
                      width: "350px",
                    }}
                  >
                    <h4 style={{ fontSize: "16px", color: "red" }}>
                      Vegan cocoa pudding{" "}
                    </h4>
                    <p style={{ fontSize: "12px", color: "black" }}>
                      Lorem ipsum dolor sit amet, consectetur adipicibe elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default RecipesFood;
