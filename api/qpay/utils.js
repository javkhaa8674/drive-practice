import axios from "axios";
import config from "./config";

export const GetToken = () => {
  axios.get(config.baseURL, {
    params: {
      ContentType: "application/json",
    },
  });
};

export const CreateTestInvoice = () => {};
