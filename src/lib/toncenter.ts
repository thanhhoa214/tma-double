import { OpenAPIClientAxios } from "openapi-client-axios";
// import { TONCENTER_API_KEY } from "../environment";
import type { Client } from "../toncenter.d";

const api = new OpenAPIClientAxios({
  definition: "https://testnet.toncenter.com/api/v3/openapi.json",
  axiosConfigDefaults: {
    baseURL: "https://testnet.toncenter.com",
  },
});

export const getApiClient = async () => {
  const client = await api.getClient<Client>();

  // add auth token
  //   client.defaults.headers["authorization"] = `${TONCENTER_API_KEY}`;

  return client;
};
