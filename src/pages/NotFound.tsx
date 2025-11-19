import type { FC } from "react";
import notFound from "../assets/notFound.svg";
import { useNavigate } from "react-router";

const NotFound: FC = () => {
  const navigate = useNavigate()

  function handleDelete() {
    navigate("/home")
  }
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
      <section className="text-center">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold text-yellow-500 mb-6">
        <span className="typing-effect">Oops! The page you are looking for does not exist.</span>
      </p>
          <img
            className="h-102 w-102 object-cover mb-6"
            src={notFound}
            alt="Page not found"
          />
          <button onClick={handleDelete}>Back home</button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
