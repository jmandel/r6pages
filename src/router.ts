import { useEffect, useState } from "react";

export interface RouteState {
  path: string[];
  params: URLSearchParams;
}

export function parseHash(hash: string): RouteState {
  const raw = hash.replace(/^#/, "") || "/";
  const [pathPart, queryPart = ""] = raw.split("?");
  const path = pathPart.split("/").filter(Boolean).map(decodeURIComponent);
  return { path, params: new URLSearchParams(queryPart) };
}

export function buildHref(path: (string | undefined)[], params?: URLSearchParams): string {
  const segs = path.filter((p): p is string => !!p).map(encodeURIComponent).join("/");
  const q = params && [...params.keys()].length > 0 ? `?${params.toString()}` : "";
  return `#/${segs}${q}`;
}

export function useRoute(): [RouteState, (next: RouteState, replace?: boolean) => void] {
  const [state, setState] = useState<RouteState>(() => parseHash(location.hash));
  useEffect(() => {
    const onHashChange = () => setState(parseHash(location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  const navigate = (next: RouteState, replace = false) => {
    const href = buildHref(next.path, next.params);
    if (href === location.hash) return;
    if (replace) {
      history.replaceState(null, "", href);
      setState(parseHash(location.hash));
    } else {
      location.hash = href;
    }
  };
  return [state, navigate];
}
