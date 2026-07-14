// Base-aware URL helper. When the site is served under a base path
// (e.g. /portfolio on GitHub Pages), every internal link must include it.
// import.meta.env.BASE_URL is "/portfolio/" in that case, or "/" at the root.
const BASE = import.meta.env.BASE_URL;

/** Prefix an absolute in-site path with the configured base. href('/work') -> '/portfolio/work'. */
export function href(path = '/'): string {
  const p = ('/' + path).replace(/\/+/g, '/');
  return (BASE.replace(/\/$/, '') + p).replace(/\/+/g, '/');
}

/** Is `path` the current page? Base-aware. */
export function isActive(current: string, path: string): boolean {
  const cur = current.replace(/\/+$/, '') || '/';
  const target = href(path).replace(/\/+$/, '') || '/';
  return path === '/' ? cur === target : cur.startsWith(target);
}
