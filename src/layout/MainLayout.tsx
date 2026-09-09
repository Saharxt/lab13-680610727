import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        <div className="col-2 col-md-2 p-0">
          <Sidebar userName="Saharat" type="student" />
        </div>
        <div className="col-10 col-md-10 p-0">
          <Header />

          <main className="flex-grow-1 p-4 min-vh-100">
            <Outlet />
          </main>

          <Footer
            year="2026"
            fullName="Saharat Apiratmontree"
            studentId="680610727"
          />
        </div>
      </div>
    </div>
  );
}
