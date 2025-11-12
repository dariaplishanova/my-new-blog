// import React, { useState } from "react";
// import { type Article } from "./ArticleList";
// import ArticleThumbnail from "./ArticleThumbnail";

// const SearchBar = ({ articles }: { articles: Article[] }) => {
//   const [query, setQuery] = useState("");

//   const filterSearch = (articles: Article[], query: string) => {
//     if (!query) {
//       return articles;
//     }
//     return articles.filter((article) =>
//       article.title.toLowerCase().includes(query.toLowerCase())
//     );
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(event.target.value);
//   };

//   const filteredResult = filterSearch(articles, query);

//   const handleKeyPress = (event: React.) => {
//     if(event.key === "Enter")
//   }
//   return (
//     <>
//       <input
//         className="bg-white border rounded-2xl p-3 max-w-60"
//         type="text"
//         placeholder="Search.."
//         value={query}
//         onChange={handleSearchChange}
//       />

//       {filteredResult.map((article) => (
//         <ArticleThumbnail
//           key={article.id}
//           id={article.id}
//           title={article.title}
//           tags={article.tags}
//           description={article.description}
//           thumbnail={article.thumbnail}
//         />
//       ))}
//     </>
//   );
// };

// export default SearchBar;
