import { FirstFewCharsPipe } from './first-few-chars.pipe';

describe('FirstFewCharsPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstFewCharsPipe();
    expect(pipe).toBeTruthy();
  });
});
