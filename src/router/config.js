import sidebar from "./sidebar";

import Layout from "views/Layout";
import MainApp from "containers/MainApp";

// Views

import UserView from "views/User";
import InteractionView from "views/Interactions";
import PostView from "views/Post";

export default [
  {
    path: "/",
    component: Layout,
    exact: true
  },
  {
    path: "/app",
    component: MainApp,
    sidebar,
    router: [
      { path: "/app/users", component: UserView, exact: true },
      { path: "/app/Interactions", component: InteractionView, exact: true },
      { path: "/app/post", component: PostView, exact: true }
    ]
  }
];
