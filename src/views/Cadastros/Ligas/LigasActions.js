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
    const ligasResult = await axios.get(url);
    return ligasResult;
  } catch (error) {
    return error.response;
  }
};

const createLiga = async values => {
  try {
    /* const USER_APP = functions.loadLocalStorage('');
    const token = USER_APP.token;
    const options = {
      headers: {
        Authorization: token
      }
    } */
    const url = `${env.API_URL}/api/ligas/create`;
    const ligasResult = await axios.post(url, values);
    return ligasResult;
  } catch (error) {
    return error.response;
  }
};

export { getLigas, createLiga };
