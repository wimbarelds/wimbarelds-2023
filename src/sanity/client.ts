import CreateClient from '@sanity/client';

export const sanityClient = new CreateClient({
  projectId: '5ss9d3s5',
  dataset: 'production',
  apiVersion: '2021-08-31',
  useCdn: false
});