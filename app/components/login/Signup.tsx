import React from "react";
import { PrimaryButton } from "../global/Buttons";
import { Socials } from "./Socials";

interface SignupFormProps {
  formData: {
    email: string;
    username: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({
  formData,
  handleChange,
  submitHandler,
}) => (
  <div className="bg-zinc-950/90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 shadow-rose-950">
    <h1 className="text-2xl font-semibold text-neutral-100 text-center">
      Join us!
    </h1>
    <p className="text-neutral-100 bg-sky-950 p-1 rounded-full shadow-lg text-center mb-6">
      Create your account now.
    </p>
    <form onSubmit={submitHandler} className="">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-neutral-100 text-sm font-medium mb-2"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your e-mail"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-neutral-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-neutral-100 text-sm font-medium mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-neutral-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-neutral-100 text-sm font-medium mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-neutral-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rose-950"
        />
      </div>
      <PrimaryButton>Sign Up</PrimaryButton>
      <Socials />
    </form>
  </div>
);
