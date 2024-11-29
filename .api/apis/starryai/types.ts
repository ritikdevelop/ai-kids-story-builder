import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type GetApiUserDataUserGetResponse200 = FromSchema<typeof schemas.GetApiUserDataUserGet.response['200']>;
export type GetCreationCreationsCreationIdGetMetadataParam = FromSchema<typeof schemas.GetCreationCreationsCreationIdGet.metadata>;
export type GetCreationCreationsCreationIdGetResponse200 = FromSchema<typeof schemas.GetCreationCreationsCreationIdGet.response['200']>;
export type GetCreationCreationsCreationIdGetResponse422 = FromSchema<typeof schemas.GetCreationCreationsCreationIdGet.response['422']>;
export type GetCreationsCreationsGetMetadataParam = FromSchema<typeof schemas.GetCreationsCreationsGet.metadata>;
export type GetCreationsCreationsGetResponse200 = FromSchema<typeof schemas.GetCreationsCreationsGet.response['200']>;
export type GetCreationsCreationsGetResponse422 = FromSchema<typeof schemas.GetCreationsCreationsGet.response['422']>;
export type NewCreationCreationsPostBodyParam = FromSchema<typeof schemas.NewCreationCreationsPost.body>;
export type NewCreationCreationsPostResponse200 = FromSchema<typeof schemas.NewCreationCreationsPost.response['200']>;
export type NewCreationCreationsPostResponse422 = FromSchema<typeof schemas.NewCreationCreationsPost.response['422']>;
