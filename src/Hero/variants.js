const appearVariant = (time) => {
  return {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: time * 2,
      },
    },
  };
};

export { appearVariant };
