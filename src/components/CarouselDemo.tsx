import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export function CarouselDemo() {
  const photos = [
  "https://cdn.pixabay.com/photo/2017/09/18/15/38/moon-2762111_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/12/14/15/37/aurora-borealis-9267515_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/02/14/00/51/ice-7788590_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/10/24/19/09/nevada-8338929_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/11/16/15/15/field-533541_1280.jpg",
  "https://cdn.pixabay.com/photo/2025/08/11/10/07/milky-way-9767930_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/09/05/07/44/cloudy-1645868_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/12/01/09/42/night-7628754_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/03/03/05/55/sunset-656967_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/05/17/13/57/sea-5181726_1280.jpg"
];


 return (
  <Carousel
    opts={{
      align: "start",
    }}
    className="w-full max-w-max"
  >
    <CarouselContent>
      {photos.map((photo, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <img
                  src={photo}
                  alt={`carousel-image-${index}`}
                  className="w-full h-full object-cover rounded-md"
                />
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
