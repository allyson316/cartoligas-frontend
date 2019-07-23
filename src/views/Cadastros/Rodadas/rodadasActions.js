import axios from "axios";
import env from "../../../environment";

const getLigas = async () => {
  try {
    /* const USER_APP = functions.loadLocalStorage('');
    const token = USER_APP.token;
    const options = {
      headers: {
        Authorization: token
      }
    } */
    const url = `${env.API_URL}/ligas`;
    const rodadasResult = await axios.get(url);
    return rodadasResult;
  } catch (error) {
    return error.response;
  }
};

export { getLigas };
