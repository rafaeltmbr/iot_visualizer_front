import { IDevice } from "../../interfaces/device";
import { api } from "../../services/api";

type FuncType = (id: string) => Promise<IDevice>;

export const getDevice: FuncType = async (id) => {
  const response = await api.get(`/device/${id}`);
  return response.data;
};
