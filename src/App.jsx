import { Routes, Route } from "react-router-dom";
import AdminLayout from "./shared/components/layouts/admin/AdminLayout";
import AdminLogin from "./pages/admin/login/AdminLoginPage";
import AdminHome from "./pages/admin/home/AdminHomePage";
import StudentListPage from "./pages/admin/student list/StudentListPage";
import StudentLoginPage from "./pages/student/login/StudentLoginPage";
import StudentLoginLayout from "./shared/components/layouts/student/StudentLoginLayout";
import AboutPage from "./pages/student/about/AboutPage";
import StudentMainLayout from "./shared/components/layouts/student/StudentMainLayout";
import HomePage from "./pages/student/home/HomePage";
import AnnouncementPage from "./pages/student/announcement/AnnouncementPage";
import ActivityHistoryPage from "./pages/student/activity_history/ActivityHistoryPage";
import CountTheFruitGame from "./pages/games/CountTheFruitGame";
import AdminAnnouncementPage from "./pages/admin/announcement/AdminAnnouncementPage";

function App() {
  return (
    <>
      <Routes>
        {/* admin routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/student" element={<StudentListPage />} />
          <Route
            path="/admin/announcement"
            element={<AdminAnnouncementPage />}
          />
        </Route>
        {/* student routes */}

        <Route element={<StudentLoginLayout />}>
          <Route path="/" element={<StudentLoginPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        <Route element={<StudentMainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/announcement" element={<AnnouncementPage />} />
          <Route path="/history" element={<ActivityHistoryPage />} />
        </Route>
        {/* game routes */}
        <Route path="/count-the-fruits" element={<CountTheFruitGame />} />
      </Routes>
    </>
  );
}

export default App;
