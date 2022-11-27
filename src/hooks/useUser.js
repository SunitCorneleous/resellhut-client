import { useEffect, useState } from "react";

const useUser = email => {
  const [userType, setUserType] = useState();
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    fetch(`https://resellx-server.vercel.app/usertype?email=${email}`)
      .then(res => res.json())
      .then(data => {
        setUserType(data.userType);
        setUserLoading(false);
      });
  }, [email]);

  return [userType, userLoading];
};

export default useUser;
