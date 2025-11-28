import { Suspense, type JSX } from "react";
import ArticleList from "../components/ArticleList";

function Articles(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <ArticleList />
    </Suspense>
  );
}

export default Articles;
