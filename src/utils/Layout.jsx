import React from "react";

export default function Layout({ children }) {
  return (
    <main className="max-w-screen-lg h-screen mx-auto bg-[url('/images/bg.png')] bg-cover bg-no-repeat bg-center">
      {children}
    </main>
  );
}
