"use client";

import { useState } from "react";

export default function BillingForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Billing information submitted!");
    }, 1200);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-5">Billing Details</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full border rounded-lg p-2"
            placeholder="Enter full name"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="w-full border rounded-lg p-2"
            placeholder="example@email.com"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-1 font-medium">
            Phone Number
          </label>
          <input
            id="phone"
            type="text"
            className="w-full border rounded-lg p-2"
            placeholder="+234 000 000 0000"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block mb-1 font-medium">
            Billing Address
          </label>
          <input
            id="address"
            type="text"
            className="w-full border rounded-lg p-2"
            placeholder="Street, City, Country"
          />
        </div>

        {/* Payment Method */}
        <div>
          <label className="block mb-1 font-medium">Payment Method</label>
          <select className="w-full border rounded-lg p-2">
            <option value="">Choose payment method</option>
            <option value="card">Credit / Debit Card</option>
            <option value="transfer">Bank Transfer</option>
            <option value="cash">Cash Payment</option>
          </select>
        </div>

        {/* Card Number */}
        <div>
          <label htmlFor="card" className="block mb-1 font-medium">
            Card Number
          </label>
          <input
            id="card"
            type="text"
            className="w-full border rounded-lg p-2"
            placeholder="1234 5678 9012 3456"
          />
        </div>

        {/* Expiry / CVV */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="expiry" className="block mb-1 font-medium">
              Expiry Date
            </label>
            <input
              id="expiry"
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="MM/YY"
            />
          </div>

          <div>
            <label htmlFor="cvv" className="block mb-1 font-medium">
              CVV
            </label>
            <input
              id="cvv"
              type="password"
              className="w-full border rounded-lg p-2"
              placeholder="123"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3 hover:bg-blue-700 transition"
        >
          {loading ? "Processing..." : "Submit Billing Info"}
        </button>
      </form>
    </div>
  );
}
