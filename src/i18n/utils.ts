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
