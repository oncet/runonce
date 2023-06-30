import PrinterIcon from "./icons/PrinterIcon";

export default function PrintButton() {
  return (
    <button
      className="whitespace-nowrap rounded-full p-3 [-webkit-tap-highlight-color:transparent]"
      aria-label="Print"
      onClick={() => {
        window.print();
      }}
    >
      <PrinterIcon />
    </button>
  );
}
