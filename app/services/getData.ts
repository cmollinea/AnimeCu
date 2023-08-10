export async function getData<TData>(url: string): Promise<TData | undefined> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} | ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
