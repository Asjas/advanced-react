import NProgress from 'nprogress';
import Router from 'next/router';
import type { AppProps, AppContext } from 'next/app';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { NextPageContext } from 'next';
import Page from '../components/Page';
import '../components/styles/nprogress.css';
import withData from '../utils/withData';
import { CartStateProvider } from '../context/Cart';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

type ApolloProps = {
  apollo: ApolloClient<any>;
};
type ApolloAppProps = ApolloProps & AppProps;

function MyApp({ Component, pageProps, apollo }: ApolloAppProps) {
  return (
    <ApolloProvider client={apollo}>
      <CartStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CartStateProvider>
    </ApolloProvider>
  );
}

type MyAppProps = AppContext & NextPageContext;

MyApp.getInitialProps = async function ({ Component, ctx }: MyAppProps) {
  let pageProps: { query?: NextPageContext['query'] } = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
