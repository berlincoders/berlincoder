"use client";

import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

const Terminal = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative bg-black text-green-500 p-4 rounded-lg font-mono">
      <div className="flex justify-between items-center">
        <pre className="whitespace-pre-wrap">{command}</pre>
        <button
          onClick={handleCopy}
          className="ml-4 text-white bg-gray-700 hover:bg-gray-600 p-2 rounded"
        >
          {copied ? "Copied" : <FaCopy />}
        </button>
      </div>
    </div>
  );
};

export default Terminal;
