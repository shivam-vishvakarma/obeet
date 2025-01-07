import BlogCard from "@/components/BlogCard";
import InfoCard from "@/components/InfoCard";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { gradientColors } from "@/lib/constents";
import { getGalleryImages, getReviews } from "@/lib/server";
import Autoplay from "embla-carousel-autoplay";
import {
  BookCopy,
  Eye,
  Goal,
  HeartHandshake,
  MoveRight,
  Package,
  Quote,
  Route,
  ServerCog,
  Settings,
  ShieldPlus,
  Signature,
  StickyNote,
} from "lucide-react";
import { Link } from "react-router";

export const Home = () => {
  const ProductsData = {
    product: [
      {
        title: "Brands",
        hotline: "our most trusted brand",
        link: "/",
        icon: <HeartHandshake size={100} />,
      },
      {
        title: "Products",
        hotline: "our products",
        link: "/",
        icon: <Package size={100} />,
      },
      {
        title: "Services",
        hotline: "our services",
        link: "/",
        icon: <Settings size={100} />,
      },
      {
        title: "Networking",
        hotline: "our distribution network",
        link: "/popular-4",
        icon: <Route size={100} />,
      },
      {
        title: "Investors",
        hotline: "investor prestation",
        link: "/popular-5",
        icon: <ShieldPlus size={100} />,
      },
      {
        title: "CRM / ERP",
        hotline: "CRM / ERP",
        link: "/popular-6",
        icon: <ServerCog size={100} />,
      },
    ],
  };

  const reviews = getReviews();
  const galleryImages = getGalleryImages();

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
          <div className="absolute hidden md:block w-min bottom-[15%] right-[10%]">
            <div className="relative w-0 text-primary">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </section>
      <section>
        <Tabs
          className="max-w-screen-xl mx-auto relative p-2"
          defaultValue="product"
        >
          <TabsList className="mx-auto flex w-full md:w-3/5 absolute h-16 md:h-20 p-0 bg-white/10 left-1/2 -translate-x-1/2 -translate-y-full rounded-none rounded-t-md md:rounded-t-3xl overflow-hidden backdrop-blur-sm text-white">
            <TabsTrigger
              className="hover:bg-primary bg-secondary flex flex-col justify-center items-center flex-1 h-full rounded-none"
              value=""
            >
              <Package />
              <span>Product</span>
            </TabsTrigger>
            <TabsTrigger
              className="hover:bg-primary bg-secondary flex flex-col justify-center items-center flex-1 h-full rounded-none "
              value=""
            >
              <Settings />
              <span>Services</span>
            </TabsTrigger>
            <TabsTrigger
              className="hover:bg-primary bg-secondary flex flex-col justify-center items-center flex-1 h-full rounded-none "
              value=""
            >
              <HeartHandshake />
              <span>Our Brands</span>
            </TabsTrigger>
            <TabsTrigger
              className="hover:bg-primary bg-secondary flex flex-col justify-center items-center flex-1 h-full rounded-none "
              value=""
            >
              <ServerCog />
              <span>Digital Services</span>
            </TabsTrigger>
            <TabsTrigger
              className="hover:bg-primary bg-secondary flex-col justify-center items-center flex-1 h-full rounded-none hidden md:flex"
              value=""
            >
              <ShieldPlus />
              <span>Our Investors</span>
            </TabsTrigger>
          </TabsList>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-8  gap-4">
            {ProductsData.product.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                hotline={product.hotline}
                link={product.link}
                icon={product.icon}
                gradient={gradientColors[0]}
              />
            ))}
          </div>
        </Tabs>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto my-10 p-4 space-y-4">
          <h2 className="text-4xl font-semibold">What makes us special?</h2>
          <p className="text-2xl font-light">
            We truly mean it when we say we want to be the most
            customer-friendly bank
          </p>
          <Link
            to={"/#"}
            className="flex items-center gap-2 hover:gap-6 transition-all "
          >
            <p>Learn More</p> <MoveRight className="mt-1" />
          </Link>
          <Carousel className="relative p-2">
            <CarouselContent>
              <CarouselItem className="basis-full sm:basis-1/3 group">
                <InfoCard
                  icon={<BookCopy size={50} />}
                  title="Purpose-Driven Impact"
                  link="/books"
                />
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/3 group">
                <InfoCard
                  icon={<BookCopy size={50} />}
                  title="Commitment to Quality & Affordability"
                  link="/books"
                />
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/3 group">
                <InfoCard
                  icon={<BookCopy size={50} />}
                  title="Social Responsibility at Core"
                  link="/books"
                />
              </CarouselItem>
            </CarouselContent>
            <div className="absolute w-min top-[110%] right-1/2 md:-top-[15%] md:right-[10%]">
              <div className="relative w-0 text-primary">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto">
          <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
            <div className="container mx-auto px-6 flex relative py-16">
              <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-secondary mb-12"></span>
                <h1 className="font-bebas-neue uppercase text-4xl sm:text-6xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                  Download
                  <span className="text-4xl sm:text-6xl">Our App</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white mt-5">
                  Dimension of reality that makes change possible and
                  understandable. An indefinite and homogeneous environment in
                  which natural events and human existence take place.
                </p>
                <div className="flex mt-8">
                  <a
                    href="#"
                    className="uppercase py-2 px-4 rounded-lg bg-primary border-2 border-transparent text-white text-md mr-4 hover:bg-secondary"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-secondary text-secondary dark:text-white hover:bg-secondary hover:text-white text-md"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img
                  src="/android.jpg"
                  className="max-w-xs md:max-w-sm m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl p-2 mx-auto">
          <h2 className="text-5xl font-semibold">Our Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 group/container">
            <BlogCard
              image="/gallery/image-9.jpg"
              title="Read About Our Events"
            />
            <BlogCard
              image="/gallery/image-9.jpg"
              title="Read About Our Events"
            />
            <BlogCard
              image="/gallery/image-9.jpg"
              title="Read About Our Events"
            />
            <BlogCard
              image="/gallery/image-9.jpg"
              title="Read About Our Events"
            />
            <BlogCard
              image="/gallery/image-9.jpg"
              title="Read About Our Events"
            />
            <BlogCard
              image="/gallery/image-9.jpg"
              title="Read About Our Events"
            />
            <BlogCard
              image="/gallery/image-9.jpg"
              title="Read About Our Events"
            />
            <BlogCard
              image="/gallery/image-9.jpg"
              title="Read About Our Events"
            />
          </div>
        </div>
      </section>
      <section className="bg-secondary text-white p-4 py-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:p-4">
          <div className="flex flex-col gap-10 md:gap-4">
            <h2 className="text-3xl font-semibold">Know About Our Founders</h2>
            <div className="w-full md:w-4/5 rounded-lg overflow-hidden -mt-44">
              <img
                src="/owner.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="p-2 md:p-4 w-full lg:w-4/5 flex flex-col text-white rounded-md">
            <p className="text-xl text-start font-semibold">
              From the Founder’s Desk:{" "}
              <span className="font-bold">Kazi Sahinur Islam</span>
            </p>
            <p className="text-justify">
              At Nisbat Sellex India Pvt. Ltd., we believe in the power of
              business to create meaningful change. Our journey began with a
              simple yet profound vision: to create products and services that
              not only meet the needs of our consumers but also contribute to
              the greater good of society.
            </p>
            <p className="text-justify">
              As the founder, I’ve always held the belief that businesses have a
              responsibility beyond profit-making—they should serve humanity.
              From day one, we’ve embedded this philosophy into every aspect of
              our operations. We strive to empower lives through innovative,
              high-quality, and affordable products while addressing some of the
              most pressing challenges faced by marginalized communities.
            </p>
            <p className="text-justify">
              Our commitment doesn’t stop at commerce. Through the formation of
              our NGO, Helpo India, we aim to broaden our impact by providing
              education, healthcare, and disaster relief, bringing real change
              to those who need it most. I invite you to join us in this
              journey—because together, we can create a world where progress and
              compassion go hand in hand.
            </p>
            <p className="text-justify mt-5">
              Sincerely,
              <br /> Kazi Sahinur Islam <br /> Founder & Managing Director{" "}
              <br /> Nisbat Sellex India Pvt. Ltd
            </p>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold my-5 md:my-10">
            Explore our gallery
          </h2>
          <div className="h-[70vh] md:h-[200vh] overflow-hidden">
            <div className="columns-3 p-2 gap-2 md:gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="py-2 md:p-2">
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-10 to-50% bg-gradient-to-t h-2/5 flex justify-center from-secondary to-transparent">
              <Link
                to="/gallery"
                className="block text-center text-xl hover:text-primary bg-primary hover:bg-white px-2 border border-primary transition-all rounded-xl text-white py-1 font-semibold mt-auto mb-20"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-10">
        <div className="max-w-screen-xl mx-auto text-white">
          <div className="bg-white text-primary p-4 rounded-full w-min mx-auto">
            <Quote className="size-8 fill-primary" />
          </div>
          <p className="text-4xl font-thin text-center">
            But don’t take our word for it,
          </p>
          <p className="text-4xl font-semibold text-center">
            Hear from our customers
          </p>
          <Carousel className="pt-10 relative p-2">
            <CarouselContent className="my-5">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[70%] md:basis-[40%] lg:basis-[30%]"
                >
                  <ReviewCard review={review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute w-min top-[110%] right-1/2 md:-top-[15%] md:right-[10%]">
              <div className="relative w-0 text-primary">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <section className="p-2">
        <div className="max-w-screen-xl mx-auto space-y-8">
          <h2 className="text-5xl font-medium text-center">
            Helping our communities grow with us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              className={`flex flex-col gap-4 p-8 rounded-lg text-white bg-primary`}
            >
              <Route className="size-16" />
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="text-xl font-light text-justify">
                To provide affordable, high-quality products that improve lives
                and drive positive change.
              </p>
            </div>
            <div
              className={`flex flex-col gap-4 p-8 rounded-lg text-white bg-primary`}
            >
              <Eye className="size-16" />
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="text-xl font-light text-justify">
                To lead with purpose, empowering people and uplifting
                communities.
              </p>
            </div>
            <div
              className={`flex flex-col gap-4 p-8 rounded-lg text-white bg-primary`}
            >
              <Signature className="size-16" />
              <h2 className="text-2xl font-semibold">Our Values</h2>
              <p className="text-xl font-light text-justify">
                Impact, innovation, sustainability, inclusion, and trust.
              </p>
            </div>
            <div
              className={`flex flex-col gap-4 p-8 rounded-lg text-white bg-primary`}
            >
              <Goal className="size-16" />
              <h2 className="text-2xl font-semibold">Our Goals</h2>
              <p className="text-xl font-light text-justify">
                Empower lives, uplift communities, expand social impact, promote
                sustainability, and grow purposefully.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary p-8">
        <div className="max-w-screen-xl mx-auto flex justify-between flex-col md:flex-row gap-4">
          <div className="flex justify-center items-center gap-4">
            <div className="w-min aspect-square rounded-full bg-primary text-white p-4">
              <StickyNote className="size-8" />
            </div>
            <p className="text-xl font-semibold text-primary">
              Add a note of appreciation
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="w-min aspect-square rounded-full bg-primary text-white p-4">
              <StickyNote className="size-8" />
            </div>
            <p className="text-xl font-semibold text-primary">
              Add a note of appreciation
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="w-min aspect-square rounded-full bg-primary text-white p-4">
              <StickyNote className="size-8" />
            </div>
            <p className="text-xl font-semibold text-primary">
              Add a note of appreciation
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
