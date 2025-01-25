import { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import "./index.css";
import { IoMdAddCircle } from "react-icons/io";
import { GiFeather } from "react-icons/gi";
import { TbLogout2 } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaSearch } from "react-icons/fa";  

function JournalPage() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const [journals, setJournals] = useState(() => {
    const savedJournals = localStorage.getItem("journals");
    return savedJournals ? JSON.parse(savedJournals) : ["Personal Diary"];
  });

  const [selectedJournal, setSelectedJournal] = useState(journals[0]);
  const [newJournalName, setNewJournalName] = useState("");
  const [showAddJournal, setShowAddJournal] = useState(false);
  const [journalEntries, setJournalEntries] = useState(() => {
    const savedEntries = localStorage.getItem("journalEntries");
    return savedEntries ? JSON.parse(savedEntries) : {};
  });
  const [secondaryEntries, setSecondaryEntries] = useState(() => {
    const savedSecondaryEntries = localStorage.getItem("secondaryEntries");
    return savedSecondaryEntries ? JSON.parse(savedSecondaryEntries) : {};
  });

  // Existing useEffect hooks remain the same

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const addJournal = () => {
    if (newJournalName && !journals.includes(newJournalName)) {
      const updatedJournals = [...journals, newJournalName];
      setJournals(updatedJournals);
      setSelectedJournal(newJournalName);
      setNewJournalName("");
      setShowAddJournal(false);
    }
  };

  // Animated transitions for journal list
  const journalTransitions = useTransition(journals, {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    keys: journals
  });

  // Animated modal transition
  const modalTransition = useTransition(showAddJournal, {
    from: { opacity: 0, scale: 0.9 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.9 },
    config: { tension: 280, friction: 20 }
  });

  return (
    <div
      className={`flex h-screen font-mono relative ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-slate-100 text-black"
      }`}
    >
      {/* Icons (Search and Theme Toggle) - Animated hover effect */}
      <div className="absolute top-4 right-4 z-10 flex space-x-4">
        <button
          onClick={() => console.log("Search clicked")}
          className="cursor-pointer transform transition-transform hover:scale-110"
          aria-label="Search"
        >
          <FaSearch size={25} className={isDarkMode ? "text-white" : "text-black"} />
        </button>

        <button
          onClick={toggleTheme}
          className="cursor-pointer transform transition-transform hover:scale-110"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? (
            <MdLightMode size={30} className="text-white" />
          ) : (
            <MdDarkMode size={30} className="text-black" />
          )}
        </button>
      </div>

      {/* Sidebar - Animated Journal List */}
      <div
        className={`w-64 shadow-md p-4 flex flex-col ${
          isDarkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-slate-100 border-slate-200"
        }`}
      >
        {/* Header with Feather Icon and Journal Name */}
        <div
          className={`flex items-center space-x-4 border-b-2 mb-3 ${
            isDarkMode ? "border-slate-700" : "border-black"
          }`}
        >
          <GiFeather size={35} className="self-center" />
          <h2
            className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            "User's" Journal
          </h2>
        </div>

        {/* Journal List with Animated Entries */}
        <div
          className={`space-y-2 mb-4 flex-grow border ${
            isDarkMode
              ? "border-slate-700 bg-slate-800"
              : "border-black bg-white"
          }`}
        >
          {journalTransitions((style, journal) => (
            <animated.button
              style={style}
              key={journal}
              className={`w-full text-left p-2 rounded ${
                selectedJournal === journal
                  ? isDarkMode
                    ? "bg-slate-600"
                    : "bg-black text-white"
                  : isDarkMode
                  ? "hover:bg-slate-700 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedJournal(journal)}
            >
              {journal}
            </animated.button>
          ))}
        </div>

        {/* Logout and Settings Buttons */}
        <div
          className={`border-t pt-2 space-y-4 ${
            isDarkMode ? "border-slate-700" : "border-gray-300"
          }`}
        >
          <div className="flex items-center space-x-2 mb-2">
            <TbLogout2
              size={25}
              className={`${
                isDarkMode
                  ? "text-white hover:text-gray-300"
                  : "text-black hover:text-gray-600"
              }`}
            />
            <button
              onClick={() => console.log("Logout clicked")}
              className={`${
                isDarkMode
                  ? "text-white hover:text-gray-300"
                  : "text-black hover:text-gray-600"
              }`}
            >
              Logout
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <IoSettings
              size={25}
              className={`${
                isDarkMode
                  ? "text-white hover:text-gray-300"
                  : "text-black hover:text-gray-600"
              }`}
            />
            <button
              onClick={() => console.log("Settings clicked")}
              className={`${
                isDarkMode
                  ? "text-white hover:text-gray-300"
                  : "text-black hover:text-gray-600"
              }`}
            >
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area with Animated Text Editors */}
      <div className="flex-grow p-6">
        <h1
          className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {selectedJournal}
        </h1>

        <div className="flex space-x-4 h-[calc(100vh-150px)]">
          {/* Primary Text Editor with Hover Animation */}
          <div className="flex-[3] relative group">
            <textarea
              className={`w-full h-full p-4 border rounded transition-all duration-300 
                ${isDarkMode
                  ? "bg-slate-800 text-white border-slate-700 group-hover:border-slate-500"
                  : "bg-white text-black border-gray-300 group-hover:border-gray-500"
                }`}
              value={journalEntries[selectedJournal] || ""}
              onChange={(e) => updateJournalEntry(e.target.value)}
              placeholder={`Start writing in ${selectedJournal}...`}
            />
            <button
              onClick={() => setShowAddJournal(true)}
              className="absolute bottom-4 right-4 transform transition-transform hover:scale-110"
            >
              <IoMdAddCircle size={50} color={isDarkMode ? "white" : "black"} />
            </button>
          </div>

          {/* Secondary Text Editor with Hover Animation */}
          <div className="flex-[1] group">
            <textarea
              className={`w-full h-full p-4 border rounded transition-all duration-300
                ${isDarkMode
                  ? "bg-slate-800 text-white border-slate-700 group-hover:border-slate-500"
                  : "bg-white text-black border-gray-300 group-hover:border-gray-500"
                }`}
              value={secondaryEntries[selectedJournal] || ""}
              onChange={(e) => updateSecondaryEntry(e.target.value)}
              placeholder={`Additional notes for ${selectedJournal}...`}
            />
          </div>
        </div>
      </div>

      {/* Animated Add Journal Modal */}
      {modalTransition((style, item) => 
        item && (
          <animated.div 
            style={style} 
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div
              className={`p-6 rounded shadow-lg transform transition-transform ${
                isDarkMode ? "bg-slate-800 text-white" : "bg-white text-black"
              }`}
            >
              <input
                type="text"
                value={newJournalName}
                onChange={(e) => setNewJournalName(e.target.value)}
                placeholder="New journal name"
                className={`w-full p-2 border rounded mb-4 transition-colors ${
                  isDarkMode
                    ? "bg-slate-700 border-slate-600 text-white focus:border-slate-400"
                    : "bg-white border-gray-300 focus:border-gray-500"
                }`}
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowAddJournal(false)}
                  className={`p-2 rounded transition-colors ${
                    isDarkMode
                      ? "bg-slate-700 text-white hover:bg-slate-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={addJournal}
                  className={`p-2 rounded transition-colors ${
                    isDarkMode
                      ? "bg-slate-600 text-white hover:bg-slate-500"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  Add
                </button>
              </div>
            </div>
          </animated.div>
        )
      )}
    </div>
  );
}

export default JournalPage;