import { type Article } from "./ArticleList";

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

function ArticleModal({ article, onClose }: ArticleModalProps) {
  return (
    <div className="fixed inset-0 opacity-100 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 float-right"
        >
          ✕
        </button>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-700">{article.fullContent}</p>
        <p className="text-gray-700">{article.categoryName}</p>
        <p className="font-light">{article.createdAt?.toString()}</p>
      </div>
    </div>
  );
}

export default ArticleModal;