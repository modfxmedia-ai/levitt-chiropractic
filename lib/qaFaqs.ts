/** FAQ data for /resources/qa rendered by both the page (FAQPage JSON-LD)
 *  and the client component (interactive accordion). HTML entities are
 *  intentional the component renders them via dangerouslySetInnerHTML.
 */
export type QAFaq = {
  q: string;
  a: string[];
};

export const qaFaqs: QAFaq[] = [
  {
    q: "Is chiropractic effective?",
    a: [
      "Chiropractic helps to remove postural imbalances and structural misalignments that can accumulate in our bodies over time. Chiropractic works by restoring your own inborn ability to be healthy.",
      "For your body to remain healthy, your nervous system must function well. For your nervous system to function well it must be free of interference. By restoring spinal function with chiropractic adjustments, nerve interference by misaligned vertebrae is removed thus allowing optimal nervous system function and improved health.",
    ],
  },
  {
    q: "Why should I see a chiropractor?",
    a: [
      "Seeing a chiropractor is not only for back pain and neck pain. Chiropractic care is an excellent way to keep your body at its peak performance through nutrition, adjustment, and overall wellness.",
      "In addition, chiropractic care has been known to help a wide range of conditions from fibromyalgia to diabetes.",
    ],
  },
  {
    q: "What is subluxation?",
    a: [
      "When a vertebra becomes misaligned or moves out of its normal position, this is referred to in the chiropractic profession as a subluxation. Subluxations can be caused by a wide range of issues from a minor slip or bump to any sudden trauma.",
      "When a vertebra is subluxated, it begins to put pressure on nerves, blood vessels, and everything around it. This pressure comes with a price: the subluxation interrupts the natural pathways that messages from the brain need to be clear in order to be completed properly.",
    ],
  },
  {
    q: "How does chiropractic care work?",
    a: [
      "Chiropractic is an overall way of looking at the human body. It&rsquo;s based on the idea that the body is self-sustaining and self-healing. The body is essentially controlled by the brain through its connection via the spinal cord and the vast networks of nerves that make up the body.",
      "In the chiropractic world, drugs and medicine are not utilized as a form of treating a patient. While supplementation and nutrition are almost always a part of the bigger picture, drugs and prescriptions can be viewed as band-aids to treat symptoms rather than going to the source.",
      "Chiropractors not only treat soft and hard tissue problems such as sciatica and joint pain, but are largely called on to deal with more significant issues fibromyalgia, allergies, insomnia, headaches, and many more.",
    ],
  },
  {
    q: "What is a chiropractic adjustment? Is it safe?",
    a: [
      "Adjustments, or manipulation as they&rsquo;re sometimes referred to, is the minor movement of vertebrae in the spine. The objective of this movement is to realign vertebrae that have moved out of place for a number of reasons from normal daily activity to sudden trauma.",
      "When these vertebrae are out of place, it has an overall systemic effect from muscular to the central nervous system. Without proper alignment and flow of all nerves and systems in the body from the brain, we can&rsquo;t function at our peak.",
      "An adjustment is often pressure from the chiropractor utilizing the hands or an instrument to move a vertebra back into place. This happens with a quick movement and is often without discomfort. You may hear a noise that sounds like cracking your knuckles joint cavitation which is the release of gases such as oxygen and nitrogen from the joint.",
    ],
  },
  {
    q: "What can I expect from my visit to a chiropractor?",
    a: [
      "Going to the chiropractor is a new experience for many of us. Maybe we&rsquo;ve heard through a friend or have done some research online. It&rsquo;s possible that you are just fed up with living in pain and it&rsquo;s time to do something about it.",
      "In either case, your first visit to the chiropractor will really be about getting to know the chiropractor and discussing your history, current condition, and goals.",
    ],
  },
  {
    q: "What results can I expect from treatment?",
    a: [
      "Chiropractic is based on the idea of removing imbalances both structural and postural in an effort to allow our body to heal itself. For this to happen, the network of nerves and signals from your brain down your spinal cord, to the network of nerves must be allowed to flow freely without any interruption.",
      "Chiropractors have the ability and skill to remove these interruptions or misalignments and allow the body to perform as it was meant to.",
      "If you&rsquo;ve ever experienced a fall, repetitive strain, or just bumped into something too hard, it&rsquo;s very possible that you are not functioning at your best due to a misalignment. While there are many potential mechanical or structural causes for misalignment, there are also chemical reasons smoking, drinking excessively, or even just a poor diet can cause underlying conditions and disease to appear.",
      "Allowing a chiropractor to get you back on track both chemically and structurally will bring your body back to the proper state it should be in to perform at its peak.",
    ],
  },
];

/** Plain-text version of the same answers stripped of HTML entities
 *  for use inside FAQPage JSON-LD (Google requires plain text).
 */
export const qaFaqsPlainText = qaFaqs.map((f) => ({
  q: f.q,
  a: f.a
    .map((p) => p.replace(/&rsquo;/g, "\u2019").replace(/&[a-z]+;/gi, ""))
    .join(" "),
}));
