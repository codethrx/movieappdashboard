export function MyAccountJob() {
  const avatars = [...new Array(399)].map((elem) => (
    <img
      key={elem}
      src="https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
      className="w-[72px] h-[72px] rounded-full object-cover"
    />
  ));
  const data = [
    { number: 20, title: "Hair Styler", posted: "2 days ago" },
    { number: 20, title: "Project management lead", posted: "3 days ago" },
    { number: 20, title: "Hair Styler", posted: "4 days ago" },
    { number: 20, title: "Abc", posted: "2 days ago" },
  ];
  return (
    <div className="flex mt-[41px]">
      <div className="w-[644px] h-[477px] bg-[#0A163B] mr-[60px] scrollbar-[1px] overflow-x-hidden overflow-y-scroll scrollbar scrollbar-w-[2px] scrollbar-thumb-white scrollbar-h-[23px] rounded-md pt-[24px] pl-[42px]">
        <div className="flex">
          <h2 className="flex-1  text-lg font-light underline text-[#F69E1E]">
            Job
          </h2>
          <h2 className="flex-[2]  text-lg font-light underline">
            Application
          </h2>
          <h2 className="flex-1  text-lg font-light">Interviews</h2>
        </div>
        {data.map((elem, index) => (
          <div
            className={`flex pt-[15px] pb-[9px]  ${
              (index + 1) % 2 === 0 ? "bg-[#010D25]" : "transparent"
            }`}
            key={index}
          >
            <div className="flex-1 ">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="10.7539"
                  cy="12.2148"
                  rx="3.4375"
                  ry="3.4375"
                  fill="#D1D9E1"
                />
                <circle cx="23.1289" cy="12.2148" r="3.4375" fill="#D1D9E1" />
                <ellipse
                  opacity="0.4"
                  cx="16.9414"
                  cy="22.5273"
                  rx="8.25"
                  ry="4.125"
                  fill="#747474"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.1215 25.26C24.4095 24.5323 25.1913 23.5755 25.1913 22.5273C25.1913 20.8952 23.2956 19.4845 20.5451 18.8157C21.5178 18.552 22.6321 18.4023 23.8163 18.4023C27.6133 18.4023 30.6913 19.9414 30.6913 21.8398C30.6913 23.7383 27.6133 25.2773 23.8163 25.2773C23.5818 25.2773 23.35 25.2715 23.1215 25.26Z"
                  fill="white"
                />
                <ellipse
                  cx="10.0664"
                  cy="21.8398"
                  rx="6.875"
                  ry="3.4375"
                  fill="white"
                />
                <ellipse
                  cx="23.8164"
                  cy="21.8398"
                  rx="6.875"
                  ry="3.4375"
                  fill="white"
                />
                <ellipse
                  cx="16.9414"
                  cy="22.5273"
                  rx="8.25"
                  ry="4.125"
                  fill="#DDD1E1"
                />
                <ellipse
                  cx="16.9414"
                  cy="11.5273"
                  rx="4.125"
                  ry="4.125"
                  fill="white"
                />
              </svg>
              <p className="text-lg ml-2">{elem.number}</p>
            </div>
            <div className="flex-[2]">
              <h2 className="text-[20px] font-[500] text-sm mb-1">
                {elem.title}
              </h2>
              <h3 className=" text-sm font-[400]">{elem.posted}</h3>
            </div>
            <div className="flex-1">
              <svg
                width="8"
                height="33"
                viewBox="0 0 8 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.94141 28.7773C7.94141 30.7103 6.3744 32.2773 4.44141 32.2773C2.50841 32.2773 0.941406 30.7103 0.941406 28.7773C0.941406 26.8443 2.50841 25.2773 4.44141 25.2773C6.3744 25.2773 7.94141 26.8443 7.94141 28.7773Z"
                  fill="white"
                />
                <path
                  d="M7.94141 16.5273C7.94141 18.4603 6.3744 20.0273 4.44141 20.0273C2.50841 20.0273 0.941406 18.4603 0.941406 16.5273C0.941406 14.5943 2.50841 13.0273 4.44141 13.0273C6.3744 13.0273 7.94141 14.5943 7.94141 16.5273Z"
                  fill="white"
                />
                <path
                  d="M7.94141 4.27734C7.94141 6.21034 6.3744 7.77734 4.44141 7.77734C2.50841 7.77734 0.941406 6.21034 0.941406 4.27734C0.941406 2.34435 2.50841 0.777344 4.44141 0.777344C6.3744 0.777344 7.94141 2.34435 7.94141 4.27734Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[400px] h-[477px]  bg-[#0A163B] pt-[45px] px-[21px] rounded-md flex flex-wrap overflow-y-scroll scrollbar gap-3 scrollbar-thin scrollbar-w-[2px] scrollbar-thumb-white scrollbar-h-[23px]">
        {avatars}
      </div>
    </div>
  );
}
