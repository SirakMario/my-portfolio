// src/app/components/ui/markdown-renderer.tsx
"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight, oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";

interface MarkdownRendererProps {
  children: string;
}

export function MarkdownRenderer({ children }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={COMPONENTS}
      className="space-y-3"
    >
      {children}
    </ReactMarkdown>
  );
}

const COMPONENTS = {
  // Headings
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-2xl font-semibold" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-xl font-semibold" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-lg font-semibold" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-base font-semibold" {...props} />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 className="text-sm font-medium" {...props} />
  ),

  // Text styles
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-primary underline underline-offset-2" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLElement>) => (
    <blockquote className="border-l-2 border-primary pl-4" {...props} />
  ),

  // Lists
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal space-y-2 pl-6" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc space-y-2 pl-6" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="my-1.5" {...props} />
  ),

  // Tables
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <table
      className="w-full border-collapse overflow-y-auto rounded-md border border-foreground/20"
      {...props}
    />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border border-foreground/20 px-4 py-2 text-left font-bold"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="border border-foreground/20 px-4 py-2 text-left"
      {...props}
    />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="border-t even:bg-muted" {...props} />
  ),

  // Paragraphs & dividers
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="whitespace-pre-wrap" {...props} />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="border-foreground/20" {...props} />
  ),

  // Inline code
  code({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
    const match = /language-(\w+)/.exec(className || "");

    if (match) {
      const code = String(children).replace(/\n$/, "");

      return (
        <div className="group relative mb-4">
          <SyntaxHighlighter
            style={oneLight}
            customStyle={{
              borderRadius: "0.5rem",
              padding: "1rem",
              fontSize: "0.875rem",
            }}
            language={match[1]}
            PreTag="div"
          >
            {code}
          </SyntaxHighlighter>
          <div className="absolute right-2 top-2 opacity-0 transition group-hover:opacity-100">
            <CopyButton content={code} copyMessage="Copied code to clipboard" />
          </div>
        </div>
      );
    }

    return (
      <code
        className={cn(
          "font-mono rounded-md bg-background/50 px-1 py-0.5",
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  },
};

export default MarkdownRenderer;