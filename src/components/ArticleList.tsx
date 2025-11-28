import { useEffect, useState } from "react";
import ArticleThumbnail from "./ArticleThumbnail";
import Section from "./Section";
import { useNavigate } from "react-router-dom";

type Id = number | string;

export interface Article {
  id: Id;
  title: string;
  content: string;
  createdAt?: string;
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
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8

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
    setCurrentPage(1)
  }, [articles, query]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const navigate = useNavigate();

  function goToCreatePage() {
    navigate("/articleCreate");
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredResult.slice(firstPostIndex, lastPostIndex);

  const totalPages = Math.ceil(filteredResult.length / postsPerPage);

  return (
    <>
      <div className="flex justify-between mb-6">
        <button
          className="justify-between bg-yellow-500 border rounded-xl p-2 hover:bg-yellow-600 transition-colors cursor-pointer hover:scale-105"
          onClick={goToCreatePage}
        >
          Create an article
        </button>
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
          currentPosts.map((article) => (
            <ArticleThumbnail key={article.id} {...article} />
          ))
        )}
      </Section>

      <div className="flex justify-center gap-2 mt-8 mb-6 p-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((page) => page - 1)}
          className="px-3 py-1 rounded-3xl bg-gray-200 disabled:opacity-50 cursor-pointer hover:scale-105"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded-3xl cursor-pointer hover:scale-105 ${
              page === currentPage ? "bg-yellow-500 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((page) => page + 1)}
          className="px-3 py-1 rounded-3xl bg-gray-200 disabled:opacity-50 cursor-pointer hover:scale-105"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default ArticleList;
