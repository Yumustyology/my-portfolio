import { axios } from "../config/axios.config";

export const doSendMail = async ({
  message,
  email,
  subject,
}: {
  message: string;
  email: string;
  subject: string;
}) => {
  axios
    .post("/contactMe", { message, email, subject })
    .then((response:any) => {
      console.log(response);
    })
    .catch((err:any) => {
      console.log(err);
    });
};
