import { useEffect, useState } from "react";
import ArticleThumbnail from "./ArticleThumbnail";
import Section from "./Section";

export interface Article {
  id: number;
  title: string;
  content: string;
  image: string;
}

const filterSearch = (articles: Article[], query: string) => {
  if (!query) {
    return articles;
  }
  return articles.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );
};

function ArticleList() {
  const [query, setQuery] = useState("");

  const [articles, setArticles] = useState<Article[]>([]);

  const [filteredResult, setFilterSearch] = useState<Article[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    setFilterSearch(filterSearch(articles, query));
  }, [, articles, query]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center mb-6">
        <input
          className="bg-white border rounded-2xl p-3 w-full max-w-xs shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Search.."
          value={query}
          onChange={handleSearchChange}
        />
      </div>
      <Section>
        {filteredResult.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          filteredResult.map((article) => (
            <ArticleThumbnail
              key={article.id}
              id={article.id}
              title={article.title}
              content={article.content}
              image={article.image}
            />
          ))
        )}
      </Section>
    </>
  );
}

export default ArticleList;
