// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

export const setQueryParams = (params: any): string => {
  return '?' + new URLSearchParams(Object.entries(params)).toString();
};

export const getQueryParams = (url = window.location.toString()): object => {
  const queryString = new URL(url).searchParams.entries();
  const queryParams = {};
  for (const [key, value] of queryString) {
    // @ts-ignore
    queryParams[key] = value;
  }
  return queryParams;
};
