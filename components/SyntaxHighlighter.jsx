import { Prism } from "react-syntax-highlighter"
import { dracula as theme } from "react-syntax-highlighter/dist/cjs/styles/prism"

export const SyntaxHighlighter = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "")
  return !inline && match
    ? (
      <Prism
        style={theme}
        language={match[1]}
        PreTag="div"
        showLineNumbers
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </Prism>
      )
    : (
    <code className={className} {...props}>
      {children}
    </code>
      )
}
