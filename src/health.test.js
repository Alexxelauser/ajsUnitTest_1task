import getHealth from './health';

test('health > 50 should return "healthly"', () => {
  const parameter = { name: 'Маг', health: 90 };
  expect(getHealth(parameter)).toBe('healthy');
});

test('health <= 50 and health > 15 should return "wounded"', () => {
  const parameter = { name: 'Маг', health: 40 };
  expect(getHealth(parameter)).toBe('wounded');
});

test('health < 15 should return "critical"', () => {
  const parameter = { name: 'Маг', health: 10 };
  expect(getHealth(parameter)).toBe('critical');
});
