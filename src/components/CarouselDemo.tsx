import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Articles {
  title: string;
  src: string;
}

let articles: Articles[] = [
  {
    title: "Je suis un titre 1",
    src: "https://imgs.search.brave.com/YhEr17AB2j3RqXAijFGCMUN_CcNAalolviMdBu2xNks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/dmlkZW8tY3JlYXRp/b24vaW50cm9zLW91/dHJvcy53ZWJw"
  },
  {
    title: "Je suis un titre 2",
    src: "https://imgs.search.brave.com/YhEr17AB2j3RqXAijFGCMUN_CcNAalolviMdBu2xNks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/dmlkZW8tY3JlYXRp/b24vaW50cm9zLW91/dHJvcy53ZWJw"
  },
  {
    title: "Je suis un titre 3",
    src: "https://imgs.search.brave.com/YhEr17AB2j3RqXAijFGCMUN_CcNAalolviMdBu2xNks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/dmlkZW8tY3JlYXRp/b24vaW50cm9zLW91/dHJvcy53ZWJw"
  },
];
export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {articles.map((article, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src={article.src}></img>
                  <span className="text-4xl font-semibold">
                    {article.title}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
