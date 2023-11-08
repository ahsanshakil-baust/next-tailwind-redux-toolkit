"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
const Details = () => {
  const { name, email } = useSelector((state: RootState) => state);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold">Name: {name}</h1>
      <p className="text-lg">Email: {email}</p>
    </div>
  );
};

export default Details;
