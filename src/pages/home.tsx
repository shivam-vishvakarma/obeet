import ProductCard from "@/components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Autoplay from "embla-carousel-autoplay";
import { Book, CirclePlus, HandIcon, Link, TrendingUp } from "lucide-react";

export const Home = () => {
  const ProductsData = {
    popular: [
      {
        title: "Popular 1",
        hotline: "Very popular",
        link: "/popular-1",
      },
      {
        title: "Popular 2",
        hotline: "Very popular",
        link: "/popular-2",
      },
      {
        title: "Popular 3",
        hotline: "Very popular",
        link: "/popular-3",
      },
      {
        title: "Popular 4",
        hotline: "Very popular",
        link: "/popular-4",
      },
      {
        title: "Popular 5",
        hotline: "Very popular",
        link: "/popular-5",
      },
      {
        title: "Popular 6",
        hotline: "Very popular",
        link: "/popular-6",
      },
      {
        title: "Popular 7",
        hotline: "Very popular",
        link: "/popular-7",
      },
      {
        title: "Popular 8",
        hotline: "Very popular",
        link: "/popular-8",
      },
      {
        title: "Popular 9",
        hotline: "Very popular",
        link: "/popular-9",
      },
    ],
    latest: [
      {
        title: "Latest 1",
        hotline: "Very latest",
        link: "/latest-1",
      },
      {
        title: "Latest 2",
        hotline: "Very latest",
        link: "/latest-2",
      },
      {
        title: "Latest 3",
        hotline: "Very latest",
        link: "/latest-3",
      },
      {
        title: "Latest 4",
        hotline: "Very latest",
        link: "/latest-4",
      },
      {
        title: "Latest 5",
        hotline: "Very latest",
        link: "/latest-5",
      },
      {
        title: "Latest 6",
        hotline: "Very latest",
        link: "/latest-6",
      },
      {
        title: "Latest 7",
        hotline: "Very latest",
        link: "/latest-7",
      },
      {
        title: "Latest 8",
        hotline: "Very latest",
        link: "/latest-8",
      },
      {
        title: "Latest 9",
        hotline: "Very latest",
        link: "/latest-9",
      },
    ],
    crm: [
      {
        title: "CRM 1",
        hotline: "Very CRM",
        link: "/crm-1",
      },
      {
        title: "CRM 2",
        hotline: "Very CRM",
        link: "/crm-2",
      },
      {
        title: "CRM 3",
        hotline: "Very CRM",
        link: "/crm-3",
      },
      {
        title: "CRM 4",
        hotline: "Very CRM",
        link: "/crm-4",
      },
      {
        title: "CRM 5",
        hotline: "Very CRM",
        link: "/crm-5",
      },
      {
        title: "CRM 6",
        hotline: "Very CRM",
        link: "/crm-6",
      },
      {
        title: "CRM 7",
        hotline: "Very CRM",
        link: "/crm-7",
      },
      {
        title: "CRM 8",
        hotline: "Very CRM",
        link: "/crm-8",
      },
      {
        title: "CRM 9",
        hotline: "Very CRM",
        link: "/crm-9",
      },
    ],
    books: [
      {
        title: "Books 1",
        hotline: "Very Books",
        link: "/books-1",
      },
      {
        title: "Books 2",
        hotline: "Very Books",
        link: "/books-2",
      },
      {
        title: "Books 3",
        hotline: "Very Books",
        link: "/books-3",
      },
      {
        title: "Books 4",
        hotline: "Very Books",
        link: "/books-4",
      },
      {
        title: "Books 5",
        hotline: "Very Books",
        link: "/books-5",
      },
      {
        title: "Books 6",
        hotline: "Very Books",
        link: "/books-6",
      },
      {
        title: "Books 7",
        hotline: "Very Books",
        link: "/books-7",
      },
      {
        title: "Books 8",
        hotline: "Very Books",
        link: "/books-8",
      },
      {
        title: "Books 9",
        hotline: "Very Books",
        link: "/books-9",
      },
    ],
    payroll: [
      {
        title: "Payroll 1",
        hotline: "Very Payroll",
        link: "/payroll-1",
      },
      {
        title: "Payroll 2",
        hotline: "Very Payroll",
        link: "/payroll-2",
      },
      {
        title: "Payroll 3",
        hotline: "Very Payroll",
        link: "/payroll-3",
      },
      {
        title: "Payroll 4",
        hotline: "Very Payroll",
        link: "/payroll-4",
      },
      {
        title: "Payroll 5",
        hotline: "Very Payroll",
        link: "/payroll-5",
      },
      {
        title: "Payroll 6",
        hotline: "Very Payroll",
        link: "/payroll-6",
      },
      {
        title: "Payroll 7",
        hotline: "Very Payroll",
        link: "/payroll-7",
      },
      {
        title: "Payroll 8",
        hotline: "Very Payroll",
        link: "/payroll-8",
      },
      {
        title: "Payroll 9",
        hotline: "Very Payroll",
        link: "/payroll-9",
      },
    ],
  };
  return (
    <main>
      <section>
        <Carousel
          className="relative"
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="h-[40vh] brightness-75 ml-0 *:pl-0">
            <CarouselItem>
              <img
                src="https://cdn.pixabay.com/photo/2024/12/20/11/53/architect-9280053_1280.jpg"
                alt="Carousel 1"
                className="w-full h-full object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://cdn.pixabay.com/photo/2024/01/01/23/41/trees-8482254_960_720.jpg"
                alt="Carousel 2"
                className="w-full h-full object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="https://cdn.pixabay.com/photo/2023/11/07/02/33/wind-power-generation-8370867_1280.jpg"
                alt="Carousel 3"
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          </CarouselContent>
          <div className="absolute w-min bottom-[15%] right-[10%]">
            <div className="relative w-0 text-primary">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </section>
      <section>
        <Tabs
          className="max-w-screen-xl mx-auto relative"
          defaultValue="popular"
        >
          <TabsList className="mx-auto flex w-3/5 absolute h-20 p-0 bg-white/10 left-1/2 -translate-x-1/2 -translate-y-full rounded-none rounded-t-3xl overflow-hidden backdrop-blur-sm text-white">
            <TabsTrigger
              className="data-[state=active]:text-white data-[state=active]:gradient-main flex flex-col justify-center items-center flex-1 h-full rounded-none"
              value="popular"
            >
              <TrendingUp />
              <span>Popular</span>
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:text-white data-[state=active]:gradient-main flex flex-col justify-center items-center flex-1 h-full rounded-none "
              value="latest"
            >
              <CirclePlus />
              <span>Latest</span>
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:text-white data-[state=active]:gradient-main flex flex-col justify-center items-center flex-1 h-full rounded-none "
              value="crm"
            >
              <Link />
              <span>CRM</span>
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:text-white data-[state=active]:gradient-main flex flex-col justify-center items-center flex-1 h-full rounded-none "
              value="books"
            >
              <Book />
              <span>Books</span>
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:text-white data-[state=active]:gradient-main flex flex-col justify-center items-center flex-1 h-full rounded-none "
              value="payroll"
            >
              <HandIcon />
              <span>Payroll</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="popular">
            <div className="grid grid-cols-3 pt-4 gap-4">
              {ProductsData.popular.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  hotline={product.hotline}
                  link={product.link}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="latest">
            <div className="grid grid-cols-3 pt-4 gap-4">
              {ProductsData.latest.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  hotline={product.hotline}
                  link={product.link}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="crm">
            <div className="grid grid-cols-3 pt-4 gap-4">
              {ProductsData.crm.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  hotline={product.hotline}
                  link={product.link}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="books">
            <div className="grid grid-cols-3 pt-4 gap-4">
              {ProductsData.books.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  hotline={product.hotline}
                  link={product.link}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="payroll">
            <div className="grid grid-cols-3 pt-4 gap-4">
              {ProductsData.payroll.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  hotline={product.hotline}
                  link={product.link}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};
