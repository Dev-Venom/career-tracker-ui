import "./MainLayout.css";

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Sidebar from "../SideBar";

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return (
    <div className="main-layout">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {sidebarOpen && (
        <div
          className="main-layout__overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="main-layout__body">
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="main-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
