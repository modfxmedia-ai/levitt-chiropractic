import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdcssl.ibsrv.net" },
      { protocol: "https", hostname: "ofcbrand0119.s3.us-east-2.amazonaws.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "my.onlinechiro.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/meet-the-doctor", destination: "/meet-the-doctor", permanent: true },
      { source: "/about-us/unique-care", destination: "/unique-care", permanent: true },
      { source: "/about-us/testimonials", destination: "/testimonials/page", permanent: true },
      { source: "/appointment", destination: "/contact/appointment-request", permanent: false },
      { source: "/services/cryotherapy", destination: "/cryotherapy", permanent: true },
      { source: "/services/cryotherapy/ice-pack-cryotherapy", destination: "/ice-pack-cryotherapy", permanent: true },
      { source: "/services/cold-laser-therapy", destination: "/cold-laser-therapy", permanent: true },
      { source: "/services/adjustments-and-manipulation", destination: "/adjustments-and-manipulation", permanent: true },
      { source: "/services/spinal-manipulation-adjustment", destination: "/adjustments-and-manipulation", permanent: true },
      { source: "/services/custom-foot-orthotics", destination: "/custom-foot-orthotics", permanent: true },
      { source: "/services/back-pain-treatments", destination: "/back-pain-treatments", permanent: true },
      { source: "/services/degenerative-disc-disease", destination: "/degenerative-disc-disease", permanent: true },
      { source: "/services/therapeutic-exercise", destination: "/therapeutic-exercise", permanent: true },
      { source: "/services/functional-medicine", destination: "/functional-medicine", permanent: true },
      { source: "/services/alternative-medicine", destination: "/alternative-medicine", permanent: true },
      { source: "/services/common-chiropractic-conditions", destination: "/common-chiropractic-conditions", permanent: true },
      { source: "/services/injuries", destination: "/injuries", permanent: true },
      { source: "/services/injuries/auto-injury", destination: "/auto-injury", permanent: true },
      { source: "/services/injuries/personal-injury", destination: "/personal-injury", permanent: true },
      { source: "/services/injuries/sports-injury", destination: "/sports-injury", permanent: true },
    ];
  },
};

export default nextConfig;
