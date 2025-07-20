import VideoPlayer from "./VideoPlayer";
import Topbar from "./components/Topbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-[#25293c] dark:via-[#2F3349] dark:to-[#373B59] transition-colors duration-200">
        <Topbar />
        {/* Main Content */}
        <div className="pt-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
