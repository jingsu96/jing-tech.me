import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm';
import type { MDXComponents } from 'mdx/types';
import ZoomImage from './ZoomImage';
import { Link } from './lab/link';
import TableWrapper from './TableWrapper';
import Sandpack from './sandpack';
import CodeBlock from './code-block';
import TOCInline from './TOCInline';

export const components: MDXComponents = {
  Image: ZoomImage,
  TOCInline: (props: any) => <TOCInline {...props} collapse={true} />,
  a: Link,
  pre: (props: React.HTMLProps<HTMLPreElement>) => <pre {...props} />,
  code: CodeBlock,
  table: TableWrapper,
  BlogNewsletterForm,
  Sandpack,
};
