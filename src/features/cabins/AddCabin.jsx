import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function AddCabin() {
  const [isOpenModel, setIsOpenModel] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModel((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModel && <Modal />}
    </div>
  );
}
