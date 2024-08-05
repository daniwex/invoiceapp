"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const router = useRouter();
    
  async function registerUser(e) {
    e.preventDefault()
    if (!email || !password || !confirm) {
      return;
    }
    if (password != confirm) {
      return;
    }
    try {
      const data = { email, password };
      const req = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (req.ok) {
        router.push("/dashboard")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="h-screen bg-[#373B53]">
      <div className="h-1/6 w-full  flex justify-center items-center">
        <img className="w-1/4" src="/assets/logo.svg" />
      </div>
      <div className="h-5/6 py-10 px-3 text-center bg-[#F8F8FB]  rounded-t-[3em]">
        <h2 className="font-fold text-3xl">Create a new Account</h2>
        <form
          onSubmit={registerUser}
          className="mt-10 grid grid-cols-1 gap-y-7"
        >
          <input
            placeholder="Email"
            type="text"
            className="border-2 w-full h-20 px-5 rounded-lg placeholder:"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            className="border-2 w-full px-5 h-20 rounded-lg"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            className="border-2 w-full px-5 h-20 rounded-lg"
            autoComplete="new-password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <button className="h-16 bg-[#7C5DFA] text-white rounded-xl">
            Sign Up
          </button>
        </form>
        <div className="my-5">
          <p>
            Already have an account?{" "}
            <Link className="text-[#7C5DFA]" href="/">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
