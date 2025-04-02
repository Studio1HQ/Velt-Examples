import Image from "next/image";
import type React from "react";
import { useState } from "react";
import HomeIcon from "@/components/icons/home-icon";
import SheetIcon from "@/components/icons/sheet-icon";
import Settings from "@/components/icons/settings-icon";
import { useSearchParams } from "next/navigation";
export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const searchParams = useSearchParams();

  const focused = ( searchParams.get("focused")||"true" )  === "true";
  console.log(focused);
  return (
    <>
      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-40 p-1
        transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 transition-transform duration-200 ease-in-out
        border-r bg-background  flex flex-col h-screen border-[#F8F8F8] dark:border-[#ffffff14]
        ${isSidebarOpen ? "shadow-lg lg:shadow-none" : ""}
        ${focused ? " w-[240px] lg:w-[200px]" : ""}
      `}
      >
        <div className="flex items-center p-3 lg:hidden">
          {/* Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg transition-all duration-200 "
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                !isSidebarOpen ? "rotate-180" : "rotate-0"
              }`}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center p-3 border-b border-[#F8F8F8] dark:border-[#ffffff14]">
          <div className="h-8 w-8 rounded-full flex items-center justify-center text-amber-800 text-xs font-bold overflow-hidden">
            <Image
              src="https://velt-spreadsheet-app-demo.vercel.app/assets/bread_icon.png"
              alt="Bread Icon"
              width={24}
              height={24}
            />
          </div>
          {
            focused &&
          <span className="ml-2 text-sm font-urbanist tracking-wide">
            Bread's Workspace
          </span>
          }
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto px-3 gap-3">
          <SidebarItem icon={<HomeIcon />} label="Home" />
          <SidebarItem icon={<SheetIcon />} label="Sheets" active />
          <SidebarItem icon={<Settings />} label="Settings" />
        </div>

        <div className="p-4 mt-auto border-t border-[#F8F8F8] dark:border-[#ffffff14]">
          <span className="text-xs text-gray-500 flex items-center justify-center gap-2">
            <svg
              _ngcontent-ng-c4080216602=""
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                _ngcontent-ng-c4080216602=""
                d="M10.0222 3.36108L7.70703 6.75685L12.2858 7.11702L10.0222 3.36108Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M10.6336 3.15094L12.4857 6.135L12.2799 3.25382L10.6336 3.15094Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M12.9454 4.23627L13.1512 6.86025L14.1287 6.13991L12.9454 4.23627Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M14.0854 6.95581L13.2622 7.57318L13.5709 9.27106L14.0854 6.95581Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M10.3827 11.7404L12.7492 8.24182L13.2122 10.6085L10.3827 11.7404Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M9.98116 12.5818L10.2898 13.3621L12.0321 11.7581L9.98116 12.5818Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M9.39605 12.8528L7.31807 13.8919L9.70068 13.6451L9.39605 12.8528Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M8.52489 12.5761L5.77874 13.9532L5.1945 12.075L8.52489 12.5761Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M4.50987 12.031L5.02423 13.7083L2.57533 12.2668L4.50987 12.031Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M2.18729 8.27319L1.93544 11.6974L4.20177 11.4294L2.18729 8.27319Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M1.58851 7.69922L1.36881 10.7537L0.163193 8.02071L1.58851 7.69922Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M0.739556 4.48407L0.128693 7.37781L1.52743 7.07237L0.739556 4.48407Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M1.08539 3.44324L2.03383 6.50835L4.24689 2.69299L1.08539 3.44324Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M7.14317 7.77448L5.22588 11.4311L9.04391 12.0095L7.14317 7.77448Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M12.3015 7.72345L9.62925 11.7448L7.66312 7.39807L12.3015 7.72345Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M6.6262 7.39807L2.50319 7.60383L4.71548 11.0518L6.6262 7.39807Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M4.86401 2.90314L2.50319 6.94967L6.66926 6.75129L4.86401 2.90314Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M9.45835 3.04865L7.20872 6.40863L5.40466 2.59576L9.45835 3.04865Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M9.51378 0.745056L10.2369 2.49807L11.6247 2.59297L9.51378 0.745056Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M12.3153 2.08778L12.2775 2.3361L11.4899 1.62024L12.3153 2.08778Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M8.53053 0.0863647L5.76225 2.00007L9.50922 2.43102L8.53053 0.0863647Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M4.5358 0.367415L5.04707 1.73334L7.44294 0.0549927L4.5358 0.367415Z"
              ></path>
              <path
                _ngcontent-ng-c4080216602=""
                d="M3.96738 0.641541L1.80057 2.62005L4.463 1.9974L3.96738 0.641541Z"
              ></path>
            </svg>
            {
              focused && 
            <span className="whitespace-nowrap font-urbanist text-[9.6px] tracking-[0.15rem]">
              MADE WITH VELT.DEV
            </span>
            }
          </span>
        </div>
      </div>

      {/* Mobile Toggle Button - Only visible when sidebar is closed on mobile */}
      <button
        onClick={toggleSidebar}
        className={`fixed lg:hidden top-4 left-4 z-50 p-2 rounded-lg transition-all duration-200 ${
          isSidebarOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 text-gray-400"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  const searchParams = useSearchParams();

  const focused = ( searchParams.get("focused")||"true" ) === "true";
  console.log(focused);
  return (
    <div
      className={`flex items-center px-4 h-10 w-full font-urbanist text-xs ${
        active
          ? "bg-[#0000000a] dark:bg-[#ffffff14] text-[#000000cc] dark:text-[#ffffffcc] rounded-xl"
          : "text-[#00000070] dark:text-[#ffffff70] hover:bg-muted/50"
      }`}
    >
      <span className="mr-3">{icon}</span>
      {focused && <span className="text-sm whitespace-nowrap">{label}</span>}
    </div>
  );
}
