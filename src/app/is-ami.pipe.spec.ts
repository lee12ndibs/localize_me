import { IsAmi } from './is-ami.pipe';

describe('IsAmi', () => {
  it('create an instance', () => {
    const pipe = new IsAmi;
    expect(pipe).toBeTruthy();
  });
});
