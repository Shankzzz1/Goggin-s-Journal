import React from 'react';
import { Twitter, Facebook, Feather } from 'lucide-react';
import feather from "./Images/feather.png";

type NavItem = {
  title: string;
  links: { text: string; href: string }[];
};

const Footer = () => {
  const navigationItems: NavItem[] = [
    {
      title: "DayOne",
      links: [
        { text: "Free signup", href: "#" },
        { text: "DayOne PRO", href: "#" },
        { text: "Login", href: "#" },
        { text: "Support", href: "#" },
        { text: "Terms & conditions", href: "#" },
        { text: "Privacy policy", href: "#" }
      ]
    },
    {
      title: "Journals",
      links: [
        { text: "Journal prompts", href: "#" },
        { text: "What is a journal?", href: "#" },
        { text: "Pregnancy journal", href: "#" },
        { text: "Reflective journal", href: "#" },
        { text: "Bible journal", href: "#" },
        { text: "Dream journal", href: "#" },
        { text: "Journal examples", href: "#" },
        { text: "Five year journal", href: "#" }
      ]
    },
    {
      title: "Diaries",
      links: [
        { text: "Secret diary", href: "#" },
        { text: "Electronic diary", href: "#" },
        { text: "Diary templates", href: "#" },
        { text: "Wedding diary", href: "#" },
        { text: "School diary", href: "#" },
        { text: "Health diary", href: "#" },
        { text: "Food diary", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-black text-white w-full py-12 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <img src={feather} className='h-12'/>
            <h2 className="text-white font-medium">The #1 choice for journaling</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {navigationItems.map((section) => (
            <div key={section.title}>
              <h3 className="font-medium text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-white hover:text-gray-400 transition-colors text-sm"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
          <p className="text-sm text-white">
            © 2025 Day One Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-gray-400">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
