import Link from 'next/link';
import { useLanguage } from '../hooks/useLanguage';

interface TocProps {
  headings: {
    depth: number;
    value: string;
    id: string;
  }[];
}

export default function TableOfContents({ headings }: TocProps) {
  const { t } = useLanguage();

  return (
    <nav className="toc">
      <h4>{t('inthispage')}</h4>
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
