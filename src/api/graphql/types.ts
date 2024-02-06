/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null;
  name: string;
  singularName: string;
  icon?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  fields?: Array<string | null> | null;
  parent?: string | null;
  cover?: string | null;
  index?: number | null;
  i18n?: Array<CategoryI18nInput | null> | null;
};

export type CategoryI18nInput = {
  locale: string;
  name?: string | null;
  singularName?: string | null;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  singularName?: ModelStringInput | null;
  icon?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  updatedBy?: ModelStringInput | null;
  fields?: ModelStringInput | null;
  parent?: ModelStringInput | null;
  cover?: ModelStringInput | null;
  index?: ModelIntInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export const enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Category = {
  __typename: 'Category';
  id: string;
  name: string;
  singularName: string;
  icon?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  fields?: Array<string | null> | null;
  parent?: string | null;
  cover?: string | null;
  index?: number | null;
  i18n?: Array<CategoryI18n | null> | null;
  blurhash?: string | null;
};

export type CategoryI18n = {
  __typename: 'CategoryI18n';
  locale: string;
  name?: string | null;
  singularName?: string | null;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
  singularName?: string | null;
  icon?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  fields?: Array<string | null> | null;
  parent?: string | null;
  cover?: string | null;
  index?: number | null;
  i18n?: Array<CategoryI18nInput | null> | null;
};

export type DeleteCategoryInput = {
  id?: string | null;
};

export type CreateReferenceInput = {
  id?: string | null;
  name: string;
  type?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  i18n?: Array<ReferenceI18nInput | null> | null;
};

export type ReferenceI18nInput = {
  name?: string | null;
  locale: string;
};

export type ModelReferenceConditionInput = {
  name?: ModelStringInput | null;
  type?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  updatedBy?: ModelStringInput | null;
  and?: Array<ModelReferenceConditionInput | null> | null;
  or?: Array<ModelReferenceConditionInput | null> | null;
  not?: ModelReferenceConditionInput | null;
};

export type Reference = {
  __typename: 'Reference';
  id: string;
  name: string;
  type?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  i18n?: Array<ReferenceI18n | null> | null;
};

export type ReferenceI18n = {
  __typename: 'ReferenceI18n';
  name?: string | null;
  locale: string;
};

export type UpdateReferenceInput = {
  id: string;
  name?: string | null;
  type?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  i18n?: Array<ReferenceI18nInput | null> | null;
};

export type DeleteReferenceInput = {
  id?: string | null;
};

export type CreatePermissionInput = {
  id?: string | null;
  name: string;
  key?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  i18n?: Array<PermissionI18nInput | null> | null;
};

export type PermissionI18nInput = {
  locale: string;
  name?: string | null;
};

export type ModelPermissionConditionInput = {
  name?: ModelStringInput | null;
  key?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  updatedBy?: ModelStringInput | null;
  and?: Array<ModelPermissionConditionInput | null> | null;
  or?: Array<ModelPermissionConditionInput | null> | null;
  not?: ModelPermissionConditionInput | null;
};

export type Permission = {
  __typename: 'Permission';
  id: string;
  name: string;
  key?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  i18n?: Array<PermissionI18n | null> | null;
};

export type PermissionI18n = {
  __typename: 'PermissionI18n';
  locale: string;
  name?: string | null;
};

export type UpdatePermissionInput = {
  id: string;
  name?: string | null;
  key?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  i18n?: Array<PermissionI18nInput | null> | null;
};

export type DeletePermissionInput = {
  id?: string | null;
};

export type CreateObjectInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  images?: Array<string | null> | null;
  status?: ObjectStatus | null;
  governanceType?: string | null;
  location?: LocationInput | null;
  area?: AreaInput | null;
  cover?: string | null;
  categoryId: string;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  statusUpdatedAt: string;
  point?: PointInput | null;
  author?: string | null;
  address?: string | null;
  length?: number | null;
  duration?: number | null;
  origins?: Array<OriginInput | null> | null;
  notes?: string | null;
  url?: string | null;
  routes?: RouteInput | null;
  i18n?: Array<ObjectI18nInput | null> | null;
};

export const enum ObjectStatus {
  draft = 'draft',
  archived = 'archived',
  pending = 'pending',
  published = 'published',
}

export type LocationInput = {
  lat?: number | null;
  lon?: number | null;
};

export type AreaInput = {
  type: string;
  coordinates: Array<Array<Array<Array<number | null> | null> | null> | null>;
};

export type PointInput = {
  type: string;
  coordinates: Array<number | null>;
};

export type OriginInput = {
  name: string;
  value: string;
};

export type RouteInput = {
  type: string;
  coordinates: Array<Array<number | null> | null>;
};

export type ObjectI18nInput = {
  locale: string;
  name?: string | null;
  description?: string | null;
  governanceType?: string | null;
  author?: string | null;
  address?: string | null;
  notes?: string | null;
};

export type ModelObjectConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  images?: ModelStringInput | null;
  status?: ModelObjectStatusInput | null;
  governanceType?: ModelStringInput | null;
  cover?: ModelStringInput | null;
  categoryId?: ModelIDInput | null;
  createdBy?: ModelStringInput | null;
  updatedBy?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  statusUpdatedAt?: ModelStringInput | null;
  author?: ModelStringInput | null;
  address?: ModelStringInput | null;
  length?: ModelFloatInput | null;
  duration?: ModelFloatInput | null;
  notes?: ModelStringInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelObjectConditionInput | null> | null;
  or?: Array<ModelObjectConditionInput | null> | null;
  not?: ModelObjectConditionInput | null;
};

export type ModelObjectStatusInput = {
  eq?: ObjectStatus | null;
  ne?: ObjectStatus | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Object = {
  __typename: 'Object';
  id: string;
  name: string;
  description?: string | null;
  images?: Array<string | null> | null;
  status?: ObjectStatus | null;
  governanceType?: string | null;
  location?: Location | null;
  area?: Area | null;
  cover?: string | null;
  categoryId: string;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  createdAt: string;
  updatedAt: string;
  statusUpdatedAt: string;
  point?: Point | null;
  author?: string | null;
  address?: string | null;
  length?: number | null;
  duration?: number | null;
  origins?: Array<Origin | null> | null;
  notes?: string | null;
  url?: string | null;
  routes?: Route | null;
  i18n?: Array<ObjectI18n | null> | null;
  category?: Category | null;
  include?: ModelObjectsLinkingConnection | null;
  belongsTo?: ModelObjectsLinkingConnection | null;
  permissions?: ModelPermissionLinkingConnection | null;
};

export type Location = {
  __typename: 'Location';
  lat?: number | null;
  lon?: number | null;
};

export type Area = {
  __typename: 'Area';
  type: string;
  coordinates: Array<Array<Array<Array<number | null> | null> | null> | null>;
};

export type Point = {
  __typename: 'Point';
  type: string;
  coordinates: Array<number | null>;
};

export type Origin = {
  __typename: 'Origin';
  name: string;
  value: string;
};

export type Route = {
  __typename: 'Route';
  type: string;
  coordinates: Array<Array<number | null> | null>;
};

export type ObjectI18n = {
  __typename: 'ObjectI18n';
  locale: string;
  name?: string | null;
  description?: string | null;
  governanceType?: string | null;
  author?: string | null;
  address?: string | null;
  notes?: string | null;
};

export type ModelObjectsLinkingConnection = {
  __typename: 'ModelObjectsLinkingConnection';
  items?: Array<ObjectsLinking | null> | null;
  nextToken?: string | null;
};

export type ObjectsLinking = {
  __typename: 'ObjectsLinking';
  id: string;
  belongsToId: string;
  includeId: string;
  createdAt: string;
  updatedAt: string;
  belongsTo: Object;
  include: Object;
  owner?: string | null;
};

export type ModelPermissionLinkingConnection = {
  __typename: 'ModelPermissionLinkingConnection';
  items?: Array<PermissionLinking | null> | null;
  nextToken?: string | null;
};

export type PermissionLinking = {
  __typename: 'PermissionLinking';
  id: string;
  objectId: string;
  permissionId: string;
  createdAt: string;
  updatedAt: string;
  permission: Permission;
  object: Object;
  owner?: string | null;
};

export type UpdateObjectInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  images?: Array<string | null> | null;
  status?: ObjectStatus | null;
  governanceType?: string | null;
  location?: LocationInput | null;
  area?: AreaInput | null;
  cover?: string | null;
  categoryId?: string | null;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  statusUpdatedAt?: string | null;
  point?: PointInput | null;
  author?: string | null;
  address?: string | null;
  length?: number | null;
  duration?: number | null;
  origins?: Array<OriginInput | null> | null;
  notes?: string | null;
  url?: string | null;
  routes?: RouteInput | null;
  i18n?: Array<ObjectI18nInput | null> | null;
};

export type DeleteObjectInput = {
  id?: string | null;
};

export type CreateObjectsMetadataInput = {
  id?: string | null;
  value?: string | null;
};

export type ModelObjectsMetadataConditionInput = {
  value?: ModelStringInput | null;
  and?: Array<ModelObjectsMetadataConditionInput | null> | null;
  or?: Array<ModelObjectsMetadataConditionInput | null> | null;
  not?: ModelObjectsMetadataConditionInput | null;
};

export type ObjectsMetadata = {
  __typename: 'ObjectsMetadata';
  id: string;
  value?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateObjectsMetadataInput = {
  id: string;
  value?: string | null;
};

export type DeleteObjectsMetadataInput = {
  id?: string | null;
};

export type CreateLanguageInput = {
  id?: string | null;
  name: string;
  code: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  direction: string;
};

export type ModelLanguageConditionInput = {
  name?: ModelStringInput | null;
  code?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  updatedBy?: ModelStringInput | null;
  direction?: ModelStringInput | null;
  and?: Array<ModelLanguageConditionInput | null> | null;
  or?: Array<ModelLanguageConditionInput | null> | null;
  not?: ModelLanguageConditionInput | null;
};

export type Language = {
  __typename: 'Language';
  id: string;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
  updatedBy?: string | null;
  direction: string;
  owner?: string | null;
};

export type UpdateLanguageInput = {
  id: string;
  name?: string | null;
  code?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  direction?: string | null;
};

export type DeleteLanguageInput = {
  id?: string | null;
};

export type CreateLanguagesSettingInput = {
  id?: string | null;
  name: string;
  value: string;
  createdAt?: string | null;
  updatedAt?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
};

export type ModelLanguagesSettingConditionInput = {
  name?: ModelStringInput | null;
  value?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  updatedBy?: ModelStringInput | null;
  and?: Array<ModelLanguagesSettingConditionInput | null> | null;
  or?: Array<ModelLanguagesSettingConditionInput | null> | null;
  not?: ModelLanguagesSettingConditionInput | null;
};

export type LanguagesSetting = {
  __typename: 'LanguagesSetting';
  id: string;
  name: string;
  value: string;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
  updatedBy?: string | null;
  owner?: string | null;
};

export type UpdateLanguagesSettingInput = {
  id: string;
  name?: string | null;
  value?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
};

export type DeleteLanguagesSettingInput = {
  id?: string | null;
};

export type CreateObjectsLinkingInput = {
  id?: string | null;
  belongsToId: string;
  includeId: string;
};

export type ModelObjectsLinkingConditionInput = {
  belongsToId?: ModelIDInput | null;
  includeId?: ModelIDInput | null;
  and?: Array<ModelObjectsLinkingConditionInput | null> | null;
  or?: Array<ModelObjectsLinkingConditionInput | null> | null;
  not?: ModelObjectsLinkingConditionInput | null;
};

export type UpdateObjectsLinkingInput = {
  id: string;
  belongsToId?: string | null;
  includeId?: string | null;
};

export type DeleteObjectsLinkingInput = {
  id?: string | null;
};

export type CreatePermissionLinkingInput = {
  id?: string | null;
  objectId: string;
  permissionId: string;
};

export type ModelPermissionLinkingConditionInput = {
  objectId?: ModelIDInput | null;
  permissionId?: ModelIDInput | null;
  and?: Array<ModelPermissionLinkingConditionInput | null> | null;
  or?: Array<ModelPermissionLinkingConditionInput | null> | null;
  not?: ModelPermissionLinkingConditionInput | null;
};

export type UpdatePermissionLinkingInput = {
  id: string;
  objectId?: string | null;
  permissionId?: string | null;
};

export type DeletePermissionLinkingInput = {
  id?: string | null;
};

export type MobileCategory = {
  __typename: 'MobileCategory';
  id: string;
  name: string;
  icon?: string | null;
  createdAt: string;
  updatedAt: string;
  singularName: string;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  fields?: Array<string | null> | null;
  parent?: string | null;
  children?: Array<MobileCategory | null> | null;
  objects?: Array<MobileObject | null> | null;
  cover?: string | null;
};

export type MobileObject = {
  __typename: 'MobileObject';
  id: string;
  name: string;
  description?: string | null;
  images?: Array<string | null> | null;
  status?: ObjectStatus | null;
  governanceType?: string | null;
  location?: Location | null;
  area?: Area | null;
  routes?: Route | null;
  cover?: string | null;
  categoryId: string;
  owner?: string | null;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
  updatedBy?: string | null;
  author?: string | null;
  address?: string | null;
  length?: number | null;
  duration?: number | null;
  origins?: Array<Origin | null> | null;
  notes?: string | null;
  url?: string | null;
  include?: Array<MobileInclude | null> | null;
  belongsTo?: Array<MobileBelongsTo | null> | null;
  category?: Category | null;
  permissions?: ModelPermissionLinkingConnection | null;
};

export type MobileInclude = {
  __typename: 'MobileInclude';
  id: string;
  name: string;
  icon?: string | null;
  singularName: string;
  createdAt: string;
  updatedAt: string;
  fields?: Array<string | null> | null;
  parent?: string | null;
  children?: Array<MobileCategory | null> | null;
  objects?: Array<string | null> | null;
  owner?: string | null;
};

export type MobileBelongsTo = {
  __typename: 'MobileBelongsTo';
  id: string;
  name: string;
  icon?: string | null;
  singularName: string;
  createdAt: string;
  updatedAt: string;
  fields?: Array<string | null> | null;
  parent?: string | null;
  children?: Array<MobileCategory | null> | null;
  objects?: Array<string | null> | null;
  owner?: string | null;
};

export type ObjectStatistics = {
  __typename: 'ObjectStatistics';
  id: string;
  general?: ObjectStatusStatistics | null;
  daily?: ObjectStatusStatistics | null;
};

export type ObjectStatusStatistics = {
  __typename: 'ObjectStatusStatistics';
  total: number;
  pending: number;
  draft: number;
  published: number;
  archived: number;
};

export type SearchableObjectFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  status?: SearchableStringFilterInput | null;
  description?: SearchableStringFilterInput | null;
  images?: SearchableStringFilterInput | null;
  governanceType?: SearchableStringFilterInput | null;
  cover?: SearchableStringFilterInput | null;
  categoryId?: SearchableIDFilterInput | null;
  owner?: SearchableStringFilterInput | null;
  createdBy?: SearchableStringFilterInput | null;
  updatedBy?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  statusUpdatedAt?: SearchableStringFilterInput | null;
  author?: SearchableStringFilterInput | null;
  address?: SearchableStringFilterInput | null;
  length?: SearchableFloatFilterInput | null;
  duration?: SearchableFloatFilterInput | null;
  notes?: SearchableStringFilterInput | null;
  url?: SearchableStringFilterInput | null;
  and?: Array<SearchableObjectFilterInput | null> | null;
  or?: Array<SearchableObjectFilterInput | null> | null;
  not?: SearchableObjectFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableFloatFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type ObjectAutoLinks = {
  __typename: 'ObjectAutoLinks';
  id: string;
  belongsTo?: Array<ObjectAutoLink | null> | null;
  include?: Array<ObjectAutoLink | null> | null;
};

export type ObjectAutoLink = {
  __typename: 'ObjectAutoLink';
  name: string;
  id: string;
};

export type ObjectConnection = {
  __typename: 'ObjectConnection';
  items?: Array<Object | null> | null;
  total?: number | null;
  nextToken?: string | null;
  aggregations?: ObjectAaggregations | null;
};

export type ObjectAaggregations = {
  __typename: 'ObjectAaggregations';
  status?: Aggregations | null;
  categoryId?: Aggregations | null;
};

export type Aggregations = {
  __typename: 'Aggregations';
  doc_count: number;
  facets?: AggregationsFacet | null;
};

export type AggregationsFacet = {
  __typename: 'AggregationsFacet';
  buckets?: Array<AggregationsBucket | null> | null;
};

export type AggregationsBucket = {
  __typename: 'AggregationsBucket';
  key: string;
  doc_count: number;
};

export type BoundsInput = {
  top_left?: LocationInput | null;
  bottom_right?: LocationInput | null;
};

export type MobileData = {
  __typename: 'MobileData';
  categories?: Array<Category | null> | null;
  objects?: ObjectMobileConnection | null;
  metadata?: Array<ObjectsMetadata | null> | null;
};

export type ObjectMobileConnection = {
  __typename: 'ObjectMobileConnection';
  items?: Array<ObjectMobile | null> | null;
  nextToken?: string | null;
  total?: number | null;
};

export type ObjectMobile = {
  __typename: 'ObjectMobile';
  id: string;
  name: string;
  description?: string | null;
  images?: Array<string | null> | null;
  status?: ObjectStatus | null;
  governanceType?: string | null;
  location?: Location | null;
  area?: Area | null;
  cover?: string | null;
  categoryId: string;
  owner?: string | null;
  createdBy?: string | null;
  updatedBy?: string | null;
  createdAt: string;
  updatedAt: string;
  statusUpdatedAt: string;
  point?: Point | null;
  author?: string | null;
  address?: string | null;
  length?: number | null;
  duration?: number | null;
  origins?: Array<Origin | null> | null;
  notes?: string | null;
  url?: string | null;
  routes?: Route | null;
  include?: Array<string | null> | null;
  belongsTo?: Array<string | null> | null;
  i18n?: Array<ObjectI18n | null> | null;
  category?: Category | null;
  permissions?: ModelPermissionLinkingConnection | null;
};

export type FacetObjectFilterInput = {
  categoryId?: Array<string | null> | null;
  status?: Array<string | null> | null;
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  description?: SearchableStringFilterInput | null;
  createdBy?: SearchableStringFilterInput | null;
  updatedBy?: SearchableStringFilterInput | null;
  author?: SearchableStringFilterInput | null;
  address?: SearchableStringFilterInput | null;
  length?: SearchableFloatFilterInput | null;
  duration?: SearchableFloatFilterInput | null;
  notes?: SearchableStringFilterInput | null;
  url?: SearchableStringFilterInput | null;
};

export type SearchableObjectSortInput = {
  field?: SearchableObjectSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export const enum SearchableObjectSortableFields {
  id = 'id',
  name = 'name',
  description = 'description',
  images = 'images',
  governanceType = 'governanceType',
  cover = 'cover',
  categoryId = 'categoryId',
  owner = 'owner',
  createdBy = 'createdBy',
  updatedBy = 'updatedBy',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  statusUpdatedAt = 'statusUpdatedAt',
  author = 'author',
  address = 'address',
  length = 'length',
  duration = 'duration',
  origin = 'origin',
  notes = 'notes',
  url = 'url',
}

export const enum SearchableSortDirection {
  asc = 'asc',
  desc = 'desc',
}

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  singularName?: ModelStringInput | null;
  icon?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  updatedBy?: ModelStringInput | null;
  fields?: ModelStringInput | null;
  parent?: ModelStringInput | null;
  cover?: ModelStringInput | null;
  index?: ModelIntInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelCategoryConnection = {
  __typename: 'ModelCategoryConnection';
  items?: Array<Category | null> | null;
  nextToken?: string | null;
};

export type SearchableCategoryFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  singularName?: SearchableStringFilterInput | null;
  icon?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  owner?: SearchableStringFilterInput | null;
  createdBy?: SearchableStringFilterInput | null;
  updatedBy?: SearchableStringFilterInput | null;
  fields?: SearchableStringFilterInput | null;
  parent?: SearchableStringFilterInput | null;
  cover?: SearchableStringFilterInput | null;
  index?: SearchableIntFilterInput | null;
  and?: Array<SearchableCategoryFilterInput | null> | null;
  or?: Array<SearchableCategoryFilterInput | null> | null;
  not?: SearchableCategoryFilterInput | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableCategorySortInput = {
  field?: SearchableCategorySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export const enum SearchableCategorySortableFields {
  id = 'id',
  name = 'name',
  singularName = 'singularName',
  icon = 'icon',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  owner = 'owner',
  createdBy = 'createdBy',
  updatedBy = 'updatedBy',
  fields = 'fields',
  parent = 'parent',
  cover = 'cover',
  index = 'index',
}

export type SearchableCategoryConnection = {
  __typename: 'SearchableCategoryConnection';
  items?: Array<Category | null> | null;
  nextToken?: string | null;
  total?: number | null;
};

export type ModelReferenceFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  type?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  updatedBy?: ModelStringInput | null;
  and?: Array<ModelReferenceFilterInput | null> | null;
  or?: Array<ModelReferenceFilterInput | null> | null;
  not?: ModelReferenceFilterInput | null;
};

export type ModelReferenceConnection = {
  __typename: 'ModelReferenceConnection';
  items?: Array<Reference | null> | null;
  nextToken?: string | null;
};

export type SearchableReferenceFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  type?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  owner?: SearchableStringFilterInput | null;
  createdBy?: SearchableStringFilterInput | null;
  updatedBy?: SearchableStringFilterInput | null;
  and?: Array<SearchableReferenceFilterInput | null> | null;
  or?: Array<SearchableReferenceFilterInput | null> | null;
  not?: SearchableReferenceFilterInput | null;
};

export type SearchableReferenceSortInput = {
  field?: SearchableReferenceSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export const enum SearchableReferenceSortableFields {
  id = 'id',
  name = 'name',
  type = 'type',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  owner = 'owner',
  createdBy = 'createdBy',
  updatedBy = 'updatedBy',
}

export type SearchableReferenceConnection = {
  __typename: 'SearchableReferenceConnection';
  items?: Array<Reference | null> | null;
  nextToken?: string | null;
  total?: number | null;
};

export type ModelPermissionFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  key?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  updatedBy?: ModelStringInput | null;
  and?: Array<ModelPermissionFilterInput | null> | null;
  or?: Array<ModelPermissionFilterInput | null> | null;
  not?: ModelPermissionFilterInput | null;
};

export type ModelPermissionConnection = {
  __typename: 'ModelPermissionConnection';
  items?: Array<Permission | null> | null;
  nextToken?: string | null;
};

export type SearchablePermissionFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  key?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  owner?: SearchableStringFilterInput | null;
  createdBy?: SearchableStringFilterInput | null;
  updatedBy?: SearchableStringFilterInput | null;
  and?: Array<SearchablePermissionFilterInput | null> | null;
  or?: Array<SearchablePermissionFilterInput | null> | null;
  not?: SearchablePermissionFilterInput | null;
};

export type SearchablePermissionSortInput = {
  field?: SearchablePermissionSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export const enum SearchablePermissionSortableFields {
  id = 'id',
  name = 'name',
  key = 'key',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  owner = 'owner',
  createdBy = 'createdBy',
  updatedBy = 'updatedBy',
}

export type SearchablePermissionConnection = {
  __typename: 'SearchablePermissionConnection';
  items?: Array<Permission | null> | null;
  nextToken?: string | null;
  total?: number | null;
};

export type ModelObjectFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  images?: ModelStringInput | null;
  status?: ModelObjectStatusInput | null;
  governanceType?: ModelStringInput | null;
  cover?: ModelStringInput | null;
  categoryId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  updatedBy?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  statusUpdatedAt?: ModelStringInput | null;
  author?: ModelStringInput | null;
  address?: ModelStringInput | null;
  length?: ModelFloatInput | null;
  duration?: ModelFloatInput | null;
  notes?: ModelStringInput | null;
  url?: ModelStringInput | null;
  and?: Array<ModelObjectFilterInput | null> | null;
  or?: Array<ModelObjectFilterInput | null> | null;
  not?: ModelObjectFilterInput | null;
};

export type ModelObjectConnection = {
  __typename: 'ModelObjectConnection';
  items?: Array<Object | null> | null;
  nextToken?: string | null;
};

export const enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type SearchableObjectConnection = {
  __typename: 'SearchableObjectConnection';
  items?: Array<Object | null> | null;
  nextToken?: string | null;
  total?: number | null;
};

export type ModelObjectsMetadataFilterInput = {
  id?: ModelIDInput | null;
  value?: ModelStringInput | null;
  and?: Array<ModelObjectsMetadataFilterInput | null> | null;
  or?: Array<ModelObjectsMetadataFilterInput | null> | null;
  not?: ModelObjectsMetadataFilterInput | null;
};

export type ModelObjectsMetadataConnection = {
  __typename: 'ModelObjectsMetadataConnection';
  items?: Array<ObjectsMetadata | null> | null;
  nextToken?: string | null;
};

export type ModelLanguageFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  code?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  updatedBy?: ModelStringInput | null;
  direction?: ModelStringInput | null;
  and?: Array<ModelLanguageFilterInput | null> | null;
  or?: Array<ModelLanguageFilterInput | null> | null;
  not?: ModelLanguageFilterInput | null;
};

export type ModelLanguageConnection = {
  __typename: 'ModelLanguageConnection';
  items?: Array<Language | null> | null;
  nextToken?: string | null;
};

export type ModelLanguagesSettingFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  value?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  createdBy?: ModelStringInput | null;
  updatedBy?: ModelStringInput | null;
  and?: Array<ModelLanguagesSettingFilterInput | null> | null;
  or?: Array<ModelLanguagesSettingFilterInput | null> | null;
  not?: ModelLanguagesSettingFilterInput | null;
};

export type ModelLanguagesSettingConnection = {
  __typename: 'ModelLanguagesSettingConnection';
  items?: Array<LanguagesSetting | null> | null;
  nextToken?: string | null;
};

export type ModelObjectsLinkingFilterInput = {
  id?: ModelIDInput | null;
  belongsToId?: ModelIDInput | null;
  includeId?: ModelIDInput | null;
  and?: Array<ModelObjectsLinkingFilterInput | null> | null;
  or?: Array<ModelObjectsLinkingFilterInput | null> | null;
  not?: ModelObjectsLinkingFilterInput | null;
};

export type ModelPermissionLinkingFilterInput = {
  id?: ModelIDInput | null;
  objectId?: ModelIDInput | null;
  permissionId?: ModelIDInput | null;
  and?: Array<ModelPermissionLinkingFilterInput | null> | null;
  or?: Array<ModelPermissionLinkingFilterInput | null> | null;
  not?: ModelPermissionLinkingFilterInput | null;
};

export type PutObjectByLinkMutationVariables = {
  url?: string | null;
  key?: string | null;
};

export type PutObjectByLinkMutation = {
  putObjectByLink?: string | null;
};

export type UpdateMobileObjectsS3Mutation = {
  updateMobileObjectsS3?: string | null;
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type CreateCategoryMutation = {
  createCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    singularName: string;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    fields?: Array<string | null> | null;
    parent?: string | null;
    cover?: string | null;
    index?: number | null;
    i18n?: Array<{
      __typename: 'CategoryI18n';
      locale: string;
      name?: string | null;
      singularName?: string | null;
    } | null> | null;
  } | null;
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type UpdateCategoryMutation = {
  updateCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    singularName: string;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    fields?: Array<string | null> | null;
    parent?: string | null;
    cover?: string | null;
    index?: number | null;
    i18n?: Array<{
      __typename: 'CategoryI18n';
      locale: string;
      name?: string | null;
      singularName?: string | null;
    } | null> | null;
  } | null;
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type DeleteCategoryMutation = {
  deleteCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    singularName: string;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    fields?: Array<string | null> | null;
    parent?: string | null;
    cover?: string | null;
    index?: number | null;
    i18n?: Array<{
      __typename: 'CategoryI18n';
      locale: string;
      name?: string | null;
      singularName?: string | null;
    } | null> | null;
  } | null;
};

export type CreateReferenceMutationVariables = {
  input: CreateReferenceInput;
  condition?: ModelReferenceConditionInput | null;
};

export type CreateReferenceMutation = {
  createReference?: {
    __typename: 'Reference';
    id: string;
    name: string;
    type?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'ReferenceI18n';
      name?: string | null;
      locale: string;
    } | null> | null;
  } | null;
};

export type UpdateReferenceMutationVariables = {
  input: UpdateReferenceInput;
  condition?: ModelReferenceConditionInput | null;
};

export type UpdateReferenceMutation = {
  updateReference?: {
    __typename: 'Reference';
    id: string;
    name: string;
    type?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'ReferenceI18n';
      name?: string | null;
      locale: string;
    } | null> | null;
  } | null;
};

export type DeleteReferenceMutationVariables = {
  input: DeleteReferenceInput;
  condition?: ModelReferenceConditionInput | null;
};

export type DeleteReferenceMutation = {
  deleteReference?: {
    __typename: 'Reference';
    id: string;
    name: string;
    type?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'ReferenceI18n';
      name?: string | null;
      locale: string;
    } | null> | null;
  } | null;
};

export type CreatePermissionMutationVariables = {
  input: CreatePermissionInput;
  condition?: ModelPermissionConditionInput | null;
};

export type CreatePermissionMutation = {
  createPermission?: {
    __typename: 'Permission';
    id: string;
    name: string;
    key?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'PermissionI18n';
      locale: string;
      name?: string | null;
    } | null> | null;
  } | null;
};

export type UpdatePermissionMutationVariables = {
  input: UpdatePermissionInput;
  condition?: ModelPermissionConditionInput | null;
};

export type UpdatePermissionMutation = {
  updatePermission?: {
    __typename: 'Permission';
    id: string;
    name: string;
    key?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'PermissionI18n';
      locale: string;
      name?: string | null;
    } | null> | null;
  } | null;
};

export type DeletePermissionMutationVariables = {
  input: DeletePermissionInput;
  condition?: ModelPermissionConditionInput | null;
};

export type DeletePermissionMutation = {
  deletePermission?: {
    __typename: 'Permission';
    id: string;
    name: string;
    key?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'PermissionI18n';
      locale: string;
      name?: string | null;
    } | null> | null;
  } | null;
};

export type CreateObjectMutationVariables = {
  input: CreateObjectInput;
  condition?: ModelObjectConditionInput | null;
};

export type CreateObjectMutation = {
  createObject?: {
    __typename: 'Object';
    id: string;
    name: string;
    description?: string | null;
    images?: Array<string | null> | null;
    status?: ObjectStatus | null;
    governanceType?: string | null;
    location?: {
      __typename: 'Location';
      lat?: number | null;
      lon?: number | null;
    } | null;
    area?: {
      __typename: 'Area';
      type: string;
      coordinates: Array<Array<Array<Array<
        number | null
      > | null> | null> | null>;
    } | null;
    cover?: string | null;
    categoryId: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    createdAt: string;
    updatedAt: string;
    statusUpdatedAt: string;
    point?: {
      __typename: 'Point';
      type: string;
      coordinates: Array<number | null>;
    } | null;
    author?: string | null;
    address?: string | null;
    length?: number | null;
    duration?: number | null;
    origins?: Array<{
      __typename: 'Origin';
      name: string;
      value: string;
    } | null> | null;
    notes?: string | null;
    url?: string | null;
    routes?: {
      __typename: 'Route';
      type: string;
      coordinates: Array<Array<number | null> | null>;
    } | null;
    i18n?: Array<{
      __typename: 'ObjectI18n';
      locale: string;
      name?: string | null;
      description?: string | null;
      governanceType?: string | null;
      author?: string | null;
      address?: string | null;
      notes?: string | null;
    } | null> | null;
    category?: {
      __typename: 'Category';
      id: string;
      name: string;
      singularName: string;
      icon?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      fields?: Array<string | null> | null;
      parent?: string | null;
      cover?: string | null;
      index?: number | null;
      i18n?: Array<{
        __typename: 'CategoryI18n';
        locale: string;
        name?: string | null;
        singularName?: string | null;
      } | null> | null;
    } | null;
    include?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    belongsTo?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    permissions?: {
      __typename: 'ModelPermissionLinkingConnection';
      items?: Array<{
        __typename: 'PermissionLinking';
        id: string;
        objectId: string;
        permissionId: string;
        createdAt: string;
        updatedAt: string;
        permission: {
          __typename: 'Permission';
          id: string;
          name: string;
          key?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          i18n?: Array<{
            __typename: 'PermissionI18n';
            locale: string;
            name?: string | null;
          } | null> | null;
        };
        object: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type UpdateObjectMutationVariables = {
  input: UpdateObjectInput;
  condition?: ModelObjectConditionInput | null;
};

export type UpdateObjectMutation = {
  updateObject?: {
    __typename: 'Object';
    id: string;
    name: string;
    description?: string | null;
    images?: Array<string | null> | null;
    status?: ObjectStatus | null;
    governanceType?: string | null;
    location?: {
      __typename: 'Location';
      lat?: number | null;
      lon?: number | null;
    } | null;
    area?: {
      __typename: 'Area';
      type: string;
      coordinates: Array<Array<Array<Array<
        number | null
      > | null> | null> | null>;
    } | null;
    cover?: string | null;
    categoryId: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    createdAt: string;
    updatedAt: string;
    statusUpdatedAt: string;
    point?: {
      __typename: 'Point';
      type: string;
      coordinates: Array<number | null>;
    } | null;
    author?: string | null;
    address?: string | null;
    length?: number | null;
    duration?: number | null;
    origins?: Array<{
      __typename: 'Origin';
      name: string;
      value: string;
    } | null> | null;
    notes?: string | null;
    url?: string | null;
    routes?: {
      __typename: 'Route';
      type: string;
      coordinates: Array<Array<number | null> | null>;
    } | null;
    i18n?: Array<{
      __typename: 'ObjectI18n';
      locale: string;
      name?: string | null;
      description?: string | null;
      governanceType?: string | null;
      author?: string | null;
      address?: string | null;
      notes?: string | null;
    } | null> | null;
    category?: {
      __typename: 'Category';
      id: string;
      name: string;
      singularName: string;
      icon?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      fields?: Array<string | null> | null;
      parent?: string | null;
      cover?: string | null;
      index?: number | null;
      i18n?: Array<{
        __typename: 'CategoryI18n';
        locale: string;
        name?: string | null;
        singularName?: string | null;
      } | null> | null;
    } | null;
    include?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    belongsTo?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    permissions?: {
      __typename: 'ModelPermissionLinkingConnection';
      items?: Array<{
        __typename: 'PermissionLinking';
        id: string;
        objectId: string;
        permissionId: string;
        createdAt: string;
        updatedAt: string;
        permission: {
          __typename: 'Permission';
          id: string;
          name: string;
          key?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          i18n?: Array<{
            __typename: 'PermissionI18n';
            locale: string;
            name?: string | null;
          } | null> | null;
        };
        object: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type DeleteObjectMutationVariables = {
  input: DeleteObjectInput;
  condition?: ModelObjectConditionInput | null;
};

export type DeleteObjectMutation = {
  deleteObject?: {
    __typename: 'Object';
    id: string;
    name: string;
    description?: string | null;
    images?: Array<string | null> | null;
    status?: ObjectStatus | null;
    governanceType?: string | null;
    location?: {
      __typename: 'Location';
      lat?: number | null;
      lon?: number | null;
    } | null;
    area?: {
      __typename: 'Area';
      type: string;
      coordinates: Array<Array<Array<Array<
        number | null
      > | null> | null> | null>;
    } | null;
    cover?: string | null;
    categoryId: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    createdAt: string;
    updatedAt: string;
    statusUpdatedAt: string;
    point?: {
      __typename: 'Point';
      type: string;
      coordinates: Array<number | null>;
    } | null;
    author?: string | null;
    address?: string | null;
    length?: number | null;
    duration?: number | null;
    origins?: Array<{
      __typename: 'Origin';
      name: string;
      value: string;
    } | null> | null;
    notes?: string | null;
    url?: string | null;
    routes?: {
      __typename: 'Route';
      type: string;
      coordinates: Array<Array<number | null> | null>;
    } | null;
    i18n?: Array<{
      __typename: 'ObjectI18n';
      locale: string;
      name?: string | null;
      description?: string | null;
      governanceType?: string | null;
      author?: string | null;
      address?: string | null;
      notes?: string | null;
    } | null> | null;
    category?: {
      __typename: 'Category';
      id: string;
      name: string;
      singularName: string;
      icon?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      fields?: Array<string | null> | null;
      parent?: string | null;
      cover?: string | null;
      index?: number | null;
      i18n?: Array<{
        __typename: 'CategoryI18n';
        locale: string;
        name?: string | null;
        singularName?: string | null;
      } | null> | null;
    } | null;
    include?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    belongsTo?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    permissions?: {
      __typename: 'ModelPermissionLinkingConnection';
      items?: Array<{
        __typename: 'PermissionLinking';
        id: string;
        objectId: string;
        permissionId: string;
        createdAt: string;
        updatedAt: string;
        permission: {
          __typename: 'Permission';
          id: string;
          name: string;
          key?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          i18n?: Array<{
            __typename: 'PermissionI18n';
            locale: string;
            name?: string | null;
          } | null> | null;
        };
        object: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type CreateObjectsMetadataMutationVariables = {
  input: CreateObjectsMetadataInput;
  condition?: ModelObjectsMetadataConditionInput | null;
};

export type CreateObjectsMetadataMutation = {
  createObjectsMetadata?: {
    __typename: 'ObjectsMetadata';
    id: string;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateObjectsMetadataMutationVariables = {
  input: UpdateObjectsMetadataInput;
  condition?: ModelObjectsMetadataConditionInput | null;
};

export type UpdateObjectsMetadataMutation = {
  updateObjectsMetadata?: {
    __typename: 'ObjectsMetadata';
    id: string;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteObjectsMetadataMutationVariables = {
  input: DeleteObjectsMetadataInput;
  condition?: ModelObjectsMetadataConditionInput | null;
};

export type DeleteObjectsMetadataMutation = {
  deleteObjectsMetadata?: {
    __typename: 'ObjectsMetadata';
    id: string;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateLanguageMutationVariables = {
  input: CreateLanguageInput;
  condition?: ModelLanguageConditionInput | null;
};

export type CreateLanguageMutation = {
  createLanguage?: {
    __typename: 'Language';
    id: string;
    name: string;
    code: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    direction: string;
    owner?: string | null;
  } | null;
};

export type UpdateLanguageMutationVariables = {
  input: UpdateLanguageInput;
  condition?: ModelLanguageConditionInput | null;
};

export type UpdateLanguageMutation = {
  updateLanguage?: {
    __typename: 'Language';
    id: string;
    name: string;
    code: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    direction: string;
    owner?: string | null;
  } | null;
};

export type DeleteLanguageMutationVariables = {
  input: DeleteLanguageInput;
  condition?: ModelLanguageConditionInput | null;
};

export type DeleteLanguageMutation = {
  deleteLanguage?: {
    __typename: 'Language';
    id: string;
    name: string;
    code: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    direction: string;
    owner?: string | null;
  } | null;
};

export type CreateLanguagesSettingMutationVariables = {
  input: CreateLanguagesSettingInput;
  condition?: ModelLanguagesSettingConditionInput | null;
};

export type CreateLanguagesSettingMutation = {
  createLanguagesSetting?: {
    __typename: 'LanguagesSetting';
    id: string;
    name: string;
    value: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    owner?: string | null;
  } | null;
};

export type UpdateLanguagesSettingMutationVariables = {
  input: UpdateLanguagesSettingInput;
  condition?: ModelLanguagesSettingConditionInput | null;
};

export type UpdateLanguagesSettingMutation = {
  updateLanguagesSetting?: {
    __typename: 'LanguagesSetting';
    id: string;
    name: string;
    value: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    owner?: string | null;
  } | null;
};

export type DeleteLanguagesSettingMutationVariables = {
  input: DeleteLanguagesSettingInput;
  condition?: ModelLanguagesSettingConditionInput | null;
};

export type DeleteLanguagesSettingMutation = {
  deleteLanguagesSetting?: {
    __typename: 'LanguagesSetting';
    id: string;
    name: string;
    value: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    owner?: string | null;
  } | null;
};

export type CreateObjectsLinkingMutationVariables = {
  input: CreateObjectsLinkingInput;
  condition?: ModelObjectsLinkingConditionInput | null;
};

export type CreateObjectsLinkingMutation = {
  createObjectsLinking?: {
    __typename: 'ObjectsLinking';
    id: string;
    belongsToId: string;
    includeId: string;
    createdAt: string;
    updatedAt: string;
    belongsTo: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    include: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type UpdateObjectsLinkingMutationVariables = {
  input: UpdateObjectsLinkingInput;
  condition?: ModelObjectsLinkingConditionInput | null;
};

export type UpdateObjectsLinkingMutation = {
  updateObjectsLinking?: {
    __typename: 'ObjectsLinking';
    id: string;
    belongsToId: string;
    includeId: string;
    createdAt: string;
    updatedAt: string;
    belongsTo: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    include: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type DeleteObjectsLinkingMutationVariables = {
  input: DeleteObjectsLinkingInput;
  condition?: ModelObjectsLinkingConditionInput | null;
};

export type DeleteObjectsLinkingMutation = {
  deleteObjectsLinking?: {
    __typename: 'ObjectsLinking';
    id: string;
    belongsToId: string;
    includeId: string;
    createdAt: string;
    updatedAt: string;
    belongsTo: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    include: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type CreatePermissionLinkingMutationVariables = {
  input: CreatePermissionLinkingInput;
  condition?: ModelPermissionLinkingConditionInput | null;
};

export type CreatePermissionLinkingMutation = {
  createPermissionLinking?: {
    __typename: 'PermissionLinking';
    id: string;
    objectId: string;
    permissionId: string;
    createdAt: string;
    updatedAt: string;
    permission: {
      __typename: 'Permission';
      id: string;
      name: string;
      key?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      i18n?: Array<{
        __typename: 'PermissionI18n';
        locale: string;
        name?: string | null;
      } | null> | null;
    };
    object: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type UpdatePermissionLinkingMutationVariables = {
  input: UpdatePermissionLinkingInput;
  condition?: ModelPermissionLinkingConditionInput | null;
};

export type UpdatePermissionLinkingMutation = {
  updatePermissionLinking?: {
    __typename: 'PermissionLinking';
    id: string;
    objectId: string;
    permissionId: string;
    createdAt: string;
    updatedAt: string;
    permission: {
      __typename: 'Permission';
      id: string;
      name: string;
      key?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      i18n?: Array<{
        __typename: 'PermissionI18n';
        locale: string;
        name?: string | null;
      } | null> | null;
    };
    object: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type DeletePermissionLinkingMutationVariables = {
  input: DeletePermissionLinkingInput;
  condition?: ModelPermissionLinkingConditionInput | null;
};

export type DeletePermissionLinkingMutation = {
  deletePermissionLinking?: {
    __typename: 'PermissionLinking';
    id: string;
    objectId: string;
    permissionId: string;
    createdAt: string;
    updatedAt: string;
    permission: {
      __typename: 'Permission';
      id: string;
      name: string;
      key?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      i18n?: Array<{
        __typename: 'PermissionI18n';
        locale: string;
        name?: string | null;
      } | null> | null;
    };
    object: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type ListMobileObjectsQuery = {
  listMobileObjects?: Array<{
    __typename: 'MobileCategory';
    id: string;
    name: string;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
    singularName: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    fields?: Array<string | null> | null;
    parent?: string | null;
    children?: Array<{
      __typename: 'MobileCategory';
      id: string;
      name: string;
      icon?: string | null;
      createdAt: string;
      updatedAt: string;
      singularName: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      fields?: Array<string | null> | null;
      parent?: string | null;
      children?: Array<{
        __typename: 'MobileCategory';
        id: string;
        name: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        singularName: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        children?: Array<{
          __typename: 'MobileCategory';
          id: string;
          name: string;
          icon?: string | null;
          createdAt: string;
          updatedAt: string;
          singularName: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          fields?: Array<string | null> | null;
          parent?: string | null;
          children?: Array<{
            __typename: 'MobileCategory';
            id: string;
            name: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            singularName: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            children?: Array<{
              __typename: 'MobileCategory';
              id: string;
              name: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              singularName: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
            } | null> | null;
            objects?: Array<{
              __typename: 'MobileObject';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdAt: string;
              updatedAt: string;
              createdBy?: string | null;
              updatedBy?: string | null;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            } | null> | null;
            cover?: string | null;
          } | null> | null;
          objects?: Array<{
            __typename: 'MobileObject';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdAt: string;
            updatedAt: string;
            createdBy?: string | null;
            updatedBy?: string | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            include?: Array<{
              __typename: 'MobileInclude';
              id: string;
              name: string;
              icon?: string | null;
              singularName: string;
              createdAt: string;
              updatedAt: string;
              fields?: Array<string | null> | null;
              parent?: string | null;
              objects?: Array<string | null> | null;
              owner?: string | null;
            } | null> | null;
            belongsTo?: Array<{
              __typename: 'MobileBelongsTo';
              id: string;
              name: string;
              icon?: string | null;
              singularName: string;
              createdAt: string;
              updatedAt: string;
              fields?: Array<string | null> | null;
              parent?: string | null;
              objects?: Array<string | null> | null;
              owner?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          } | null> | null;
          cover?: string | null;
        } | null> | null;
        objects?: Array<{
          __typename: 'MobileObject';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdAt: string;
          updatedAt: string;
          createdBy?: string | null;
          updatedBy?: string | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          include?: Array<{
            __typename: 'MobileInclude';
            id: string;
            name: string;
            icon?: string | null;
            singularName: string;
            createdAt: string;
            updatedAt: string;
            fields?: Array<string | null> | null;
            parent?: string | null;
            children?: Array<{
              __typename: 'MobileCategory';
              id: string;
              name: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              singularName: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
            } | null> | null;
            objects?: Array<string | null> | null;
            owner?: string | null;
          } | null> | null;
          belongsTo?: Array<{
            __typename: 'MobileBelongsTo';
            id: string;
            name: string;
            icon?: string | null;
            singularName: string;
            createdAt: string;
            updatedAt: string;
            fields?: Array<string | null> | null;
            parent?: string | null;
            children?: Array<{
              __typename: 'MobileCategory';
              id: string;
              name: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              singularName: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
            } | null> | null;
            objects?: Array<string | null> | null;
            owner?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        } | null> | null;
        cover?: string | null;
      } | null> | null;
      objects?: Array<{
        __typename: 'MobileObject';
        id: string;
        name: string;
        description?: string | null;
        images?: Array<string | null> | null;
        status?: ObjectStatus | null;
        governanceType?: string | null;
        location?: {
          __typename: 'Location';
          lat?: number | null;
          lon?: number | null;
        } | null;
        area?: {
          __typename: 'Area';
          type: string;
          coordinates: Array<Array<Array<Array<
            number | null
          > | null> | null> | null>;
        } | null;
        routes?: {
          __typename: 'Route';
          type: string;
          coordinates: Array<Array<number | null> | null>;
        } | null;
        cover?: string | null;
        categoryId: string;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        createdBy?: string | null;
        updatedBy?: string | null;
        author?: string | null;
        address?: string | null;
        length?: number | null;
        duration?: number | null;
        origins?: Array<{
          __typename: 'Origin';
          name: string;
          value: string;
        } | null> | null;
        notes?: string | null;
        url?: string | null;
        include?: Array<{
          __typename: 'MobileInclude';
          id: string;
          name: string;
          icon?: string | null;
          singularName: string;
          createdAt: string;
          updatedAt: string;
          fields?: Array<string | null> | null;
          parent?: string | null;
          children?: Array<{
            __typename: 'MobileCategory';
            id: string;
            name: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            singularName: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            children?: Array<{
              __typename: 'MobileCategory';
              id: string;
              name: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              singularName: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
            } | null> | null;
            objects?: Array<{
              __typename: 'MobileObject';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdAt: string;
              updatedAt: string;
              createdBy?: string | null;
              updatedBy?: string | null;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            } | null> | null;
            cover?: string | null;
          } | null> | null;
          objects?: Array<string | null> | null;
          owner?: string | null;
        } | null> | null;
        belongsTo?: Array<{
          __typename: 'MobileBelongsTo';
          id: string;
          name: string;
          icon?: string | null;
          singularName: string;
          createdAt: string;
          updatedAt: string;
          fields?: Array<string | null> | null;
          parent?: string | null;
          children?: Array<{
            __typename: 'MobileCategory';
            id: string;
            name: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            singularName: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            children?: Array<{
              __typename: 'MobileCategory';
              id: string;
              name: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              singularName: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
            } | null> | null;
            objects?: Array<{
              __typename: 'MobileObject';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdAt: string;
              updatedAt: string;
              createdBy?: string | null;
              updatedBy?: string | null;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            } | null> | null;
            cover?: string | null;
          } | null> | null;
          objects?: Array<string | null> | null;
          owner?: string | null;
        } | null> | null;
        category?: {
          __typename: 'Category';
          id: string;
          name: string;
          singularName: string;
          icon?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          fields?: Array<string | null> | null;
          parent?: string | null;
          cover?: string | null;
          index?: number | null;
          i18n?: Array<{
            __typename: 'CategoryI18n';
            locale: string;
            name?: string | null;
            singularName?: string | null;
          } | null> | null;
        } | null;
        permissions?: {
          __typename: 'ModelPermissionLinkingConnection';
          items?: Array<{
            __typename: 'PermissionLinking';
            id: string;
            objectId: string;
            permissionId: string;
            createdAt: string;
            updatedAt: string;
            permission: {
              __typename: 'Permission';
              id: string;
              name: string;
              key?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
            };
            object: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
      } | null> | null;
      cover?: string | null;
    } | null> | null;
    objects?: Array<{
      __typename: 'MobileObject';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdAt: string;
      updatedAt: string;
      createdBy?: string | null;
      updatedBy?: string | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      include?: Array<{
        __typename: 'MobileInclude';
        id: string;
        name: string;
        icon?: string | null;
        singularName: string;
        createdAt: string;
        updatedAt: string;
        fields?: Array<string | null> | null;
        parent?: string | null;
        children?: Array<{
          __typename: 'MobileCategory';
          id: string;
          name: string;
          icon?: string | null;
          createdAt: string;
          updatedAt: string;
          singularName: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          fields?: Array<string | null> | null;
          parent?: string | null;
          children?: Array<{
            __typename: 'MobileCategory';
            id: string;
            name: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            singularName: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            children?: Array<{
              __typename: 'MobileCategory';
              id: string;
              name: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              singularName: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
            } | null> | null;
            objects?: Array<{
              __typename: 'MobileObject';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdAt: string;
              updatedAt: string;
              createdBy?: string | null;
              updatedBy?: string | null;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            } | null> | null;
            cover?: string | null;
          } | null> | null;
          objects?: Array<{
            __typename: 'MobileObject';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdAt: string;
            updatedAt: string;
            createdBy?: string | null;
            updatedBy?: string | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            include?: Array<{
              __typename: 'MobileInclude';
              id: string;
              name: string;
              icon?: string | null;
              singularName: string;
              createdAt: string;
              updatedAt: string;
              fields?: Array<string | null> | null;
              parent?: string | null;
              objects?: Array<string | null> | null;
              owner?: string | null;
            } | null> | null;
            belongsTo?: Array<{
              __typename: 'MobileBelongsTo';
              id: string;
              name: string;
              icon?: string | null;
              singularName: string;
              createdAt: string;
              updatedAt: string;
              fields?: Array<string | null> | null;
              parent?: string | null;
              objects?: Array<string | null> | null;
              owner?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          } | null> | null;
          cover?: string | null;
        } | null> | null;
        objects?: Array<string | null> | null;
        owner?: string | null;
      } | null> | null;
      belongsTo?: Array<{
        __typename: 'MobileBelongsTo';
        id: string;
        name: string;
        icon?: string | null;
        singularName: string;
        createdAt: string;
        updatedAt: string;
        fields?: Array<string | null> | null;
        parent?: string | null;
        children?: Array<{
          __typename: 'MobileCategory';
          id: string;
          name: string;
          icon?: string | null;
          createdAt: string;
          updatedAt: string;
          singularName: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          fields?: Array<string | null> | null;
          parent?: string | null;
          children?: Array<{
            __typename: 'MobileCategory';
            id: string;
            name: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            singularName: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            children?: Array<{
              __typename: 'MobileCategory';
              id: string;
              name: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              singularName: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
            } | null> | null;
            objects?: Array<{
              __typename: 'MobileObject';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdAt: string;
              updatedAt: string;
              createdBy?: string | null;
              updatedBy?: string | null;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            } | null> | null;
            cover?: string | null;
          } | null> | null;
          objects?: Array<{
            __typename: 'MobileObject';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdAt: string;
            updatedAt: string;
            createdBy?: string | null;
            updatedBy?: string | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            include?: Array<{
              __typename: 'MobileInclude';
              id: string;
              name: string;
              icon?: string | null;
              singularName: string;
              createdAt: string;
              updatedAt: string;
              fields?: Array<string | null> | null;
              parent?: string | null;
              objects?: Array<string | null> | null;
              owner?: string | null;
            } | null> | null;
            belongsTo?: Array<{
              __typename: 'MobileBelongsTo';
              id: string;
              name: string;
              icon?: string | null;
              singularName: string;
              createdAt: string;
              updatedAt: string;
              fields?: Array<string | null> | null;
              parent?: string | null;
              objects?: Array<string | null> | null;
              owner?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          } | null> | null;
          cover?: string | null;
        } | null> | null;
        objects?: Array<string | null> | null;
        owner?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    cover?: string | null;
  } | null> | null;
};

export type ListObjectStatisticsQuery = {
  listObjectStatistics?: {
    __typename: 'ObjectStatistics';
    id: string;
    general?: {
      __typename: 'ObjectStatusStatistics';
      total: number;
      pending: number;
      draft: number;
      published: number;
      archived: number;
    } | null;
    daily?: {
      __typename: 'ObjectStatusStatistics';
      total: number;
      pending: number;
      draft: number;
      published: number;
      archived: number;
    } | null;
  } | null;
};

export type GenerateObjectLinkingQueryVariables = {
  lat?: number | null;
  lon?: number | null;
  linkingType: string;
  routes?: RouteInput | null;
  area?: AreaInput | null;
  id?: string | null;
  filter?: SearchableObjectFilterInput | null;
};

export type GenerateObjectLinkingQuery = {
  generateObjectLinking?: {
    __typename: 'ObjectAutoLinks';
    id: string;
    belongsTo?: Array<{
      __typename: 'ObjectAutoLink';
      name: string;
      id: string;
    } | null> | null;
    include?: Array<{
      __typename: 'ObjectAutoLink';
      name: string;
      id: string;
    } | null> | null;
  } | null;
};

export type SearchByDistanceQueryVariables = {
  location: LocationInput;
  km?: number | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  filter?: SearchableObjectFilterInput | null;
};

export type SearchByDistanceQuery = {
  searchByDistance?: {
    __typename: 'ObjectConnection';
    items?: Array<{
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    total?: number | null;
    nextToken?: string | null;
    aggregations?: {
      __typename: 'ObjectAaggregations';
      status?: {
        __typename: 'Aggregations';
        doc_count: number;
        facets?: {
          __typename: 'AggregationsFacet';
          buckets?: Array<{
            __typename: 'AggregationsBucket';
            key: string;
            doc_count: number;
          } | null> | null;
        } | null;
      } | null;
      categoryId?: {
        __typename: 'Aggregations';
        doc_count: number;
        facets?: {
          __typename: 'AggregationsFacet';
          buckets?: Array<{
            __typename: 'AggregationsBucket';
            key: string;
            doc_count: number;
          } | null> | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type SearchByBoundsQueryVariables = {
  bounds: BoundsInput;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  filter?: SearchableObjectFilterInput | null;
};

export type SearchByBoundsQuery = {
  searchByBounds?: {
    __typename: 'ObjectConnection';
    items?: Array<{
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    total?: number | null;
    nextToken?: string | null;
    aggregations?: {
      __typename: 'ObjectAaggregations';
      status?: {
        __typename: 'Aggregations';
        doc_count: number;
        facets?: {
          __typename: 'AggregationsFacet';
          buckets?: Array<{
            __typename: 'AggregationsBucket';
            key: string;
            doc_count: number;
          } | null> | null;
        } | null;
      } | null;
      categoryId?: {
        __typename: 'Aggregations';
        doc_count: number;
        facets?: {
          __typename: 'AggregationsFacet';
          buckets?: Array<{
            __typename: 'AggregationsBucket';
            key: string;
            doc_count: number;
          } | null> | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type ListMobileDataQuery = {
  listMobileData?: {
    __typename: 'MobileData';
    categories?: Array<{
      __typename: 'Category';
      id: string;
      name: string;
      singularName: string;
      icon?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      fields?: Array<string | null> | null;
      parent?: string | null;
      cover?: string | null;
      blurhash?: string | null;
      index?: number | null;
      i18n?: Array<{
        __typename: 'CategoryI18n';
        locale: string;
        name?: string | null;
        singularName?: string | null;
      } | null> | null;
    } | null> | null;
    objects?: {
      __typename: 'ObjectMobileConnection';
      items?: Array<{
        __typename: 'ObjectMobile';
        id: string;
        name: string;
        description?: string | null;
        images?: Array<string | null> | null;
        status?: ObjectStatus | null;
        governanceType?: string | null;
        location?: {
          __typename: 'Location';
          lat?: number | null;
          lon?: number | null;
        } | null;
        area?: {
          __typename: 'Area';
          type: string;
          coordinates: Array<Array<Array<Array<
            number | null
          > | null> | null> | null>;
        } | null;
        cover?: string | null;
        blurhash?: string | null;
        categoryId: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        createdAt: string;
        updatedAt: string;
        statusUpdatedAt: string;
        point?: {
          __typename: 'Point';
          type: string;
          coordinates: Array<number | null>;
        } | null;
        author?: string | null;
        address?: string | null;
        addresses?: {
          items: Array<{
            street: string | null;
            regionId: string | null;
            subRegionId: string | null;
            municipalityId: string | null;
          }> | null;
        } | null;
        length?: number | null;
        duration?: number | null;
        origins?: Array<{
          __typename: 'Origin';
          name: string;
          value: string;
        } | null> | null;
        notes?: string | null;
        url?: string | null;
        routes?: {
          __typename: 'Route';
          type: string;
          coordinates: Array<Array<number | null> | null>;
        } | null;
        include?: Array<string | null> | null;
        belongsTo?: Array<string | null> | null;
        i18n?: Array<{
          __typename: 'ObjectI18n';
          locale: string;
          name?: string | null;
          description?: string | null;
          governanceType?: string | null;
          author?: string | null;
          address?: string | null;
          notes?: string | null;
        } | null> | null;
        category?: {
          __typename: 'Category';
          id: string;
          name: string;
          singularName: string;
          icon?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          fields?: Array<string | null> | null;
          parent?: string | null;
          cover?: string | null;
          index?: number | null;
          i18n?: Array<{
            __typename: 'CategoryI18n';
            locale: string;
            name?: string | null;
            singularName?: string | null;
          } | null> | null;
        } | null;
        permissions?: {
          __typename: 'ModelPermissionLinkingConnection';
          items?: Array<{
            __typename: 'PermissionLinking';
            id: string;
            objectId: string;
            permissionId: string;
            createdAt: string;
            updatedAt: string;
            permission: {
              __typename: 'Permission';
              id: string;
              name: string;
              key?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
            };
            object: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
      } | null> | null;
      nextToken?: string | null;
      total?: number | null;
    } | null;
    metadata?: Array<{
      __typename: 'ObjectsMetadata';
      id: string;
      value?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    spots?: Array<{id: string; value: string} | null>;
  } | null;
};

export type GetBelongsToObjectsQueryVariables = {
  shape: string;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  filter?: SearchableObjectFilterInput | null;
};

export type GetBelongsToObjectsQuery = {
  getBelongsToObjects?: {
    __typename: 'ObjectConnection';
    items?: Array<{
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    total?: number | null;
    nextToken?: string | null;
    aggregations?: {
      __typename: 'ObjectAaggregations';
      status?: {
        __typename: 'Aggregations';
        doc_count: number;
        facets?: {
          __typename: 'AggregationsFacet';
          buckets?: Array<{
            __typename: 'AggregationsBucket';
            key: string;
            doc_count: number;
          } | null> | null;
        } | null;
      } | null;
      categoryId?: {
        __typename: 'Aggregations';
        doc_count: number;
        facets?: {
          __typename: 'AggregationsFacet';
          buckets?: Array<{
            __typename: 'AggregationsBucket';
            key: string;
            doc_count: number;
          } | null> | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type TranslateQueryVariables = {
  text: string;
  to: string;
  from?: string | null;
};

export type TranslateQuery = {
  translate?: string | null;
};

export type GetIncludeObjectsQueryVariables = {
  shape: string;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
  filter?: SearchableObjectFilterInput | null;
};

export type GetIncludeObjectsQuery = {
  getIncludeObjects?: {
    __typename: 'ObjectConnection';
    items?: Array<{
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    total?: number | null;
    nextToken?: string | null;
    aggregations?: {
      __typename: 'ObjectAaggregations';
      status?: {
        __typename: 'Aggregations';
        doc_count: number;
        facets?: {
          __typename: 'AggregationsFacet';
          buckets?: Array<{
            __typename: 'AggregationsBucket';
            key: string;
            doc_count: number;
          } | null> | null;
        } | null;
      } | null;
      categoryId?: {
        __typename: 'Aggregations';
        doc_count: number;
        facets?: {
          __typename: 'AggregationsFacet';
          buckets?: Array<{
            __typename: 'AggregationsBucket';
            key: string;
            doc_count: number;
          } | null> | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type FilterObjectsQueryVariables = {
  filter?: FacetObjectFilterInput | null;
  query?: string | null;
  sort?: SearchableObjectSortInput | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
};

export type FilterObjectsQuery = {
  filterObjects?: {
    __typename: 'ObjectConnection';
    items?: Array<{
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    total?: number | null;
    nextToken?: string | null;
    aggregations?: {
      __typename: 'ObjectAaggregations';
      status?: {
        __typename: 'Aggregations';
        doc_count: number;
        facets?: {
          __typename: 'AggregationsFacet';
          buckets?: Array<{
            __typename: 'AggregationsBucket';
            key: string;
            doc_count: number;
          } | null> | null;
        } | null;
      } | null;
      categoryId?: {
        __typename: 'Aggregations';
        doc_count: number;
        facets?: {
          __typename: 'AggregationsFacet';
          buckets?: Array<{
            __typename: 'AggregationsBucket';
            key: string;
            doc_count: number;
          } | null> | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCategorysQuery = {
  listCategorys?: {
    __typename: 'ModelCategoryConnection';
    items?: Array<{
      __typename: 'Category';
      id: string;
      name: string;
      singularName: string;
      icon?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      fields?: Array<string | null> | null;
      parent?: string | null;
      cover?: string | null;
      index?: number | null;
      i18n?: Array<{
        __typename: 'CategoryI18n';
        locale: string;
        name?: string | null;
        singularName?: string | null;
      } | null> | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetCategoryQueryVariables = {
  id: string;
};

export type GetCategoryQuery = {
  getCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    singularName: string;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    fields?: Array<string | null> | null;
    parent?: string | null;
    cover?: string | null;
    index?: number | null;
    i18n?: Array<{
      __typename: 'CategoryI18n';
      locale: string;
      name?: string | null;
      singularName?: string | null;
    } | null> | null;
  } | null;
};

export type SearchCategorysQueryVariables = {
  filter?: SearchableCategoryFilterInput | null;
  sort?: SearchableCategorySortInput | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
};

export type SearchCategorysQuery = {
  searchCategorys?: {
    __typename: 'SearchableCategoryConnection';
    items?: Array<{
      __typename: 'Category';
      id: string;
      name: string;
      singularName: string;
      icon?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      fields?: Array<string | null> | null;
      parent?: string | null;
      cover?: string | null;
      index?: number | null;
      i18n?: Array<{
        __typename: 'CategoryI18n';
        locale: string;
        name?: string | null;
        singularName?: string | null;
      } | null> | null;
    } | null> | null;
    nextToken?: string | null;
    total?: number | null;
  } | null;
};

export type GetReferenceQueryVariables = {
  id: string;
};

export type GetReferenceQuery = {
  getReference?: {
    __typename: 'Reference';
    id: string;
    name: string;
    type?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'ReferenceI18n';
      name?: string | null;
      locale: string;
    } | null> | null;
  } | null;
};

export type ListReferencesQueryVariables = {
  filter?: ModelReferenceFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListReferencesQuery = {
  listReferences?: {
    __typename: 'ModelReferenceConnection';
    items?: Array<{
      __typename: 'Reference';
      id: string;
      name: string;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      i18n?: Array<{
        __typename: 'ReferenceI18n';
        name?: string | null;
        locale: string;
      } | null> | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type SearchReferencesQueryVariables = {
  filter?: SearchableReferenceFilterInput | null;
  sort?: SearchableReferenceSortInput | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
};

export type SearchReferencesQuery = {
  searchReferences?: {
    __typename: 'SearchableReferenceConnection';
    items?: Array<{
      __typename: 'Reference';
      id: string;
      name: string;
      type?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      i18n?: Array<{
        __typename: 'ReferenceI18n';
        name?: string | null;
        locale: string;
      } | null> | null;
    } | null> | null;
    nextToken?: string | null;
    total?: number | null;
  } | null;
};

export type ListPermissionsQueryVariables = {
  filter?: ModelPermissionFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPermissionsQuery = {
  listPermissions?: {
    __typename: 'ModelPermissionConnection';
    items?: Array<{
      __typename: 'Permission';
      id: string;
      name: string;
      key?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      i18n?: Array<{
        __typename: 'PermissionI18n';
        locale: string;
        name?: string | null;
      } | null> | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetPermissionQueryVariables = {
  id: string;
};

export type GetPermissionQuery = {
  getPermission?: {
    __typename: 'Permission';
    id: string;
    name: string;
    key?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'PermissionI18n';
      locale: string;
      name?: string | null;
    } | null> | null;
  } | null;
};

export type SearchPermissionsQueryVariables = {
  filter?: SearchablePermissionFilterInput | null;
  sort?: SearchablePermissionSortInput | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
};

export type SearchPermissionsQuery = {
  searchPermissions?: {
    __typename: 'SearchablePermissionConnection';
    items?: Array<{
      __typename: 'Permission';
      id: string;
      name: string;
      key?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      i18n?: Array<{
        __typename: 'PermissionI18n';
        locale: string;
        name?: string | null;
      } | null> | null;
    } | null> | null;
    nextToken?: string | null;
    total?: number | null;
  } | null;
};

export type ListObjectsQueryVariables = {
  filter?: ModelObjectFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListObjectsQuery = {
  listObjects?: {
    __typename: 'ModelObjectConnection';
    items?: Array<{
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetObjectQueryVariables = {
  id: string;
};

export type GetObjectQuery = {
  getObject?: {
    __typename: 'Object';
    id: string;
    name: string;
    description?: string | null;
    images?: Array<string | null> | null;
    status?: ObjectStatus | null;
    governanceType?: string | null;
    location?: {
      __typename: 'Location';
      lat?: number | null;
      lon?: number | null;
    } | null;
    area?: {
      __typename: 'Area';
      type: string;
      coordinates: Array<Array<Array<Array<
        number | null
      > | null> | null> | null>;
    } | null;
    cover?: string | null;
    categoryId: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    createdAt: string;
    updatedAt: string;
    statusUpdatedAt: string;
    point?: {
      __typename: 'Point';
      type: string;
      coordinates: Array<number | null>;
    } | null;
    author?: string | null;
    address?: string | null;
    length?: number | null;
    duration?: number | null;
    origins?: Array<{
      __typename: 'Origin';
      name: string;
      value: string;
    } | null> | null;
    notes?: string | null;
    url?: string | null;
    routes?: {
      __typename: 'Route';
      type: string;
      coordinates: Array<Array<number | null> | null>;
    } | null;
    i18n?: Array<{
      __typename: 'ObjectI18n';
      locale: string;
      name?: string | null;
      description?: string | null;
      governanceType?: string | null;
      author?: string | null;
      address?: string | null;
      notes?: string | null;
    } | null> | null;
    category?: {
      __typename: 'Category';
      id: string;
      name: string;
      singularName: string;
      icon?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      fields?: Array<string | null> | null;
      parent?: string | null;
      cover?: string | null;
      index?: number | null;
      i18n?: Array<{
        __typename: 'CategoryI18n';
        locale: string;
        name?: string | null;
        singularName?: string | null;
      } | null> | null;
    } | null;
    include?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    belongsTo?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    permissions?: {
      __typename: 'ModelPermissionLinkingConnection';
      items?: Array<{
        __typename: 'PermissionLinking';
        id: string;
        objectId: string;
        permissionId: string;
        createdAt: string;
        updatedAt: string;
        permission: {
          __typename: 'Permission';
          id: string;
          name: string;
          key?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          i18n?: Array<{
            __typename: 'PermissionI18n';
            locale: string;
            name?: string | null;
          } | null> | null;
        };
        object: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type ObjectsByCategoryIdQueryVariables = {
  categoryId?: string | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelObjectFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ObjectsByCategoryIdQuery = {
  objectsByCategoryId?: {
    __typename: 'ModelObjectConnection';
    items?: Array<{
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type SearchObjectsQueryVariables = {
  filter?: SearchableObjectFilterInput | null;
  sort?: SearchableObjectSortInput | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
};

export type SearchObjectsQuery = {
  searchObjects?: {
    __typename: 'SearchableObjectConnection';
    items?: Array<{
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
    total?: number | null;
  } | null;
};

export type GetObjectsMetadataQueryVariables = {
  id: string;
};

export type GetObjectsMetadataQuery = {
  getObjectsMetadata?: {
    __typename: 'ObjectsMetadata';
    id: string;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListObjectsMetadatasQueryVariables = {
  filter?: ModelObjectsMetadataFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListObjectsMetadatasQuery = {
  listObjectsMetadatas?: {
    __typename: 'ModelObjectsMetadataConnection';
    items?: Array<{
      __typename: 'ObjectsMetadata';
      id: string;
      value?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetLanguageQueryVariables = {
  id: string;
};

export type GetLanguageQuery = {
  getLanguage?: {
    __typename: 'Language';
    id: string;
    name: string;
    code: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    direction: string;
    owner?: string | null;
  } | null;
};

export type ListLanguagesQueryVariables = {
  filter?: ModelLanguageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLanguagesQuery = {
  listLanguages?: {
    __typename: 'ModelLanguageConnection';
    items?: Array<{
      __typename: 'Language';
      id: string;
      name: string;
      code: string;
      createdAt: string;
      updatedAt: string;
      createdBy?: string | null;
      updatedBy?: string | null;
      direction: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetLanguagesSettingQueryVariables = {
  id: string;
};

export type GetLanguagesSettingQuery = {
  getLanguagesSetting?: {
    __typename: 'LanguagesSetting';
    id: string;
    name: string;
    value: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    owner?: string | null;
  } | null;
};

export type ListLanguagesSettingsQueryVariables = {
  filter?: ModelLanguagesSettingFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListLanguagesSettingsQuery = {
  listLanguagesSettings?: {
    __typename: 'ModelLanguagesSettingConnection';
    items?: Array<{
      __typename: 'LanguagesSetting';
      id: string;
      name: string;
      value: string;
      createdAt: string;
      updatedAt: string;
      createdBy?: string | null;
      updatedBy?: string | null;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetObjectsLinkingQueryVariables = {
  id: string;
};

export type GetObjectsLinkingQuery = {
  getObjectsLinking?: {
    __typename: 'ObjectsLinking';
    id: string;
    belongsToId: string;
    includeId: string;
    createdAt: string;
    updatedAt: string;
    belongsTo: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    include: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type ListObjectsLinkingsQueryVariables = {
  filter?: ModelObjectsLinkingFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListObjectsLinkingsQuery = {
  listObjectsLinkings?: {
    __typename: 'ModelObjectsLinkingConnection';
    items?: Array<{
      __typename: 'ObjectsLinking';
      id: string;
      belongsToId: string;
      includeId: string;
      createdAt: string;
      updatedAt: string;
      belongsTo: {
        __typename: 'Object';
        id: string;
        name: string;
        description?: string | null;
        images?: Array<string | null> | null;
        status?: ObjectStatus | null;
        governanceType?: string | null;
        location?: {
          __typename: 'Location';
          lat?: number | null;
          lon?: number | null;
        } | null;
        area?: {
          __typename: 'Area';
          type: string;
          coordinates: Array<Array<Array<Array<
            number | null
          > | null> | null> | null>;
        } | null;
        cover?: string | null;
        categoryId: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        createdAt: string;
        updatedAt: string;
        statusUpdatedAt: string;
        point?: {
          __typename: 'Point';
          type: string;
          coordinates: Array<number | null>;
        } | null;
        author?: string | null;
        address?: string | null;
        length?: number | null;
        duration?: number | null;
        origins?: Array<{
          __typename: 'Origin';
          name: string;
          value: string;
        } | null> | null;
        notes?: string | null;
        url?: string | null;
        routes?: {
          __typename: 'Route';
          type: string;
          coordinates: Array<Array<number | null> | null>;
        } | null;
        i18n?: Array<{
          __typename: 'ObjectI18n';
          locale: string;
          name?: string | null;
          description?: string | null;
          governanceType?: string | null;
          author?: string | null;
          address?: string | null;
          notes?: string | null;
        } | null> | null;
        category?: {
          __typename: 'Category';
          id: string;
          name: string;
          singularName: string;
          icon?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          fields?: Array<string | null> | null;
          parent?: string | null;
          cover?: string | null;
          index?: number | null;
          i18n?: Array<{
            __typename: 'CategoryI18n';
            locale: string;
            name?: string | null;
            singularName?: string | null;
          } | null> | null;
        } | null;
        include?: {
          __typename: 'ModelObjectsLinkingConnection';
          items?: Array<{
            __typename: 'ObjectsLinking';
            id: string;
            belongsToId: string;
            includeId: string;
            createdAt: string;
            updatedAt: string;
            belongsTo: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            include: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
        belongsTo?: {
          __typename: 'ModelObjectsLinkingConnection';
          items?: Array<{
            __typename: 'ObjectsLinking';
            id: string;
            belongsToId: string;
            includeId: string;
            createdAt: string;
            updatedAt: string;
            belongsTo: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            include: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
        permissions?: {
          __typename: 'ModelPermissionLinkingConnection';
          items?: Array<{
            __typename: 'PermissionLinking';
            id: string;
            objectId: string;
            permissionId: string;
            createdAt: string;
            updatedAt: string;
            permission: {
              __typename: 'Permission';
              id: string;
              name: string;
              key?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
            };
            object: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
      };
      include: {
        __typename: 'Object';
        id: string;
        name: string;
        description?: string | null;
        images?: Array<string | null> | null;
        status?: ObjectStatus | null;
        governanceType?: string | null;
        location?: {
          __typename: 'Location';
          lat?: number | null;
          lon?: number | null;
        } | null;
        area?: {
          __typename: 'Area';
          type: string;
          coordinates: Array<Array<Array<Array<
            number | null
          > | null> | null> | null>;
        } | null;
        cover?: string | null;
        categoryId: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        createdAt: string;
        updatedAt: string;
        statusUpdatedAt: string;
        point?: {
          __typename: 'Point';
          type: string;
          coordinates: Array<number | null>;
        } | null;
        author?: string | null;
        address?: string | null;
        length?: number | null;
        duration?: number | null;
        origins?: Array<{
          __typename: 'Origin';
          name: string;
          value: string;
        } | null> | null;
        notes?: string | null;
        url?: string | null;
        routes?: {
          __typename: 'Route';
          type: string;
          coordinates: Array<Array<number | null> | null>;
        } | null;
        i18n?: Array<{
          __typename: 'ObjectI18n';
          locale: string;
          name?: string | null;
          description?: string | null;
          governanceType?: string | null;
          author?: string | null;
          address?: string | null;
          notes?: string | null;
        } | null> | null;
        category?: {
          __typename: 'Category';
          id: string;
          name: string;
          singularName: string;
          icon?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          fields?: Array<string | null> | null;
          parent?: string | null;
          cover?: string | null;
          index?: number | null;
          i18n?: Array<{
            __typename: 'CategoryI18n';
            locale: string;
            name?: string | null;
            singularName?: string | null;
          } | null> | null;
        } | null;
        include?: {
          __typename: 'ModelObjectsLinkingConnection';
          items?: Array<{
            __typename: 'ObjectsLinking';
            id: string;
            belongsToId: string;
            includeId: string;
            createdAt: string;
            updatedAt: string;
            belongsTo: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            include: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
        belongsTo?: {
          __typename: 'ModelObjectsLinkingConnection';
          items?: Array<{
            __typename: 'ObjectsLinking';
            id: string;
            belongsToId: string;
            includeId: string;
            createdAt: string;
            updatedAt: string;
            belongsTo: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            include: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
        permissions?: {
          __typename: 'ModelPermissionLinkingConnection';
          items?: Array<{
            __typename: 'PermissionLinking';
            id: string;
            objectId: string;
            permissionId: string;
            createdAt: string;
            updatedAt: string;
            permission: {
              __typename: 'Permission';
              id: string;
              name: string;
              key?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
            };
            object: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
      };
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetPermissionLinkingQueryVariables = {
  id: string;
};

export type GetPermissionLinkingQuery = {
  getPermissionLinking?: {
    __typename: 'PermissionLinking';
    id: string;
    objectId: string;
    permissionId: string;
    createdAt: string;
    updatedAt: string;
    permission: {
      __typename: 'Permission';
      id: string;
      name: string;
      key?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      i18n?: Array<{
        __typename: 'PermissionI18n';
        locale: string;
        name?: string | null;
      } | null> | null;
    };
    object: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type ListPermissionLinkingsQueryVariables = {
  filter?: ModelPermissionLinkingFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListPermissionLinkingsQuery = {
  listPermissionLinkings?: {
    __typename: 'ModelPermissionLinkingConnection';
    items?: Array<{
      __typename: 'PermissionLinking';
      id: string;
      objectId: string;
      permissionId: string;
      createdAt: string;
      updatedAt: string;
      permission: {
        __typename: 'Permission';
        id: string;
        name: string;
        key?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        i18n?: Array<{
          __typename: 'PermissionI18n';
          locale: string;
          name?: string | null;
        } | null> | null;
      };
      object: {
        __typename: 'Object';
        id: string;
        name: string;
        description?: string | null;
        images?: Array<string | null> | null;
        status?: ObjectStatus | null;
        governanceType?: string | null;
        location?: {
          __typename: 'Location';
          lat?: number | null;
          lon?: number | null;
        } | null;
        area?: {
          __typename: 'Area';
          type: string;
          coordinates: Array<Array<Array<Array<
            number | null
          > | null> | null> | null>;
        } | null;
        cover?: string | null;
        categoryId: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        createdAt: string;
        updatedAt: string;
        statusUpdatedAt: string;
        point?: {
          __typename: 'Point';
          type: string;
          coordinates: Array<number | null>;
        } | null;
        author?: string | null;
        address?: string | null;
        length?: number | null;
        duration?: number | null;
        origins?: Array<{
          __typename: 'Origin';
          name: string;
          value: string;
        } | null> | null;
        notes?: string | null;
        url?: string | null;
        routes?: {
          __typename: 'Route';
          type: string;
          coordinates: Array<Array<number | null> | null>;
        } | null;
        i18n?: Array<{
          __typename: 'ObjectI18n';
          locale: string;
          name?: string | null;
          description?: string | null;
          governanceType?: string | null;
          author?: string | null;
          address?: string | null;
          notes?: string | null;
        } | null> | null;
        category?: {
          __typename: 'Category';
          id: string;
          name: string;
          singularName: string;
          icon?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          fields?: Array<string | null> | null;
          parent?: string | null;
          cover?: string | null;
          index?: number | null;
          i18n?: Array<{
            __typename: 'CategoryI18n';
            locale: string;
            name?: string | null;
            singularName?: string | null;
          } | null> | null;
        } | null;
        include?: {
          __typename: 'ModelObjectsLinkingConnection';
          items?: Array<{
            __typename: 'ObjectsLinking';
            id: string;
            belongsToId: string;
            includeId: string;
            createdAt: string;
            updatedAt: string;
            belongsTo: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            include: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
        belongsTo?: {
          __typename: 'ModelObjectsLinkingConnection';
          items?: Array<{
            __typename: 'ObjectsLinking';
            id: string;
            belongsToId: string;
            includeId: string;
            createdAt: string;
            updatedAt: string;
            belongsTo: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            include: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
        permissions?: {
          __typename: 'ModelPermissionLinkingConnection';
          items?: Array<{
            __typename: 'PermissionLinking';
            id: string;
            objectId: string;
            permissionId: string;
            createdAt: string;
            updatedAt: string;
            permission: {
              __typename: 'Permission';
              id: string;
              name: string;
              key?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
            };
            object: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
      };
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type PermissionLinkingByPermissionIdQueryVariables = {
  permissionId?: string | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelPermissionLinkingFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type PermissionLinkingByPermissionIdQuery = {
  permissionLinkingByPermissionId?: {
    __typename: 'ModelPermissionLinkingConnection';
    items?: Array<{
      __typename: 'PermissionLinking';
      id: string;
      objectId: string;
      permissionId: string;
      createdAt: string;
      updatedAt: string;
      permission: {
        __typename: 'Permission';
        id: string;
        name: string;
        key?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        i18n?: Array<{
          __typename: 'PermissionI18n';
          locale: string;
          name?: string | null;
        } | null> | null;
      };
      object: {
        __typename: 'Object';
        id: string;
        name: string;
        description?: string | null;
        images?: Array<string | null> | null;
        status?: ObjectStatus | null;
        governanceType?: string | null;
        location?: {
          __typename: 'Location';
          lat?: number | null;
          lon?: number | null;
        } | null;
        area?: {
          __typename: 'Area';
          type: string;
          coordinates: Array<Array<Array<Array<
            number | null
          > | null> | null> | null>;
        } | null;
        cover?: string | null;
        categoryId: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        createdAt: string;
        updatedAt: string;
        statusUpdatedAt: string;
        point?: {
          __typename: 'Point';
          type: string;
          coordinates: Array<number | null>;
        } | null;
        author?: string | null;
        address?: string | null;
        length?: number | null;
        duration?: number | null;
        origins?: Array<{
          __typename: 'Origin';
          name: string;
          value: string;
        } | null> | null;
        notes?: string | null;
        url?: string | null;
        routes?: {
          __typename: 'Route';
          type: string;
          coordinates: Array<Array<number | null> | null>;
        } | null;
        i18n?: Array<{
          __typename: 'ObjectI18n';
          locale: string;
          name?: string | null;
          description?: string | null;
          governanceType?: string | null;
          author?: string | null;
          address?: string | null;
          notes?: string | null;
        } | null> | null;
        category?: {
          __typename: 'Category';
          id: string;
          name: string;
          singularName: string;
          icon?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          fields?: Array<string | null> | null;
          parent?: string | null;
          cover?: string | null;
          index?: number | null;
          i18n?: Array<{
            __typename: 'CategoryI18n';
            locale: string;
            name?: string | null;
            singularName?: string | null;
          } | null> | null;
        } | null;
        include?: {
          __typename: 'ModelObjectsLinkingConnection';
          items?: Array<{
            __typename: 'ObjectsLinking';
            id: string;
            belongsToId: string;
            includeId: string;
            createdAt: string;
            updatedAt: string;
            belongsTo: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            include: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
        belongsTo?: {
          __typename: 'ModelObjectsLinkingConnection';
          items?: Array<{
            __typename: 'ObjectsLinking';
            id: string;
            belongsToId: string;
            includeId: string;
            createdAt: string;
            updatedAt: string;
            belongsTo: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            include: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
        permissions?: {
          __typename: 'ModelPermissionLinkingConnection';
          items?: Array<{
            __typename: 'PermissionLinking';
            id: string;
            objectId: string;
            permissionId: string;
            createdAt: string;
            updatedAt: string;
            permission: {
              __typename: 'Permission';
              id: string;
              name: string;
              key?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
            };
            object: {
              __typename: 'Object';
              id: string;
              name: string;
              description?: string | null;
              images?: Array<string | null> | null;
              status?: ObjectStatus | null;
              governanceType?: string | null;
              cover?: string | null;
              categoryId: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              createdAt: string;
              updatedAt: string;
              statusUpdatedAt: string;
              author?: string | null;
              address?: string | null;
              length?: number | null;
              duration?: number | null;
              notes?: string | null;
              url?: string | null;
            };
            owner?: string | null;
          } | null> | null;
          nextToken?: string | null;
        } | null;
      };
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type OnCreateCategorySubscription = {
  onCreateCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    singularName: string;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    fields?: Array<string | null> | null;
    parent?: string | null;
    cover?: string | null;
    index?: number | null;
    i18n?: Array<{
      __typename: 'CategoryI18n';
      locale: string;
      name?: string | null;
      singularName?: string | null;
    } | null> | null;
  } | null;
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    singularName: string;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    fields?: Array<string | null> | null;
    parent?: string | null;
    cover?: string | null;
    index?: number | null;
    i18n?: Array<{
      __typename: 'CategoryI18n';
      locale: string;
      name?: string | null;
      singularName?: string | null;
    } | null> | null;
  } | null;
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?: {
    __typename: 'Category';
    id: string;
    name: string;
    singularName: string;
    icon?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    fields?: Array<string | null> | null;
    parent?: string | null;
    cover?: string | null;
    index?: number | null;
    i18n?: Array<{
      __typename: 'CategoryI18n';
      locale: string;
      name?: string | null;
      singularName?: string | null;
    } | null> | null;
  } | null;
};

export type OnCreateReferenceSubscription = {
  onCreateReference?: {
    __typename: 'Reference';
    id: string;
    name: string;
    type?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'ReferenceI18n';
      name?: string | null;
      locale: string;
    } | null> | null;
  } | null;
};

export type OnUpdateReferenceSubscription = {
  onUpdateReference?: {
    __typename: 'Reference';
    id: string;
    name: string;
    type?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'ReferenceI18n';
      name?: string | null;
      locale: string;
    } | null> | null;
  } | null;
};

export type OnDeleteReferenceSubscription = {
  onDeleteReference?: {
    __typename: 'Reference';
    id: string;
    name: string;
    type?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'ReferenceI18n';
      name?: string | null;
      locale: string;
    } | null> | null;
  } | null;
};

export type OnCreatePermissionSubscription = {
  onCreatePermission?: {
    __typename: 'Permission';
    id: string;
    name: string;
    key?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'PermissionI18n';
      locale: string;
      name?: string | null;
    } | null> | null;
  } | null;
};

export type OnUpdatePermissionSubscription = {
  onUpdatePermission?: {
    __typename: 'Permission';
    id: string;
    name: string;
    key?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'PermissionI18n';
      locale: string;
      name?: string | null;
    } | null> | null;
  } | null;
};

export type OnDeletePermissionSubscription = {
  onDeletePermission?: {
    __typename: 'Permission';
    id: string;
    name: string;
    key?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    i18n?: Array<{
      __typename: 'PermissionI18n';
      locale: string;
      name?: string | null;
    } | null> | null;
  } | null;
};

export type OnCreateObjectSubscription = {
  onCreateObject?: {
    __typename: 'Object';
    id: string;
    name: string;
    description?: string | null;
    images?: Array<string | null> | null;
    status?: ObjectStatus | null;
    governanceType?: string | null;
    location?: {
      __typename: 'Location';
      lat?: number | null;
      lon?: number | null;
    } | null;
    area?: {
      __typename: 'Area';
      type: string;
      coordinates: Array<Array<Array<Array<
        number | null
      > | null> | null> | null>;
    } | null;
    cover?: string | null;
    categoryId: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    createdAt: string;
    updatedAt: string;
    statusUpdatedAt: string;
    point?: {
      __typename: 'Point';
      type: string;
      coordinates: Array<number | null>;
    } | null;
    author?: string | null;
    address?: string | null;
    length?: number | null;
    duration?: number | null;
    origins?: Array<{
      __typename: 'Origin';
      name: string;
      value: string;
    } | null> | null;
    notes?: string | null;
    url?: string | null;
    routes?: {
      __typename: 'Route';
      type: string;
      coordinates: Array<Array<number | null> | null>;
    } | null;
    i18n?: Array<{
      __typename: 'ObjectI18n';
      locale: string;
      name?: string | null;
      description?: string | null;
      governanceType?: string | null;
      author?: string | null;
      address?: string | null;
      notes?: string | null;
    } | null> | null;
    category?: {
      __typename: 'Category';
      id: string;
      name: string;
      singularName: string;
      icon?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      fields?: Array<string | null> | null;
      parent?: string | null;
      cover?: string | null;
      index?: number | null;
      i18n?: Array<{
        __typename: 'CategoryI18n';
        locale: string;
        name?: string | null;
        singularName?: string | null;
      } | null> | null;
    } | null;
    include?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    belongsTo?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    permissions?: {
      __typename: 'ModelPermissionLinkingConnection';
      items?: Array<{
        __typename: 'PermissionLinking';
        id: string;
        objectId: string;
        permissionId: string;
        createdAt: string;
        updatedAt: string;
        permission: {
          __typename: 'Permission';
          id: string;
          name: string;
          key?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          i18n?: Array<{
            __typename: 'PermissionI18n';
            locale: string;
            name?: string | null;
          } | null> | null;
        };
        object: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type OnUpdateObjectSubscription = {
  onUpdateObject?: {
    __typename: 'Object';
    id: string;
    name: string;
    description?: string | null;
    images?: Array<string | null> | null;
    status?: ObjectStatus | null;
    governanceType?: string | null;
    location?: {
      __typename: 'Location';
      lat?: number | null;
      lon?: number | null;
    } | null;
    area?: {
      __typename: 'Area';
      type: string;
      coordinates: Array<Array<Array<Array<
        number | null
      > | null> | null> | null>;
    } | null;
    cover?: string | null;
    categoryId: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    createdAt: string;
    updatedAt: string;
    statusUpdatedAt: string;
    point?: {
      __typename: 'Point';
      type: string;
      coordinates: Array<number | null>;
    } | null;
    author?: string | null;
    address?: string | null;
    length?: number | null;
    duration?: number | null;
    origins?: Array<{
      __typename: 'Origin';
      name: string;
      value: string;
    } | null> | null;
    notes?: string | null;
    url?: string | null;
    routes?: {
      __typename: 'Route';
      type: string;
      coordinates: Array<Array<number | null> | null>;
    } | null;
    i18n?: Array<{
      __typename: 'ObjectI18n';
      locale: string;
      name?: string | null;
      description?: string | null;
      governanceType?: string | null;
      author?: string | null;
      address?: string | null;
      notes?: string | null;
    } | null> | null;
    category?: {
      __typename: 'Category';
      id: string;
      name: string;
      singularName: string;
      icon?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      fields?: Array<string | null> | null;
      parent?: string | null;
      cover?: string | null;
      index?: number | null;
      i18n?: Array<{
        __typename: 'CategoryI18n';
        locale: string;
        name?: string | null;
        singularName?: string | null;
      } | null> | null;
    } | null;
    include?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    belongsTo?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    permissions?: {
      __typename: 'ModelPermissionLinkingConnection';
      items?: Array<{
        __typename: 'PermissionLinking';
        id: string;
        objectId: string;
        permissionId: string;
        createdAt: string;
        updatedAt: string;
        permission: {
          __typename: 'Permission';
          id: string;
          name: string;
          key?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          i18n?: Array<{
            __typename: 'PermissionI18n';
            locale: string;
            name?: string | null;
          } | null> | null;
        };
        object: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type OnDeleteObjectSubscription = {
  onDeleteObject?: {
    __typename: 'Object';
    id: string;
    name: string;
    description?: string | null;
    images?: Array<string | null> | null;
    status?: ObjectStatus | null;
    governanceType?: string | null;
    location?: {
      __typename: 'Location';
      lat?: number | null;
      lon?: number | null;
    } | null;
    area?: {
      __typename: 'Area';
      type: string;
      coordinates: Array<Array<Array<Array<
        number | null
      > | null> | null> | null>;
    } | null;
    cover?: string | null;
    categoryId: string;
    owner?: string | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    createdAt: string;
    updatedAt: string;
    statusUpdatedAt: string;
    point?: {
      __typename: 'Point';
      type: string;
      coordinates: Array<number | null>;
    } | null;
    author?: string | null;
    address?: string | null;
    length?: number | null;
    duration?: number | null;
    origins?: Array<{
      __typename: 'Origin';
      name: string;
      value: string;
    } | null> | null;
    notes?: string | null;
    url?: string | null;
    routes?: {
      __typename: 'Route';
      type: string;
      coordinates: Array<Array<number | null> | null>;
    } | null;
    i18n?: Array<{
      __typename: 'ObjectI18n';
      locale: string;
      name?: string | null;
      description?: string | null;
      governanceType?: string | null;
      author?: string | null;
      address?: string | null;
      notes?: string | null;
    } | null> | null;
    category?: {
      __typename: 'Category';
      id: string;
      name: string;
      singularName: string;
      icon?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      fields?: Array<string | null> | null;
      parent?: string | null;
      cover?: string | null;
      index?: number | null;
      i18n?: Array<{
        __typename: 'CategoryI18n';
        locale: string;
        name?: string | null;
        singularName?: string | null;
      } | null> | null;
    } | null;
    include?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    belongsTo?: {
      __typename: 'ModelObjectsLinkingConnection';
      items?: Array<{
        __typename: 'ObjectsLinking';
        id: string;
        belongsToId: string;
        includeId: string;
        createdAt: string;
        updatedAt: string;
        belongsTo: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        include: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
    permissions?: {
      __typename: 'ModelPermissionLinkingConnection';
      items?: Array<{
        __typename: 'PermissionLinking';
        id: string;
        objectId: string;
        permissionId: string;
        createdAt: string;
        updatedAt: string;
        permission: {
          __typename: 'Permission';
          id: string;
          name: string;
          key?: string | null;
          createdAt: string;
          updatedAt: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          i18n?: Array<{
            __typename: 'PermissionI18n';
            locale: string;
            name?: string | null;
          } | null> | null;
        };
        object: {
          __typename: 'Object';
          id: string;
          name: string;
          description?: string | null;
          images?: Array<string | null> | null;
          status?: ObjectStatus | null;
          governanceType?: string | null;
          location?: {
            __typename: 'Location';
            lat?: number | null;
            lon?: number | null;
          } | null;
          area?: {
            __typename: 'Area';
            type: string;
            coordinates: Array<Array<Array<Array<
              number | null
            > | null> | null> | null>;
          } | null;
          cover?: string | null;
          categoryId: string;
          owner?: string | null;
          createdBy?: string | null;
          updatedBy?: string | null;
          createdAt: string;
          updatedAt: string;
          statusUpdatedAt: string;
          point?: {
            __typename: 'Point';
            type: string;
            coordinates: Array<number | null>;
          } | null;
          author?: string | null;
          address?: string | null;
          length?: number | null;
          duration?: number | null;
          origins?: Array<{
            __typename: 'Origin';
            name: string;
            value: string;
          } | null> | null;
          notes?: string | null;
          url?: string | null;
          routes?: {
            __typename: 'Route';
            type: string;
            coordinates: Array<Array<number | null> | null>;
          } | null;
          i18n?: Array<{
            __typename: 'ObjectI18n';
            locale: string;
            name?: string | null;
            description?: string | null;
            governanceType?: string | null;
            author?: string | null;
            address?: string | null;
            notes?: string | null;
          } | null> | null;
          category?: {
            __typename: 'Category';
            id: string;
            name: string;
            singularName: string;
            icon?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            fields?: Array<string | null> | null;
            parent?: string | null;
            cover?: string | null;
            index?: number | null;
            i18n?: Array<{
              __typename: 'CategoryI18n';
              locale: string;
              name?: string | null;
              singularName?: string | null;
            } | null> | null;
          } | null;
          include?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          belongsTo?: {
            __typename: 'ModelObjectsLinkingConnection';
            items?: Array<{
              __typename: 'ObjectsLinking';
              id: string;
              belongsToId: string;
              includeId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
          permissions?: {
            __typename: 'ModelPermissionLinkingConnection';
            items?: Array<{
              __typename: 'PermissionLinking';
              id: string;
              objectId: string;
              permissionId: string;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
          } | null;
        };
        owner?: string | null;
      } | null> | null;
      nextToken?: string | null;
    } | null;
  } | null;
};

export type OnCreateObjectsMetadataSubscription = {
  onCreateObjectsMetadata?: {
    __typename: 'ObjectsMetadata';
    id: string;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateObjectsMetadataSubscription = {
  onUpdateObjectsMetadata?: {
    __typename: 'ObjectsMetadata';
    id: string;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteObjectsMetadataSubscription = {
  onDeleteObjectsMetadata?: {
    __typename: 'ObjectsMetadata';
    id: string;
    value?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateLanguageSubscription = {
  onCreateLanguage?: {
    __typename: 'Language';
    id: string;
    name: string;
    code: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    direction: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateLanguageSubscription = {
  onUpdateLanguage?: {
    __typename: 'Language';
    id: string;
    name: string;
    code: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    direction: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteLanguageSubscription = {
  onDeleteLanguage?: {
    __typename: 'Language';
    id: string;
    name: string;
    code: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    direction: string;
    owner?: string | null;
  } | null;
};

export type OnCreateLanguagesSettingSubscription = {
  onCreateLanguagesSetting?: {
    __typename: 'LanguagesSetting';
    id: string;
    name: string;
    value: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    owner?: string | null;
  } | null;
};

export type OnUpdateLanguagesSettingSubscription = {
  onUpdateLanguagesSetting?: {
    __typename: 'LanguagesSetting';
    id: string;
    name: string;
    value: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    owner?: string | null;
  } | null;
};

export type OnDeleteLanguagesSettingSubscription = {
  onDeleteLanguagesSetting?: {
    __typename: 'LanguagesSetting';
    id: string;
    name: string;
    value: string;
    createdAt: string;
    updatedAt: string;
    createdBy?: string | null;
    updatedBy?: string | null;
    owner?: string | null;
  } | null;
};

export type OnCreateObjectsLinkingSubscription = {
  onCreateObjectsLinking?: {
    __typename: 'ObjectsLinking';
    id: string;
    belongsToId: string;
    includeId: string;
    createdAt: string;
    updatedAt: string;
    belongsTo: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    include: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type OnUpdateObjectsLinkingSubscription = {
  onUpdateObjectsLinking?: {
    __typename: 'ObjectsLinking';
    id: string;
    belongsToId: string;
    includeId: string;
    createdAt: string;
    updatedAt: string;
    belongsTo: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    include: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type OnDeleteObjectsLinkingSubscription = {
  onDeleteObjectsLinking?: {
    __typename: 'ObjectsLinking';
    id: string;
    belongsToId: string;
    includeId: string;
    createdAt: string;
    updatedAt: string;
    belongsTo: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    include: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type OnCreatePermissionLinkingSubscription = {
  onCreatePermissionLinking?: {
    __typename: 'PermissionLinking';
    id: string;
    objectId: string;
    permissionId: string;
    createdAt: string;
    updatedAt: string;
    permission: {
      __typename: 'Permission';
      id: string;
      name: string;
      key?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      i18n?: Array<{
        __typename: 'PermissionI18n';
        locale: string;
        name?: string | null;
      } | null> | null;
    };
    object: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type OnUpdatePermissionLinkingSubscription = {
  onUpdatePermissionLinking?: {
    __typename: 'PermissionLinking';
    id: string;
    objectId: string;
    permissionId: string;
    createdAt: string;
    updatedAt: string;
    permission: {
      __typename: 'Permission';
      id: string;
      name: string;
      key?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      i18n?: Array<{
        __typename: 'PermissionI18n';
        locale: string;
        name?: string | null;
      } | null> | null;
    };
    object: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};

export type OnDeletePermissionLinkingSubscription = {
  onDeletePermissionLinking?: {
    __typename: 'PermissionLinking';
    id: string;
    objectId: string;
    permissionId: string;
    createdAt: string;
    updatedAt: string;
    permission: {
      __typename: 'Permission';
      id: string;
      name: string;
      key?: string | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      i18n?: Array<{
        __typename: 'PermissionI18n';
        locale: string;
        name?: string | null;
      } | null> | null;
    };
    object: {
      __typename: 'Object';
      id: string;
      name: string;
      description?: string | null;
      images?: Array<string | null> | null;
      status?: ObjectStatus | null;
      governanceType?: string | null;
      location?: {
        __typename: 'Location';
        lat?: number | null;
        lon?: number | null;
      } | null;
      area?: {
        __typename: 'Area';
        type: string;
        coordinates: Array<Array<Array<Array<
          number | null
        > | null> | null> | null>;
      } | null;
      cover?: string | null;
      categoryId: string;
      owner?: string | null;
      createdBy?: string | null;
      updatedBy?: string | null;
      createdAt: string;
      updatedAt: string;
      statusUpdatedAt: string;
      point?: {
        __typename: 'Point';
        type: string;
        coordinates: Array<number | null>;
      } | null;
      author?: string | null;
      address?: string | null;
      length?: number | null;
      duration?: number | null;
      origins?: Array<{
        __typename: 'Origin';
        name: string;
        value: string;
      } | null> | null;
      notes?: string | null;
      url?: string | null;
      routes?: {
        __typename: 'Route';
        type: string;
        coordinates: Array<Array<number | null> | null>;
      } | null;
      i18n?: Array<{
        __typename: 'ObjectI18n';
        locale: string;
        name?: string | null;
        description?: string | null;
        governanceType?: string | null;
        author?: string | null;
        address?: string | null;
        notes?: string | null;
      } | null> | null;
      category?: {
        __typename: 'Category';
        id: string;
        name: string;
        singularName: string;
        icon?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        createdBy?: string | null;
        updatedBy?: string | null;
        fields?: Array<string | null> | null;
        parent?: string | null;
        cover?: string | null;
        index?: number | null;
        i18n?: Array<{
          __typename: 'CategoryI18n';
          locale: string;
          name?: string | null;
          singularName?: string | null;
        } | null> | null;
      } | null;
      include?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      belongsTo?: {
        __typename: 'ModelObjectsLinkingConnection';
        items?: Array<{
          __typename: 'ObjectsLinking';
          id: string;
          belongsToId: string;
          includeId: string;
          createdAt: string;
          updatedAt: string;
          belongsTo: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          include: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
      permissions?: {
        __typename: 'ModelPermissionLinkingConnection';
        items?: Array<{
          __typename: 'PermissionLinking';
          id: string;
          objectId: string;
          permissionId: string;
          createdAt: string;
          updatedAt: string;
          permission: {
            __typename: 'Permission';
            id: string;
            name: string;
            key?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            i18n?: Array<{
              __typename: 'PermissionI18n';
              locale: string;
              name?: string | null;
            } | null> | null;
          };
          object: {
            __typename: 'Object';
            id: string;
            name: string;
            description?: string | null;
            images?: Array<string | null> | null;
            status?: ObjectStatus | null;
            governanceType?: string | null;
            location?: {
              __typename: 'Location';
              lat?: number | null;
              lon?: number | null;
            } | null;
            area?: {
              __typename: 'Area';
              type: string;
              coordinates: Array<Array<Array<Array<
                number | null
              > | null> | null> | null>;
            } | null;
            cover?: string | null;
            categoryId: string;
            owner?: string | null;
            createdBy?: string | null;
            updatedBy?: string | null;
            createdAt: string;
            updatedAt: string;
            statusUpdatedAt: string;
            point?: {
              __typename: 'Point';
              type: string;
              coordinates: Array<number | null>;
            } | null;
            author?: string | null;
            address?: string | null;
            length?: number | null;
            duration?: number | null;
            origins?: Array<{
              __typename: 'Origin';
              name: string;
              value: string;
            } | null> | null;
            notes?: string | null;
            url?: string | null;
            routes?: {
              __typename: 'Route';
              type: string;
              coordinates: Array<Array<number | null> | null>;
            } | null;
            i18n?: Array<{
              __typename: 'ObjectI18n';
              locale: string;
              name?: string | null;
              description?: string | null;
              governanceType?: string | null;
              author?: string | null;
              address?: string | null;
              notes?: string | null;
            } | null> | null;
            category?: {
              __typename: 'Category';
              id: string;
              name: string;
              singularName: string;
              icon?: string | null;
              createdAt: string;
              updatedAt: string;
              owner?: string | null;
              createdBy?: string | null;
              updatedBy?: string | null;
              fields?: Array<string | null> | null;
              parent?: string | null;
              cover?: string | null;
              index?: number | null;
            } | null;
            include?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            belongsTo?: {
              __typename: 'ModelObjectsLinkingConnection';
              nextToken?: string | null;
            } | null;
            permissions?: {
              __typename: 'ModelPermissionLinkingConnection';
              nextToken?: string | null;
            } | null;
          };
          owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
      } | null;
    };
    owner?: string | null;
  } | null;
};
