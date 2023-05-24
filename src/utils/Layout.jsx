import React from "react";

export default function Layout({ children }) {
  return (
    <main className="h-full min-h-screen mx-auto bg-[url('/images/bg.png')] bg-cover bg-no-repeat bg-center pb-10">
      <section className="h-full max-w-screen-lg mx-auto">{children}</section>
    </main>
  );
}
