"use client";

import UserProfileCard from "@/app/Components/dashboard/UserProfileCard";
import Avatar from "../../public/Frame 38.png";
import MatchGrid from "./Components/dashboard/MatchGrid";
import { useState } from "react";
import SideBar from "./Components/Header/SideBar";

export default function Home() {
  const [relationshipType, setRelationshipType] = useState("Dating");

  return (
    <div className="md:w-[1132px] min-h-[100%] mx-auto">
      {/* <div>
        <SideBar />
      </div> */}
      <div>
        <UserProfileCard
          name="Temiloluwa"
          profilePic={Avatar}
          profileCompletion={60}
          relationshipType={relationshipType}
          onRelationshipTypeChange={(value) => setRelationshipType(value)}
        />

        <MatchGrid />
      </div>
    </div>
  );
}
