import { Link } from "react-router";

interface BlogCardProps {
  image?: string;
  title?: string;
  description?: string;
  duration?: number;
  comments?: number;
}

export default function BlogCard({
  comments = 39,
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  duration = 6,
  image = "https://source.unsplash.com/random",
  title = "Simplest Salad Recipe ever",
}: BlogCardProps) {
  return (
    <div className="rounded overflow-hidden shadow-lg flex flex-col group/card">
      <Link to="/" />
      <div className="relative">
        <Link to="/">
          <img className="w-full" src={image} alt="Sunset in the mountains" />
          <div className="group-hover/card:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 group-hover/container:opacity-75 opacity-25"></div>
        </Link>
        <Link to="/!">
          <div className="text-xs absolute top-0 right-0 bg-primary px-4 py-2 text-white mt-3 mr-3 group-hover/card:bg-white group-hover/card:text-primary transition duration-500 ease-in-out">
            Read
          </div>
        </Link>
      </div>
      <div className="px-6 py-4 mb-auto">
        <Link
          to="/"
          className="font-medium text-lg inline-block group-hover/card:text-primary transition duration-500 ease-in-out mb-2"
        >
          {title}
        </Link>
        <p className="group-hover/card:text-secondary text-sm">{description}</p>
      </div>
      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <Link
          to="/"
          className="py-1 text-xs font-regular group-hover/card:text-primary mr-1 flex flex-row items-center"
        >
          <svg
            height="13px"
            width="13px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            fill="currentColor"
          >
            <g>
              <g>
                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
              </g>
            </g>
          </svg>
          <span className="ml-1">{duration} mins ago</span>
        </Link>
        <Link
          to="/"
          className="py-1 text-xs font-regular group-hover/card:text-primary mr-1 flex flex-row items-center"
        >
          <svg
            className="h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            ></path>
          </svg>
          <span className="ml-1">{comments} Comments</span>
        </Link>
      </div>
    </div>
  );
}
