// imports
import { useState } from "react";
import { Button, Modal } from "@mui/material";

// profile pic component
export default function ProfilePic() {
  // state
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="profilePic flex items-center justify-center">
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          <img
            className="rounded-full"
            width={150}
            height={150}
            src="/photo.jpg"
            alt="profile pic"
          />
        </Button>
      </div>

      <Modal
        open={open}
        className="flex items-center justify-center"
        onClose={() => setOpen(false)}
        aria-labelledBy="profile pic modal"
        aria-describedBy="profile pic modal"
      >
        <img
          className="rounded-md"
          width={350}
          height={350}
          src="/photo.jpg"
          alt="profile pic"
        />
      </Modal>
    </>
  );
}
