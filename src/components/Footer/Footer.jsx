import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    console.log("Subscribed:", email);
    setEmail("");
    alert("Subscribed successfully!");
  };

  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com" },
    { icon: FaTwitter, url: "https://twitter.com" },
    { icon: FaInstagram, url: "https://instagram.com" },
    { icon: FaGithub, url: "https://github.com" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white mt-20 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo / About */}
        <div>
          <h2 className="text-3xl font-extrabold text-orange-500 mb-4 tracking-wide">
            Fitness Tracker
          </h2>

          <p className="text-gray-400 text-sm leading-6 max-w-sm">
            A modern fitness platform built for performance, consistency, and growth.
            Train smarter, stay stronger, and achieve your goals.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {socialLinks.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10
                text-white hover:bg-orange-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-white">
            Quick Links
          </h3>

          <ul className="flex flex-col gap-3 text-gray-400">
            {["Home", "Services", "About", "Contact"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="relative inline-block hover:text-orange-500 transition group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-white">
            Stay Updated
          </h3>

          <div className="bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-lg flex flex-col gap-4">
            
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white text-sm
              focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <button
              onClick={handleSubscribe}
              aria-label="Subscribe to newsletter"
              className="bg-orange-500 text-white py-3 rounded-xl font-semibold
              hover:bg-orange-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-orange-500/20"
            >
              Subscribe
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            No spam. Only useful fitness updates.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 text-center py-5 text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-orange-500 font-semibold">Fitness Tracker</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;