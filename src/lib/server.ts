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
  const links: LinkType[] = [
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
  return links;
};
