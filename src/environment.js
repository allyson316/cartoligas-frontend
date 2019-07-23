const dev = {
  NAME: "Development Mode",
  API_URL: "http://localhost:8080"
};

const staging = {
  NAME: "Staging Mode",
  API_URL: "#"
};

const prod = {
  NAME: "Production",
  API_URL: "#"
};

const config =
  process.env.REACT_APP_STAGE === "production"
    ? prod
    : process.env.REACT_APP_STAGE === "staging"
    ? staging
    : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
