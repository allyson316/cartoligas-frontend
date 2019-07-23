import axios from "axios";
import env from "../../../environment";

const getTimesByCartolaFc = async value => {
  try {
    /* const USER_APP = functions.loadLocalStorage('');
    const token = USER_APP.token;
    const options = {
      headers: {
        Authorization: token
      }
    } */
    const url = `${env.API_URL}/timesCartola?time=${value}`;
    const timesResult = await axios.get(url);
    return timesResult;
  } catch (error) {
    return error.response;
  }
};

const post = async values => {
  try {
    /* const USER_APP = functions.loadLocalStorage('');
    const token = USER_APP.token;
    const options = {
      headers: {
        Authorization: token
      }
    } */
    const url = `${env.API_URL}/times`;
    const timeResult = await axios.post(url, values);
    return timeResult;
  } catch (error) {
    return error.response;
  }
};

export { getTimesByCartolaFc, post };
