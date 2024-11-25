import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import Projects from "./pages/Projects/Projects";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ResetPassword from "./pages/Sign Up_In/ResetPassword";
import SignIn from "./pages/Sign Up_In/SignIn";
import SignUp from "./pages/Sign Up_In/SignUp";

interface Routes {
  path: string;
  element: React.ReactNode;
}

const routes: Routes[] = [
  { path: "/", element: <Landing /> },
  { path: "/user/sign-up", element: <SignUp /> },
  { path: "/user/sign-in", element: <SignIn /> },
  { path: "/user/reset-password", element: <ResetPassword /> },
  // Change from /dashboard to :id
  { path: "/user/dashboard", element: <Dashboard /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/portfolio/:id", element: <PortfolioPage /> },
  { path: "/projects", element: <Projects /> },
  { path: "/projects/:id", element: <ProjectsPage /> },
  { path: "/about", element: <About /> },
];

export default routes;
