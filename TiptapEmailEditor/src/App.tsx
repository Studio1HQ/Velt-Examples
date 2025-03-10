import { useState } from "react";
import EmailComposer from "./components/EmailComposer";
import Sidebar from "./components/Sidebar";
import { Menu } from "lucide-react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#373B59] text-white"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        z-30 lg:z-auto
      `}
      >
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gradient-to-br from-[#25293c] via-[#2F3349] to-[#373B59] p-4 sm:p-6 overflow-auto">
        <div className="max-w-4xl mx-auto pt-14 lg:pt-0">
          <EmailComposer />
        </div>
      </div>
    </div>
  );
}

export default App;
