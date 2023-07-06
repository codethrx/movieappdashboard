import Logo from "../../assets/logo.png";
import { useStore } from "../../libs/store";
export function DashboardSidebar({}) {
  const data = useStore((state) => state.dashboardURLs);
  const updateActiveURL = useStore((state) => state.updateActiveURL);
  const updateDashboard = (payload) => () => {
    updateActiveURL(payload);
  };
  return (
    <div className="bg-[#0A163B] w-[301px] ">
      <div className="mt-[57px] ml-[40px] mb-[86px] flex items-center justify-between">
        <img src={Logo} alt="Logo" className="" />
        <svg
          className=""
          width="21"
          height="44"
          viewBox="0 0 21 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.441406 10.6107C0.441406 5.08786 4.91856 0.610718 10.4414 0.610718H20.4414V43.1237H10.4414C4.91856 43.1237 0.441406 38.6466 0.441406 33.1237V10.6107Z"
            fill="#2D325A"
          />
          <path
            d="M12.4414 16.5531L8.44141 21.8672L12.4414 27.1814"
            stroke="#EAEAEA"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className="pl-[45px] pr-8 font-[500]">
        {data.map(({ icon: svg, title, optionalIcon }) => (
          <div
            key={title}
            className="flex mb-[42px] items-center font-[500]"
            onClick={updateDashboard(title)}
          >
            {svg}
            <h3 className="text-lg text-white">{title}</h3>
            {optionalIcon}
          </div>
        ))}
      </div>
    </div>
  );
}
