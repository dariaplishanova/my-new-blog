import type { Article } from "@/components/ArticleList";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RichTextEditor from "@/components/RichTextEditor";

function EditArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article>({
    id: 0,
    title: "",
    content: "",
    fullContent: "",
    createdAt: new Date().toISOString().slice(0, 10),
    image: "",
    categoryName: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(id);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:3001/articles/${id}`)
      .then((res) => res.json())
      .then((data: Article) => setArticle(data));
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!id || !article) {
      setError("Missing article data.");
      return;
    }

    setIsLoading(true);
    setError(null);
    fetch(`http://localhost:3001/articles/${id}`, {
      method: "PUT",
      body: JSON.stringify(article),
      headers: { "Content-Type": "application/json" },
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Server error ${res.status}: ${text}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Article updated :", data);
        navigate("/articles");
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
    console.log(article);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Edit Article
      </h2>
      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-600"
          >
            Title:
          </label>
          <Input
            type="text"
            id="title"
            value={article.title}
            onChange={(e) => setArticle({ ...article, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-lg font-medium text-gray-600"
          >
            Content:
          </label>
          <Textarea
            id="content"
            value={article.content}
            onChange={(e) =>
              setArticle({ ...article, content: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label
            htmlFor="fullContent"
            className="block text-lg font-medium text-gray-600"
          >
            Full Content:
          </label>
          <RichTextEditor
            value={article.fullContent ?? ""}
            onChange={(html) => setArticle({ ...article, fullContent: html })}
          />
        </div>
        <div>
          <label
            htmlFor="createdAt"
            className="block text-lg font-medium text-gray-600"
          >
            Created At:
          </label>
          <Input
            type="date"
            id="createdAt"
            value={article.createdAt}
            onChange={(e) =>
              setArticle({ ...article, createdAt: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-lg font-medium text-gray-600"
          >
            Image URL:
          </label>
          <Input
            type="url"
            id="image"
            value={article.image}
            onChange={(e) => setArticle({ ...article, image: e.target.value })}
            required
          />
          {article.image && (
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-1">Image preview:</p>
              <img
                src={article.image}
                alt={article.title || "Image preview"}
                className="max-h-48 rounded-md object-cover border"
                onError={(e) => {
                  // hide broken image if the URL is invalid
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="categoryName"
            className="block text-lg font-medium text-gray-600"
          >
            Category Name:
          </label>
          <Input
            type="text"
            id="categoryName"
            value={article.categoryName}
            onChange={(e) =>
              setArticle({ ...article, categoryName: e.target.value })
            }
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {isLoading ? "Editing..." : "Edit"}
        </button>
      </form>
    </div>
  );
}

export default EditArticle;
