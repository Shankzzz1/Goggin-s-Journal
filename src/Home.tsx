import React from "react";
import Navbar from "./Navbar";
import feather from "./Images/feather.png";
import Img1 from "./Images/Img-1.webp";
import Img2 from "./Images/Img-2.jpeg";
import Img7 from "./Images/Img-7.jpeg";
import Img4 from "./Images/Img-4.jpeg";
import Img5 from "./Images/Img-5.jpeg";
import Img6 from "./Images/Img-6.jpeg";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="flex items-center justify-center min-h-screen text-center font-mono">
          <div>
            <img
              src={feather}
              alt="feather logo"
              className="h-28 mx-auto mb-7"
            />
            <h3 className="text-2xl font-bold text-center">
              Embark On Your Life Journey
            </h3>
            <h3 className="text-2xl font-light text-center">
              Journey, Your Trusted Journaling Companion
            </h3>
          </div>
          <div>
            <img src={Img1} alt="hero image" />
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 font-mono">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Previous feature items remain the same */}
            {/* Unlimited entries */}
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Unlimited entries</h3>
              <p className="text-gray-600">
                Unlike other journaling platforms, you can write as much and as
                often as you like, all for free.
              </p>
            </div>

            {/* Mobile apps */}
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile apps</h3>
              <p className="text-gray-600">
                You can write in your journal when not at your computer with our
                iOS and Android apps.
              </p>
            </div>

            {/* Saves as you go */}
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Saves as you go</h3>
              <p className="text-gray-600">
                Never worry about losing your work — Penzu saves as you type at
                your computer or on the go.
              </p>
            </div>

            {/* Custom journals */}
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Custom journals</h3>
              <p className="text-gray-600">
                Choose different covers, backgrounds, fonts and more for each of
                your journals and entries.
              </p>
            </div>

            {/* Reminders */}
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Reminders</h3>
              <p className="text-gray-600">
                Set daily, weekly or custom reminders to ensure that you never
                forget to write in your journal.
              </p>
            </div>

            {/* So much more... */}
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">So much more...</h3>
              <p className="text-gray-600">
                Enjoy unlimited devices, encryption, tagging, search, prompts,
                journal and entry locking, entry sharing and more.
              </p>
            </div>
          </div>
        </div>

        {/* Start Your Journey Section */}
        <div className="max-w-7xl mx-auto px-4 mt-36 py-16 font-mono">
          <h2 className="text-4xl font-bold text-center mb-4">
            Start your journey today
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            Journaling is a proven way to completely change your life,
            especially when you stick with it over time. Each time you write
            you'll get unparalleled clarity and life perspective.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-2">1. Start writing</h3>
                <p className="text-gray-600">
                  All you have to do is start. Take 5 minutes to write in your
                  journal about how you're feeling or reflect on the day.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">2. Keep it going</h3>
                <p className="text-gray-600">
                  The more you write the easier it will be. Set reminders to
                  keep a regular daily, weekly, or monthly cadence.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">3. Reflect and grow</h3>
                <p className="text-gray-600">
                  Links to your entries will be sent to you in the future so you
                  can get see through clear window into the past.
                </p>
              </div>
            </div>

            <div>
              <img
                src={Img2}
                alt="Journey illustration"
                className="w-full h-auto md:h-96 rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>


        {/* Additional Features Section */}
        <div className="max-w-7xl mx-auto px-4 mt-28 py-16 font-mono">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Print Your Journals */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">
                Print Your Journals Into Beautiful eBooks
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Your most important and special online memories can be
                transformed into elegantly designed eBooks. Journey offers a way
                to celebrate and immortalize your experiences, ensuring that
                your stories can be treasured by you and future generations.
              </p>
              <div className="flex">
                <img
                  src={Img4}
                  alt="Journal preview 1"
                  className="w-64 mx-auto rounded-lg"
                />
              </div>
            </div>

            {/* Export Your Journal */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">
                Export Your Journal to ePUB & Docx
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Export your journals into ePub and DOC formats, turning them
                into beautiful eBooks. Supported by applications like Apple
                Books, Amazon Kindle, and Microsoft Word, these formats make it
                easy to read and share your journal entries with anyone.
              </p>
              <div className="flex">
                <img
                  src={Img5}
                  alt="eBook cover 1"
                  className="w-64 mx-auto rounded-lg"
                />
              </div>
            </div>

            {/* Self-Host Your Journal */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">
                Self-Host Your Journal
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                Journey Cloud Sync, a secure, user-centric journal cloud sync
                solution, will be available as open-source for users who wish to
                self-host their data. Docker image now available for download.
                Full source code coming soon.
              </p>
              <div className="flex justify-center gap-4">
                <img
                  src={Img7 }
                  alt="Mobile app"
                  className="w-64 rounded-lg"
                />
              </div>
            </div>

            {/* Legacy Backup */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">
                Legacy Backup
              </h3>
              <p className="text-gray-600 mb-4 text-center">
              Preserve your cherished thoughts and memories for your loved ones to connect with, even after your lifetime. Let your stories, experiences, and wisdom be a timeless legacy and love for generations to come.
              </p>
              <div className="flex justify-center gap-4">
                <img
                  src={Img6}
                  alt="Legacy photo 1"
                  className="w-64 mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
