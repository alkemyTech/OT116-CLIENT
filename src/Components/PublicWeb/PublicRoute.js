import { Route } from "react-router-dom";
import Layout from "../Layout/Layout";

const PublicRoute = ({component:Component, ...rest}) => {
    return (
      <Route {...rest} render={() => (
        <Layout>
          <Component/>
        </Layout>
      )
      }/>
    )
}

export default PublicRoute;
