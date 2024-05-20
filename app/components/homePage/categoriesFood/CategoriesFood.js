import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesFood = () => {
  return (
    <>
      <div className="md:py-[56px] py-[26px]" style={{ background: "#f0f0f0" }}>
        <Container>
          <div className="row flex">
            <div className="col">
              <div
                style={{
                  position: "relative",
                  width: "600px",
                  height: "600px",
                }}
              >
                <Image
                  src="/assets/recipelisthome.jpg"
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="col flex flex-col sm:gap-[28px] gap-[8px] justify-center">
              <h3 className="HeadingCategoriesFood">Our Food</h3>
              <p className="ParaCategoriesFood">
                The food at Wild Ginger spans the eastern Pacific Rim from China
                to Indonesia, and Malaysia to Vietnam. Come take a culinary tour
                of China and Southeast Asia — our staff is here to guide and
                inspire you. Family style service, like in classic Asian
                restaurants, creates an enriching experience where guests share
                a range of tastes together.
              </p>
              <p className="ParaCategoriesFood">
                We’re looking forward to seeing you again.Changing to meet
                customer needs throughout the day, Wild Ginger is as much a
                place to meet with co-workers over a working lunch, as it is to
                enjoy bespoke cocktails after work, or relax with friends and
                family over dinner.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CategoriesFood;
