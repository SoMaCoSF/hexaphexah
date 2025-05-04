"use client";
import React from "react";

const HEX_COLORS = ["tech", "science", "med", "law", "finance", "other"];

function HexCell({ label, color }: { label: string; color: string }) {
  return (
    <div
      className={`w-24 h-24 flex items-center justify-center text-white font-bold text-lg shadow-lg transition-transform duration-200 hover:scale-105 bg-${color} hexagon`}
      style={{
        clipPath:
          "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
      }}
    >
      {label}
    </div>
  );
}

export default function Home() {
  // Placeholder data for the hex grid
  const cells = [
    { label: "AI", color: "tech" },
    { label: "BIO", color: "science" },
    { label: "MD", color: "med" },
    { label: "JD", color: "law" },
    { label: "VC", color: "finance" },
    { label: "EDU", color: "other" },
    { label: "UX", color: "tech" },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen py-12 bg-gradient-to-br from-tech/10 via-science/10 to-finance/10">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Hexanym Game</h1>
      <div className="mb-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter acronym..."
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tech"
        />
      </div>
      <div className="grid grid-cols-3 gap-6">
        {cells.map((cell, idx) => (
          <HexCell key={idx} label={cell.label} color={cell.color} />
        ))}
      </div>
      <style jsx>{`
        .hexagon {
          clip-path: polygon(
            25% 6.7%,
            75% 6.7%,
            100% 50%,
            75% 93.3%,
            25% 93.3%,
            0% 50%
          );
        }
      `}</style>
      <footer className="mt-16 text-sm text-gray-500">
        Leaderboard and game logic coming soon.
      </footer>
    </div>
  );
}
