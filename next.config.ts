import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
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
      { source: "/links", destination: "/resources/links", permanent: true },
      { source: "/educational-videos", destination: "/resources", permanent: true },
      { source: "/exercise-videos", destination: "/therapeutic-exercise", permanent: true },
      { source: "/gallery", destination: "/about", permanent: true },
      { source: "/staff", destination: "/meet-the-doctor", permanent: true },
      { source: "/patient-education", destination: "/resources", permanent: true },
      { source: "/new-patients", destination: "/new-patient-center", permanent: true },
      { source: "/what-is-chiropractic", destination: "/resources/about-chiropractic", permanent: true },
      { source: "/3d-spine-simulator", destination: "/resources", permanent: true },
      { source: "/electrical-muscle-stimulation", destination: "/services", permanent: true },
      { source: "/electrical-stimulation-therapies", destination: "/services", permanent: true },
      { source: "/chiropractic-massage", destination: "/services", permanent: true },
      { source: "/chiropractic-massage-therapy", destination: "/services", permanent: true },
      { source: "/what-is-chiropractic-massage-therapy", destination: "/services", permanent: true },
      { source: "/deep-tissue-massage", destination: "/services", permanent: true },
      { source: "/relaxation-massage", destination: "/services", permanent: true },
      { source: "/vertebral-subluxation-complex", destination: "/common-chiropractic-conditions", permanent: true },
      { source: "/spinal-wellness-tips", destination: "/resources/wellness-tips", permanent: true },
      { source: "/disclaimers/hipaa_policy", destination: "/hipaa-policy", permanent: true },
      { source: "/disclaimers/terms_of_use", destination: "/terms-of-use", permanent: true },
      { source: "/disclaimers/privacy_policy", destination: "/privacy-policy", permanent: true },
      { source: "/disclaimers/goodfaithestimate", destination: "/good-faith-estimate", permanent: true },
    ];
  },
};

export default nextConfig;
