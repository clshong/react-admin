import { Suspense } from "react";

const lazyLoad = Component => {
  return (
    <Suspense>
      <Component />
    </Suspense>
  );
};

export default lazyLoad;
