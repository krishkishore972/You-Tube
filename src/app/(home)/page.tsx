


import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { HydrateClient, trpc } from "@/trpc/server";
import { HomeView } from "@/modules/home/ui/views/Home-view";
export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    categoryId?: string;
  }>
}

export default async function Page({searchParams}:PageProps) {
  const {categoryId} = await searchParams;
  void  trpc.categories.getAllCategories.prefetch();
  return (
    <HydrateClient>
      <HomeView categoryId={categoryId} />
    </HydrateClient>
  )
}


