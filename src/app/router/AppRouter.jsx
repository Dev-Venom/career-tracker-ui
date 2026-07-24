import { Routes, Route } from "react-router-dom";

import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Dashboard from "../../pages/Dashboard/Dashboard";
import NewApplication from "../../pages/Applications/NewApplication";
import EditApplication from "../../pages/Applications/EditApplication";
import KanbanBoard from "../../pages/Applications/KanbanBoard/KanbanBoard";
import InterviewList from "../../pages/Interviews/InterviewList/InterviewList";
import ScheduleInterview from "../../pages/Interviews/ScheduleInterview/ScheduleInterview";
import EditInterview from "../../pages/Interviews/EditInterview/EditInterview";
import Notification from "../../pages/Notifications/Notification";
import MainLayout from "../../components/layout/MainLayout";
import Profile from "../../pages/Profile/Profile";
import Analytics from "../../pages/Analytics/Analytics";

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/applications/new" element={<NewApplication />} />

        <Route path="/applications/:id/edit" element={<EditApplication />} />

        <Route path="/applications/board" element={<KanbanBoard />} />

        <Route path="/interviews" element={<InterviewList />} />

        <Route path="/interviews/new" element={<ScheduleInterview />} />

        <Route path="/interviews/:id/edit" element={<EditInterview />} />

        <Route path="/notifications" element={<Notification />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
