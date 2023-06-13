export default function ToggleExpandIcon({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 stroke-slate-400"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12h-15"
        className={
          "origin-center rotate-90 transition duration-300 ease-in-out " +
          (isOpen ? "opacity-0" : "opacity-100")
        }
      />
    </svg>
  );
}
