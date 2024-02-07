'use client'
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export const ReactRating = ({ value }) => {
  const scaledValue = (value - 1) / (10 - 1) * 5;
  return <Rating style={{ maxWidth: 100 }} value={scaledValue} readOnly />;
};