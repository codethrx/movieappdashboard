import "./styles.css";
import { DashboardBody } from "./dashboard-body";
import { DashboardSidebar } from "./dashboard-sidebar";
export function Dashboard({}) {
  return (
    <div className="flex dashboard">
      <DashboardSidebar />
      <DashboardBody />
    </div>
  );
}
