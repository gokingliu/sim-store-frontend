/**
 * @description 时间戳转日期格式
 * @param time 时间戳
 */
function getDateTime(time?: number): string {
  const now = time ? new Date(time) : new Date();
  return `${now.toTimeString().substring(0, 8)}`;
}

export { getDateTime };
