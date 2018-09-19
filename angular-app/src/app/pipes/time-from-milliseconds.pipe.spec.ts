import { TimeFromMillisecondsPipe } from './time-from-milliseconds.pipe';

describe('TimeFromMillisecondsPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeFromMillisecondsPipe();
    expect(pipe).toBeTruthy();
  });
});
