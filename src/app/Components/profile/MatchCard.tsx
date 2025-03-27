"use client";

import Image from "next/image";
import React, { useState } from "react";

interface MatchCardProps {
  name: string;
  age: number;
  location: string;
  matchPercentage: number;
  bio: string;
  profileImage: string;
  headerImage: string;
  verifiedAddress?: boolean;
}

export const MatchCard: React.FC<MatchCardProps> = ({
  name,
  age,
  location,
  matchPercentage,
  bio,
  profileImage,
  headerImage,
  verifiedAddress = false,
}) => {
  const [liked, setLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getMatchColor = () => {
    if (matchPercentage >= 80) return "text-green-600";
    if (matchPercentage >= 70) return "text-orange-500";
    return "text-yellow-500";
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative w-full max-w-[240px] overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
      {/* Profile image */}
      <div className="relative h-64 w-full overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <Image
          src={profileImage}
          alt={`${name}'s profile`}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleImageLoad}
        />

        {/* Match badge */}
        <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-sm">
          <span className={getMatchColor()}>{matchPercentage}% Match</span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">
              {name}, {age}
            </h3>
            <div className="text-gray-600 text-sm">📍 {location}</div>
            {verifiedAddress && (
              <div className="text-blue-500 text-xs mt-1">
                ✔️ Verified Address
              </div>
            )}
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-2 mb-4 line-clamp-3">{bio}</p>

        <div className="flex justify-between items-center">
          <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600">
            View Bio
          </button>
          <button
            onClick={handleLike}
            className="text-xl transition-all"
            aria-label={liked ? "Unlike" : "Like"}
          >
            {liked ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
};
