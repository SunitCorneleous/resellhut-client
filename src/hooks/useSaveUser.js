import axios from "axios";
import { useEffect, useState } from "react";
import useToken from "./useToken";

const useSaveUser = user => {
  // get token
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);

  useEffect(() => {
    const url = "http://localhost:5000/users";

    if (user) {
      axios
        .post(url, user)
        .then(res => {
          console.log(res.data);

          if (res.data.acknowledged || res.data.exists) {
            setCreatedUserEmail(user.email);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [user]);

  return token;
};

export default useSaveUser;
