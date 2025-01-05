import { Review } from "./types";

export default function getReviews(): Review[] {
  const reviews: Review[] = [
    {
      name: "John Doe",
      comment: "This is a great product! I love it! I highly recommend it! I'm very satisfied with it! It's awesome! It's the best! I can't live without it! It's perfect! I'm so happy with it! It's amazing! I'm extremely happy with it!",
      date: "2021-01-01",
    },
    {
      name: "Jane Doe",
      comment: "I love this product! It's the best! I highly recommend it! I can't live without it! I'm very satisfied with it! It's amazing! It's perfect! I'm extremely happy with it!",
      date: "2021-01-02",
    },
    {
      name: "Jack Smith",
      comment: "This product is awesome! I'm very satisfied with it! It's the best! I highly recommend it! I love it! It's perfect! I'm so happy with it! It's amazing! I'm extremely happy with it!",
      date: "2021-01-03",
    },
    {
      name: "Jill Smith",
      comment: "I can't live without this product! I love it! It's the best! I highly recommend it! I'm very satisfied with it! It's awesome! I'm so happy with it! It's perfect! It's amazing! I'm extremely happy with it!",
      date: "2021-01-04",
    },
    {
      name: "James Brown",
      comment: "This product is the best! I highly recommend it! I love it! It's awesome! I'm very satisfied with it! I can't live without it! It's perfect! I'm so happy with it! It's amazing! I'm extremely happy with it!",
      date: "2021-01-05",
    },
    {
      name: "Jessica Brown",
      comment: "I'm so happy with this product! It's amazing! I'm very satisfied with it! It's the best! I highly recommend it! I love it! It's perfect! I'm extremely happy with it!",
      date: "2021-01-06",
    },
    {
      name: "John Johnson",
      comment: "This product is amazing! I'm very satisfied with it! It's the best! I highly recommend it! I love it! It's awesome! It's perfect! I'm so happy with it! I'm extremely happy with it!",
      date: "2021-01-07",
    },
    {
      name: "Jane Johnson",
      comment: "I'm very satisfied with this product! It's perfect! I highly recommend it! I love it! It's the best! It's amazing! I'm so happy with it! I'm extremely happy with it!",
      date: "2021-01-08",
    },
    {
      name: "Jack Williams",
      comment: "This product is perfect! I highly recommend it! I love it! It's the best! I'm very satisfied with it! It's awesome! It's amazing! I'm so happy with it! I'm extremely happy with it!",
      date: "2021-01-09",
    },
    {
      name: "Jill Williams",
      comment: "I'm extremely happy with this product! It's amazing! I'm very satisfied with it! It's the best! I highly recommend it! I love it! It's perfect! I'm so happy with it!",
      date: "2021-01-10",
    },
  ];
  return reviews;
}
