import React from "react";
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Image1 from "../../../../public/assets/image1herohome.jpg";
import Image2 from "../../../../public/assets/image2herohome.jpg";
import Image3 from "../../../../public/assets/image3herohome.jpg";
import Image4 from "../../../../public/assets/image4herohome.jpg";
import Image5 from "../../../../public/assets/image2herohome.jpg";

function RecipesContentFood() {
  return (
    <div className="md:py-[px56] py-[26px]" style={{ background: "#FFEDD8" }}>
      <Container>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="flex flex-col sm:gap-[16px] gap-[20px]">
                <h2 className="HeadingsHomeSection sm:text-center text-left">
                  Hello! My name is Maggy. Your new sous chef!
                </h2>
                <div className="flex justify-center">
                  <p className="ParaHeroHomeSection sm:text-center text-left">
                    Our unique toppings, spices and homemade produce Our unique
                    toppings, spices and homemade produce
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "765px",
              }}
            >
              <Image
                src={Image1}
                alt="Image 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    paddingBottom: "100%",
                  }}
                >
                  <Image
                    src={Image2}
                    alt="Image 2"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    paddingBottom: "100%",
                  }}
                >
                  <Image
                    src={Image3}
                    alt="Image 3"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    paddingBottom: "100%",
                  }}
                >
                  <Image
                    src={Image4}
                    alt="Image 4"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    paddingBottom: "100%",
                  }}
                >
                  <Image
                    src={Image5}
                    alt="Image 5"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default RecipesContentFood;
