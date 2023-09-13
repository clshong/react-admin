import { httpClient } from "../index";


export const getData = () => {
  return httpClient.get("yiyan/?code=js");
};
