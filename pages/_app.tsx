import "tailwindcss/tailwind.css";
import "../styles/index.scss";
import "../styles/App.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
