import { useState } from "react";

export default function ToggleDarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  console.log("darkMode", darkMode);

  const onClickHandler = () => {
    console.log("onClickHandler", onClickHandler);

    // setDarkMode(!darkMode);
  };

  return (
    <button
      className="absolute right-4 top-4 border p-4"
      onClick={onClickHandler}
    >
      🌙
    </button>
  );
}
