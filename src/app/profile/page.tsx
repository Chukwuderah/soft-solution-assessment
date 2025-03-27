"use client";

import Image from "next/image";
import {
  Edit,
  ImageUp,
  ArrowLeft,
  Bike,
  Utensils,
  Music2,
  Mountain,
  Landmark,
  Plane,
  Pencil,
  Hourglass,
  Hammer,
  Camera,
  Leaf,
  HeartHandshake,
  User,
  Briefcase,
  Users,
  MapPin,
  Ruler,
  Weight,
  Church,
  Globe,
} from "lucide-react"; // Optional icons
import Link from "next/link";
import { useState, useRef, ReactNode } from "react";

type TagItem = {
  name: string;
  icon: ReactNode;
  bgColor?: string;
  color?: string;
};

const allHobbies = [
  {
    name: "Biking",
    icon: <Bike size={20} className="text-white" />,
    bgColor: "bg-red-500",
  },
  {
    name: "Cooking",
    icon: <Utensils size={20} className="text-white" />,
    bgColor: "bg-yellow-400",
  },
  {
    name: "Dancing",
    icon: <Music2 size={20} className="text-white" />,
    bgColor: "bg-purple-500",
  },
  {
    name: "Hiking",
    icon: <Mountain size={20} className="text-white" />,
    bgColor: "bg-green-500",
  },
  {
    name: "Museums & Arts",
    icon: <Landmark size={20} className="text-white" />,
    bgColor: "bg-cyan-500",
  },
];

const allInterests = [
  {
    name: "Travel",
    icon: <Plane size={20} className="text-white" />,
    color: "bg-blue-600",
  },
  {
    name: "Drawing",
    icon: <Pencil size={20} className="text-white" />,
    color: "bg-pink-500",
  },
  {
    name: "History",
    icon: <Hourglass size={20} className="text-white" />,
    color: "bg-red-500",
  },
  {
    name: "Woodworking",
    icon: <Hammer size={20} className="text-white" />,
    color: "bg-green-500",
  },
  {
    name: "Photography",
    icon: <Camera size={20} className="text-white" />,
    color: "bg-yellow-400",
  },
  {
    name: "Poetry",
    icon: <Leaf size={20} className="text-white" />,
    color: "bg-emerald-700",
  },
];

export default function ProfilePage() {
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const coverInputRef = useRef<HTMLInputElement | null>(null);
  const [avatarImage, setAvatarImage] = useState<string>(
    "https://plus.unsplash.com/premium_photo-1683147627621-190cc667fd92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  const avatarInputRef = useRef<HTMLInputElement | null>(null);
  const [photoSlots, setPhotoSlots] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const photoInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [showHobbyPopup, setShowHobbyPopup] = useState(false);
  const [showInterestPopup, setShowInterestPopup] = useState(false);
  const [selectedHobbies, setSelectedHobbies] = useState<TagItem[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<TagItem[]>([]);
  const [aboutItems] = useState([
    {
      label: "Gender",
      value: "Male",
      icon: <HeartHandshake size={16} className="text-white" />,
      bg: "bg-red-500",
    },
    {
      label: "Age",
      value: "27",
      icon: <User size={16} className="text-white" />,
      bg: "bg-blue-500",
    },
    {
      label: "Occupation",
      value: "Engineer",
      icon: <Briefcase size={16} className="text-white" />,
      bg: "bg-yellow-400",
    },
    {
      label: "Relationship",
      value: "Single",
      icon: <Users size={16} className="text-white" />,
      bg: "bg-emerald-500",
    },
    {
      label: "Location",
      value: "Lagos",
      icon: <MapPin size={16} className="text-white" />,
      bg: "bg-purple-500",
    },
    {
      label: "Height range",
      value: `5’5 - 6’0`,
      icon: <Ruler size={16} className="text-white" />,
      bg: "bg-teal-500",
    },
    {
      label: "Weight range",
      value: "60 - 70kg",
      icon: <Weight size={16} className="text-white" />,
      bg: "bg-red-600",
    },
    {
      label: "Religion",
      value: "Christianity",
      icon: <Church size={16} className="text-white" />,
      bg: "bg-indigo-700",
    },
    {
      label: "Nationality",
      value: "Nigerian",
      icon: <Globe size={16} className="text-white" />,
      bg: "bg-yellow-500",
    },
  ]);
  const [isEditingAbout, setIsEditingAbout] = useState(false);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarImage(url);
    }
  };

  const toggleItem = (
    item: TagItem,
    list: TagItem[],
    setList: React.Dispatch<React.SetStateAction<TagItem[]>>
  ) => {
    const exists = list.find((i) => i.name === item.name);
    if (exists) {
      setList(list.filter((i) => i.name !== item.name));
    } else {
      setList([...list, item]);
    }
  };

  const handleSlotUpload = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoSlots((prev) => {
        const newSlots = [...prev];
        newSlots[index] = url;
        return newSlots;
      });
    }
  };

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  return (
    <div className="md:w-[80%] md:mx-auto px-4 md:px-8 md:py-6 max-w-7xl">
      <div className="flex md:hidden justify-between items-center px-4 mb-2">
        <Link href="/" passHref>
          <button className="flex items-center gap-2 text-sm text-white md:text-gray-600 hover:text-black bg-[#00000081]  md:bg-gray-100 px-3 py-1 rounded-md cursor-pointer">
            <ArrowLeft size={16} /> Back
          </button>
        </Link>
        <button
          onClick={() => coverInputRef.current?.click()}
          className="text-sm text-white md:text-gray-600 hover:text-black bg-[#00000081]  md:bg-gray-100 px-3 py-1 rounded-md cursor-pointer"
        >
          Update Cover
        </button>
        <input
          type="file"
          accept="image/*"
          ref={coverInputRef}
          onChange={handleCoverUpload}
          className="hidden"
        />
      </div>

      <div className="relative w-full h-48 md:h-64 rounded-xl mb-16">
        <Image
          src={
            coverImage ||
            "https://plus.unsplash.com/premium_photo-1683147627621-190cc667fd92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Cover"
          fill
          className="w-full h-full object-cover brightness-[0.8]"
          priority
        />
        <div className="hidden md:flex absolute top-4 left-4 right-4 justify-between items-center z-10 px-4">
          <Link href="/" passHref>
            <button className="flex items-center gap-2 text-sm text-gray-100 hover:text-white bg-[#00000081] px-3 py-1 rounded-md">
              <ArrowLeft size={16} /> Back
            </button>
          </Link>
          <button
            onClick={() => coverInputRef.current?.click()}
            className="text-sm text-gray-100 hover:text-white bg-[#00000081] px-3 py-1 rounded-md"
          >
            Update Cover
          </button>
          <input
            type="file"
            accept="image/*"
            ref={coverInputRef}
            onChange={handleCoverUpload}
            className="hidden"
          />
        </div>

        {/* Avatar */}
        <div className="absolute -bottom-5 md:-bottom-10 left-4 flex items-center gap-3">
          <div className="relative">
            <div className="w-25 h-25 md:w-50 md:h-50 overflow-hidden rounded-xl shadow-md bg-white">
              <Image
                src={avatarImage}
                alt="Avatar"
                width={200}
                height={200}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Plus Button */}
            <button
              onClick={() => avatarInputRef.current?.click()}
              className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center"
              title="Update Avatar"
            >
              <span className="text-white text-sm font-bold">+</span>
            </button>
            <input
              type="file"
              accept="image/*"
              ref={avatarInputRef}
              onChange={handleAvatarUpload}
              className="hidden"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black drop-shadow-md">
              Temiloluwa, 27
            </h2>
            <p className="text-md font-semibold text-black drop-shadow-md">
              Lagos
            </p>
          </div>

          <Edit
            size={16}
            className="ml-2 hidden md:block text-black drop-shadow-md cursor-pointer"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex md:justify-end gap-4 mt-4">
        <button className="bg-red-500 text-white px-4 py-1.5 rounded-3xl text-sm">
          Edit Profile
        </button>
        <button className="bg-red-500 text-white px-4 py-1.5 rounded-3xl text-sm">
          Edit Match Setup
        </button>
      </div>

      <div className="max-w-2xl w-full">
        <div className="mt-6">
          <textarea
            rows={3}
            placeholder="A few words about myself..."
            className="w-full p-5 bg-white rounded-md resize-none"
          />
        </div>

        <div className="flex gap-3 p-4 bg-white mt-6 rounded-md flex-wrap">
          {/* Avatar - static or editable later */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden border border-gray-300">
            <Image
              src={avatarImage}
              alt="Avatar"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Four uploadable slots */}
          {photoSlots.map((photo, i) => (
            <div
              key={i}
              className="w-20 h-20 sm:w-24 sm:h-24 border border-gray-300 rounded-md overflow-hidden relative cursor-pointer group"
              onClick={() => photoInputRefs.current[i]?.click()}
            >
              {photo ? (
                <Image
                  src={photo}
                  alt={`Photo ${i + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-500 text-xs h-full w-full">
                  Add Photo
                  <ImageUp className="w-5 h-5 mb-1" />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={(el) => {
                  photoInputRefs.current[i] = el;
                }}
                onChange={(e) => handleSlotUpload(i, e)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {/* My Hobbies */}
        <div className="bg-white shadow-md rounded-md p-4 relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-base">My Hobbies</h3>
            <Edit
              size={16}
              className="text-gray-400 cursor-pointer"
              onClick={() => setShowHobbyPopup(true)}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {selectedHobbies.map((hobby, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center w-20 cursor-pointer"
                onClick={() =>
                  toggleItem(hobby, selectedHobbies, setSelectedHobbies)
                }
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${hobby.bgColor}`}
                >
                  {hobby.icon}
                </div>
                <p className="text-xs text-center mt-2">{hobby.name}</p>
              </div>
            ))}
          </div>

          {showHobbyPopup && (
            <div className="absolute z-10 bg-white p-4 rounded shadow-md mt-2 border w-60">
              <h4 className="font-bold mb-2">Select Hobbies</h4>
              <div className="grid grid-cols-2 gap-2">
                {allHobbies.map((hobby, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      toggleItem(hobby, selectedHobbies, setSelectedHobbies)
                    }
                    className={`flex items-center gap-2 p-1.5 rounded text-white text-sm ${hobby.bgColor}`}
                  >
                    {hobby.icon}
                    {hobby.name}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowHobbyPopup(false)}
                className="mt-4 text-sm text-gray-500 underline"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* My Interests */}
        {/* My Interests */}
        <div className="bg-white shadow-md rounded-md p-4 relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-base">My Interests</h3>
            <Edit
              size={16}
              className="text-gray-400 cursor-pointer"
              onClick={() => setShowInterestPopup(true)}
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {selectedInterests.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center w-20 cursor-pointer"
                onClick={() =>
                  toggleItem(item, selectedInterests, setSelectedInterests)
                }
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color}`}
                >
                  {item.icon}
                </div>
                <p className="text-xs text-center mt-2">{item.name}</p>
              </div>
            ))}
          </div>

          {showInterestPopup && (
            <div className="absolute z-10 bg-white p-4 rounded shadow-md mt-2 border w-60">
              <h4 className="font-bold mb-2">Select Interests</h4>
              <div className="grid grid-cols-2 gap-2">
                {allInterests.map((item, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      toggleItem(item, selectedInterests, setSelectedInterests)
                    }
                    className={`flex items-center gap-2 p-1.5 rounded text-white text-sm ${item.color}`}
                  >
                    {item.icon}
                    {item.name}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowInterestPopup(false)}
                className="mt-4 text-sm text-gray-500 underline"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* About Me */}
        <div className="bg-white shadow-md rounded-md p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold mb-4 text-base">About Me</h3>
            <Edit
              size={16}
              className="cursor-pointer text-gray-400"
              onClick={() => setIsEditingAbout(!isEditingAbout)}
            />
          </div>

          <ul className="space-y-4">
            {aboutItems.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                {/* Icon Circle */}
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full ${item.bg}`}
                >
                  {item.icon}
                </div>

                {/* Label + Value */}
                <div className="flex gap-2.5">
                  <p className="text-sm font-medium">{item.label}:</p>
                  <p
                    className="text-sm font-semibold"
                    contentEditable={isEditingAbout}
                    suppressContentEditableWarning={true}
                  >
                    {item.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
