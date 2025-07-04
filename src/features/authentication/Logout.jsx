import { GrLogout } from "react-icons/gr";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <GrLogout /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
