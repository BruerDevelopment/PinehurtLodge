import type { MDXComponents } from 'mdx/types'
import { FaLink } from 'react-icons/fa'
import ExternalLink from "./MdxComponents/ExternalLink"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  console.log(components)
  return {
    ...components,
    a: ExternalLink
  }
}