export const MOTION_SECTION_INITIAL = {
  opacity: 0,
  y: 100,
};

export const MOTION_SECTION_VISIBLE = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 500,
    delay: 300,
    ease: "easeInOut",
  },
};

export const MOTION_CONTENT_INITIAL = {
  opacity: 0,
  y: 50,
};

export const MOTION_CONTENT_VISIBLE = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 500,
    delay: 300,
    ease: "easeInOut",
  },
};
