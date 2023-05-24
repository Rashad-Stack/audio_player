import React from "react";
import Layout from "../utils/Layout";

export default function LaunchScreen() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="w-96">
          <img src="/images/LaunchScreen.png" alt="logo image" />
        </div>
      </div>
    </Layout>
  );
}
