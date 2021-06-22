import { useEffect } from "react";

const useConsoleLog = (content: string) => {
  useEffect(() => console.log(content), [content]);
};

export default useConsoleLog;
