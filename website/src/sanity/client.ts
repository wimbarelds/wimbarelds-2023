interface SanityResponse<T> {
  ms: number;
  query: string;
  result: T;
}

export const projectId = '5ss9d3s5';
export const dataset = 'production';
export const apiVersion = '2021-08-31';

const urlFor = (query: string): string => {
  const baseUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;
  const searchParams = new URLSearchParams({ query });
  return `${baseUrl}?${searchParams.toString()}`;
};

export const groq = (strings: TemplateStringsArray, ...inserts: unknown[]): string => {
  let result = strings[0];
  for (let i = 1; i < strings.length; i++) {
    result += inserts[i - 1] + strings[i];
  }
  return result;
};

export const sanityClient = {
  fetch: async <T = unknown>(query: string): Promise<T> => {
    const response = await fetch(urlFor(query));
    const json: SanityResponse<T> = await response.json();
    return json.result;
  },
} as const;
