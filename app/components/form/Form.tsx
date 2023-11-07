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
    <form onSubmit={onSubmitHandler} action="">
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
