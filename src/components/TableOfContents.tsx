import React from 'react';

import Link from 'next/link';
import slugify from '../utils/slugify';

interface TocProps {
  headings: {
    depth: number;
    value: string;
  }[];
}

const TableOfContents: React.FC<TocProps> = ({ headings }) => (
  <nav className="toc">
    <h4>In this page</h4>
    <ul>
      {headings?.map((heading) => (
        <li key={heading.value}>
          <Link href={`#${slugify(heading.value)}`}>
            <a className={heading.depth > 2 ? 'sub' : 'heading'}></a>
            {heading.value}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default TableOfContents;
