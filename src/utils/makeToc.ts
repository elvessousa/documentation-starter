export default function makeToc(htmlText: string) {
  const titles = htmlText.match(/<h[1-6]*.id="(.*?)">(.*?)<\/h[1-6]>/gi);

  const headings = titles.map((heading) => {
    const value = heading.match(/<h[1-6] [^>]+>(.*?)<\/h[1-6]>/)[1];
    const id = heading.match(/<h[1-6] id=(.*?)>/)[1].replace(/\"/g, '');

    return {
      depth: Number(heading[2]),
      value,
      id,
    };
  });

  return headings;
}
