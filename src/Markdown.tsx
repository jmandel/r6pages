import React, { useMemo } from "react";
import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: false });

export function Markdown({ source }: { source?: string }) {
  const html = useMemo(() => (source ? marked.parse(source) as string : ""), [source]);
  if (!source?.trim()) return null;
  return <div className="md" dangerouslySetInnerHTML={{ __html: html }} />;
}
