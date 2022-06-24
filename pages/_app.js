import "../styles/layout.css"

import "../styles/components/header.css"
import "../styles/components/footer.css"


export default function MyApp({ Component, pageProps }) {
    return <Component  {...pageProps} />;
}