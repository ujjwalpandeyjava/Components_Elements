export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
  // or fetch data from DB
  // Can have nested dynamic routes too. {fistName: "abc". lastName: "xyz"}
}
// True: crate a static file
// false: give 404
// revalidate create a new static page after x seconds.

export const dynamicParams = true
export const revalidate = 10

interface ProductPageInter {
  params: Promise<{ id: string }>
}
export default async function ProductPage({ params }: ProductPageInter) {
  const { id } = await params;

  return <h1>Product {id} details ({new Date().toLocaleString()})</h1>;
}
