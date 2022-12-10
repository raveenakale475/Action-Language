import axios from "axios";

const Api = async (url = "all") => {
  try {
    let response = await axios.get(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${url}`
    );

    let data = await response.data.items;

    return data;
  } catch (err) {
    return err
  }
};

export default Api;
