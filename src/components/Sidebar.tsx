import Link from 'next/link';

import NavConfig from '../config/sidebar.yml';
import { useLanguage } from '../hooks/useLanguage';

type MenuLink = {
  label: string;
  link: string;
  items?: {
    label: string;
    link: string;
  }[];
};

export function ItemLink({ label, link, items }: MenuLink) {
  const { locale } = useLanguage();
  return (
    <>
      <li key={label}>
        {link ? (
          <Link href={link}>
            <a>{label}</a>
          </Link>
        ) : (
          <h4>{label}</h4>
        )}
      </li>
      {items && (
        <ul>
          {items.map((item) => (
            <li key={item.label}>
              <Link href={`/${locale}/docs/${item.link}`}>
                <a>{item.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function Sidebar() {
  const { locale } = useLanguage();
  const pages = NavConfig.sidebar[locale];

  return (
    <aside className="aside">
      <ul>
        {pages.map((page: MenuLink) => (
          <ItemLink
            key={page.label}
            label={page.label}
            link={page.link}
            items={page.items}
          />
        ))}
      </ul>
    </aside>
  );
}
