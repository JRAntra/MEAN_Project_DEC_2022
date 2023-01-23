import { CharacterLimitPipePipe } from './character-limit-pipe.pipe';

describe('CharacterLimitPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CharacterLimitPipePipe();
    expect(pipe).toBeTruthy();
  });
});
