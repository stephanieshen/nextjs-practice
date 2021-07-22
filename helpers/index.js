import { format } from 'date-fns';

export const toArray = (data) => {
  return Object.keys(data).reduce((acc, key) => {
    const item = {...data[key]};
    item.id = key;
    acc.push(item);
    return acc;
  }, []);
}

export const formatDate = (dateString) => {
  return format(new Date(dateString), 'MMM dd, yyyy');
}

export const toSlug = (title) => {
  const stringArr = title.split(' ');
  const slug = stringArr.join('-');
  return slug.toLowerCase();
}
