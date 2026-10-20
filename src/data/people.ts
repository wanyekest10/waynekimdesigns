// CIID bio pages for teammates and faculty. Any of these names in a case study's facts becomes a link.
export const people: Record<string, string> = {
  'Hun Han': 'https://www.ciid.dk/community/hun-han',
  'Jose Chavarria': 'https://www.ciid.dk/community/jose-chavarria',
  'Jose Chavarría': 'https://www.ciid.dk/community/jose-chavarria',
  'Andrea Desiato': 'https://www.ciid.dk/community/ubaldo-andrea-desiato',
  'Rina Shumylo': 'https://www.ciid.dk/community/rina-shumylo',
  'Chris Downs': 'https://www.ciid.dk/community/chris-downs',
  'Dennis Paul': 'https://www.ciid.dk/community/dennis-paul',
  'Jacob Remin': 'https://www.ciid.dk/community/jacob-remin',
  'Eva Barth': 'https://www.ciid.dk/community/eva-barth',
  'Leon Fan': 'https://www.ciid.dk/community/leon-fan',
  'Vedant Jain': 'https://www.ciid.dk/community/vedant-jain',
  'Norris Hung': 'https://www.ciid.dk/community/norris-hung',
  'Rebeca Mora': 'https://www.ciid.dk/community/rebeca-mora',
  'Alec Davis': 'https://www.ciid.dk/community/alec-davis',
  'Chokchey Cappai': 'https://www.ciid.dk/community/chokchey-cappai',
  'Massimo Banzi': 'https://www.ciid.dk/community/massimo-banzi',
  'Pierluigi Dalla Rosa': 'https://www.ciid.dk/community/pierluigi-dalla-rosa',
  'Juan Ignacio Garro': 'https://www.ciid.dk/community/juan-ignacio-garro',
  'Bjorn Karmann': 'https://www.ciid.dk/community/bjorn-karmann',
  'Bjørn Karmann': 'https://www.ciid.dk/community/bjorn-karmann',
  'Matteo Loglio': 'https://www.ciid.dk/community/matteo-loglio',
  'Felix Lorsignol': 'https://www.ciid.dk/community/felix-lorsignol',
  'Sahil Islam': 'https://www.ciid.dk/community/sahil-islam',
  'David Rose': 'https://www.ciid.dk/community/david-rose',
  'Ricardo Acosta': 'https://www.ciid.dk/community/ricardo-acosta',
  'Yase Dusu': 'https://www.ciid.dk/community/yase-dusu',
  'Gayatri Kalra': 'https://www.ciid.dk/community/gayatri-kalra',
  'Ali Kargin': 'https://www.ciid.dk/community/ali-kargin',
};
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const names = Object.keys(people).sort((a, b) => b.length - a.length);
// Escape the text, then turn known names into links that open in a new tab.
export function linkPeople(text: string): string {
  let out = esc(text);
  for (const n of names) {
    const e = esc(n);
    if (!out.includes(e)) continue;
    out = out.split(e).join(`<a href="${people[n]}" target="_blank" rel="noopener">${e}</a>`);
  }
  return out;
}
