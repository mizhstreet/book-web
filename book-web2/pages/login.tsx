import React from "react";
import Page from "../components/page";

import { PageBannerTitle } from "../components/page-banner-title";
import { LoginForm } from "../components/login/login-form";

const Login: React.FC = () => {
  return (
    <Page title="Lucy Crehan">
      <PageBannerTitle title="Contact us" />
      <LoginForm />
    </Page>
  );
};

export default Login;
