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
        <Route path="/User/Edukasi/Materi" element={<Materi />} />
      </Route>
      <Route element={<MainLayout />}></Route>
      <Route path="*" element={<Navigate to={"/Login/"} replace/>}/>
    </Routes>
  );
};

export default App;
