"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

interface MatchCardProps {
  name: string;
  age: number;
  location: string;
  bio?: string;
  profileImage: string;
  headerImage: string;
  matchPercentage: number;
  verifiedAddress?: boolean;
}

export const MatchCard: React.FC<MatchCardProps> = ({
  name,
  age,
  location,
  bio,
  profileImage,
  headerImage,
  matchPercentage,
  verifiedAddress = false,
}) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl h-full">
      {/* Header Image Section */}
      <div className="relative h-30 w-full bg-gray-200">
        <Image
          src={headerImage}
          alt={`${name}'s header image`}
          fill
          className="object-cover"
        />

        {/* Floating Profile Image */}
        <div className="absolute left-1/2 bottom-[-24px] transform -translate-x-1/2 z-10">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white bg-white">
            <Image
              src={profileImage}
              alt={`${name}'s profile`}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="py-4 px-4">
        {/* Top Row: Left and Right sides */}
        <div className="flex justify-between items-center mb-2">
          {/* LEFT: Name, Age, Location */}
          <div>
            <h3 className="font-semibold text-md">
              {name}, {age}
            </h3>
            <div className="font-semibold text-sm">{location}</div>
          </div>

          {/* RIGHT: Match %, Verified Address */}
          <div className="text-right">
            <p className="font-semibold text-md">{matchPercentage}% Match</p>
            {verifiedAddress && (
              <div className="font-semibold text-sm mt-1 flex gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 10L3.5 7.5L2.5 8.5L6 12L14 4L13 3L6 10Z"
                    fill="currentColor"
                  />
                </svg>
                Verified Address
              </div>
            )}
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs text-gray-600 mt-2 mb-4 line-clamp-3">
          {bio ? bio : "No bio available."}
        </p>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <Link href="/profile" passHref>
            <button className="bg-[#EF2424] cursor-pointer text-white px-4 py-2 rounded-full text-xs hover:bg-red-600 transition-all animate-slide-up">
              More Info
            </button>
          </Link>
          <button
            onClick={handleLike}
            className="transition-all p-1"
            aria-label={liked ? "Unlike" : "Like"}
          >
            <Heart
              size={24}
              className={`transition-colors cursor-pointer duration-300 ${
                liked ? "fill-[#EF2424] text-[#EF2424]" : "text-black"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
