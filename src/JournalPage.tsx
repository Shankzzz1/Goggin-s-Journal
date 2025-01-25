import { useState, useEffect } from "react";
import "./index.css";
import { IoMdAddCircle } from "react-icons/io";
import { GiFeather } from "react-icons/gi";
import { TbLogout2 } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { MdDarkMode, MdLightMode } from "react-icons/md";

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

  useEffect(() => {
    localStorage.setItem("journals", JSON.stringify(journals));
  }, [journals]);

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
  }, [journalEntries]);

  useEffect(() => {
    localStorage.setItem("secondaryEntries", JSON.stringify(secondaryEntries));
  }, [secondaryEntries]);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

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

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleSettings = () => {
    console.log("Settings clicked");
  };

  return (
    <div
      className={`flex h-screen font-mono relative ${
        isDarkMode ? "bg-slate-900 text-white" : "bg-slate-100 text-black"
      }`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 z-10"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? (
          <MdLightMode size={30} className="text-white" />
        ) : (
          <MdDarkMode size={30} className="text-black" />
        )}
      </button>

      {/* Sidebar */}
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

        {/* Journal List */}
        <div
          className={`space-y-2 mb-4 flex-grow border ${
            isDarkMode
              ? "border-slate-700 bg-slate-800"
              : "border-black bg-white"
          }`}
        >
          {journals.map((journal) => (
            <button
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
            </button>
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
              onClick={handleLogout}
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
              onClick={handleSettings}
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

      {/* Main Content Area with Dual Text Editors */}
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
              className={`w-full h-full p-4 border rounded ${
                isDarkMode
                  ? "bg-slate-800 text-white border-slate-700"
                  : "bg-white text-black border-gray-300"
              }`}
              value={journalEntries[selectedJournal] || ""}
              onChange={(e) => updateJournalEntry(e.target.value)}
              placeholder={`Start writing in ${selectedJournal}...`}
            />
            {/* Add Journal Icon */}
            <button
              onClick={() => setShowAddJournal(true)}
              className="absolute bottom-4 right-4"
            >
              <IoMdAddCircle size={50} color={isDarkMode ? "white" : "black"} />
            </button>
          </div>

          {/* Secondary Text Editor */}
          <div className="flex-[1]">
            <textarea
              className={`w-full h-full p-4 border rounded ${
                isDarkMode
                  ? "bg-slate-800 text-white border-slate-700"
                  : "bg-white text-black border-gray-300"
              }`}
              value={secondaryEntries[selectedJournal] || ""}
              onChange={(e) => updateSecondaryEntry(e.target.value)}
              placeholder={`Additional notes for ${selectedJournal}...`}
            />
          </div>
        </div>
      </div>

      {/* Add Journal Modal */}
      {showAddJournal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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
                  ? "bg-slate-700 border-slate-600 text-white"
                  : "bg-white border-gray-300"
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
        </div>
      )}
    </div>
  );
}

export default JournalPage;
