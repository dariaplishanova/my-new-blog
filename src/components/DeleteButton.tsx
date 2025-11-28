import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DeleteButton({ id }: { id: number | string | null }) {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  function deleteArticle() {
    if (!id) {
      setError("Missing article ID");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this article?"
    );
    if (!confirmed) {
      return;
    }

    fetch(`http://localhost:3001/articles/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to delete the article");
        } else {
        }
        navigate("/articles");
      })
      .catch((err) => {
        console.error(err);
        setError(
          err instanceof Error
            ? err.message
            : "An error occurred while deleting the article"
        );
      });
  }

  return (
    <>
      <button
      aria-label="Delete an article"
        className="px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors cursor-pointer hover: scale-105"
        onClick={deleteArticle}
      >
        Delete
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
