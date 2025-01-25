import { useState, useEffect } from "react";
import "./index.css";
import { IoMdAddCircle } from "react-icons/io";
import { GiFeather } from "react-icons/gi";
import { TbLogout2 } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";

function JournalPage() {
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

  useEffect(() => {
    localStorage.setItem("journals", JSON.stringify(journals));
  }, [journals]);

  useEffect(() => {
    localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
  }, [journalEntries]);

  const addJournal = () => {
    if (newJournalName && !journals.includes(newJournalName)) {
      const updatedJournals = [...journals, newJournalName];
      setJournals(updatedJournals);
      setSelectedJournal(newJournalName);
      setNewJournalName("");
      setShowAddJournal(false);
    }
  };

  const updateJournalEntry = (text) => {
    setJournalEntries((prev) => ({
      ...prev,
      [selectedJournal]: text,
    }));
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logout clicked");
  };

  const handleSettings = () => {
    // Implement settings logic here
    console.log("Settings clicked");
  };

  return (
    <div className="flex h-screen  font-mono relative bg-slate-100 ">
      {/* Sidebar */}
      <div className="w-64 bg-slate-100 shadow-md p-4 flex flex-col ">
        {/* Header with Feather Icon and Journal Name */}
        <div className="flex items-center space-x-4 border-b-2 border-black mb-3">
          <GiFeather size={35} className="self-center" />
          <h2 className="text-xl font-bold text-gray-800">"User's" Journal</h2>
        </div>

        {/* Journal List */}
        <div className="space-y-2 mb-4 flex-grow border border-black ">
          {journals.map((journal) => (
            <button
              key={journal}
              className={`w-full text-left p-2 rounded ${
                selectedJournal === journal
                  ? "bg-black text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedJournal(journal)}
            >
              {journal}
            </button>
          ))}
        </div>

        {/* Logout and Settings Buttons */}
        <div className="border-t pt-2  space-y-4 ">
          <div className="flex items-center space-x-2 mb-2">
            <TbLogout2 size={25} className="text-black hover:text-gray-600" />
            <button
              onClick={handleLogout}
              className="text-black hover:text-gray-600"
            >
              Logout
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <IoSettings size={25} className="text-black hover:text-gray-600" />
            <button
              onClick={handleSettings}
              className="text-black hover:text-gray-600"
            >
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">{selectedJournal}</h1>

        {/* Text Editor */}
        <textarea
          className="w-full h-[calc(100vh-150px)] p-4 border rounded"
          value={journalEntries[selectedJournal] || ""}
          onChange={(e) => updateJournalEntry(e.target.value)}
          placeholder={`Start writing in ${selectedJournal}...`}
        />
      </div>

      {/* Add Journal Modal */}
      {showAddJournal && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <input
              type="text"
              value={newJournalName}
              onChange={(e) => setNewJournalName(e.target.value)}
              placeholder="New journal name"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowAddJournal(false)}
                className="bg-gray-200 text-gray-800 p-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={addJournal}
                className="bg-black text-white p-2 rounded hover:bg-gray-800"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Journal Icon */}
      <button
        onClick={() => setShowAddJournal(true)}
        className="absolute bottom-28 right-16 text-black"
      >
        <IoMdAddCircle size={60} color="black" />
      </button>
    </div>
  );
}

export default JournalPage;
