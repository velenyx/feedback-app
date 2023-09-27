import { FC, useEffect } from "react";
import { AiFillFacebook as FacebookIcon } from "react-icons/ai";

declare global {
  interface Window {
    FB: any;
  }
}

interface IShareFacebookProps {
  currentUrl: string;
}

export const ShareFacebook = ({ currentUrl }: IShareFacebookProps) => {
  useEffect(() => {
    window.FB && window.FB.XFBML.parse();
  }, []);
  const url = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;

  return (
    <div data-href={currentUrl} data-layout="button" data-size="small">
      <a target="_blank" href={url} className="fb-xfbml-parse-ignore">
        <FacebookIcon />
      </a>
    </div>
  );
};
