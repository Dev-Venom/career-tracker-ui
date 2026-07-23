import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <main className="dashboard-layout">
      <Outlet />
    </main>
  );
}

export default DashboardLayout;