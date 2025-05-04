export async function queryGibson(sql) {
  const res = await fetch(process.env.GIBSON_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Gibson-API-Key': process.env.GIBSON_API_KEY,
    },
    body: JSON.stringify({ query: sql }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
} 