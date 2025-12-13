"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
   <section className="min-h-screen flex items-center justify-center px-4  bg-cover bg-center" style={{backgroundImage :"url('/auth/auth-bg.jpeg')"}}>

     <div
  className="
    relative z-10
    w-full max-w-md
    rounded-2xl
    p-8
    bg-white/70
    backdrop-blur-xl
    border border-white/30
    shadow-2xl
  "
>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Sign In
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a5c32]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#7a5c32]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <a href="/forgot-password" className="text-[#7a5c32] font-medium">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#7a5c32] text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/sign-up" className="text-[#7a5c32] font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
}
