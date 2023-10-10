import { useEffect, useState } from "react";

export const useTitle = () => {

  const [pageTitle, setPageTitle] = useState("")

  useEffect(() => {
    if (pageTitle) {
      document.title = pageTitle;
    }
  }, [pageTitle]);

  return {
    setPageTitle
  }
};
