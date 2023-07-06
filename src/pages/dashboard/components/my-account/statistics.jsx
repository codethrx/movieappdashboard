import StatImage from "../../../../assets/stats.png";
import {
  CircularProgressbar,
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;
export function MyAccountStats(props) {
  const cardsContent = [
    {
      title: "Profile Views of you",
      percentage: "30%",
      icon: (
        <svg
          width="37"
          height="27"
          viewBox="0 0 37 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10.1914" cy="7.11068" r="4.58333" fill="#D1D9E1" />
          <circle cx="26.6914" cy="7.11068" r="4.58333" fill="#D1D9E1" />
          <ellipse
            opacity="0.4"
            cx="18.4414"
            cy="20.8607"
            rx="11"
            ry="5.5"
            fill="#747474"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.6815 24.5043C28.3988 23.534 29.4413 22.2582 29.4413 20.8607C29.4413 18.6846 26.9136 16.8036 23.2463 15.9118C24.5433 15.5603 26.029 15.3607 27.6079 15.3607C32.6705 15.3607 36.7746 17.4127 36.7746 19.9441C36.7746 22.4754 32.6705 24.5274 27.6079 24.5274C27.2952 24.5274 26.9861 24.5196 26.6815 24.5043Z"
            fill="white"
          />
          <ellipse
            cx="9.27473"
            cy="19.944"
            rx="9.16667"
            ry="4.58333"
            fill="white"
          />
          <ellipse
            cx="27.6081"
            cy="19.944"
            rx="9.16667"
            ry="4.58333"
            fill="white"
          />
          <ellipse cx="18.4414" cy="20.8607" rx="11" ry="5.5" fill="#DDD1E1" />
          <circle cx="18.4414" cy="6.19403" r="5.5" fill="white" />
        </svg>
      ),
      description: "3500",
      color: "#2884FF",
    },
    {
      title: "Viewing Time",
      percentage: "70%",
      icon: (
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.94141 18.8607V7.8607C5.94141 5.83565 7.58303 4.19403 9.60808 4.19403H15.0399C15.9281 4.19403 16.786 4.5164 17.4544 5.10125L19.3559 6.76507C20.1516 7.46132 20.6081 8.46719 20.6081 9.52451V18.8607C20.6081 20.8857 18.9664 22.5274 16.9414 22.5274H9.60807C7.58303 22.5274 5.94141 20.8857 5.94141 18.8607Z"
            fill="#D1D9E1"
          />
          <path
            d="M24.2747 37.194V26.194C24.2747 24.169 25.9164 22.5273 27.9414 22.5273H33.3732C34.2614 22.5273 35.1194 22.8497 35.7878 23.4346L37.6893 25.0984C38.485 25.7946 38.9414 26.8005 38.9414 27.8578V37.194C38.9414 39.2191 37.2998 40.8607 35.2747 40.8607H27.9414C25.9164 40.8607 24.2747 39.2191 24.2747 37.194Z"
            fill="#D1D9E1"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.8164 11.5273C23.8164 10.768 24.432 10.1523 25.1914 10.1523H29.7747C32.5592 10.1523 34.8164 12.4096 34.8164 15.194V17.944C34.8164 18.7034 34.2008 19.319 33.4414 19.319C32.682 19.319 32.0664 18.7034 32.0664 17.944V15.194C32.0664 13.9284 31.0404 12.9023 29.7747 12.9023H25.1914C24.432 12.9023 23.8164 12.2867 23.8164 11.5273ZM11.4414 25.7357C12.2008 25.7357 12.8164 26.3513 12.8164 27.1107V29.8607C12.8164 31.1263 13.8424 32.1523 15.1081 32.1523H19.6914C20.4508 32.1523 21.0664 32.768 21.0664 33.5273C21.0664 34.2867 20.4508 34.9023 19.6914 34.9023H15.1081C12.3236 34.9023 10.0664 32.6451 10.0664 29.8607V27.1107C10.0664 26.3513 10.682 25.7357 11.4414 25.7357Z"
            fill="white"
          />
        </svg>
      ),
      description: "0:18 minutes",
      color: "#FFBF43",
    },
    {
      title: "Return Visitors",
      percentage: "30%",
      icon: (
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="22.4414"
            cy="31.694"
            rx="12.8333"
            ry="7.33333"
            fill="#D1D9E1"
          />
          <circle cx="22.4414" cy="13.3607" r="7.33333" fill="white" />
        </svg>
      ),
      description: "2000",
      color: "#65F9B3",
    },
    {
      title: "New Visitors",
      percentage: "25%",
      icon: (
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9239 36.171L1.94636 29.363C0.513433 28.7116 0.513436 26.6763 1.94636 26.025L16.9239 19.217C17.888 18.7788 18.9944 18.7788 19.9585 19.217L34.9361 26.025C36.369 26.6763 36.369 28.7116 34.9361 29.363L19.9585 36.171C18.9944 36.6092 17.888 36.6092 16.9239 36.171Z"
            fill="#D1D9E1"
          />
          <path
            d="M16.9239 27.0043L1.94636 20.1963C0.513433 19.545 0.513436 17.5097 1.94636 16.8583L16.9239 10.0503C17.888 9.61213 18.9944 9.61213 19.9585 10.0503L34.9361 16.8583C36.369 17.5097 36.369 19.545 34.9361 20.1963L19.9585 27.0043C18.9944 27.4425 17.888 27.4425 16.9239 27.0043Z"
            fill="white"
          />
          <path
            d="M16.9239 17.8376L1.94636 11.0296C0.513433 10.3783 0.513436 8.34297 1.94636 7.69164L16.9239 0.883649C17.888 0.44544 18.9944 0.445441 19.9585 0.883649L34.9361 7.69164C36.369 8.34297 36.369 10.3783 34.9361 11.0296L19.9585 17.8376C18.9944 18.2758 17.888 18.2758 16.9239 17.8376Z"
            fill="#D1D9E1"
          />
        </svg>
      ),
      description: "2000",
      color: "#FE517E",
    },
  ];
  return (
    <div className="flex">
      <div className="w-[644px] mr-[60px]">
        <div className="flex items-center justify-between py-2">
          <h3 className="text-xl">Recent Stats</h3>
          <div className="relative">
            <select className="bg-transparent border-b-2 border-white w-[196px] text-base">
              <option value="7days">7 days</option>
            </select>
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-[2.5px] top-2"
            >
              <path
                opacity="0.9"
                d="M4.86189 7.57332L0.853558 3.56499C0.365364 3.07679 0.25642 2.51819 0.526725 1.88919C0.796003 1.25917 1.27752 0.944153 1.97127 0.944153H9.91085C10.6046 0.944153 11.0861 1.25917 11.3554 1.88919C11.6257 2.51819 11.5168 3.07679 11.0286 3.56499L7.02023 7.57332C6.86606 7.72749 6.69904 7.84311 6.51918 7.92019C6.33932 7.99728 6.14661 8.03582 5.94106 8.03582C5.7355 8.03582 5.54279 7.99728 5.36293 7.92019C5.18307 7.84311 5.01606 7.72749 4.86189 7.57332Z"
                fill="#999DA8"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap gap-[20px] mt-[40px] justify-between">
          {cardsContent.map(
            ({ title, icon, description, percentage, color }) => {
              return (
                <div
                  key={title}
                  className="w-[310px] h-[92px] bg-[#0A163B] rounded-md flex items-center p-[13px]"
                >
                  <div className="bg-[#3D4268] rounded-md h-[66px] w-[66px] flex items-center justify-center rounded-md mr-[19px]">
                    {icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm mb-2 font-light">{title}</p>
                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-xl font-bold">{description}</h4>
                      <div className="flex ">
                        <svg
                          width="12"
                          height="19"
                          viewBox="0 0 12 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2"
                        >
                          <path
                            d="M4.43721 1.39579C5.10574 0.237859 6.77707 0.237861 7.44561 1.3958L11.2061 7.90918C11.8746 9.06712 11.039 10.5145 9.70191 10.5145H2.1809C0.843829 10.5145 0.00816454 9.06712 0.676699 7.90918L4.43721 1.39579Z"
                            fill={color}
                          />
                          <rect
                            x="4.78366"
                            y="12.2515"
                            width="1.7369"
                            height="6.07916"
                            fill={color}
                          />
                        </svg>

                        <p style={{ color }}>{percentage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <h2 className="text-xl mt-3">Activity This Week</h2>
        <div className="flex mt-4 ">
          <div className="flex flex-col items-center shrink-0 mr-[45px]">
            <ProgressBar strokeTrial={"#9E9E9E"} strokePath={"#FF6826"} />
            <p className="w-[130px] text-base text-center mt-2">
              Job Seeker Visitor
            </p>
          </div>
          <div className="flex flex-col items-center shrink-0 mr-[30px]">
            <ProgressBar value={33} strokePath={"#1DC624"} />
            <p className="w-[130px] text-base text-center mt-2">
              Employer Visitor
            </p>
          </div>
          <div className="flex flex-col items-center h-[167px] mr-[45px]">
            <ProgressBar strokePath={"#9E9E9E"} />
            <p className="w-[130px] text-base text-center mt-2">
              Service Provider Visitor
            </p>
          </div>
          <div className="flex flex-col  items-center h-[167px] mr-[45px]">
            <ProgressBar strokePath={"#FFBF43"} />
            <p className="w-[130px] text-base text-center mt-2">Fan Visitor</p>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-[505px]  ">
        <img src={StatImage} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

const ProgressBar = ({ strokeTrial, strokePath, value = 66 }) => {
  return (
    <CircularProgressbar
      value={value}
      text={`${value}%`}
      counterClockwise
      strokeWidth={12}
      background
      styles={{
        // Customize the root svg element
        root: {
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        // Customize the path, i.e. the "completed progress"
        path: {
          // Path color
          stroke: strokePath,
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",
          // Customize transition animation
          transition: "stroke-dashoffset 0.5s ease 0s",
          // Rotate the path
          transform: "rotate(0.25turn)",
          transformOrigin: "center center",
        },
        // Customize the circle behind the path, i.e. the "total progress"
        trail: {
          // Trail color
          stroke: strokeTrial,
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",
          // Rotate the trail
          transform: "rotate(0.25turn)",
          transformOrigin: "center center",
        },
        // Customize the text
        text: {
          // Text color
          fill: "black",
          // Text size
          fontSize: "16px",
          fontWeight: "bold",
        },
        // Customize background - only used when the `background` prop is true
        background: {
          fill: "white",
        },
      }}
    />
  );
};
