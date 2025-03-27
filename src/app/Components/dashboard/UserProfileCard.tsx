import Image, { StaticImageData } from "next/image";

type UserProfileCardProps = {
  name: string;
  profilePic: StaticImageData;
  profileCompletion: number;
  relationshipType: string;
  onRelationshipTypeChange?: (value: string) => void;
};

export default function UserProfileCard({
  name,
  profilePic,
  profileCompletion,
  relationshipType,
  onRelationshipTypeChange,
}: UserProfileCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 mb-10 md:max-w-[800px] px-5 md:px-0">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 md:w-[120px] md:h-[120px] rounded-full overflow-hidden">
          <Image
            src={profilePic}
            alt={`Profile photo of ${name}`}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-800 mb-4">Welcome, {name}</p>
          <p className="text-sm text-gray-600">My Profile Completeness</p>
          <div className="flex items-center gap-2">
            <div className="w-48 h-2 bg-gray-300 rounded-full overflow-hidden flex">
              <div
                className="h-full bg-red-500"
                style={{ width: `${profileCompletion}%` }}
              />
            </div>
            <p className="text-xs text-right text-gray-500 mt-1">
              {profileCompletion}%
            </p>
          </div>
        </div>
      </div>

      {/* Relationship Type Selector */}
      <div className="mt-4 sm:mt-0 sm:ml-8">
        <label className="text-[12px] font-semibold mr-2">
          Relationship Type:
        </label>
        <select
          value={relationshipType}
          onChange={(e) => onRelationshipTypeChange?.(e.target.value)}
          className="bg-white rounded-lg h-8 w-24 text-sm drop-shadow-md focus:outline-none focus:ring-0"
        >
          <option value="Dating">Dating</option>
          <option value="Friendship">Friendship</option>
          <option value="Networking">Networking</option>
        </select>
      </div>
    </div>
  );
}
