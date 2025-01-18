export type Review = {
  name: string;
  comment: string;
  date: string;
};

export type LinkType =
  | {
      icon?: React.ReactNode | string;
      text: string;
      url: string;
      urls?: never; // `urls` is not allowed when `url` is present.
    }
  | {
      icon?: React.ReactNode | string;
      text: string;
      urls: LinkType[];
      url?: never; // `url` is not allowed when `urls` is present.
    }
  | {
      icon?: React.ReactNode | string;
      text: string;
      url: string;
      urls: LinkType[]; // Both `url` and `urls` can be passed together.
    };
