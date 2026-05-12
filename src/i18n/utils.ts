export type Lang = 'en' | 'pt';

export function getLangFromUrl(pathname: string): Lang {
  return pathname.startsWith('/pt/') || pathname === '/pt' ? 'pt' : 'en';
}

export function getPostUrl(id: string): string {
  const isPt = id.startsWith('pt/');
  const cleanId = isPt ? id.slice(3) : id;
  const [year, month, day, ...rest] = cleanId.split('-');
  const path = `/${year}/${month}/${day}/${rest.join('-')}`;
  return isPt ? `/pt${path}` : path;
}

export function getAlternateUrl(pathname: string): string {
  if (pathname.startsWith('/pt/')) {
    return pathname.slice(3) || '/';
  }
  if (pathname === '/pt') {
    return '/';
  }
  return `/pt${pathname}`;
}

export function getPostBaseId(id: string): string {
  return id.startsWith('pt/') ? id.slice(3) : id;
}

export function isEnglishPost(id: string): boolean {
  return !id.startsWith('pt/');
}

export function isPortuguesePost(id: string): boolean {
  return id.startsWith('pt/');
}

export interface NavTarget {
  id: string;
  title: string;
  draft?: boolean;
}

interface ChronoPost {
  id: string;
  data: {
    title: string;
    date: Date;
    draft?: boolean;
  };
}

export function computePrevNext<T extends ChronoPost>(
  posts: T[],
  currentId: string
): { prev: NavTarget | null; next: NavTarget | null } {
  const sorted = [...posts].sort(
    (a, b) => a.data.date.getTime() - b.data.date.getTime()
  );
  const index = sorted.findIndex((p) => p.id === currentId);
  if (index === -1) return { prev: null, next: null };
  const prevPost = index > 0 ? sorted[index - 1] : null;
  const nextPost = index < sorted.length - 1 ? sorted[index + 1] : null;
  const toTarget = (p: T | null): NavTarget | null =>
    p ? { id: p.id, title: p.data.title, draft: p.data.draft } : null;
  return { prev: toTarget(prevPost), next: toTarget(nextPost) };
}
