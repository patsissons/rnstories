import { isNumber, isObject, isString } from '../../src/utils/typeguards';

describe('typeguard utils', () => {
  describe('isNumber', () => {
    it('can detect numbers', () => {
      expect(isNumber('test')).toBe(false);
      expect(isNumber('')).toBe(false);
      expect(isNumber(String('test'))).toBe(false);
      expect(isNumber(123)).toBe(true);
      expect(isNumber(1.23)).toBe(true);
      expect(isNumber({})).toBe(false);
      expect(isNumber(new RegExp(''))).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber(null)).toBe(false);
    });
  });

  describe('isObject', () => {
    it('can detect objects', () => {
      expect(isObject('test')).toBe(false);
      expect(isObject('')).toBe(false);
      expect(isObject(String('test'))).toBe(false);
      expect(isObject(123)).toBe(false);
      expect(isObject(1.23)).toBe(false);
      expect(isObject({})).toBe(true);
      expect(isObject(new RegExp(''))).toBe(true);
      expect(isObject(undefined)).toBe(false);
      expect(isObject(null)).toBe(false);
    });
  });

  describe('isString', () => {
    it('can detect strings', () => {
      expect(isString('test')).toBe(true);
      expect(isString('')).toBe(true);
      expect(isString(String('test'))).toBe(true);
      expect(isString(123)).toBe(false);
      expect(isString(1.23)).toBe(false);
      expect(isString({})).toBe(false);
      expect(isString(new RegExp(''))).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString(null)).toBe(false);
    });
  });
});
