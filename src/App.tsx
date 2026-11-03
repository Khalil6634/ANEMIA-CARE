import { Routes, Route } from "react-router";
import MainLayout from "./layout/_AdminLayout";
import Edukasi from "./Pages/User/Edukasi";
import Kalendar from "./Pages/User/Kalendar";
import Profile from "./Pages/User/Profile";
import { Main } from "./Pages/User/main";
import Materi from "./Pages/User/Materi";
import PageLayout from "./layout/_PageLayout";
import UserLayout from "./layout/_UserLayout";
import { Navigate } from "react-router";
import { AdminBeranda } from "./Pages/Admin/main";
import { SignupPage } from "./Pages/User/Signup";
import { LoginPage } from "./Pages/User/Login";

const App = () => {
  return (
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/User" element={<Main />} />
        <Route path="/User/Edukasi" element={<Edukasi />} />
        <Route path="/User/Kalendar" element={<Kalendar />} />
        <Route path="/User/Profile" element={<Profile />} />
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/User/Edukasi/Materi/:id" element={<Materi />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/Admin/" element={<AdminBeranda />} />
      </Route>
      <Route path="*" element={<Navigate to={"/Login/"} replace/>}/>
      <Route path="/Signup/" element={<SignupPage/>}/>
      <Route path="/Login/" element={<LoginPage/>}/>
    </Routes>
  );
};

export default App;
