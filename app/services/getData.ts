export async function getData<TData>(
  url: string,
  revalidation?: number
): Promise<TData | undefined> {
  try {
    const response = await fetch(url, { next: { revalidate: revalidation } });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} | ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
}
