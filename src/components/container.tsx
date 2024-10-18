import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl px-7 py-24 flex flex-col gap-8">
      {children}
    </div>
  );
};

export default Container;
