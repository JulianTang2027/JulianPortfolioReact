const musings = [
  {
    slug: "kierkegaard-reflection",
    date: "2026 / 04 / 09",
    title: "kierkegaard's need for an 'anchor' and an atheistic view",
    excerpt:
      "Short reflection on my readings of Kierkegaard during my study abroad in Copenhagen",
    body: ``,
  },
];

export const getMusingBySlug = (slug) =>
  musings.find((m) => m.slug === slug) || null;

export default musings;
