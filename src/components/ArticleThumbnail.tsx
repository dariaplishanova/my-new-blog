import { useState } from "react";
import { type Article } from "./ArticleList";
import { Heart } from "lucide-react";
function ArticleThumbnail(props: Article) {

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <figure className="w-60 p-3 rounded-xl overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-md bg-white">
      <img
        className="w-full h-40 object-cover"
        src={props.thumbnail}
        alt={props.title}
      />
      <figcaption className="pt-2 space-y-1">
        <p className="text-xs text-gray-400">#{props.id}</p>
        <h2 className="font-semibold">{props.title}</h2>
        <p className="text-sm text-gray-700">{props.description}</p>
        <button className="p-3" onClick={handleClick}>
          <Heart color={isLiked ? "red" : "grey"} /> {/*if is liked true - set red, else set grey*/}
        </button>
      </figcaption>
    </figure>
  );
}

export default ArticleThumbnail;
