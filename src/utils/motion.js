export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction) => ({
  initial: {
    x: direction === "left" ? -150 : direction === "right" ? 150 : 0,
    y: direction === "up" ? 150 : direction === "down" ? -150 : 0,
    opacity: 0,
    transition: { ...transition, delay: 0.4 },
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    x: direction === "left" ? -150 : direction === "right" ? 150 : 0,
    y: direction === "up" ? 150 : direction === "down" ? -150 : 0,
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
});

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = {
  initial: { x: 120, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 6,
    stiffness: 50,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation = {
  initial: { y: 120, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 8,
    stiffness: 35,
    restDelta: 0.001,
    duration: 0.7,
    delay: 0.3,
    delayChildren: 0.3,
  },
};

export const headContainerAnimation = {
  initial: { x: -120, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -120, opacity: 0, transition: { ...transition, delay: 0 } },
};
