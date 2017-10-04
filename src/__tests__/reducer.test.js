import reducer, { INITIAL_STATE } from '../reducer';

it('returns initial state on init action with no state given', () => {
  const action = {
    type: '@@INIT',
  };

  expect(reducer(undefined, action)).toEqual(INITIAL_STATE);
});
