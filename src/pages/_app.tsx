import "@/styles/globals.css";
import type { AppProps } from "next/app";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};
// comment added
function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  // const [queryClient] = useState(
  //   () =>
  //     new QueryClient({
  //       defaultOptions: {
  //         queries: {
  //           refetchOnWindowFocus: false,
  //           refetchOnReconnect: false,
  //         },
  //       },
  //     })
  // );

  // useEffect(() => {
  //   if (process.env.NEXT_PUBLIC_LEARNERS_APP_MIXPANEL_TOKEN) {
  //     mixpanel.init(process.env.NEXT_PUBLIC_LEARNERS_APP_MIXPANEL_TOKEN, {
  //       debug: process.env.NODE_ENV === 'development' ? true : false,
  //       ignore_dnt: true,
  //     });

  //     mixpanel.register({ program_type: 'cbc' });
  //   }
  // }, []);

  return (
    <>
      {Component.PageLayout ? (
        //@ts-ignore
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
