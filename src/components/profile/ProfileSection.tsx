"use client";
import React, { useState, useEffect } from "react";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePicture?: string;
}

interface ProfileSectionProps {
  profileImage?: string;
  userName?: string;
  personalInfo?: PersonalInfo;
  onUpdateInfo?: (info: PersonalInfo) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  profileImage,
  userName,
  personalInfo,
  onUpdateInfo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInfo, setEditInfo] = useState<PersonalInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profilePicture: "",
  });
  const [profileImagePreview, setProfileImagePreview] = useState<string>(
    profileImage || "/default-avatar.jpg"
  );

  useEffect(() => {
    if (personalInfo) {
      setEditInfo(personalInfo);
      setProfileImagePreview(personalInfo.profilePicture || "/default-avatar.jpg");
    }
  }, [personalInfo]);

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    if (personalInfo) {
      setEditInfo(personalInfo);
      setProfileImagePreview(personalInfo.profilePicture || "/default-avatar.jpg");
    }
    setIsEditing(false);
  };

  const handleSave = () => {
    if (onUpdateInfo) {
      onUpdateInfo(editInfo);
    }
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    setEditInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      setProfileImagePreview(data.url);
      setEditInfo((prev) => ({ ...prev, profilePicture: data.url }));
    } catch (error) {
      console.error("❌ Failed to upload image:", error);
    }
  };

  return (
    <section className="w-full max-w-[1362px] mt-[59px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch h-full">
        {/* Profile Picture Section */}
        <article className="w-[36%] max-md:w-full max-md:ml-0">
          <div className="bg-white shadow border relative min-h-[494px] text-[40px] text-tertiary text-center w-full pt-[15px] pb-[46px] px-[49px] rounded-[20px] border-[rgba(74,59,48,0.7)]">
            <h2 className="mb-4">{userName || "User"}</h2>
            <label className="group cursor-pointer block relative w-80 h-80 rounded-full mx-auto overflow-hidden">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <img
                src={profileImagePreview}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="text-white text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 5a3 3 0 00-3 3v10a3 3 0 003 3h16a3 3 0 003-3V8a3 3 0 00-3-3h-3.172a1 1 0 01-.707-.293l-.828-.828A1 1 0 0015.172 4H8.828a1 1 0 00-.707.293l-.828.828A1 1 0 016.586 5H4zm8 4a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                  </svg>
                  <span className="text-sm font-semibold">Change Picture</span>
                </div>
              </div>
            </label>
          </div>
        </article>

        {/* Profile Info Section */}
        <article className="w-[64%] ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-white shadow border flex flex-col pt-[15px] pb-[79px] px-[52px] rounded-[20px] border-[rgba(74,59,48,0.7)]">
            <header className="relative flex w-full gap-[25px] text-tertiary justify-center items-center">
              <h2 className="text-[40px] text-center">Personal Information</h2>
              {isEditing ? (
                <div className="absolute bottom-[-22px] right-[9px] flex gap-2">
                  <button
                    onClick={handleSave}
                    className="text-sm px-3 py-1 bg-tertiary text-white rounded hover:bg-[rgba(116,75,40,0.9)]"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="text-sm px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleEdit}
                  className="absolute bottom-[-50px] right-[12px] flex flex-col items-center gap-1"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border border-tertiary hover:bg-tertiary hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L6 11.172V14h2.828l8.586-8.586a2 2 0 000-2.828z" />
                      <path fillRule="evenodd" d="M4 16a1 1 0 100 2h12a1 1 0 100-2H4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium mt-1">Edit</span>
                </button>
              )}
            </header>

            <form
              className="mt-[25px] space-y-[25px]"
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              {["firstName", "lastName", "email", "phone"].map((field) => {
                const labelMap = {
                  firstName: "First Name",
                  lastName: "Last Name",
                  email: "Email Address",
                  phone: "Phone Number",
                };
                return (
                  <div key={field} className="flex flex-col text-xl">
                    <label htmlFor={field} className="text-[rgba(74,59,48,0.5)] mb-1">
                      {labelMap[field as keyof typeof labelMap]}
                    </label>
                    {isEditing ? (
                      <input
                        id={field}
                        type={field === "email" ? "email" : "text"}
                        value={editInfo[field as keyof PersonalInfo] || ""}
                        onChange={(e) =>
                          handleInputChange(field as keyof PersonalInfo, e.target.value)
                        }
                        className="text-tertiary border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-tertiary"
                        required
                      />
                    ) : (
                      <span className="text-tertiary">{personalInfo?.[field as keyof PersonalInfo] || "-"}</span>
                    )}
                  </div>
                );
              })}
            </form>
          </div>
        </article>
      </div>
    </section>
  );
};
