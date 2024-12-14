"use client";
import React, { useState } from "react";
import { auth } from "../Auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import styles from "../CSS/signin.module.css";

const Signin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User Signed Up:", userCredential.user);
      alert("Sign Up Successful!");
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User Signed In:", userCredential.user);
      alert("Sign In Successful!");
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  const SignUpForm = () => (
    <div className="h-screen w-screen flex justify-center items-center">
      <form className={styles.form} onSubmit={handleSignUp}>
        <div className={styles.flexcolumn}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            className={styles.input}
            placeholder="Enter your Name"
            onChange={handleChange}
            value={formData.name} 
            required
          />
        </div>
        <div className={styles.flexcolumn}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder="Enter your Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>
        <div className={styles.flexcolumn}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="Enter your Password"
            onChange={handleChange}
            value={formData.password}
            required
          />
        </div>
        <button className={styles.buttonsubmit} disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        <p className={styles.p}>
          Already have an account?{" "}
          <span className={styles.span} onClick={() => setIsSignUp(false)}>
            Sign In
          </span>
        </p>
        {error && <p className={styles.p}>{error}</p>}
      </form>
    </div>
  );


  const SignInForm = () => (
    <div className="h-screen w-screen flex justify-center items-center">
      <form className={styles.form} onSubmit={handleSignIn}>
        <div className={styles.flexcolumn}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder="Enter your Email"
            onChange={handleChange}
            value={formData.email} 
            required
          />
        </div>
        <div className={styles.flexcolumn}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="Enter your Password"
            onChange={handleChange}
            value={formData.password} 
            required
          />
        </div>
        <button className={styles.buttonsubmit} disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
        <p className={styles.p}>
          Don't have an account?{" "}
          <span className={styles.span} onClick={() => setIsSignUp(true)}>
            Sign Up
          </span>
        </p>
        {error && <p className={styles.p}>{error}</p>}
      </form>
    </div>
  );

  return <div>{isSignUp ? <SignUpForm /> : <SignInForm />}</div>;
};

export default Signin;
