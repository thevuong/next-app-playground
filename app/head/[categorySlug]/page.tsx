import { HeadInfo } from '#/app/head/head-info';
import { fetchCategoryBySlug, type PageProps } from '#/lib/get-categories';

export default async function Page({ params }: PageProps) {
  const category = await fetchCategoryBySlug(params.categorySlug);
  if (!category) return null;

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>

      <HeadInfo />
    </div>
  );
}
