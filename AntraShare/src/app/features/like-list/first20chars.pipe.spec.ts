import { First20charsPipe } from './first20chars.pipe';

describe('First20charsPipe', () => {
  it('create an instance', () => {
    const pipe = new First20charsPipe();
    expect(pipe).toBeTruthy();
  });
});
