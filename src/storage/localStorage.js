// NEW USER
export function checkFirstVisit() {
  const isNewUser = !localStorage.getItem("hasVisited");

  localStorage.setItem("hasVisited", "true");

  return isNewUser;
}


// PROFILE
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