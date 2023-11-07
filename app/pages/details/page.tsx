"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
const Details = () => {
  const { name, email } = useSelector((state: RootState) => state);
  return (
    <h1>
      {name}:{email}
    </h1>
  );
};

export default Details;
