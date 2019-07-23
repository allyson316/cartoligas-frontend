import Dashboard from "views/Dashboard/Dashboard";
import Ligas from "views/Cadastros/Ligas/Ligas";
import Times from "views/Cadastros/Times/Times";
import Administradores from "views/Cadastros/Administradores/Administradores";
import Register from "views/pages/Register.jsx";
import Login from "views/pages/Login.jsx";
import Rodadas from "./views/Cadastros/Rodadas/Rodadas";

const routes = [
  // Rotas AUTH
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth",
    invisible: true
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    layout: "/auth",
    invisible: true
  },

  // Rotas normais
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Cadastros",
    icon: "tim-icons icon-image-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/administradores",
        name: "Administradores",
        mini: "A",
        component: Administradores,
        layout: "/admin"
      },
      {
        path: "/ligas",
        name: "Ligas",
        mini: "L",
        component: Ligas,
        layout: "/admin"
      },
      {
        path: "/times",
        name: "Times",
        mini: "T",
        component: Times,
        layout: "/admin"
      },
      {
        path: "/rodadas",
        name: "Rodadas",
        mini: "R",
        component: Rodadas,
        layout: "/admin"
      }
    ]
  }
];

export default routes;
