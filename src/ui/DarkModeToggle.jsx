import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  function handleToggle() {
    // Play audio before toggling theme
    const audio = new Audio(
      isDarkMode ? "/switch-on.mp3" : "/sounds/switch-off.mp3"
    );
    audio.play();

    // Toggle the theme
    toggleDarkMode();
  }

  return (
    <ButtonIcon onClick={handleToggle}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
