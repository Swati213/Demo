import React, { useState } from "react";
import Auth from "./Auth";
import AuthContext from "./useCon";

const Main = () => {
  const [authstatus, setauthstatus] = useState(false);
  const login = () => {
    setauthstatus(true);
  };

  return (
    <div>
      <React.Fragment>
        <AuthContext.Provider value={{ status: authstatus, login: login }}>
          <Auth />
        </AuthContext.Provider>
      </React.Fragment>
    </div>
  );
};

export default Main;
