import Button from "./Button";
import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const modalRef = forwardRef(function Modal({ timer }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.show();
      },
    };
  });

  return createPortal(
    <dialog ref={dialogRef} className=" bg-white h-44 w-72 rounded">
      <h2> You stoppped timer at {timer}</h2>
      <form method="dialog" className=" content-center">
        <Button>close</Button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default modalRef;
