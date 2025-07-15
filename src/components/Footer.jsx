import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <div className="text-2xl font-bold">
              <span className="text-purple-400">{"<"}</span>
              Tarun Kushwaha
              <span className="text-purple-400">{"/>"}</span>
            </div>
          </div>
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by Tarun Kushwaha</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Tarun Kushwaha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
