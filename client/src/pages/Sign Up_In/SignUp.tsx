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
  firstName: z
    .string({ invalid_type_error: "Please enter your first name" })
    .min(1, { message: "Please enter your first name" })
    .max(50, { message: "First name must be less than 50 character" }),
  lastName: z
    .string({ invalid_type_error: "Please enter your last name" })
    .min(1, { message: "Please enter your last name" })
    .max(50, { message: "Last name must be less than 50 character" }),
  email: z
    .string({ invalid_type_error: "Please enter your email" })
    .email({ message: "Please provide a valid email address" }),
  phoneNumber: z
    .string({ invalid_type_error: "Please enter your phone number" })
    .regex(/^\d{10}$/, { message: "Phone number must be a 10-digit number" }),
  agreements: z.boolean().refine((value: boolean) => value === true, {
    message: "To proceed, certify the above",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]+$/,
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)",
      }
    ),
});

type FormData = z.infer<typeof schema>;

const SignUp = () => {
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
              id="firstName"
              label="First Name"
              placeholder="Legal First Name"
              required={true}
              register={{ ...register("firstName") }}
              type="text"
              errors={errors.firstName}
            />
            <TextInput
              id="lastName"
              label="Last Name"
              placeholder="Legal Last Name"
              required={true}
              register={{ ...register("lastName") }}
              type="text"
              errors={errors.lastName}
            />
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
              id="phoneNumber"
              label="Phone Number"
              placeholder="1234567890"
              required={true}
              register={{ ...register("phoneNumber") }}
              type="tel"
              errors={errors.phoneNumber}
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
              className="rows"
              style={{
                gap: "15px",
                marginBottom: "10px",
                border: `${errors.agreements ? "2px solid red" : "none"}`,
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <input
                type="checkbox"
                className="checkBox"
                {...register("agreements")}
              />
              <span style={{ fontSize: `clamp(12px, 1vw, 14px )` }}>
                <span className="alert">*</span> {"  "}I certify that I am 18
                years of age or older, I agree to the User Agreement, and I have
                read the Privacy Policy and Financial Privacy Notice.
              </span>
            </div>

            <div className="center columns">
              <button
                type="submit"
                className={styles.submit}
                style={{ width: "250px", margin: "20px 0px" }}
              >
                Create Account
              </button>
            </div>
            <span className="semi-bold center">
              Already have an account?{" "}
              <Link
                to="/user/sign-in"
                style={{ textDecoration: "none", color: `var(--primary)` }}
              >
                Sign in
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
