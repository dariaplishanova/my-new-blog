import Input from "@/components/Input";
import RichTextEditor from "@/components/RichTextEditor";
import Textarea from "@/components/Textarea";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateArticle() {
  const navigate = useNavigate();
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    fullContent: "",
    createdAt: "",
    image: "",
    categoryName: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    fetch("http://localhost:3001/articles", {
      method: "POST",
      body: JSON.stringify(newArticle),
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
        console.log("Article created :", data);
        navigate("/articles");
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
    console.log(newArticle);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Create New Article
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
            value={newArticle.title}
            onChange={(e) =>
              setNewArticle({ ...newArticle, title: e.target.value })
            }
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
            value={newArticle.content}
            onChange={(e) =>
              setNewArticle({ ...newArticle, content: e.target.value })
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
            value={newArticle.fullContent ?? ""}
            onChange={(html) =>
              setNewArticle({ ...newArticle, fullContent: html })
            }
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
            value={newArticle.createdAt}
            onChange={(e) =>
              setNewArticle({ ...newArticle, createdAt: e.target.value })
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
            value={newArticle.image}
            onChange={(e) =>
              setNewArticle({ ...newArticle, image: e.target.value })
            }
            required
          />
          {newArticle.image && (
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-1">Image preview:</p>
              <img
                src={newArticle.image}
                alt={newArticle.title || "Image preview"}
                className="max-h-48 rounded-md object-cover border"
                onError={(e) => {
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
            value={newArticle.categoryName}
            onChange={(e) =>
              setNewArticle({ ...newArticle, categoryName: e.target.value })
            }
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {isLoading ? "Creating..." : "Create Article"}
        </button>
      </form>
    </div>
  );
}

export default CreateArticle;
