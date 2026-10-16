// Turns "**Label**\ntext" paragraphs (and "**Label**" followed by a list)
// into two-column field rows: <div class="field"><span class="flabel">Label</span><div>…</div></div>
const isWs = (n) => n.type === 'text' && /^\s*$/.test(n.value);
export function rehypeFields() {
  return (tree) => walk(tree);
}
function walk(node) {
  if (!node.children) return;
  const out = [];
  const kids = node.children;
  for (let i = 0; i < kids.length; i++) {
    const n = kids[i];
    if (n.type === 'element' && n.tagName === 'p' && n.children?.[0]?.tagName === 'strong') {
      const [strong, ...rest] = n.children;
      const label = strong.children.map((c) => c.value ?? '').join('');
      const restNonWs = rest.filter((c) => !isWs(c));
      // Case 1: label on its own line, then text in the same paragraph
      if (rest[0]?.type === 'text' && rest[0].value.startsWith('\n')) {
        rest[0] = { ...rest[0], value: rest[0].value.replace(/^\n/, '') };
        out.push(field(label, [{ type: 'element', tagName: 'p', properties: {}, children: rest }]));
        continue;
      }
      // Case 2: label alone, followed by a list
      if (restNonWs.length === 0) {
        let j = i + 1;
        while (j < kids.length && isWs(kids[j])) j++;
        if (kids[j]?.tagName === 'ul' || kids[j]?.tagName === 'ol') {
          out.push(field(label, [kids[j]]));
          i = j;
          continue;
        }
      }
    }
    walk(n);
    out.push(n);
  }
  node.children = out;
}
function field(label, content) {
  return {
    type: 'element', tagName: 'div', properties: { className: ['field'] },
    children: [
      { type: 'element', tagName: 'span', properties: { className: ['flabel'] }, children: [{ type: 'text', value: label }] },
      { type: 'element', tagName: 'div', properties: {}, children: content },
    ],
  };
}
