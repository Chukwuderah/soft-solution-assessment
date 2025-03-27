import React, { useState, useEffect } from "react";
import { MatchCard } from "./MatchCard";

// Mock data for the cards
const cardData = [
  {
    id: 1,
    name: "Darina",
    age: 23,
    location: "Abuja",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nunc et, consectetur finibus nec. Integer pretium urna quis felis pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    matchPercentage: 85,
    verifiedAddress: true,
  },
  {
    id: 2,
    name: "Emily",
    age: 31,
    location: "Lagos",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nunc et, consectetur finibus nec. Integer pretium urna quis felis pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    matchPercentage: 70,
    verifiedAddress: false,
  },
  {
    id: 3,
    name: "John",
    age: 28,
    location: "Delta",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nunc et, consectetur finibus nec. Integer pretium urna quis felis pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    matchPercentage: 65,
    verifiedAddress: true,
  },
  {
    id: 4,
    name: "Marie",
    age: 26,
    location: "Port Harcourt",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nunc et, consectetur finibus nec. Integer pretium urna quis felis pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
    matchPercentage: 55,
    verifiedAddress: false,
  },
  {
    id: 5,
    name: "Love",
    age: 28,
    location: "Lagos",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nunc et, consectetur finibus nec. Integer pretium urna quis felis pellentesque pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    profileImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",
    matchPercentage: 95,
    verifiedAddress: false,
  },
  {
    id: 6,
    name: "Adebayo",
    age: 35,
    location: "Ibadan",
    bio: "Passionate tech enthusiast with a love for innovation and problem-solving. Enjoys exploring new technologies and building creative solutions.",
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    matchPercentage: 78,
    verifiedAddress: true,
  },
  {
    id: 7,
    name: "Chidi",
    age: 29,
    location: "Enugu",
    bio: "Creative professional with a passion for design and storytelling. Loves traveling and experiencing different cultures.",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    matchPercentage: 62,
    verifiedAddress: false,
  },
  {
    id: 8,
    name: "Folake",
    age: 32,
    location: "Kaduna",
    bio: "Ambitious entrepreneur with a keen interest in sustainable development and social innovation.",
    profileImage:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    matchPercentage: 88,
    verifiedAddress: true,
  },
  {
    id: 9,
    name: "Zainab",
    age: 25,
    location: "Kano",
    bio: "Passionate about art, technology, and social change. Always looking to learn and grow personally and professionally.",
    profileImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
    matchPercentage: 67,
    verifiedAddress: false,
  },
  {
    id: 10,
    name: "Tunde",
    age: 40,
    location: "Jos",
    profileImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",
    matchPercentage: 58,
    verifiedAddress: true,
  },
  {
    id: 11,
    name: "Amina",
    age: 27,
    location: "Sokoto",
    bio: "Nature lover and environmental activist. Dedicated to creating positive change and protecting our planet.",
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    matchPercentage: 82,
    verifiedAddress: false,
  },
  {
    id: 12,
    name: "Michael",
    age: 33,
    location: "Calabar",
    bio: "Tech innovator with a passion for artificial intelligence and machine learning. Always pushing the boundaries of what's possible.",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    matchPercentage: 72,
    verifiedAddress: true,
  },
  {
    id: 13,
    name: "Ifeanyi",
    age: 38,
    location: "Owerri",
    bio: "Seasoned educator and mentor, passionate about empowering the next generation through knowledge and inspiration.",
    profileImage:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    matchPercentage: 92,
    verifiedAddress: false,
  },
  {
    id: 14,
    name: "Sandra",
    age: 30,
    location: "Uyo",
    bio: "Creative writer and digital nomad. Exploring the world while creating compelling content and stories.",
    profileImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop",
    matchPercentage: 75,
    verifiedAddress: true,
  },
  {
    id: 15,
    name: "David",
    age: 36,
    location: "Benin City",
    bio: "Financial expert with a creative approach to problem-solving. Passionate about economic development and innovation.",
    profileImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1974&auto=format&fit=crop",
    matchPercentage: 68,
    verifiedAddress: false,
  },
  {
    id: 16,
    name: "Rita",
    age: 24,
    location: "Warri",
    bio: "Aspiring entrepreneur with a love for technology and social impact. Committed to creating innovative solutions for community challenges.",
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    headerImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    matchPercentage: 80,
    verifiedAddress: true,
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
    <div className="min-h-screen mb-10">
      <div className="w-full">
        {isLoading ? (
          <div className="w-max mx-auto flex justify-between items-center h-64">
            <div className="w-10 h-10 border-4 border-[#EF2424] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="flex flex-col flex-wrap justify-center md:justify-between gap-4 md:flex-row px-5 md:px-0">
            {cardData.map((card, index) => (
              <div
                key={card.id}
                className="transition-all duration-500 ease-out w-full md:max-w-[23%]"
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
                  bio={card.bio}
                  profileImage={card.profileImage}
                  headerImage={card.headerImage}
                  matchPercentage={card.matchPercentage}
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
