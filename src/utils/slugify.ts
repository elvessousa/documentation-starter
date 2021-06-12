const slugify = (string: string): string => {
  const from = 'ãàáäâèéëêìíïîõòóöôùúüûñç·/_,: ;';
  const to = 'aaaaaeeeeiiiiooooouuuunc------';

  let str = string.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();

  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return str;
};

export default slugify;
