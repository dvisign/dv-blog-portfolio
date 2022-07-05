import { useRef } from "react";

const useInteraction = () => {
  const element = useRef<HTMLDivElement>();
  return {
    ref: element,
  };
};

export default useInteraction;
