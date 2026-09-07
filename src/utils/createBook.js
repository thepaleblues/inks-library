const coverModules = import.meta.glob(
   "../assets/covers/*.{jpg,jpeg,png}",
   {
      eager: true,
      import: "default"
   }
);

export function getCover(id) {
   return coverModules[`../assets/covers/${id}.jpg`];
}

export function createBook({ 
   id,
   title,
   author,
   mood,
   description,
   cover
}) {
   return {
      id: id ?? "No ID", 
      title: title ?? "Untitled", 
      author: Array.isArray(author) ? author : [author ?? "Anonymous"],
      mood: mood ?? [],
      description: description ?? "",
      cover: cover ?? getCover(id),
      viewedBook: false,
   }
}

