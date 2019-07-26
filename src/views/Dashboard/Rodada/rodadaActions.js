import axios from "axios";
import env from "../../../environment";

const getRodadas = async () => {
  try {
    /* const USER_APP = functions.loadLocalStorage('');
    const token = USER_APP.token;
    const options = {
      headers: {
        Authorization: token
      }
    } */
    const url = `${env.API_URL}/rodadas`;
    const rodadasResult = await axios.get(url);
    return rodadasResult;
  } catch (error) {
    return error.response;
  }
};

export { getRodadas };
