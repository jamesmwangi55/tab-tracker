import Api from './Api'

export default {
  index (credentials) {
    return Api().get('songs')
  }
}
