import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black">
      <div className="flex flex-col gap-4 items-center justify-center pt-6 pb-10 md:px-6 px-4 shrink-0">
        <img
          className="w-full h-[60vh] rounded"
          src="https://cdn.pixabay.com/index/2025/11/27/08-16-47-229_1920x550.jpg"
          alt="Top Image"
        />

        <div className="w-full flex gap-2 items-center justify-between">
          <div className="lg:w-1/3 flex flex-col">
            <h2 className="text-4xl capitalize font-semibold dark:text-white">
              Create your own Blog with us.
            </h2>
            <p className="mt-2 dark:text-gray-400">
              Here you can share and learn.
            </p>
            <button
              onClick={() => navigate("/articles")}
              className="w-fit px-5 py-2 rounded-md bg-yellow-500 text-gray-800 text-sm font-medium hover:bg-yellow-400 transition-colors cursor-pointer hover:scale-105 mt-4"
            >
              Learn More
            </button>
          </div>
          <img
            className="lg:block hidden w-[16rem] h-72"
            src="https://cdn.pixabay.com/photo/2025/06/19/16/21/adventure-9669329_1280.jpg"
            alt="image"
          />
          <img
            className="xl:block hidden w-[16rem] h-72"
            src="https://cdn.pixabay.com/photo/2025/06/19/16/21/adventure-9669329_1280.jpg"
            alt="image"
          />
          <img
            className="sm:block hidden w-[16rem] h-72"
            src="https://cdn.pixabay.com/photo/2025/06/19/16/21/adventure-9669329_1280.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}
