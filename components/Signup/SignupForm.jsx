"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 flex items-start lg:items-center justify-center bg-cover bg-center" style={{backgroundImage :"url('/auth/auth-bg.jpeg')"}}>
      <div className="
  w-full max-w-md 
  rounded-2xl 
  px-6 py-7 mt-12
  bg-white/70 
  backdrop-blur-xl 
  border border-white/30 
  shadow-2xl
">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-1">
          Create Account
        </h2>
        <p className="text-center text-xs md:text-sm text-gray-500 mb-6">
          Join Quantum Wellness to continue
        </p>

        <form className="space-y-4">

          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a5c32]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a5c32]"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a5c32]"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a5c32]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-medium mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-[#7a5c32]"
                required
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-xs text-gray-600">
            <input type="checkbox" className="mt-0.5" required />
            I agree to the{" "}
            <a href="/terms" className="text-[#7a5c32] font-medium">
              Terms
            </a>{" "}
            &{" "}
            <a href="/privacy-policy" className="text-[#7a5c32] font-medium">
              Privacy Policy
            </a>
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-3 bg-[#7a5c32] text-white py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/sign-in" className="text-[#7a5c32] font-semibold">
            Log In
          </a>
        </p>
      </div>
    </section>
  );
}
