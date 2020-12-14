import "../styles/index.css";
import { GlobalStyles } from "twin.macro";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
