import { First20CharsPipe } from './first20-chars.pipe';

describe('First20CharsPipe', () => {
  it('create an instance', () => {
    const pipe = new First20CharsPipe();
    expect(pipe).toBeTruthy();
  });
});
