import { type Article } from "./ArticleList";
import LikeButton from "./LikeButton";
function ArticleThumbnail(props: Article) {
  return (
    <figure className="flex flex-col w-60 p-3 rounded-xl overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-md bg-white">
      <img
        className="w-full h-40 object-cover rounded-bl-3xl rounded-tr-3xl"
        src={props.image}
        alt={props.title}
      />
      <figcaption className="flex flex-col flex-1 justify-between pt-2 space-y-1">
        <div>
          <p className="text-m text-black-100">#{props.id}</p>
          <h2 className="font-semibold">{props.title}</h2>
          <p className="text-sm text-gray-700">{props.content}</p>
        </div>
        <LikeButton className="float-right" />
      </figcaption>
    </figure>
  );
}

export default ArticleThumbnail;
