"use client";

export default function NavBar() {
  const sections = ["Home", "Papers", "Media", "CV"];

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <ul className="flex justify-center space-x-6 py-4">
        {sections.map((sec) => (
          <li key={sec}>
            <a
              href={`#${sec.toLowerCase()}`}
              className="hover:text-indigo-600 font-medium"
            >
              {sec}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
