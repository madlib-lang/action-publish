export default {
  '.github/**/*.yml': raw => raw.map(file => 'action-validator ' + file)
}
