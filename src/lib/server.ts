import { LinkType, Review } from "./types";

export const getReviews = function (): Review[] {
  const reviews: Review[] = [
    {
      name: "Priya Sharma",
      comment:
        "I’ve been using Nisbat Sellex products for months now, and I am truly impressed by the quality and affordability. It’s rare to find a brand that prioritizes both excellence and the well-being of society. It feels great knowing that every purchase supports a meaningful cause.",
      date: "2021-01-01",
    },
    {
      name: "Ravi Kumar",
      comment:
        "Working with Nisbat Sellex India Pvt. Ltd. has been an incredible experience. Their commitment to sustainability and ethical practices sets them apart in a competitive market. They truly walk the talk when it comes to social responsibility.",
      date: "2021-01-02",
    },
    {
      name: "Dr. Meera Jain",
      comment:
        "The work Nisbat Sellex is doing with their upcoming NGO, Helpo India, is inspiring. The focus on healthcare, education, and community development is exactly what this country needs. I’m excited to see how they continue to create positive change.",
      date: "2021-01-03",
    },
    {
      name: "Manoj Gupta",
      comment:
        "Nisbat Sellex is more than just a business; they are partners in progress. The respect they show toward their suppliers and their holistic approach to business, focusing on both profit and social impact, makes them stand out in the industry.",
      date: "2021-01-04",
    },
    {
      name: "Ayesha Khan",
      comment:
        "I’ve witnessed firsthand how Nisbat Sellex has been working to uplift marginalized communities. Their focus on skill development and disaster relief through Helpo India is a much-needed initiative. They are truly making a difference in people’s lives",
      date: "2021-01-05",
    },
  ];
  return reviews;
};

export const getGalleryImages = function (): string[] {
  const images: string[] = [
    "/gallery/image-1.jpg",
    "/gallery/image-2.jpg",
    "/gallery/image-3.jpg",
    "/gallery/image-4.jpg",
    "/gallery/image-5.jpg",
    "/gallery/image-6.jpg",
    "/gallery/image-7.jpg",
    "/gallery/image-8.jpg",
    "/gallery/image-9.jpg",
    "/gallery/image-10.jpg",
    "/gallery/image-11.jpg",
  ];
  return images;
};

export const getLoginLinks = function (): LinkType[] {
  const urls: LinkType[] = [
    {
      text: "ERP Login",
      url: "/login/erp",
    },
    {
      text: "CRM Login",
      url: "/login/crm",
    },
    {
      text: "HRM Login",
      url: "/login/hrm",
    },
    {
      text: "Super Stockist Login",
      url: "/login/super-stockist",
    },
    {
      text: "Manufacturer Login",
      url: "/login/manufacturer",
    },
    {
      text: "Distributor Login",
      url: "/login/distributor",
    },
    {
      text: "B2B Login",
      url: "/login/b2b",
    },
    {
      text: "B2C Login",
      url: "/login/b2c",
    },
    {
      text: "More....",
      url: "/login",
    },
  ];
  return urls;
};

export const getNavigationLinks = function (): LinkType[] {
  const links: LinkType[] = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Our Story",
      urls: [
        {
          text: "Our story",
          url: "/about",
        },
        {
          text: "Our journey",
          url: "/file/our-journey",
        },
        {
          text: "Company and about us",
          url: "/file/our-journey",
        },
        {
          text: "Company revenue model",
          url: "/file/our-journey",
        },
        {
          text: "Co founder and CEO introduction and speech",
          url: "/file/our-journey",
        },
        {
          text: "Company md  and hier level management",
          url: "/file/our-journey",
        },
        {
          text: "Our happy team members",
          url: "/file/our-journey",
        },
        {
          text: "Our happy distributor and retailer and cnf",
          url: "/file/our-journey",
        },
        {
          text: "Our happy customer and customer feedback",
          url: "/file/our-journey",
        },
        {
          text: "Our market area how many state and district covered in india",
          url: "/file/our-journey",
        },
      ],
    },
    {
      text: "Investor presentation",
      urls: [
        {
          text: "Industries trends as per our products and services And our prospecting category and manufacturing in future",
          url: "/file/our-journey",
        },
        {
          text: "Identify the actual problem in the market",
          url: "/file/our-journey",
        },
        {
          text: "The solution which is provided by sellex india",
          url: "/file/our-journey",
        },
        {
          text: "Company usp",
          url: "/file/our-journey",
        },
        {
          text: "Three zero theory",
          url: "/file/our-journey",
        },
        {
          text: "20*20 theory for our super stockist",
          url: "/file/our-journey",
        },
        {
          text: "50*50 theory for our investor",
          url: "/file/our-journey",
        },
        {
          text: "Why small investor chose our company",
          url: "/file/our-journey",
        },
        {
          text: "Present financial ratio and future growth",
          url: "/file/our-journey",
        },
        {
          text: "Sale and marketing analysis and future growth",
          url: "/file/our-journey",
        },
        {
          text: "Conclusion and key highlights point in investor presentation",
          url: "/file/our-journey",
        },
      ],
    },
  ];
  return links;
};
