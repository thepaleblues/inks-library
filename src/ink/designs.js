export const imageModules = import.meta.glob(
   "../assets/images/ink/*.{jpg,jpeg,png}",
   {
      eager: true,
      import: "default"
   }
);

function getInkImage(id) {
   return imageModules[`../assets/images/ink/${id}.png`]
};

const inksDesigns = {
   base: {
      id: "base",
      image: getInkImage("full-neutral")
   },
   recommend: {
      id: "recommend",
      image: getInkImage("full-recommending")
   },
   neutral: {
      id: "neutral",
      image: getInkImage("head-neutral")
   },
   judge: {
      id: "judge",
      image: getInkImage("head-judging")
   },
   question: {
      id: "question",
      image: getInkImage("head-question")
   },
   logoPlain: {
      id: "logo-plain",
      image: getInkImage("logo-plain")
   },
   logoTitle: {
      id: "logo-title",
      image: getInkImage("logo-title")
   }
};


export default inksDesigns;