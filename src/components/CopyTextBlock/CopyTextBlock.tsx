// importing components
import { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GoCopy } from "react-icons/go";
import IconButton from "../IconButton/IconButton";

// importing icons
import { FaRegCopy } from "react-icons/fa";
import ThemeContext from "../../context/ThemeContext";

// copy text block component
export default function CopyTextBlock(_props: { text: string }) {
  // destructuring props
  const { text } = _props;
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // theme context
  const themeCtx = useContext(ThemeContext);
  const { theme } = themeCtx;

  return (
    <div className="copyTextBlock">
      <div className="flex items-center">
        <div
          className={`copyTextBlock__text text-lg ${
            theme === "dark" ? "text-zinc-200" : ""
          }`}
        >
          {text}
        </div>
        <div className="copyTextBlock__button mx-2">
          <IconButton>
            <CopyToClipboard text={text} onCopy={() => setIsCopied(true)}>
              <FaRegCopy className={theme === "dark" ? "text-zinc-200" : ""} />
            </CopyToClipboard>
          </IconButton>
        </div>
      </div>

      {isCopied ? (
        <div
          className={`copyTextBlock__msg text-sm mt-1 relative ${
            theme === "dark" ? "text-zinc-600" : ""
          }`}
        >
          Copied!
        </div>
      ) : null}
    </div>
  );
}
