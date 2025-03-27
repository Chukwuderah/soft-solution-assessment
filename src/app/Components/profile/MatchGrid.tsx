import React, { useState, useEffect } from "react";
import { MatchCard } from "./MatchCard";

// Mock data for the cards
const cardData = [
  {
    id: 1,
    name: "Darina",
    age: 23,
    location: "Abuja",
    matchPercentage: 85,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nunc et, consectetur finibus nec. Integer pretium urna quis felis pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    verifiedAddress: true,
  },
  {
    id: 2,
    name: "Emily",
    age: 31,
    location: "Lagos",
    matchPercentage: 80,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nunc et, consectetur finibus nec. Integer pretium urna quis felis pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    verifiedAddress: false,
  },
  {
    id: 3,
    name: "John",
    age: 28,
    location: "Delta",
    matchPercentage: 72,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nunc et, consectetur finibus nec. Integer pretium urna quis felis pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    verifiedAddress: true,
  },
  {
    id: 4,
    name: "Marie",
    age: 26,
    location: "Port Harcourt",
    matchPercentage: 77,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nunc et, consectetur finibus nec. Integer pretium urna quis felis pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
    verifiedAddress: false,
  },
  {
    id: 5,
    name: "Love",
    age: 28,
    location: "Lagos",
    matchPercentage: 80,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nunc et, consectetur finibus nec. Integer pretium urna quis felis pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",
    verifiedAddress: false,
  },
];

const MatchGrid = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">
            Find Your Match
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover people who match your preferences and connect with them.
          </p>
        </header>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
            {cardData.map((card, index) => (
              <div
                key={card.id}
                className="transition-all duration-500 ease-out"
                style={{
                  opacity: 1,
                  transform: "translateY(0)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <MatchCard
                  name={card.name}
                  age={card.age}
                  location={card.location}
                  matchPercentage={card.matchPercentage}
                  bio={card.bio}
                  profileImage={card.profileImage}
                  headerImage={card.headerImage}
                  verifiedAddress={card.verifiedAddress}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchGrid;
