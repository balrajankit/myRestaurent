// import '@/styles/globals.css'
import SSRProvider from 'react-bootstrap/SSRProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layouts from '@/components/Layouts';
import '@/styles/header.module.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import UserContext from '@/components/UserContext';
config.autoAddCss = false;


export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  }
  return <>
  <UserContext>
    <SSRProvider>
      
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      
    </SSRProvider>
    </UserContext>
  </>
}
