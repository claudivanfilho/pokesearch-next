import Head from "next/head";

import { SWRConfig } from "swr";
import { SWR_OPTIONS } from "@/app/config/constants";
import { BrowserRouter as Router } from "react-router-dom";
import App from "@/app/components/App";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SWRConfig value={SWR_OPTIONS}>
        <Router>
          <App />
        </Router>
      </SWRConfig>
    </div>
  );
}
