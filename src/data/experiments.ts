// Experiments: shorter projects, sprints, and side projects. All rows show on /play (the Play page) in this order.
// home: true also shows the row on the homepage.
// href is optional: leave it out and the row is just text.
// image is optional: a preview that appears on hover.
// sub is the skill label shown under the name, matching the Work page.
// try is optional: a "Try it" link after the line, for pieces people can play with in the browser.
export const experiments = [
  { name: 'Mirrored Canvas', sub: 'Computer vision and play design', home: true, line: 'A mirror that turns silly faces into projected visuals.', year: '2024', href: '/play/mirrored-canvas/', image: '/work/mirrored-canvas-assets/hero.webp' },
  { name: 'Disco Never Died', sub: 'Creative coding and VJing', home: true, line: 'A code-made disco ball that pulses with the sound in the room.', year: '2024', href: '/play/disco-never-died/', try: '/play/disco-never-died/#try-it', image: '/work/disco-assets/card.webp' },
  { name: 'Tamer Kebap Eating Club', home: true, sub: 'Graphic design and printing', line: 'A thank-you shirt for the kebab shop that fed our class.', year: '2026', href: '/play/tamer-kebap/', image: '/experiments/tamer-kebap-assets/shirts.webp' },
  { name: 'Mosaic of Memories', sub: 'Installation and participatory design', line: 'Small kindnesses from strangers, as objects you can add to.', year: '2024', href: '/play/mosaic-of-memories/', image: '/experiments/mosaic-assets/card.webp' },
  { name: 'Larvae Lagoon', sub: 'Research and biomimicry', line: 'A dragonfly habitat for a valley between droughts and floods.', year: '2024', href: '/play/larvae-lagoon/', image: '/work/larvae-assets/hero.webp' },
  { name: 'A Serious Fan', sub: 'Physical computing and prototyping', line: 'A fan that cools you down only when you keep your word.', year: '2025', href: '/play/a-serious-fan/', image: '/work/fan-assets/hero.webp' },
  // Hidden for now: { name: 'Monet Clock', line: "Monet's Rouen Cathedral paintings, as a 24-hour clock.", year: '2026' },
  // Hidden for now: { name: 'Above', line: 'Cloud watching, with a friend guessing what you see.', year: '2026' },
];
