import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditHomeForm from "./Home/EditHomeForm";
import MembersResults from "./Members/MembersResults";
import ActivitiesTable from "./ActivitiesBackOffice/ActivitiesTable";
import CategoriesList from "./Categories/CategoriesList";
import BackofficeUsers from "./Users/BackofficeUsers";
import MemberEditCreate from "../Members/MemberEditCreate";
import OrganizationEditionForm from "../Organization/OrganizationEditionForm";
import SlidesForm from "../Slides/SlidesForm";
import NewsListEditTable from "../News/NewsListEditTable";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BackofficeLayout from "./BackofficeLayout/BackofficeLayout";
import { AnimatedSwitch } from "react-router-transition";
import ActivitiesForm from "../Activities/ActivitiesForm";
import CategoriesForm from "../Categories/CategoriesForm";
import NewsForm from "../News/NewsForm";
import TestimonialForm from "../Testimonials/TestimonialsForm";
import UserForm from "../Users/UsersForm";
import MembersForm from "../Members/MembersForm";
import ProjectsForm from "../Projects/ProjectsForm";
import BackofficeHeader from "./BackofficeHeader";
import "../../Styles/Container.css";

const BackOfficeRouter = () => {
  const path = "/backoffice";
  return (
    <>
      <Router>
        <BackofficeHeader />
        <AnimatedSwitch
          className="AnimatedSwitch"
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
        >
          <PrivateRoute exact path={path} component={BackofficeLayout} />
          <PrivateRoute
            path={`${path}/activities/edit/:activityId`}
            component={ActivitiesForm}
          />
          <PrivateRoute
            path={`${path}/testimonials/edit/:testimonialId`}
            component={TestimonialForm}
          />
          <PrivateRoute
            path={`${path}/projects/edit/:projectId`}
            component={ProjectsForm}
          />
          <PrivateRoute
            path={`${path}/news/edit/:newsid`}
            component={NewsForm}
          />
          <PrivateRoute
            path={`${path}/members/edit/:memberId`}
            component={MemberEditCreate}
          />
          <PrivateRoute
            path={`${path}/categories/edit/:categoryId`}
            component={CategoriesForm}
          />
          <PrivateRoute
            path={`${path}/organization/edit`}
            component={OrganizationEditionForm}
          />
          <PrivateRoute
            path={`${path}/activities/create`}
            component={ActivitiesForm}
          />
          <PrivateRoute
            path={`${path}/categories/create`}
            component={CategoriesForm}
          />
          <PrivateRoute path={`${path}/news/create`} component={NewsForm} />
          <PrivateRoute
            path={`${path}/testimonials/create`}
            component={TestimonialForm}
          />
          <PrivateRoute path={`${path}/users/create`} component={UserForm} />
          <PrivateRoute
            path={`${path}/members/create`}
            component={MembersForm}
          />
          <PrivateRoute
            path={`${path}/projects/create`}
            component={ProjectsForm}
          />
          <PrivateRoute path={`${path}/slides/create`} component={SlidesForm} />
          <PrivateRoute path={`${path}/slides`} component={EditHomeForm} />
          <PrivateRoute path={`${path}/members`} component={MembersResults} />
          <PrivateRoute path={`${path}/users`} component={BackofficeUsers} />
          <PrivateRoute
            path={`${path}/categories`}
            component={CategoriesList}
          />
          <PrivateRoute
            path={`${path}/activities`}
            component={ActivitiesTable}
          />
          <PrivateRoute path={`${path}/news`} component={NewsListEditTable} />
        </AnimatedSwitch>
      </Router>
    </>
  );
};

export default BackOfficeRouter;
