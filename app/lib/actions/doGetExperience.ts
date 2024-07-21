import { axios } from "../config/axios.config";
import { ExperienceType } from "../types/generalTypes";



export default async function doGetExperience():Promise<ExperienceType[]>  {
  try {
    const resp = await axios(`/experience`);
    if (resp) {
      return resp.data;
    }
  } catch (err: any) {
    console.log(err);
    throw err;
  }
  return [];
}
