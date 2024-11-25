// Libraries
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster, toast } from "react-hot-toast";

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
});

type FormData = z.infer<typeof schema>;

const ResetPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    toast.success("Link sent to email", {
      duration: 2000,
      style: {
        fontWeight: "600",
        marginTop: "20px",
        color: `var(--dark)`,
        background: `var(--light)`,
      },
    });
    console.log(data);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <NavBar />
      <div className="section center columns">
        <span className="md-txt semi-bold">Reset Password</span>
        <span className="sm-txt" style={{ marginBottom: "20px" }}>
          A link wil be sent to your email to reset your password
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
            <div className="center columns">
              <button
                type="submit"
                className={styles.submit}
                style={{ width: "250px", marginTop: "20px" }}
              >
                Send Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
