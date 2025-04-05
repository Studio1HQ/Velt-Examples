"use client";
import Image from "next/image";
import type React from "react";
import HomeIcon from "@/components/icons/home-icon";
import SheetIcon from "@/components/icons/sheet-icon";
import Settings from "@/components/icons/settings-icon";
import { useSearchParams } from "next/navigation";

export default function Sidebar() {
  const searchParams = useSearchParams();
  const focused = (searchParams.get("focused") || "true") === "true";

  return (
    <div
      className={`
        h-screen bg-background border-r border-[#f5f5f5] dark:border-[#ffffff14] flex flex-col
        w-[60px] sm:w-[60px] md:w-[80px] transition-transform duration-200 ease-in-out  ${
          focused ? " w-[240px] lg:w-[200px]" : ""
        }
      `}
    >
      {/* Logo */}
      <div
        className={`mx-auto ${
          focused && "lg:mx-0"
        } flex items-center justify-start p-3 dark:border-[#ffffff14]`}
      >
        <div className="h-8 w-8 rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src="https://velt-spreadsheet-app-demo.vercel.app/assets/bread_icon.png"
            alt="Bread Icon"
            width={24}
            height={24}
          />
        </div>
        {focused && (
          <span className="hidden lg:block ml-2 text-sm font-urbanist tracking-wide">
            Bread's Workspace
          </span>
        )}
      </div>

      {/* Nav Items */}
      <div className="flex flex-col flex-1 overflow-y-auto px-2 gap-3 mt-5">
        <SidebarItem icon={<HomeIcon />} label="Home" focused={focused} />
        <SidebarItem
          icon={<SheetIcon />}
          label="Sheets"
          active
          focused={focused}
        />
        <SidebarItem icon={<Settings />} label="Settings" focused={focused} />
      </div>

      {/* Footer */}
      <div className="p-4 mt-auto border-t border-[#f5f5f5] dark:border-[#ffffff14] cursor-pointer">
        <div className="text-xs text-gray-500 flex items-center justify-start gap-2 hover:text-black dark:hover:text-white/60">
          <svg
            _ngcontent-ng-c4080216602=""
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={`w-full  ${focused && "lg:w-auto"}`}
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
          {focused && (
            <span className="hidden lg:block whitespace-nowrap font-urbanist text-[9.6px] tracking-[0.15rem] hover:text-black dark:hover:text-white/60">
              MADE WITH VELT.DEV
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  active = false,
  focused = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  focused?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center lg:justify-start px-2 lg:px-4 h-10 w-full font-urbanist text-xs rounded-xl transition-colors duration-200 cursor-pointer hover:bg-[#0000000a] dark:hover:bg-[#ffffff14]
        ${
          active
            ? "bg-[#0000000a] dark:bg-[#ffffff14] text-[#000000cc] dark:text-[#ffffffcc]"
            : "text-[#00000070] dark:text-[#ffffff70] hover:bg-muted/50"
        }`}
    >
      <span className="">{icon}</span>
      {focused && (
        <span className="ps-3 text-sm whitespace-nowrap hidden lg:block">
          {label}
        </span>
      )}
    </div>
  );
}
