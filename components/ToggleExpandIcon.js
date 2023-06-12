export default function ToggleExpandIcon({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6 border stroke-slate-400"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 12h-15"
        transform="translate(0, 9) rotate(0 12 12)"
      />
    </svg>
  );
}
