import { type Article } from "./ArticleList";
import LikeButton from "./LikeButton";

interface ArticleThumbnailProps {
  onOpen: () => void;
}

function ArticleThumbnail(props: Article & ArticleThumbnailProps) {
  const { id, title, content, image, onOpen } = props;

  return (
    <figure className="flex flex-col w-60 p-3 rounded-xl overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-md bg-white">
      <img
        className="w-full h-40 object-cover rounded-bl-3xl rounded-tr-3xl"
        src={image}
        alt={title}
      />
      <figcaption className="flex flex-col flex-1 justify-between pt-2 space-y-1">
        <div>
          <p className="text-sm text-black">#{id}</p>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-sm text-gray-700 line-clamp-3">{content}</p>
        </div>
        <div className="flex justify-between items-center pt-2">
          <button
            onClick={onOpen}
            className="text-xs font-medium text-yellow-600 hover:underline"
          >
            See more..
          </button>
          <LikeButton className="text-right" />
        </div>
      </figcaption>
    </figure>
  );
}

export default ArticleThumbnail;