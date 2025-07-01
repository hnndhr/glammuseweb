import React, { useState } from 'react';

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface ProfileSectionProps {
  profileImage?: string;
  userName?: string;
  personalInfo?: PersonalInfo;
  onUpdateInfo?: (info: PersonalInfo) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  profileImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/444a845eb8b00ad32b69ad163f55a62b0b1860d7?placeholderIfAbsent=true",
  userName = "Jasmine",
  personalInfo = {
    firstName: "Jasmine",
    lastName: "Khalaera",
    email: "jasminekhala@gmail.com",
    phone: "(+62)81234567890"
  },
  onUpdateInfo
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInfo, setEditInfo] = useState(personalInfo);
  const [profileImagePreview, setProfileImagePreview] = useState(profileImage);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (onUpdateInfo) {
      onUpdateInfo(editInfo);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditInfo(personalInfo);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    setEditInfo(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="w-full max-w-[1362px] mt-[59px] max-md:max-w-full max-md:mt-10" aria-label="Profile information">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch h-full">
        <article className="w-[36%] max-md:w-full max-md:ml-0">
          <div className="bg-white shadow-[3px_3px_4px_rgba(0,0,0,0.25)] border relative min-h-[494px] grow text-[40px] text-tertiary font-normal whitespace-nowrap text-center w-full pt-[15px] pb-[46px] px-[49px] rounded-[20px] border-[rgba(74,59,48,0.7)] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
            <h2 className="z-0 mb-4">{userName}</h2>
            <div className="bg-[rgba(116,75,40,0.5)] z-0 flex min-h-[373px] w-full aspect-[1] rounded-[50%]" />
            <label className="group absolute z-0 right-[75px] bottom-[72px] cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      if (typeof reader.result === 'string') {
                        setProfileImagePreview(reader.result);
                      }
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="hidden"
              />
              <div className="relative w-80 h-80 rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="text-white text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 mx-auto mb-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 5a3 3 0 00-3 3v10a3 3 0 003 3h16a3 3 0 003-3V8a3 3 0 00-3-3h-3.172a1 1 0 01-.707-.293l-.828-.828A1 1 0 0015.172 4H8.828a1 1 0 00-.707.293l-.828.828A1 1 0 016.586 5H4zm8 4a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>
                    <span className="text-sm font-semibold">Change Picture</span>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </article>
        
        <article className="w-[64%] ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-white shadow-[3px_3px_4px_rgba(0,0,0,0.25)] border flex min-h-[494px] w-full h-full flex-col font-normal mx-auto pt-[15px] pb-[79px] px-[52px] rounded-[20px] border-[rgba(74,59,48,0.7)] border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
            <header className="self-stretch relative flex w-full gap-[25px] text-tertiary justify-center max-md:max-w-full">
              <button onClick={handleEdit} className="p-0 border-none bg-transparent">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c929a76e31a98e2437e321b4492dfafacc8a8d6?placeholderIfAbsent=true"
                  alt="Edit profile"
                  className="aspect-[1] object-contain w-[50px] absolute z-0 shrink-0 h-[50px] right-0 bottom-[5px]"
                />
              </button>

              <h2 className="text-[40px] text-center self-stretch z-0 my-auto">
                Personal Information
              </h2>
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="text-lg absolute z-0 bottom-[-22px] w-[33px] h-[27px] right-[9px] hover:text-tertiary transition-colors"
                  aria-label="Edit personal information"
                >
                  Edit
                </button>
              ) : (
                <div className="absolute z-0 bottom-[-22px] right-[9px] flex gap-2">
                  <button
                    onClick={handleSave}
                    className="text-sm px-2 py-1 bg-tertiary text-white rounded hover:bg-[rgba(116,75,40,0.9)] transition-colors"
                    aria-label="Save changes"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="text-sm px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
                    aria-label="Cancel editing"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </header>
            
            <form className="mt-[25px] space-y-[25px]" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
              <div className="flex w-full flex-col items-stretch text-xl">
                <label htmlFor="firstName" className="text-[rgba(74,59,48,0.5)] mb-1">First Name</label>
                {isEditing ? (
                  <input
                    id="firstName"
                    type="text"
                    value={editInfo.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="text-tertiary border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-tertiary"
                    required
                  />
                ) : (
                  <span className="text-tertiary">{personalInfo.firstName}</span>
                )}
              </div>
              
              <div className="flex w-full flex-col items-stretch text-xl">
                <label htmlFor="lastName" className="text-[rgba(74,59,48,0.5)] mb-1">Last Name</label>
                {isEditing ? (
                  <input
                    id="lastName"
                    type="text"
                    value={editInfo.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="text-tertiary border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-tertiary"
                    required
                  />
                ) : (
                  <span className="text-tertiary">{personalInfo.lastName}</span>
                )}
              </div>
              
              <div className="flex w-full max-w-full flex-col items-stretch text-xl">
                <label htmlFor="email" className="text-[rgba(74,59,48,0.5)] mb-1">Email Address</label>
                {isEditing ? (
                  <input
                    id="email"
                    type="email"
                    value={editInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="text-tertiary border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-tertiary"
                    required
                  />
                ) : (
                  <span className="text-tertiary">{personalInfo.email}</span>
                )}
              </div>
              
              <div className="flex w-full max-w-full flex-col text-xl max-md:pr-5">
                <label htmlFor="phone" className="text-[rgba(74,59,48,0.5)] mb-1">Phone Number</label>
                {isEditing ? (
                  <input
                    id="phone"
                    type="tel"
                    value={editInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="text-tertiary border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-tertiary"
                    required
                  />
                ) : (
                  <span className="text-tertiary">{personalInfo.phone}</span>
                )}
              </div>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
};
