import { defineConfig } from 'orval';

export default defineConfig({
  basic: {
    output: {
      target: '../generated/react-query/basic/endpoints.ts',
      schemas: '../generated/react-query/basic/model',
      client: 'react-query',
      mock: true,
    },
    input: {
      target: '../specifications/petstore.yaml',
    },
  },
  mutator: {
    output: {
      target: '../generated/react-query/mutator/endpoints.ts',
      schemas: '../generated/react-query/mutator/model',
      client: 'react-query',
      mock: true,
      override: {
        mutator: {
          path: '../mutators/custom-instance.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: 'limit',
        },
      },
    },
    input: {
      target: '../specifications/petstore.yaml',
      override: {
        transformer: '../transformers/add-version.js',
      },
    },
  },
  hookMutator: {
    output: {
      target: '../generated/react-query/hook-mutator/endpoints.ts',
      schemas: '../generated/react-query/hook-mutator/model',
      client: 'react-query',
      override: {
        mutator: {
          path: '../mutators/use-custom-instance.ts',
          name: 'useCustomInstance',
        },
      },
    },
    input: {
      target: '../specifications/petstore.yaml',
    },
  },
  formData: {
    output: {
      target: '../generated/react-query/formData/endpoints.ts',
      schemas: '../generated/react-query/formData/model',
      client: 'react-query',
      mock: true,
      override: {
        mutator: {
          path: '../mutators/custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
    input: {
      target: '../specifications/form-data.yaml',
    },
  },
  formDataMutator: {
    output: {
      target: '../generated/react-query/form-data/endpoints.ts',
      schemas: '../generated/react-query/form-data/model',
      client: 'react-query',
      mock: true,
      override: {
        mutator: {
          path: '../mutators/custom-instance.ts',
          name: 'customInstance',
        },
        formData: {
          path: '../mutators/custom-form-data.ts',
          name: 'customFormData',
        },
      },
    },
    input: {
      target: '../specifications/form-data.yaml',
    },
  },
  formUrlEncoded: {
    output: {
      target: '../generated/react-query/form-url-encoded/endpoints.ts',
      schemas: '../generated/react-query/form-url-encoded/model',
      client: 'react-query',
      mock: true,
      override: {
        mutator: {
          path: '../mutators/custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
    input: {
      target: '../specifications/form-url-encoded.yaml',
    },
  },
  formUrlEncodedMutator: {
    output: {
      target: '../generated/react-query/formUrlEncoded/endpoints.ts',
      schemas: '../generated/react-query/formUrlEncoded/model',
      client: 'react-query',
      mock: true,
      override: {
        mutator: {
          path: '../mutators/custom-instance.ts',
          name: 'customInstance',
        },
        formUrlEncoded: {
          path: '../mutators/custom-form-url-encoded.ts',
          name: 'customFormUrlEncoded',
        },
      },
    },
    input: {
      target: '../specifications/form-url-encoded.yaml',
    },
  },
});
