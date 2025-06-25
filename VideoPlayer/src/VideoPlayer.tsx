import { VeltVideoPlayer } from "@veltdev/react";
import { useTheme } from "./context/ThemeContext";

const VideoPlayer = () => {
  const { theme } = useTheme();
  return (
    <div className="relative">
      {/* Video Container */}
      <div className="relative rounded-lg overflow-hidden bg-gray-900">
        <VeltVideoPlayer
          src={
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
          }
          darkMode={theme === "dark"}
          sync={true}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
