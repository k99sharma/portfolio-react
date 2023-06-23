// importing components
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GoCopy } from "react-icons/go";
import IconButton from "../IconButton/IconButton";

// copy text block component
export default function CopyTextBlock(_props: { text: string }) {
  // destructuring props
  const { text } = _props;
  const [isCopied, setIsCopied] = useState<boolean>(false);

  return (
    <div className="copyTextBlock">
      <div className="flex items-center">
        <div className="copyTextBlock__text text-lg">{text}</div>
        <div className="copyTextBlock__button mx-2">
          <IconButton>
            <CopyToClipboard text={text} onCopy={() => setIsCopied(true)}>
              <GoCopy />
            </CopyToClipboard>
          </IconButton>
        </div>
      </div>

      {isCopied ? (
        <div className="copyTextBlock__msg text-sm mt-1 relative">Copied!</div>
      ) : null}
    </div>
  );
}
