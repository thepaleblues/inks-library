const PROFILE_KEY = "inks-library-profile";

export function saveProfile(profile) {
  localStorage.setItem(
      PROFILE_KEY,   
      JSON.stringify(profile)
   );
}

export function loadProfile(defaultProfile) {
  const saved = localStorage.getItem(PROFILE_KEY);

  if (!saved || saved === "undefined") {
    saveProfile(defaultProfile);
    return defaultProfile;
  }

  return JSON.parse(saved);
}

