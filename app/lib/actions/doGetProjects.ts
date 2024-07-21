import { axios } from "../config/axios.config";


export default async function doGetProjects():Promise<any[]>  {
  try {
    const resp = await axios(`/projects`);
    if (resp) {
      return resp.data;
    }
  } catch (err: any) {
    console.log(err);
    throw err;
  }
  return [];
}
