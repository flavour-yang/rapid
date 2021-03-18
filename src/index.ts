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
    let str: string = ''
    let reg = /^(\d{3})\d{4}(\d{4})$/;
    
    str = tel.replace(reg, "$1****$2");
    return str
}