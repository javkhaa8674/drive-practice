import axios from "axios";

const instance = axios.create({
  baseURL: "https://merchant-sandbox.qpay.mn/v2",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
