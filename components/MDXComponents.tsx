import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm';
import type { MDXComponents } from 'mdx/types';
import ZoomImage from './ZoomImage';
import { Link } from './lab/link';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './lab/ui/table';
import Sandpack from './sandpack';
import CodeBlock from './code-block';
import TOCInline from './TOCInline';
import { TweetCard } from './lab/tweet-card/tweet-card';
import StatusCard from './StatusCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './lab/ui/tabs';

export const components: MDXComponents = {
  Image: ZoomImage,
  TOCInline: (props: any) => <TOCInline {...props} collapse={true} />,
  a: Link,
  // Code
  pre: (props: React.HTMLProps<HTMLPreElement>) => <pre {...props} />,
  code: CodeBlock,
  // Table
  table: Table,
  thead: TableHeader,
  th: TableHead,
  td: TableCell,
  tbody: TableBody,
  tfoot: TableFooter,
  tr: TableRow,
  caption: TableCaption,
  h4: (props) => (
    <h4 {...props} className="text-[1.125em]">
      {props.children}
    </h4>
  ),
  // Custom
  BlogNewsletterForm,
  Sandpack,
  TweetCard,
  StatusCard,

  // - Tabs
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
};
