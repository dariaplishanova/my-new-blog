import { useEffect, useState } from "react";
import ArticleThumbnail from "./ArticleThumbnail";

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
      fetch('http://localhost:3001/articles')
        .then((response) => response.json())
        .then((data) => {setArticles(data);
          console.log(data)});
    }, []);

  useEffect(() => {
    setFilterSearch(filterSearch(articles, query));
  }, [, articles, query]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <input
        className="bg-white border rounded-2xl p-3 max-w-60"
        type="text"
        placeholder="Search.."
        value={query}
        onChange={handleSearchChange}
      />
      <section className="flex flex-wrap justify-center gap-7">
        {filteredResult.map((article) => (
          <ArticleThumbnail
            key={article.id}
            id={article.id}
            title={article.title}
            content={article.content}
            image={article.image}
          />
        ))}
      </section>
    </div>
  );
}

export default ArticleList;
