import '@/styles/globals.css'
import "@/styles/vars.css";
import "@/styles/styles.css";
/* Redux */
import store from '../redux/store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}
