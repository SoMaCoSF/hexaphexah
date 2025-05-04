import { createClient } from '@gibson/client';

export const db = createClient({
  apiKey: process.env.GIBSON_API_KEY,
  apiUrl: process.env.GIBSON_API_URL
}); 