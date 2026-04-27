import React from "react";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className="mx-auto max-w-7xl px-5 lg:px-10">{children}</main>;
};

export default AppLayout;
