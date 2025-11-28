import type { FC } from "react";
import notFound from "../assets/notFound.svg";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const navigate = useNavigate();

  function handleRetourn() {
    navigate("/home");
  }
  return (
    <main className="flex justify-center items-center min-h-screen">
      <section className="text-center">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold text-yellow-500 mb-6">
            <span className="typing-effect">
              Oops! The page you are looking for does not exist.
            </span>
          </p>
          <img
            className="h-102 w-102 object-cover mb-6"
            src={notFound}
            alt="Page not found"
          />
          <button
          aria-label="Back to home page"
            className="px-2 py-2 bg-gray-300 mt-2 rounded-md text-sm font-medium hover:bg-gray-400 transition-colors"
            onClick={handleRetourn}
          >
            Back home
          </button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
