import { useNavigate } from "react-router-dom";
import { type Article } from "./ArticleList";
import LikeButton from "./LikeButton";

interface ArticleThumbnailProps {
  onDeleted?: (id: Article["id"]) => void;
}

function ArticleThumbnail(props: Article & ArticleThumbnailProps) {
  const { id, title, content, image } = props;
  const navigate = useNavigate();

  function seeArticlePage() {
    navigate(`/articles/${id}`);
  }

  return (
    <figure className="flex flex-col w-57 md:w-60 p-3 mt-1.5 rounded-bl-3xl rounded-tr-3xl z-20 overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-md bg-white cursor-pointer hover: scale-105">
      <img
        className="w-full h-40 object-cover rounded-bl-3xl rounded-tr-3xl"
        src={image}
        alt={title}
        width={400}
        height={160}
        onClick={seeArticlePage}
      />
      <figcaption className="flex flex-col flex-1 justify-between pt-2 space-y-1">
        <div onClick={seeArticlePage}>
          <p className="text-sm text-black">#{id}</p>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-gray-700 line-clamp-3">{content}</p>
        </div>
        <div className="flex justify-between items-center pt-2 gap-2">
          <LikeButton className="text-right " />
        </div>
      </figcaption>
    </figure>
  );
}

export default ArticleThumbnail;
