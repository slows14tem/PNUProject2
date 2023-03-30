import moment from 'moment';

//랜덤한 날짜를 생성
function RandomDate() {
  const start = moment('2019-01-01');
  const end = moment('2020-12-31');
  const diff = end.diff(start, 'days');
  const randomDay = Math.floor(Math.random() * diff);
  const result = start.clone().add(randomDay, 'days');
  return result.format('YYYY-MM-DD');
}
export default RandomDate