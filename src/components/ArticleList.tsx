import { useEffect, useState } from "react";
import ArticleThumbnail from "./ArticleThumbnail";
import Section from "./Section";
import ArticleModal from "./ArticleModal";

export interface Article {
  id: number;
  title: string;
  content: string;
  createdAt?: Date;
  image: string;
  categoryName: string;
  fullContent?: string;
}

const filterSearch = (articles: Article[], query: string) => {
  if (!query) return articles;
  return articles.filter((article) =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );
};

function ArticleList() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredResult, setFilteredResult] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);


 useEffect(() => {
    fetch("http://localhost:3001/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setFilteredResult(data);
      });
  }, []);

  useEffect(() => {
    setFilteredResult(filterSearch(articles, query));
  }, [articles, query]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleOpenArticle = (article: Article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
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
              {...article}
              onOpen={() => handleOpenArticle(article)}
            />
          ))
        )}
      </Section>

      {selectedArticle && (
        <ArticleModal article={selectedArticle} onClose={handleCloseArticle} />
      )}
    </>
  );
}


export default ArticleList;