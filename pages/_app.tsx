import 'styles/globals.css'
import 'node_modules/nprogress/nprogress.css';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress';
import { ThemeContext, ThemeProvider } from 'context/ThemeContext';
import Layout from 'components/layout/Layout';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    };

    const handleStop = () => {
      NProgress.done()
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    }
  }, [router]);

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <Layout className={theme}>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}
export default MyApp
