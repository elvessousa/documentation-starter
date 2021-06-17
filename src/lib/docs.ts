import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';
import slug from 'remark-slug';

const docsDirectory = path.resolve(process.cwd(), 'content', 'docs');
const pagesDirectory = path.resolve(process.cwd(), 'content', 'pages');

type ContentFrontmatter = {
  title: string;
  toc?: boolean;
  aside?: boolean;
  thumbnail: string;
};

// Get all filenames in posts directory as ['en/filename.md']
export function getAllFileNames(directoryPath: string, filesList = []) {
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    if (fs.statSync(`${directoryPath}/${file}`).isDirectory()) {
      filesList = getAllFileNames(`${directoryPath}/${file}`, filesList);
    } else {
      filesList.push(path.join(path.basename(directoryPath), '/', file));
    }
  });

  const filteredList = filesList.filter((file) => file.includes('.md'));
  return filteredList;
}

// Get IDs for posts
export function getAllIds(type = 'docs') {
  const dir = type === 'page' ? pagesDirectory : docsDirectory;
  const param = type === 'page' ? 'id' : 'slug';
  const fileNames = getAllFileNames(dir);

  return fileNames.map((fileName) => ({
    params: {
      [param]: fileName.split('/')[1].replace(/\.md$/, ''),
      lang: fileName.split('/')[0],
    },
  }));
}

export async function getContentData(id: string, type = 'docs') {
  const dir = type === 'page' ? pagesDirectory : docsDirectory;
  const fullPath = path.join(dir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const frontMatter = matter(fileContents);
  const processedContent = await remark()
    .use(slug)
    .use(prism)
    .use(html)
    .process(frontMatter.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    ...(frontMatter.data as ContentFrontmatter),
    contentHtml,
  };
}
