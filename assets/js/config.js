window.__TNG_API_BASE__ = 'https://technetgame-backend-production.up.railway.app';
window.tngApiUrl = function (path = '') {
  const raw = String(path || '');
  if (/^https?:\/\//i.test(raw)) return raw;
  const base = String(window.__TNG_API_BASE__ || '').trim().replace(/\/$/, '');
  const normalizedPath = raw.startsWith('/') ? raw : `/${raw}`;
  if (!base) return normalizedPath;
  return `${base}${normalizedPath}`;
};
