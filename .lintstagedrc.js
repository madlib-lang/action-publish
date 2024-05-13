export default {
  'action.yml': raw => raw.map(file => 'action-validator ' + file)
}
