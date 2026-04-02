"use client";

export default function HeroVideo() {
  return (
    <section style={{ width: "100vw", height: "100svh", minHeight: "560px", position: "relative", overflow: "hidden" }}>

      {/* MOBILE: hero.mp4 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="md:hidden absolute inset-0"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* DESKTOP: desktop video Kopie.mov */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="hidden md:block absolute inset-0"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/videos/desktop video Kopie.mov" type="video/quicktime" />
      </video>

    </section>
  );
}
