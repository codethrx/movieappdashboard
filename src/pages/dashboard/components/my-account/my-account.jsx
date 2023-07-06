import { MyAccountHeader } from "./header";
import { MyAccountStats } from "./statistics";
import { MyAccountJob } from "./job";
import { MyAccountGraph } from "./graph";
export function MyAccount(props) {
  return (
    <div className="pl-[40px] pr-[90px]">
      <MyAccountHeader />
      <MyAccountStats />
      <MyAccountGraph />
      <MyAccountJob />
    </div>
  );
}
