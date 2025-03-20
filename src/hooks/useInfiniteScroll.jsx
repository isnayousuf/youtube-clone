import { useEffect, useRef } from "react";

const useInfiniteScroll = (callback) => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      },
      { threshold: 1.0 }
    );

    const target = document.querySelector("#loadMoreTrigger");
    if (target) {
      observerRef.current.observe(target);
    }

    return () => observerRef.current.disconnect();
  }, [callback]);

  return observerRef;
};

export default useInfiniteScroll;
