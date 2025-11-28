import { useNavigate, useParams } from "react-router-dom";
import { type Article } from "../components/ArticleList";
import { useEffect, useState } from "react";
import DeleteButton from "@/components/DeleteButton";

function ArticlePage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [articleId] = useState<string | number | null>(id || null);
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (!articleId) return;

    fetch(`http://localhost:3001/articles/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load article");
        }
        return response.json();
      })
      .then((data: Article) => {
        setArticle(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [articleId]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        navigate("/articles");
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  if (!article) {
    return <div>No article found.</div>;
  }

  function goToEdit() {
    navigate(`/article/edit/${id}`);
  }
  const { title, fullContent, categoryName, createdAt, image } = article;
  return (
    <main className="max-w-7x1 mx-auto p-5 sm:p-10 md:p-16 relative">
      {/* an image as a background */}
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{ minHeight: "500px", backgroundImage: `url(${image})` }}
        title={title}
      />

      {/* article card*/}
      <div className="max-w-3xl mx-auto">
        <article className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10 shadow-lg">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">{title}</h1>

            <p className="text-gray-700 text-xs mt-2">
              {categoryName && (
                <>
                  In{" "}
                  <span className="text-xs text-indigo-600 font-medium">
                    {categoryName}
                  </span>
                </>
              )}
              {createdAt && (
                <>
                  {" "}
                  ·{" "}
                  <span className="text-gray-500">
                    {new Date(createdAt).toLocaleDateString()}
                  </span>
                </>
              )}
            </p>

            <div
              className="prose max-w-none text-base leading-8 my-5"
              dangerouslySetInnerHTML={{ __html: fullContent ?? "" }}
            />

            <div className="mt-6 flex justify-center items-center gap-4">
              <button
                type="button"
                aria-label="Go to edit page"
                onClick={goToEdit}
                className="px-5 py-2 rounded-md bg-yellow-600 text-white text-sm font-medium hover:bg-yellow-700 transition-colors cursor-pointer hover:scale-105"
              >
                Edit
              </button>

              <DeleteButton id={articleId} />

              <button
                type="button"
                aria-label="Go back to the article page"
                onClick={() => navigate("/articles")}
                className="px-5 py-2 rounded-md bg-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-400 transition-colors cursor-pointer hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

export default ArticlePage;
