// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
export const LINKS = {
  companies: {
    r2ventures: 'https://www.linkedin.com/company/r2br/posts/?feedView=all',
  },
  social: {
    github: "https://github.com/renangirotto",
    linkedin: "https://www.linkedin.com/in/renan-girotto/",
    spotify: "https://open.spotify.com/playlist/70HIev12SC0HqPgze6lqyL?si=11e25308ecea4ce0",
    substack: "https://renangirotto.substack.com/subscribe"
  },
};

export const ROUTES = {
  home: '/',
  blog: `/blog/`,
  carrer: `/carreira/`,
  newsletter: `${LINKS.social.substack}`,
}

export const SITE_TITLE = "Renan Girotto";

export const SITE_DESCRIPTION = "Olá, sou o Renan! Desenvolvedor front-end.";
