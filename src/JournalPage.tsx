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

  const updateJournalEntry = (text: string) => {
    setJournalEntries((prev) => ({
      ...prev,
      [selectedJournal]: text,
    }));
  };

  const updateSecondaryEntry = (text: string) => {
    setSecondaryEntries((prev) => ({
      ...prev,
      [selectedJournal]: text,
    }));
  };

  // Transitions for journal list and modal
  const journalTransitions = useTransition(journals, {
    from: { opacity: 0, transform: "translateX(-20px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    keys: journals,
  });

  const modalTransition = useTransition(showAddJournal, {
    from: { opacity: 0, scale: 0.9 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0.9 },
    config: { tension: 280, friction: 20 },
  });

  return (
    <div
      className={`flex h-screen font-mono relative ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-slate-100 text-black"
      }`}
    >
      {/* Icons (Search and Theme Toggle) */}
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

      {/* Sidebar */}
      <div
        className={`w-64 shadow-md p-4 flex flex-col ${
          isDarkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-slate-100 border-slate-200"
        }`}
      >
        {/* Header */}
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

        {/* Journal List */}
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
                    ? "bg-slate-600 text-white"
                    : "bg-black text-white"
                  : isDarkMode
                  ? "hover:bg-slate-700 text-white"
                  : "hover:bg-gray-200 text-black"
              }`}
              onClick={() => setSelectedJournal(journal)}
            >
              {journal}
            </animated.button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        <h1
          className={`text-2xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {selectedJournal}
        </h1>

        <div className="flex space-x-4 h-[calc(100vh-150px)]">
          {/* Primary Text Editor */}
          <div className="flex-[3] relative">
            <textarea
              className={`w-full h-full p-4 border rounded
                ${isDarkMode
                  ? "bg-slate-800 text-white placeholder-slate-400 border-slate-700 focus:border-slate-500"
                  : "bg-white text-black placeholder-gray-500 border-gray-300 focus:border-gray-500"
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

          {/* Secondary Text Editor */}
          <div className="flex-[1]">
            <textarea
              className={`w-full h-full p-4 border rounded
                ${isDarkMode
                  ? "bg-slate-800 text-white placeholder-slate-400 border-slate-700 focus:border-slate-500"
                  : "bg-white text-black placeholder-gray-500 border-gray-300 focus:border-gray-500"
                }`}
              value={secondaryEntries[selectedJournal] || ""}
              onChange={(e) => updateSecondaryEntry(e.target.value)}
              placeholder={`Additional notes for ${selectedJournal}...`}
            />
          </div>
        </div>
      </div>

      {/* Add Journal Modal */}
      {modalTransition((style, item) =>
        item && (
          <animated.div
            style={style}
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div
              className={`p-6 rounded shadow-lg ${
                isDarkMode ? "bg-slate-800 text-white" : "bg-white text-black"
              }`}
            >
              <input
                type="text"
                value={newJournalName}
                onChange={(e) => setNewJournalName(e.target.value)}
                placeholder="New journal name"
                className={`w-full p-2 border rounded mb-4 ${
                  isDarkMode
                    ? "bg-slate-700 text-white placeholder-slate-400 border-slate-600 focus:border-slate-400"
                    : "bg-white text-black placeholder-gray-500 border-gray-300 focus:border-gray-500"
                }`}
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowAddJournal(false)}
                  className={`p-2 rounded ${
                    isDarkMode
                      ? "bg-slate-700 text-white hover:bg-slate-600"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={addJournal}
                  className={`p-2 rounded ${
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
