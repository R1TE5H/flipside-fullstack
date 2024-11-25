// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Components
import NavBar from "../../components/Navs/NavBar";
import TextInput from "../../components/Forms/Input";
// Styles
import "../../main.css";
import styles from "./sign.module.css";

const schema = z.object({
  email: z
    .string({ invalid_type_error: "Please enter your email" })
    .email({ message: "Please provide a valid email address" }),
  password: z
    .string({ invalid_type_error: "Please enter you password" })
    .min(8, { message: "Password must be at least 8 characters" }),
});

type FormData = z.infer<typeof schema>;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <NavBar />
      <div className="section center columns">
        <span className="md-txt semi-bold">Welcome Back</span>
        <span className="sm-txt" style={{ marginBottom: "20px" }}>
          Sign into your account to continue
        </span>
        <div className={["center", styles.container].join(" ")}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <TextInput
              id="email"
              label="Email"
              placeholder="Email"
              required={true}
              register={{ ...register("email") }}
              type="email"
              errors={errors.email}
            />
            <TextInput
              id="password"
              label="Password"
              placeholder="Password"
              required={true}
              register={{ ...register("password") }}
              type="password"
              errors={errors.password}
            />

            <div
              className="rows xs-txt"
              style={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Forgot your password?</span>
              <Link
                style={{ textDecoration: "none", color: `var(--primary)` }}
                to="/user/reset-password"
              >
                Reset password
              </Link>
            </div>
            <div className="center columns">
              <button
                type="submit"
                className={styles.submit}
                style={{ width: "250px", margin: "20px 0" }}
              >
                Log In
              </button>
            </div>
            <span className="semi-bold center">
              Already have an account?{" "}
              <Link
                to="/user/sign-up"
                style={{ textDecoration: "none", color: `var(--primary)` }}
              >
                Sign up.
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
