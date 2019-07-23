const validateInput = state => {
  if (state !== "" && state !== null) {
    return true;
  }
  return false;
};

export { validateInput };
