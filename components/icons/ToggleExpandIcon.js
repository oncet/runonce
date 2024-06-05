export default function ToggleExpandIcon({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={
        "h-6 w-6 stroke-slate-400 transition duration-300 terminal:stroke-orange-500 " +
        (isOpen ? "scale-y-[-1]" : "")
      }
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
