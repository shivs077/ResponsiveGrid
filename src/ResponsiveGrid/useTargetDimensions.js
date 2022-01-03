import { useEffect, useState, useRef } from "react";
import _ from "lodash";

function useTargetDimensions(ref) {
  const [dimensions, setDimensions] = useState();

  // will default to document body if not a valid DOM element (on mount)
  const elRef = useRef(
    _.isElement(ref?.current) ? ref?.current : document.querySelector("body")
  );

  // to reassign ref if it gets passed on at a later time
  useEffect(() => {
    if (ref && _.isElement(ref?.current)) elRef.current = ref?.current;
  }, [ref]);

  const observer = useRef(
    new ResizeObserver(
      _.debounce(
        (entries) => {
          const data = entries[0].contentRect;
          setDimensions(data);
        },
        100,
        { leading: true, maxWait: 200 }
      )
    )
  );

  useEffect(() => {
    let element = elRef.current;
    let _observer = observer.current;
    if (elRef.current) {
      observer.current.observe(elRef.current);
    }

    return () => {
      if (_observer) _observer.unobserve(element);
    };
  }, [elRef, observer]);

  return dimensions ?? {};
}

export default useTargetDimensions;
