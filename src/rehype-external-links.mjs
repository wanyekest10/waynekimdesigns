// Links to other sites open in a new tab, so the portfolio stays open behind them.
export function rehypeExternalLinks() {
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'a') {
      const href = String(node.properties?.href ?? '');
      if (/^https?:\/\//.test(href) && !href.includes('waynekimdesigns.com')) {
        node.properties.target = '_blank';
        node.properties.rel = ['noopener'];
      }
    }
    (node.children ?? []).forEach(walk);
  };
  return (tree) => walk(tree);
}
