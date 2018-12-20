export function isEmpty(str) {
  return !str.replace(/\s+/, '').length;
}

export function isNotExist(value) {
  return (typeof value === 'undefined' || value === null);
}

export function isNotBoolean(value) {
  return typeof value === 'boolean';
}
