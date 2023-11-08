"use client";

import React, { useState } from "react";
import TextInput from "./inputs/TextInput";
import { submitUser } from "@/app/store/feature/slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const onChangeHandler = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();

    dispatch(submitUser(user));
    router.push("/details");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col justify-center items-center w-[400px] h-[300px] p-5 rounded-lg ring-4 ring-offset-4 ring-green-600 border-2 border-green-600"
    >
      <TextInput
        name="name"
        placeholder="Enter Your Name"
        value={user.name}
        onChangeHandler={onChangeHandler}
      />
      <TextInput
        name="email"
        placeholder="Enter Your Email"
        value={user.email}
        onChangeHandler={onChangeHandler}
      />

      <button
        className="px-6 py-2 mt-4  bg-white ring-2 ring-green-600 text-black rounded-full"
        type="submit"
      >
        Submit
      </button>
      <p className="text-sm m-3">
        {user.name} : {user.email}
      </p>
    </form>
  );
};

export default Form;
