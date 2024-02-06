'use client'
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export const ReactRating = ({ value }) => {
    console.log(value);
  return <Rating style={{ maxWidth: 120 }} value={6}  />;
};
