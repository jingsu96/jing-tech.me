import TOCInline from 'pliny/ui/TOCInline';
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm';
import type { MDXComponents } from 'mdx/types';
import Image from './Image';
import { Link } from './lab/link';
import TableWrapper from './TableWrapper';
import Sandpack from './sandpack';
import CodeBlock from './code-block/';

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: Link,
  pre: (props: React.HTMLProps<HTMLPreElement>) => <pre {...props} />,
  code: CodeBlock,
  table: TableWrapper,
  BlogNewsletterForm,
  Sandpack,
};
