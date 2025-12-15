"use client";

import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  // DUMMY CART DATA (remove later)
  const cartItems = [
    {
      id: 1,
      name: "Quantum Energy Device",
      category: "Wellness Device",
      price: 199,
      qty: 1,
    },
    {
      id: 2,
      name: "Healing Frequency Session",
      category: "Service",
      price: 89,
      qty: 2,
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <>
      {/* FIX TRANSPARENT HEADER */}
      <div className="w-full h-[110px] bg-black" />

      {/* CART PAGE */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-14">
          My Cart
        </h1>

        {/* CART GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT: CART ITEMS */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                Selected Items ({cartItems.length})
              </h2>
              <a
                href="/devices"
                className="text-sm font-medium text-[#7a5c32]"
              >
                ← Back to Store
              </a>
            </div>

            {/* EMPTY CART */}
            {cartItems.length === 0 && (
              <div className="border rounded-2xl py-20 flex flex-col items-center text-center">
                <span className="text-6xl mb-4">🛒</span>
                <p className="text-gray-500">
                  Your cart is currently empty
                </p>
              </div>
            )}

            {/* CART ITEMS */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-5 border rounded-2xl p-5 bg-white shadow-sm"
                >
                  {/* IMAGE */}
                  <div className="w-24 h-24 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                    Image
                  </div>

                  {/* DETAILS */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.category}
                    </p>

                    {/* QTY CONTROLS */}
                    <div className="flex items-center gap-3 mt-4">
                      <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100">
                        <Minus size={14} />
                      </button>

                      <span className="font-medium">
                        {item.qty}
                      </span>

                      <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100">
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="flex flex-col items-end justify-between">
                    <p className="font-semibold text-lg">
                      ${item.price * item.qty}
                    </p>
                    <button className="text-red-500 hover:opacity-80">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SUMMARY */}
          <div className="bg-[#faf7f2] rounded-3xl p-8 h-fit sticky top-32">
            <h3 className="text-xl font-semibold mb-6">
              Order Summary
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0.00</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span>-$0.00</span>
              </div>

              <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-8 bg-[#7a5c32] text-white py-3 rounded-full font-semibold hover:opacity-90 transition">
              Proceed to Checkout
            </button>

            <p className="text-xs text-center text-gray-500 mt-4">
              Secure checkout powered by Quantum Wellness
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
