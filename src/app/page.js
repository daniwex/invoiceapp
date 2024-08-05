"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
async function loginUser(e) {
  e.preventDefault()
  if (!email || !password) {
    return;
  }
  try {
    const data = { email, password };
    const req = await fetch("/api/login", {
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
    <div className="h-screen bg-[#373B53] sm:grid sm:grid-cols-2">
      <div className="h-1/6 w-full sm:h-full flex justify-center items-center">
        <img className="w-1/4" src="/assets/logo.svg" />
      </div>
      <div className="h-5/6 py-10 px-3 text-center sm:justify-center bg-[#F8F8FB] sm:bg-white sm:rounded-none sm:h-full sm:flex sm:px-20 sm:items-center rounded-t-[3em]">
      <div className="sm:w-4/5">
        <h2 className="font-light text-3xl">Sign into your account</h2>
        <form className="mt-10 grid grid-cols-1 gap-y-7 " onSubmit={loginUser}>
          <input placeholder="Email" type="email" className="border-2 w-full h-16 px-5 rounded-lg placeholder:text-sm" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder="Password" type="password" className="border-2 w-full px-5 h-16 rounded-lg placeholder:text-sm  placeholder:font-light" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="h-16 bg-[#7C5DFA] text-white placeholder:text-sm placeholder:font-light rounded-full sm:w-2/5 sm:h-14">Sign in</button>
        </form>
        <div className="my-5">
          <p>Don't have an account? <Link className="text-[#7C5DFA] font-light" href="/register">Create an Account</Link></p>
        </div>
      </div>

      </div>
    </div>
  );
}
