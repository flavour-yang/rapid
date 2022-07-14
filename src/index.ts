export const setCookie = (key: string, value: string) => {
  document.cookie = `${key}=${value};`;
};

export const getCookie = (key: string): string => {
  const items: string[] = document.cookie.split('; ');
  for (let i = 0; i < items.length; i += 1) {
    const item: string[] = items[i].split('=');
    if (key === item[0] && item.length === 2) {
      return decodeURIComponent(item[1]);
    }
  }
  return '';
};
/**
 * 隐藏中间四位数
 */
export const phoneNumHide = (tel: string): string => {
  let str = '';
  const reg = /^(\d{3})\d{4}(\d{4})$/;

  str = tel.replace(reg, '$1****$2');
  return str;
};

/**
 * @description: 常用正则
 */

// 匹配两位数月份
export const month = /^0?[1-9]$|^1[0-2]$/;

// --------------------------------------------------- //
// 将url参数转化为对象
export const getURLParameters = (url: string) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a: any, v: string) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {},
  );
