import React from "react";

const plans = [
  {
    title: "1 Week",
    price: "399",
    desc: "The customer support plan for individuals, startups, and small businesses.",
    btn1: "Buy",
    payment: "https://cosmofeed.com/vp/69df0eed5a89b70013cd75a3",
    highlight: false,
  },
  {
    title: "1 Month",
    price: "999",
    desc: "Powerful automation tools and AI features for growing support teams.",
    btn1: "Buy",
    btn2: "Get a demo",
    payment: "https://cosmofeed.com/vp/696b62cc469b4600134ee912",
    highlight: true,
    badge: "Recommended",
  },
  {
    title: "3 Month",
    price: "2599",
    desc: "Collaboration, security and reporting tools for large support teams.",
    btn1: "Buy",
    payment: "https://cosmofeed.com/vp/696b60d2c11f73001310a88d?checkout=true",
    highlight: false,
  },
];

function Pricing() {

  const handlePayment = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-md ${
              plan.highlight
                ? "bg-slate-800 text-white scale-105"
                : "bg-white text-gray-800"
            }`}
          >
            {/* Title */}
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-semibold">{plan.title}</h2>
              {plan.badge && (
                <span className="text-xs bg-gray-200 text-black px-2 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
            </div>

            {/* Price */}
            <h1 className="text-4xl font-bold mb-1">{plan.price}</h1>
            <p className="text-sm mb-4 opacity-80">per seat/mo</p>

            {/* Description */}
            <p className="text-sm mb-6 opacity-80">{plan.desc}</p>

            {/* Button 1 (Payment) */}
            <button
              onClick={() => handlePayment(plan.payment)}
              className={`w-full py-2 rounded-full font-medium mb-3 transition ${
                plan.highlight
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border border-gray-400 hover:bg-gray-100"
              }`}
            >
              {plan.btn1} →
            </button>

            {/* Button 2 (Demo) */}
            {plan.btn2 && (
              <button
                onClick={() => alert("Demo page open karo")}
                className="text-sm opacity-80 hover:underline"
              >
                {plan.btn2} →
              </button>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}

export default Pricing;