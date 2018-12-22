import { FirstSentencePipe } from './first-sentence.pipe';

describe('FirstSentencePipe', () => {
  it('create an instance', () => {
    const pipe = new FirstSentencePipe();
    expect(pipe).toBeTruthy();
  });
});
