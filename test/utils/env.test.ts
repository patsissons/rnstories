import { env } from '../../src/utils/env';

describe('env utils', () => {
  it('can use environment variables', () => {
    expect(env).toBeTruthy();
  });
});
