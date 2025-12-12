"use client";
import React, { useState } from "react";
import Intro from "@/components/blog/Intro";
import BlogSection from "../../components/blog/BlogSection";
import Hero from "../../components/blog/hero";
import BlogOverlay from "@/components/blog/BlogOverlay";

const Page = () => {
  const [activePost, setActivePost] = useState(null);

  return (
    <>
      <Hero />
      <Intro />

      {/* Pass opener function to BlogSection */}
      <BlogSection onOpenPost={(post) => setActivePost(post)} />

      {/* Overlay Component */}
      {activePost && (
        <BlogOverlay post={activePost} onClose={() => setActivePost(null)} />
      )}
    </>
  );
};

export default Page;
