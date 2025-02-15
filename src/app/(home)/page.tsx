


import { ErrorBoundary } from "react-error-boundary";
import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { Suspense } from "react";

export default async function Home() {
  trpc.hello.prefetch({text:"kishore"});
  return (
    <div>
      <HydrateClient>
        <Suspense fallback={<p>Loading...</p>}>
          <ErrorBoundary fallback={<p>Loading...</p>}>
            <PageClient />
          </ErrorBoundary>
        </Suspense>
      </HydrateClient>
    </div>
  );
}


