import Link from 'next/link';

interface TocProps {
  headings: {
    depth: number;
    value: string;
    id: string;
  }[];
}

export default function TableOfContents({ headings }: TocProps) {
  return (
    <nav className="toc">
      <h4>In this page</h4>
      <ul>
        {headings?.map((heading) => (
          <li key={heading.value}>
            <Link href={`#${heading.id}`}>
              <a className={heading.depth > 2 ? 'sub' : 'heading'}>
                {heading.value}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
