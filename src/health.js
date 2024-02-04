export default function getHealth(parameter) {
  if (parameter.health > 50) {
    return 'healthy';
  } if (parameter.health <= 50 && parameter.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
