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

// SCROLLING
export const LIBRARY_SCROLL_KEY = "library-scroll";
export const HOME_SCROLL_KEY = "home-scroll";

// RECOMMENDATIONS
export const DAILY_TOP_MOODS_KEY = "daily-top-moods";
export const MIN_SCORE_POINTS = 2;

export function getDailyTopMoods(moodScorePoints) {
   const today = new Date().toDateString();
   const savedTopMoods = JSON.parse(localStorage.getItem(DAILY_TOP_MOODS_KEY));

   if (
      savedTopMoods?.date === today &&
      savedTopMoods.moods?.[1]?.points >= MIN_SCORE_POINTS
   ) {
      return savedTopMoods.moods;
   }

   const topMoods = [...moodScorePoints]
      .sort((a, b) => b.points - a.points)
      .slice(0, 2);

   if (topMoods[1]?.points >= MIN_SCORE_POINTS) {
      localStorage.setItem(
         DAILY_TOP_MOODS_KEY,
         JSON.stringify({
            date: today,
            moods: topMoods
         })
      );
   }

   return topMoods;
}