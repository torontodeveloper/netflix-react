import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Layout from '@/components/layout';

export default function App({ Component, pageProps }) {
  return (
        <Layout>
        <Component {...pageProps} />
        </Layout>
      )
}
