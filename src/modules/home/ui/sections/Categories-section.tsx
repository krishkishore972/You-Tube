"use client"

import { trpc } from "@/trpc/client"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { FilterCarousel } from "@/components/filter-carousel"
import { useRouter } from "next/navigation"

interface CategoriesSectionProps {
    categoryId?: string
}

export const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<CategoriesSectionSkeleton />}>
      <ErrorBoundary fallback={<div>Error...</div>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSectionSkeleton = () => {
  return <FilterCarousel isLoading onSelect={() => {}} data={[]} />;
};

export const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  const router = useRouter();
  const [categories] = trpc.categories.getAllCategories.useSuspenseQuery();
  const data = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));

const onSelect = (value: string | null) => {
  const url = new URL(window.location.href);
  if(value){
    url.searchParams.set("categoryId", value);
  }else{
    url.searchParams.delete("categoryId");
  }
  router.push(url.toString());
}

  return <FilterCarousel onSelect={onSelect} value={categoryId} data={data} />;
};
