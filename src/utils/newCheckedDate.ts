export default function newCheckedData(date: string) {
  const thisDate = new Date(date)
    .toLocaleDateString()
    .split(' ')
    .join('')
    .split('.')
    .join('');

  const nowDate = new Date()
    .toLocaleDateString()
    .split(' ')
    .join('')
    .split('.')
    .join('');

  return Number(thisDate) - Number(nowDate) <= 1;
}
