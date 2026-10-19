// The site is static files; this tiny Worker only answers /api/egg and hands everything else to the files.
// It keeps one number in KV: how many browsers have found the Easter egg. No IPs, names, or IDs are stored.
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/egg') {
      const current = parseInt((await env.EGG.get('count')) || '0', 10) || 0;
      if (request.method === 'POST') {
        const count = current + 1;
        await env.EGG.put('count', String(count));
        return json({ count });
      }
      if (request.method === 'GET') return json({ count: current });
      return json({ error: 'method not allowed' }, 405);
    }
    return env.ASSETS.fetch(request);
  },
};
