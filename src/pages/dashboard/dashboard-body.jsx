import { useStore } from "../../libs/store";
import { MyAccount } from "./components/my-account/my-account";
export function DashboardBody(props) {
  const activeURL = useStore((state) => state.activeURL);
  console.log(activeURL);
  const rednerDashboardBody = () => {
    switch (activeURL) {
      case "My Account":
        return <MyAccount />;
      case "My Adverts":
        return (
          <div>
            <h1>My Adverts</h1>
          </div>
        );
      case "My Projects":
        return (
          <div>
            <h1>My Projects</h1>
          </div>
        );
      case "Post a Project":
        return (
          <div>
            <h1>Post a Project</h1>
          </div>
        );
      case "My Jobs":
        return (
          <div>
            <h1>My Jobs</h1>
          </div>
        );
      case "Applicants":
        return (
          <div>
            <h1>Applicants</h1>
          </div>
        );
      case "Interviews":
        return (
          <div>
            <h1>Interviews</h1>
          </div>
        );
      case "Shorllisted":
        return (
          <div>
            <h1>Shortlisted</h1>
          </div>
        );
      case "My Votes":
        return (
          <div>
            <h1>My Votes</h1>
          </div>
        );
      case "My Reviews":
        return (
          <div>
            <h1>My Reviews</h1>
          </div>
        );
      case "Project":
        return (
          <div>
            <h1>Project</h1>
          </div>
        );
      case "Shortlisted":
        return (
          <div>
            <h1>Shortlisted</h1>
          </div>
        );
      case "Post a Job":
        return (
          <div>
            <h1>Post a job</h1>
          </div>
        );
      case "My Watchlist":
        return (
          <div>
            <h1>My Watchlist</h1>
          </div>
        );
      case "Events":
        return (
          <div>
            <h1>Events</h1>
          </div>
        );
    }
  };
  return <div className="dashboard-body flex-1">{rednerDashboardBody()}</div>;
}
