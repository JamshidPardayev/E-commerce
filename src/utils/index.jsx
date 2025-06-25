import React from "react";

export const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-6 justify-center items-center">
      <p className="text-gray-600 text-lg">Loading...</p>
      <span className="loader"></span>
    </div>
  );
};

export const Suspense = ({ children }) => {
  return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
