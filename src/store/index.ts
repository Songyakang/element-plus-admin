import { createStore, createLogger } from 'vuex'
import user from './modules/user'
import route from './modules/route'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    user,
    route
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})