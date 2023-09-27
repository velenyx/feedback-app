import { useEffect } from "react";
import { AiFillTwitterSquare as XIcon } from "react-icons/ai";

declare global {
  interface Window {
    twttr: any;
  }
}

interface IShareXProps {
  currentUrl: string;
  name: string;
}

export const ShareX = ({ currentUrl, name } : IShareXProps) => {
  const url = `https://twitter.com/intent/tweet?url=${currentUrl}&text=Отзыв о заказчике - ${name}`
  useEffect(() => {
    window.twttr && window.twttr.widgets.load();
  }, []);

  return (
    <a
      target="_blank"
      href={url}
    >
      <XIcon />
    </a>
  );
};
