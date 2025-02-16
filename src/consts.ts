// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
const BASE_URL = import.meta.env.BASE_URL;

export const LINKS = {
  companies: {
    redventures: 'https://www.linkedin.com/company/redventuresbrasil/posts/?feedView=all',
  },
  social: {
    bluesky: "https://bsky.app/profile/genanrirotto.bsky.social",
    github: "https://github.com/renangirotto",
    linkedin: "https://www.linkedin.com/in/renan-girotto/",
  },
};

export const ROUTES = {
  home: BASE_URL,
  blog: `${BASE_URL}/blog`,
  carrer: `${BASE_URL}/carreira`,
}

export const SITE_TITLE = "Renan Girotto";

// TODO: Change site description
export const SITE_DESCRIPTION = "Welcome to my website!";
