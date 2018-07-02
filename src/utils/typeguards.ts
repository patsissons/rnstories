export function isString(value: any): value is string {
  return value != null && typeof value === 'string';
}

export function isObject<T extends {} = {}>(value: any): value is T {
  return value != null && typeof value === 'object';
}

export function isNumber(value: any): value is number {
  return value != null && typeof value === 'number' && !Number.isNaN(value);
}
