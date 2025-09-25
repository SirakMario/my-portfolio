"use client"

import React, { Suspense } from "react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { CopyButton } from "../ui/copy-button"
import { cn } from "@/lib/utils"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneLight, oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

interface MarkdownRendererProps {
  children: string
}

export function MarkdownRenderer({ children }: MarkdownRendererProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={COMPONENTS}
      className="space-y-3"
    >
      {children}
    </Markdown>
  )
}

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
}

const CodeBlock = React.memo(({ children, className }: CodeBlockProps) => {
  const code =
    typeof children === "string" ? children : childrenTakeAllStringContents(children)
  const languageMatch = /language-(\w+)/.exec(className || "")
  const language = languageMatch ? languageMatch[1] : ""

  const preClass = cn(
    "overflow-x-auto rounded-md border bg-background/50 p-4 font-mono text-sm [scrollbar-width:none]",
    className
  )

  return (
    <div className="group/code relative mb-4">
      <SyntaxHighlighter
        language={language}
        style={oneLight} // or oneDark depending on theme
        className={preClass}
        showLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>

      <div className="invisible absolute right-2 top-2 flex space-x-1 rounded-lg p-1 opacity-0 transition-all duration-200 group-hover/code:visible group-hover/code:opacity-100">
        <CopyButton content={code} copyMessage="Copied code to clipboard" />
      </div>
    </div>
  )
})

CodeBlock.displayName = "CodeBlock"

function childrenTakeAllStringContents(element: any): string {
  if (typeof element === "string") {
    return element
  }

  if (element?.props?.children) {
    const children = element.props.children
    if (Array.isArray(children)) {
      return children.map((child) => childrenTakeAllStringContents(child)).join("")
    }
    return childrenTakeAllStringContents(children)
  }

  return ""
}

const COMPONENTS = {
  h1: withClass("h1", "text-2xl font-semibold"),
  h2: withClass("h2", "text-xl font-semibold"),
  h3: withClass("h3", "text-lg font-semibold"),
  h4: withClass("h4", "text-base font-semibold"),
  h5: withClass("h5", "font-medium"),
  strong: withClass("strong", "font-semibold"),
  a: withClass("a", "text-primary underline underline-offset-2"),
  blockquote: withClass("blockquote", "border-l-2 border-primary pl-4"),
  code: ({ children, className, ...rest }: any) => {
    const match = /language-(\w+)/.exec(className || "")
    return match ? (
      <CodeBlock className={className} {...rest}>
        {children}
      </CodeBlock>
    ) : (
      <code
        className={cn(
          "font-mono [:not(pre)>&]:rounded-md [:not(pre)>&]:bg-background/50 [:not(pre)>&]:px-1 [:not(pre)>&]:py-0.5"
        )}
        {...rest}
      >
        {children}
      </code>
    )
  },
  pre: ({ children }: any) => <>{children}</>,
  ol: withClass("ol", "list-decimal space-y-2 pl-6"),
  ul: withClass("ul", "list-disc space-y-2 pl-6"),
  li: withClass("li", "my-1.5"),
  table: withClass(
    "table",
    "w-full border-collapse overflow-y-auto rounded-md border border-foreground/20"
  ),
  th: withClass(
    "th",
    "border border-foreground/20 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right"
  ),
  td: withClass(
    "td",
    "border border-foreground/20 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right"
  ),
  tr: withClass("tr", "m-0 border-t p-0 even:bg-muted"),
  p: withClass("p", "whitespace-pre-wrap"),
  hr: withClass("hr", "border-foreground/20"),
}

function withClass(Tag: keyof JSX.IntrinsicElements, classes: string) {
  const Component = ({ ...props }: any) => <Tag className={classes} {...props} />
  Component.displayName = Tag
  return Component
}

export default MarkdownRenderer
