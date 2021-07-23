export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = ContentfulReference & Node & {
  __typename?: 'ContentfulAsset';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  fixed?: Maybe<ContentfulFixed>;
  fluid?: Maybe<ContentfulFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  resize?: Maybe<ContentfulResize>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<Array<Maybe<ContentfulImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  quality?: Maybe<Scalars['Int']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge';
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  file___url = 'file___url',
  file___details___size = 'file___details___size',
  file___details___image___width = 'file___details___image___width',
  file___details___image___height = 'file___details___image___height',
  file___fileName = 'file___fileName',
  file___contentType = 'file___contentType',
  title = 'title',
  description = 'description',
  node_locale = 'node_locale',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  gatsbyImageData = 'gatsbyImageData',
  resize___base64 = 'resize___base64',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___src = 'resize___src',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile';
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails';
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  __typename?: 'ContentfulAssetSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAuthor = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulAuthor';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  news?: Maybe<Array<Maybe<ContentfulNews>>>;
  biography?: Maybe<ContentfulAuthorBiographyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAuthorSys>;
  blog_post?: Maybe<Array<Maybe<ContentfulBlogPost>>>;
  /** Returns all children nodes filtered by type contentfulAuthorBiographyTextNode */
  childrenContentfulAuthorBiographyTextNode?: Maybe<Array<Maybe<ContentfulAuthorBiographyTextNode>>>;
  /** Returns the first child node of type contentfulAuthorBiographyTextNode or null if there are no children of given type on this node */
  childContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAuthorCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAuthorUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorConnection = {
  __typename?: 'ContentfulAuthorConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorEdge>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAuthorGroupConnection>;
};


export type ContentfulAuthorConnectionDistinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


export type ContentfulAuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorEdge = {
  __typename?: 'ContentfulAuthorEdge';
  next?: Maybe<ContentfulAuthor>;
  node: ContentfulAuthor;
  previous?: Maybe<ContentfulAuthor>;
};

export enum ContentfulAuthorFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  news = 'news',
  news___contentful_id = 'news___contentful_id',
  news___id = 'news___id',
  news___node_locale = 'news___node_locale',
  news___title = 'news___title',
  news___slug = 'news___slug',
  news___featured = 'news___featured',
  news___published = 'news___published',
  news___content___raw = 'news___content___raw',
  news___featuredImage___contentful_id = 'news___featuredImage___contentful_id',
  news___featuredImage___id = 'news___featuredImage___id',
  news___featuredImage___spaceId = 'news___featuredImage___spaceId',
  news___featuredImage___createdAt = 'news___featuredImage___createdAt',
  news___featuredImage___updatedAt = 'news___featuredImage___updatedAt',
  news___featuredImage___file___url = 'news___featuredImage___file___url',
  news___featuredImage___file___fileName = 'news___featuredImage___file___fileName',
  news___featuredImage___file___contentType = 'news___featuredImage___file___contentType',
  news___featuredImage___title = 'news___featuredImage___title',
  news___featuredImage___description = 'news___featuredImage___description',
  news___featuredImage___node_locale = 'news___featuredImage___node_locale',
  news___featuredImage___sys___type = 'news___featuredImage___sys___type',
  news___featuredImage___sys___revision = 'news___featuredImage___sys___revision',
  news___featuredImage___fixed___base64 = 'news___featuredImage___fixed___base64',
  news___featuredImage___fixed___tracedSVG = 'news___featuredImage___fixed___tracedSVG',
  news___featuredImage___fixed___aspectRatio = 'news___featuredImage___fixed___aspectRatio',
  news___featuredImage___fixed___width = 'news___featuredImage___fixed___width',
  news___featuredImage___fixed___height = 'news___featuredImage___fixed___height',
  news___featuredImage___fixed___src = 'news___featuredImage___fixed___src',
  news___featuredImage___fixed___srcSet = 'news___featuredImage___fixed___srcSet',
  news___featuredImage___fixed___srcWebp = 'news___featuredImage___fixed___srcWebp',
  news___featuredImage___fixed___srcSetWebp = 'news___featuredImage___fixed___srcSetWebp',
  news___featuredImage___fluid___base64 = 'news___featuredImage___fluid___base64',
  news___featuredImage___fluid___tracedSVG = 'news___featuredImage___fluid___tracedSVG',
  news___featuredImage___fluid___aspectRatio = 'news___featuredImage___fluid___aspectRatio',
  news___featuredImage___fluid___src = 'news___featuredImage___fluid___src',
  news___featuredImage___fluid___srcSet = 'news___featuredImage___fluid___srcSet',
  news___featuredImage___fluid___srcWebp = 'news___featuredImage___fluid___srcWebp',
  news___featuredImage___fluid___srcSetWebp = 'news___featuredImage___fluid___srcSetWebp',
  news___featuredImage___fluid___sizes = 'news___featuredImage___fluid___sizes',
  news___featuredImage___gatsbyImageData = 'news___featuredImage___gatsbyImageData',
  news___featuredImage___resize___base64 = 'news___featuredImage___resize___base64',
  news___featuredImage___resize___tracedSVG = 'news___featuredImage___resize___tracedSVG',
  news___featuredImage___resize___src = 'news___featuredImage___resize___src',
  news___featuredImage___resize___width = 'news___featuredImage___resize___width',
  news___featuredImage___resize___height = 'news___featuredImage___resize___height',
  news___featuredImage___resize___aspectRatio = 'news___featuredImage___resize___aspectRatio',
  news___featuredImage___parent___id = 'news___featuredImage___parent___id',
  news___featuredImage___parent___children = 'news___featuredImage___parent___children',
  news___featuredImage___children = 'news___featuredImage___children',
  news___featuredImage___children___id = 'news___featuredImage___children___id',
  news___featuredImage___children___children = 'news___featuredImage___children___children',
  news___featuredImage___internal___content = 'news___featuredImage___internal___content',
  news___featuredImage___internal___contentDigest = 'news___featuredImage___internal___contentDigest',
  news___featuredImage___internal___description = 'news___featuredImage___internal___description',
  news___featuredImage___internal___fieldOwners = 'news___featuredImage___internal___fieldOwners',
  news___featuredImage___internal___ignoreType = 'news___featuredImage___internal___ignoreType',
  news___featuredImage___internal___mediaType = 'news___featuredImage___internal___mediaType',
  news___featuredImage___internal___owner = 'news___featuredImage___internal___owner',
  news___featuredImage___internal___type = 'news___featuredImage___internal___type',
  news___excerpt___id = 'news___excerpt___id',
  news___excerpt___parent___id = 'news___excerpt___parent___id',
  news___excerpt___parent___children = 'news___excerpt___parent___children',
  news___excerpt___children = 'news___excerpt___children',
  news___excerpt___children___id = 'news___excerpt___children___id',
  news___excerpt___children___children = 'news___excerpt___children___children',
  news___excerpt___internal___content = 'news___excerpt___internal___content',
  news___excerpt___internal___contentDigest = 'news___excerpt___internal___contentDigest',
  news___excerpt___internal___description = 'news___excerpt___internal___description',
  news___excerpt___internal___fieldOwners = 'news___excerpt___internal___fieldOwners',
  news___excerpt___internal___ignoreType = 'news___excerpt___internal___ignoreType',
  news___excerpt___internal___mediaType = 'news___excerpt___internal___mediaType',
  news___excerpt___internal___owner = 'news___excerpt___internal___owner',
  news___excerpt___internal___type = 'news___excerpt___internal___type',
  news___excerpt___excerpt = 'news___excerpt___excerpt',
  news___excerpt___sys___type = 'news___excerpt___sys___type',
  news___spaceId = 'news___spaceId',
  news___createdAt = 'news___createdAt',
  news___updatedAt = 'news___updatedAt',
  news___sys___type = 'news___sys___type',
  news___sys___revision = 'news___sys___revision',
  news___seoTitle = 'news___seoTitle',
  news___seoDescription = 'news___seoDescription',
  news___author___contentful_id = 'news___author___contentful_id',
  news___author___id = 'news___author___id',
  news___author___node_locale = 'news___author___node_locale',
  news___author___name = 'news___author___name',
  news___author___news = 'news___author___news',
  news___author___news___contentful_id = 'news___author___news___contentful_id',
  news___author___news___id = 'news___author___news___id',
  news___author___news___node_locale = 'news___author___news___node_locale',
  news___author___news___title = 'news___author___news___title',
  news___author___news___slug = 'news___author___news___slug',
  news___author___news___featured = 'news___author___news___featured',
  news___author___news___published = 'news___author___news___published',
  news___author___news___spaceId = 'news___author___news___spaceId',
  news___author___news___createdAt = 'news___author___news___createdAt',
  news___author___news___updatedAt = 'news___author___news___updatedAt',
  news___author___news___seoTitle = 'news___author___news___seoTitle',
  news___author___news___seoDescription = 'news___author___news___seoDescription',
  news___author___news___childrenContentfulNewsExcerptTextNode = 'news___author___news___childrenContentfulNewsExcerptTextNode',
  news___author___news___children = 'news___author___news___children',
  news___author___biography___id = 'news___author___biography___id',
  news___author___biography___children = 'news___author___biography___children',
  news___author___biography___biography = 'news___author___biography___biography',
  news___author___spaceId = 'news___author___spaceId',
  news___author___createdAt = 'news___author___createdAt',
  news___author___updatedAt = 'news___author___updatedAt',
  news___author___sys___type = 'news___author___sys___type',
  news___author___sys___revision = 'news___author___sys___revision',
  news___author___blog_post = 'news___author___blog_post',
  news___author___blog_post___contentful_id = 'news___author___blog_post___contentful_id',
  news___author___blog_post___id = 'news___author___blog_post___id',
  news___author___blog_post___node_locale = 'news___author___blog_post___node_locale',
  news___author___blog_post___title = 'news___author___blog_post___title',
  news___author___blog_post___slug = 'news___author___blog_post___slug',
  news___author___blog_post___featured = 'news___author___blog_post___featured',
  news___author___blog_post___published = 'news___author___blog_post___published',
  news___author___blog_post___seoTitle = 'news___author___blog_post___seoTitle',
  news___author___blog_post___seoDescription = 'news___author___blog_post___seoDescription',
  news___author___blog_post___spaceId = 'news___author___blog_post___spaceId',
  news___author___blog_post___createdAt = 'news___author___blog_post___createdAt',
  news___author___blog_post___updatedAt = 'news___author___blog_post___updatedAt',
  news___author___blog_post___childrenContentfulBlogPostExcerptTextNode = 'news___author___blog_post___childrenContentfulBlogPostExcerptTextNode',
  news___author___blog_post___children = 'news___author___blog_post___children',
  news___author___childrenContentfulAuthorBiographyTextNode = 'news___author___childrenContentfulAuthorBiographyTextNode',
  news___author___childrenContentfulAuthorBiographyTextNode___id = 'news___author___childrenContentfulAuthorBiographyTextNode___id',
  news___author___childrenContentfulAuthorBiographyTextNode___children = 'news___author___childrenContentfulAuthorBiographyTextNode___children',
  news___author___childrenContentfulAuthorBiographyTextNode___biography = 'news___author___childrenContentfulAuthorBiographyTextNode___biography',
  news___author___childContentfulAuthorBiographyTextNode___id = 'news___author___childContentfulAuthorBiographyTextNode___id',
  news___author___childContentfulAuthorBiographyTextNode___children = 'news___author___childContentfulAuthorBiographyTextNode___children',
  news___author___childContentfulAuthorBiographyTextNode___biography = 'news___author___childContentfulAuthorBiographyTextNode___biography',
  news___author___parent___id = 'news___author___parent___id',
  news___author___parent___children = 'news___author___parent___children',
  news___author___children = 'news___author___children',
  news___author___children___id = 'news___author___children___id',
  news___author___children___children = 'news___author___children___children',
  news___author___internal___content = 'news___author___internal___content',
  news___author___internal___contentDigest = 'news___author___internal___contentDigest',
  news___author___internal___description = 'news___author___internal___description',
  news___author___internal___fieldOwners = 'news___author___internal___fieldOwners',
  news___author___internal___ignoreType = 'news___author___internal___ignoreType',
  news___author___internal___mediaType = 'news___author___internal___mediaType',
  news___author___internal___owner = 'news___author___internal___owner',
  news___author___internal___type = 'news___author___internal___type',
  news___childrenContentfulNewsExcerptTextNode = 'news___childrenContentfulNewsExcerptTextNode',
  news___childrenContentfulNewsExcerptTextNode___id = 'news___childrenContentfulNewsExcerptTextNode___id',
  news___childrenContentfulNewsExcerptTextNode___parent___id = 'news___childrenContentfulNewsExcerptTextNode___parent___id',
  news___childrenContentfulNewsExcerptTextNode___parent___children = 'news___childrenContentfulNewsExcerptTextNode___parent___children',
  news___childrenContentfulNewsExcerptTextNode___children = 'news___childrenContentfulNewsExcerptTextNode___children',
  news___childrenContentfulNewsExcerptTextNode___children___id = 'news___childrenContentfulNewsExcerptTextNode___children___id',
  news___childrenContentfulNewsExcerptTextNode___children___children = 'news___childrenContentfulNewsExcerptTextNode___children___children',
  news___childrenContentfulNewsExcerptTextNode___internal___content = 'news___childrenContentfulNewsExcerptTextNode___internal___content',
  news___childrenContentfulNewsExcerptTextNode___internal___contentDigest = 'news___childrenContentfulNewsExcerptTextNode___internal___contentDigest',
  news___childrenContentfulNewsExcerptTextNode___internal___description = 'news___childrenContentfulNewsExcerptTextNode___internal___description',
  news___childrenContentfulNewsExcerptTextNode___internal___fieldOwners = 'news___childrenContentfulNewsExcerptTextNode___internal___fieldOwners',
  news___childrenContentfulNewsExcerptTextNode___internal___ignoreType = 'news___childrenContentfulNewsExcerptTextNode___internal___ignoreType',
  news___childrenContentfulNewsExcerptTextNode___internal___mediaType = 'news___childrenContentfulNewsExcerptTextNode___internal___mediaType',
  news___childrenContentfulNewsExcerptTextNode___internal___owner = 'news___childrenContentfulNewsExcerptTextNode___internal___owner',
  news___childrenContentfulNewsExcerptTextNode___internal___type = 'news___childrenContentfulNewsExcerptTextNode___internal___type',
  news___childrenContentfulNewsExcerptTextNode___excerpt = 'news___childrenContentfulNewsExcerptTextNode___excerpt',
  news___childrenContentfulNewsExcerptTextNode___sys___type = 'news___childrenContentfulNewsExcerptTextNode___sys___type',
  news___childContentfulNewsExcerptTextNode___id = 'news___childContentfulNewsExcerptTextNode___id',
  news___childContentfulNewsExcerptTextNode___parent___id = 'news___childContentfulNewsExcerptTextNode___parent___id',
  news___childContentfulNewsExcerptTextNode___parent___children = 'news___childContentfulNewsExcerptTextNode___parent___children',
  news___childContentfulNewsExcerptTextNode___children = 'news___childContentfulNewsExcerptTextNode___children',
  news___childContentfulNewsExcerptTextNode___children___id = 'news___childContentfulNewsExcerptTextNode___children___id',
  news___childContentfulNewsExcerptTextNode___children___children = 'news___childContentfulNewsExcerptTextNode___children___children',
  news___childContentfulNewsExcerptTextNode___internal___content = 'news___childContentfulNewsExcerptTextNode___internal___content',
  news___childContentfulNewsExcerptTextNode___internal___contentDigest = 'news___childContentfulNewsExcerptTextNode___internal___contentDigest',
  news___childContentfulNewsExcerptTextNode___internal___description = 'news___childContentfulNewsExcerptTextNode___internal___description',
  news___childContentfulNewsExcerptTextNode___internal___fieldOwners = 'news___childContentfulNewsExcerptTextNode___internal___fieldOwners',
  news___childContentfulNewsExcerptTextNode___internal___ignoreType = 'news___childContentfulNewsExcerptTextNode___internal___ignoreType',
  news___childContentfulNewsExcerptTextNode___internal___mediaType = 'news___childContentfulNewsExcerptTextNode___internal___mediaType',
  news___childContentfulNewsExcerptTextNode___internal___owner = 'news___childContentfulNewsExcerptTextNode___internal___owner',
  news___childContentfulNewsExcerptTextNode___internal___type = 'news___childContentfulNewsExcerptTextNode___internal___type',
  news___childContentfulNewsExcerptTextNode___excerpt = 'news___childContentfulNewsExcerptTextNode___excerpt',
  news___childContentfulNewsExcerptTextNode___sys___type = 'news___childContentfulNewsExcerptTextNode___sys___type',
  news___parent___id = 'news___parent___id',
  news___parent___parent___id = 'news___parent___parent___id',
  news___parent___parent___children = 'news___parent___parent___children',
  news___parent___children = 'news___parent___children',
  news___parent___children___id = 'news___parent___children___id',
  news___parent___children___children = 'news___parent___children___children',
  news___parent___internal___content = 'news___parent___internal___content',
  news___parent___internal___contentDigest = 'news___parent___internal___contentDigest',
  news___parent___internal___description = 'news___parent___internal___description',
  news___parent___internal___fieldOwners = 'news___parent___internal___fieldOwners',
  news___parent___internal___ignoreType = 'news___parent___internal___ignoreType',
  news___parent___internal___mediaType = 'news___parent___internal___mediaType',
  news___parent___internal___owner = 'news___parent___internal___owner',
  news___parent___internal___type = 'news___parent___internal___type',
  news___children = 'news___children',
  news___children___id = 'news___children___id',
  news___children___parent___id = 'news___children___parent___id',
  news___children___parent___children = 'news___children___parent___children',
  news___children___children = 'news___children___children',
  news___children___children___id = 'news___children___children___id',
  news___children___children___children = 'news___children___children___children',
  news___children___internal___content = 'news___children___internal___content',
  news___children___internal___contentDigest = 'news___children___internal___contentDigest',
  news___children___internal___description = 'news___children___internal___description',
  news___children___internal___fieldOwners = 'news___children___internal___fieldOwners',
  news___children___internal___ignoreType = 'news___children___internal___ignoreType',
  news___children___internal___mediaType = 'news___children___internal___mediaType',
  news___children___internal___owner = 'news___children___internal___owner',
  news___children___internal___type = 'news___children___internal___type',
  news___internal___content = 'news___internal___content',
  news___internal___contentDigest = 'news___internal___contentDigest',
  news___internal___description = 'news___internal___description',
  news___internal___fieldOwners = 'news___internal___fieldOwners',
  news___internal___ignoreType = 'news___internal___ignoreType',
  news___internal___mediaType = 'news___internal___mediaType',
  news___internal___owner = 'news___internal___owner',
  news___internal___type = 'news___internal___type',
  biography___id = 'biography___id',
  biography___parent___id = 'biography___parent___id',
  biography___parent___parent___id = 'biography___parent___parent___id',
  biography___parent___parent___children = 'biography___parent___parent___children',
  biography___parent___children = 'biography___parent___children',
  biography___parent___children___id = 'biography___parent___children___id',
  biography___parent___children___children = 'biography___parent___children___children',
  biography___parent___internal___content = 'biography___parent___internal___content',
  biography___parent___internal___contentDigest = 'biography___parent___internal___contentDigest',
  biography___parent___internal___description = 'biography___parent___internal___description',
  biography___parent___internal___fieldOwners = 'biography___parent___internal___fieldOwners',
  biography___parent___internal___ignoreType = 'biography___parent___internal___ignoreType',
  biography___parent___internal___mediaType = 'biography___parent___internal___mediaType',
  biography___parent___internal___owner = 'biography___parent___internal___owner',
  biography___parent___internal___type = 'biography___parent___internal___type',
  biography___children = 'biography___children',
  biography___children___id = 'biography___children___id',
  biography___children___parent___id = 'biography___children___parent___id',
  biography___children___parent___children = 'biography___children___parent___children',
  biography___children___children = 'biography___children___children',
  biography___children___children___id = 'biography___children___children___id',
  biography___children___children___children = 'biography___children___children___children',
  biography___children___internal___content = 'biography___children___internal___content',
  biography___children___internal___contentDigest = 'biography___children___internal___contentDigest',
  biography___children___internal___description = 'biography___children___internal___description',
  biography___children___internal___fieldOwners = 'biography___children___internal___fieldOwners',
  biography___children___internal___ignoreType = 'biography___children___internal___ignoreType',
  biography___children___internal___mediaType = 'biography___children___internal___mediaType',
  biography___children___internal___owner = 'biography___children___internal___owner',
  biography___children___internal___type = 'biography___children___internal___type',
  biography___internal___content = 'biography___internal___content',
  biography___internal___contentDigest = 'biography___internal___contentDigest',
  biography___internal___description = 'biography___internal___description',
  biography___internal___fieldOwners = 'biography___internal___fieldOwners',
  biography___internal___ignoreType = 'biography___internal___ignoreType',
  biography___internal___mediaType = 'biography___internal___mediaType',
  biography___internal___owner = 'biography___internal___owner',
  biography___internal___type = 'biography___internal___type',
  biography___biography = 'biography___biography',
  biography___sys___type = 'biography___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  blog_post = 'blog_post',
  blog_post___contentful_id = 'blog_post___contentful_id',
  blog_post___id = 'blog_post___id',
  blog_post___node_locale = 'blog_post___node_locale',
  blog_post___title = 'blog_post___title',
  blog_post___slug = 'blog_post___slug',
  blog_post___featured = 'blog_post___featured',
  blog_post___published = 'blog_post___published',
  blog_post___content___raw = 'blog_post___content___raw',
  blog_post___content___references = 'blog_post___content___references',
  blog_post___content___references___contentful_id = 'blog_post___content___references___contentful_id',
  blog_post___content___references___id = 'blog_post___content___references___id',
  blog_post___content___references___spaceId = 'blog_post___content___references___spaceId',
  blog_post___content___references___createdAt = 'blog_post___content___references___createdAt',
  blog_post___content___references___updatedAt = 'blog_post___content___references___updatedAt',
  blog_post___content___references___title = 'blog_post___content___references___title',
  blog_post___content___references___description = 'blog_post___content___references___description',
  blog_post___content___references___node_locale = 'blog_post___content___references___node_locale',
  blog_post___content___references___gatsbyImageData = 'blog_post___content___references___gatsbyImageData',
  blog_post___content___references___children = 'blog_post___content___references___children',
  blog_post___seoTitle = 'blog_post___seoTitle',
  blog_post___seoDescription = 'blog_post___seoDescription',
  blog_post___author___contentful_id = 'blog_post___author___contentful_id',
  blog_post___author___id = 'blog_post___author___id',
  blog_post___author___node_locale = 'blog_post___author___node_locale',
  blog_post___author___name = 'blog_post___author___name',
  blog_post___author___news = 'blog_post___author___news',
  blog_post___author___news___contentful_id = 'blog_post___author___news___contentful_id',
  blog_post___author___news___id = 'blog_post___author___news___id',
  blog_post___author___news___node_locale = 'blog_post___author___news___node_locale',
  blog_post___author___news___title = 'blog_post___author___news___title',
  blog_post___author___news___slug = 'blog_post___author___news___slug',
  blog_post___author___news___featured = 'blog_post___author___news___featured',
  blog_post___author___news___published = 'blog_post___author___news___published',
  blog_post___author___news___spaceId = 'blog_post___author___news___spaceId',
  blog_post___author___news___createdAt = 'blog_post___author___news___createdAt',
  blog_post___author___news___updatedAt = 'blog_post___author___news___updatedAt',
  blog_post___author___news___seoTitle = 'blog_post___author___news___seoTitle',
  blog_post___author___news___seoDescription = 'blog_post___author___news___seoDescription',
  blog_post___author___news___childrenContentfulNewsExcerptTextNode = 'blog_post___author___news___childrenContentfulNewsExcerptTextNode',
  blog_post___author___news___children = 'blog_post___author___news___children',
  blog_post___author___biography___id = 'blog_post___author___biography___id',
  blog_post___author___biography___children = 'blog_post___author___biography___children',
  blog_post___author___biography___biography = 'blog_post___author___biography___biography',
  blog_post___author___spaceId = 'blog_post___author___spaceId',
  blog_post___author___createdAt = 'blog_post___author___createdAt',
  blog_post___author___updatedAt = 'blog_post___author___updatedAt',
  blog_post___author___sys___type = 'blog_post___author___sys___type',
  blog_post___author___sys___revision = 'blog_post___author___sys___revision',
  blog_post___author___blog_post = 'blog_post___author___blog_post',
  blog_post___author___blog_post___contentful_id = 'blog_post___author___blog_post___contentful_id',
  blog_post___author___blog_post___id = 'blog_post___author___blog_post___id',
  blog_post___author___blog_post___node_locale = 'blog_post___author___blog_post___node_locale',
  blog_post___author___blog_post___title = 'blog_post___author___blog_post___title',
  blog_post___author___blog_post___slug = 'blog_post___author___blog_post___slug',
  blog_post___author___blog_post___featured = 'blog_post___author___blog_post___featured',
  blog_post___author___blog_post___published = 'blog_post___author___blog_post___published',
  blog_post___author___blog_post___seoTitle = 'blog_post___author___blog_post___seoTitle',
  blog_post___author___blog_post___seoDescription = 'blog_post___author___blog_post___seoDescription',
  blog_post___author___blog_post___spaceId = 'blog_post___author___blog_post___spaceId',
  blog_post___author___blog_post___createdAt = 'blog_post___author___blog_post___createdAt',
  blog_post___author___blog_post___updatedAt = 'blog_post___author___blog_post___updatedAt',
  blog_post___author___blog_post___childrenContentfulBlogPostExcerptTextNode = 'blog_post___author___blog_post___childrenContentfulBlogPostExcerptTextNode',
  blog_post___author___blog_post___children = 'blog_post___author___blog_post___children',
  blog_post___author___childrenContentfulAuthorBiographyTextNode = 'blog_post___author___childrenContentfulAuthorBiographyTextNode',
  blog_post___author___childrenContentfulAuthorBiographyTextNode___id = 'blog_post___author___childrenContentfulAuthorBiographyTextNode___id',
  blog_post___author___childrenContentfulAuthorBiographyTextNode___children = 'blog_post___author___childrenContentfulAuthorBiographyTextNode___children',
  blog_post___author___childrenContentfulAuthorBiographyTextNode___biography = 'blog_post___author___childrenContentfulAuthorBiographyTextNode___biography',
  blog_post___author___childContentfulAuthorBiographyTextNode___id = 'blog_post___author___childContentfulAuthorBiographyTextNode___id',
  blog_post___author___childContentfulAuthorBiographyTextNode___children = 'blog_post___author___childContentfulAuthorBiographyTextNode___children',
  blog_post___author___childContentfulAuthorBiographyTextNode___biography = 'blog_post___author___childContentfulAuthorBiographyTextNode___biography',
  blog_post___author___parent___id = 'blog_post___author___parent___id',
  blog_post___author___parent___children = 'blog_post___author___parent___children',
  blog_post___author___children = 'blog_post___author___children',
  blog_post___author___children___id = 'blog_post___author___children___id',
  blog_post___author___children___children = 'blog_post___author___children___children',
  blog_post___author___internal___content = 'blog_post___author___internal___content',
  blog_post___author___internal___contentDigest = 'blog_post___author___internal___contentDigest',
  blog_post___author___internal___description = 'blog_post___author___internal___description',
  blog_post___author___internal___fieldOwners = 'blog_post___author___internal___fieldOwners',
  blog_post___author___internal___ignoreType = 'blog_post___author___internal___ignoreType',
  blog_post___author___internal___mediaType = 'blog_post___author___internal___mediaType',
  blog_post___author___internal___owner = 'blog_post___author___internal___owner',
  blog_post___author___internal___type = 'blog_post___author___internal___type',
  blog_post___excerpt___id = 'blog_post___excerpt___id',
  blog_post___excerpt___parent___id = 'blog_post___excerpt___parent___id',
  blog_post___excerpt___parent___children = 'blog_post___excerpt___parent___children',
  blog_post___excerpt___children = 'blog_post___excerpt___children',
  blog_post___excerpt___children___id = 'blog_post___excerpt___children___id',
  blog_post___excerpt___children___children = 'blog_post___excerpt___children___children',
  blog_post___excerpt___internal___content = 'blog_post___excerpt___internal___content',
  blog_post___excerpt___internal___contentDigest = 'blog_post___excerpt___internal___contentDigest',
  blog_post___excerpt___internal___description = 'blog_post___excerpt___internal___description',
  blog_post___excerpt___internal___fieldOwners = 'blog_post___excerpt___internal___fieldOwners',
  blog_post___excerpt___internal___ignoreType = 'blog_post___excerpt___internal___ignoreType',
  blog_post___excerpt___internal___mediaType = 'blog_post___excerpt___internal___mediaType',
  blog_post___excerpt___internal___owner = 'blog_post___excerpt___internal___owner',
  blog_post___excerpt___internal___type = 'blog_post___excerpt___internal___type',
  blog_post___excerpt___excerpt = 'blog_post___excerpt___excerpt',
  blog_post___excerpt___sys___type = 'blog_post___excerpt___sys___type',
  blog_post___spaceId = 'blog_post___spaceId',
  blog_post___createdAt = 'blog_post___createdAt',
  blog_post___updatedAt = 'blog_post___updatedAt',
  blog_post___sys___type = 'blog_post___sys___type',
  blog_post___sys___revision = 'blog_post___sys___revision',
  blog_post___featuredImage___contentful_id = 'blog_post___featuredImage___contentful_id',
  blog_post___featuredImage___id = 'blog_post___featuredImage___id',
  blog_post___featuredImage___spaceId = 'blog_post___featuredImage___spaceId',
  blog_post___featuredImage___createdAt = 'blog_post___featuredImage___createdAt',
  blog_post___featuredImage___updatedAt = 'blog_post___featuredImage___updatedAt',
  blog_post___featuredImage___file___url = 'blog_post___featuredImage___file___url',
  blog_post___featuredImage___file___fileName = 'blog_post___featuredImage___file___fileName',
  blog_post___featuredImage___file___contentType = 'blog_post___featuredImage___file___contentType',
  blog_post___featuredImage___title = 'blog_post___featuredImage___title',
  blog_post___featuredImage___description = 'blog_post___featuredImage___description',
  blog_post___featuredImage___node_locale = 'blog_post___featuredImage___node_locale',
  blog_post___featuredImage___sys___type = 'blog_post___featuredImage___sys___type',
  blog_post___featuredImage___sys___revision = 'blog_post___featuredImage___sys___revision',
  blog_post___featuredImage___fixed___base64 = 'blog_post___featuredImage___fixed___base64',
  blog_post___featuredImage___fixed___tracedSVG = 'blog_post___featuredImage___fixed___tracedSVG',
  blog_post___featuredImage___fixed___aspectRatio = 'blog_post___featuredImage___fixed___aspectRatio',
  blog_post___featuredImage___fixed___width = 'blog_post___featuredImage___fixed___width',
  blog_post___featuredImage___fixed___height = 'blog_post___featuredImage___fixed___height',
  blog_post___featuredImage___fixed___src = 'blog_post___featuredImage___fixed___src',
  blog_post___featuredImage___fixed___srcSet = 'blog_post___featuredImage___fixed___srcSet',
  blog_post___featuredImage___fixed___srcWebp = 'blog_post___featuredImage___fixed___srcWebp',
  blog_post___featuredImage___fixed___srcSetWebp = 'blog_post___featuredImage___fixed___srcSetWebp',
  blog_post___featuredImage___fluid___base64 = 'blog_post___featuredImage___fluid___base64',
  blog_post___featuredImage___fluid___tracedSVG = 'blog_post___featuredImage___fluid___tracedSVG',
  blog_post___featuredImage___fluid___aspectRatio = 'blog_post___featuredImage___fluid___aspectRatio',
  blog_post___featuredImage___fluid___src = 'blog_post___featuredImage___fluid___src',
  blog_post___featuredImage___fluid___srcSet = 'blog_post___featuredImage___fluid___srcSet',
  blog_post___featuredImage___fluid___srcWebp = 'blog_post___featuredImage___fluid___srcWebp',
  blog_post___featuredImage___fluid___srcSetWebp = 'blog_post___featuredImage___fluid___srcSetWebp',
  blog_post___featuredImage___fluid___sizes = 'blog_post___featuredImage___fluid___sizes',
  blog_post___featuredImage___gatsbyImageData = 'blog_post___featuredImage___gatsbyImageData',
  blog_post___featuredImage___resize___base64 = 'blog_post___featuredImage___resize___base64',
  blog_post___featuredImage___resize___tracedSVG = 'blog_post___featuredImage___resize___tracedSVG',
  blog_post___featuredImage___resize___src = 'blog_post___featuredImage___resize___src',
  blog_post___featuredImage___resize___width = 'blog_post___featuredImage___resize___width',
  blog_post___featuredImage___resize___height = 'blog_post___featuredImage___resize___height',
  blog_post___featuredImage___resize___aspectRatio = 'blog_post___featuredImage___resize___aspectRatio',
  blog_post___featuredImage___parent___id = 'blog_post___featuredImage___parent___id',
  blog_post___featuredImage___parent___children = 'blog_post___featuredImage___parent___children',
  blog_post___featuredImage___children = 'blog_post___featuredImage___children',
  blog_post___featuredImage___children___id = 'blog_post___featuredImage___children___id',
  blog_post___featuredImage___children___children = 'blog_post___featuredImage___children___children',
  blog_post___featuredImage___internal___content = 'blog_post___featuredImage___internal___content',
  blog_post___featuredImage___internal___contentDigest = 'blog_post___featuredImage___internal___contentDigest',
  blog_post___featuredImage___internal___description = 'blog_post___featuredImage___internal___description',
  blog_post___featuredImage___internal___fieldOwners = 'blog_post___featuredImage___internal___fieldOwners',
  blog_post___featuredImage___internal___ignoreType = 'blog_post___featuredImage___internal___ignoreType',
  blog_post___featuredImage___internal___mediaType = 'blog_post___featuredImage___internal___mediaType',
  blog_post___featuredImage___internal___owner = 'blog_post___featuredImage___internal___owner',
  blog_post___featuredImage___internal___type = 'blog_post___featuredImage___internal___type',
  blog_post___childrenContentfulBlogPostExcerptTextNode = 'blog_post___childrenContentfulBlogPostExcerptTextNode',
  blog_post___childrenContentfulBlogPostExcerptTextNode___id = 'blog_post___childrenContentfulBlogPostExcerptTextNode___id',
  blog_post___childrenContentfulBlogPostExcerptTextNode___parent___id = 'blog_post___childrenContentfulBlogPostExcerptTextNode___parent___id',
  blog_post___childrenContentfulBlogPostExcerptTextNode___parent___children = 'blog_post___childrenContentfulBlogPostExcerptTextNode___parent___children',
  blog_post___childrenContentfulBlogPostExcerptTextNode___children = 'blog_post___childrenContentfulBlogPostExcerptTextNode___children',
  blog_post___childrenContentfulBlogPostExcerptTextNode___children___id = 'blog_post___childrenContentfulBlogPostExcerptTextNode___children___id',
  blog_post___childrenContentfulBlogPostExcerptTextNode___children___children = 'blog_post___childrenContentfulBlogPostExcerptTextNode___children___children',
  blog_post___childrenContentfulBlogPostExcerptTextNode___internal___content = 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___content',
  blog_post___childrenContentfulBlogPostExcerptTextNode___internal___contentDigest = 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___contentDigest',
  blog_post___childrenContentfulBlogPostExcerptTextNode___internal___description = 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___description',
  blog_post___childrenContentfulBlogPostExcerptTextNode___internal___fieldOwners = 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___fieldOwners',
  blog_post___childrenContentfulBlogPostExcerptTextNode___internal___ignoreType = 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___ignoreType',
  blog_post___childrenContentfulBlogPostExcerptTextNode___internal___mediaType = 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___mediaType',
  blog_post___childrenContentfulBlogPostExcerptTextNode___internal___owner = 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___owner',
  blog_post___childrenContentfulBlogPostExcerptTextNode___internal___type = 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___type',
  blog_post___childrenContentfulBlogPostExcerptTextNode___excerpt = 'blog_post___childrenContentfulBlogPostExcerptTextNode___excerpt',
  blog_post___childrenContentfulBlogPostExcerptTextNode___sys___type = 'blog_post___childrenContentfulBlogPostExcerptTextNode___sys___type',
  blog_post___childContentfulBlogPostExcerptTextNode___id = 'blog_post___childContentfulBlogPostExcerptTextNode___id',
  blog_post___childContentfulBlogPostExcerptTextNode___parent___id = 'blog_post___childContentfulBlogPostExcerptTextNode___parent___id',
  blog_post___childContentfulBlogPostExcerptTextNode___parent___children = 'blog_post___childContentfulBlogPostExcerptTextNode___parent___children',
  blog_post___childContentfulBlogPostExcerptTextNode___children = 'blog_post___childContentfulBlogPostExcerptTextNode___children',
  blog_post___childContentfulBlogPostExcerptTextNode___children___id = 'blog_post___childContentfulBlogPostExcerptTextNode___children___id',
  blog_post___childContentfulBlogPostExcerptTextNode___children___children = 'blog_post___childContentfulBlogPostExcerptTextNode___children___children',
  blog_post___childContentfulBlogPostExcerptTextNode___internal___content = 'blog_post___childContentfulBlogPostExcerptTextNode___internal___content',
  blog_post___childContentfulBlogPostExcerptTextNode___internal___contentDigest = 'blog_post___childContentfulBlogPostExcerptTextNode___internal___contentDigest',
  blog_post___childContentfulBlogPostExcerptTextNode___internal___description = 'blog_post___childContentfulBlogPostExcerptTextNode___internal___description',
  blog_post___childContentfulBlogPostExcerptTextNode___internal___fieldOwners = 'blog_post___childContentfulBlogPostExcerptTextNode___internal___fieldOwners',
  blog_post___childContentfulBlogPostExcerptTextNode___internal___ignoreType = 'blog_post___childContentfulBlogPostExcerptTextNode___internal___ignoreType',
  blog_post___childContentfulBlogPostExcerptTextNode___internal___mediaType = 'blog_post___childContentfulBlogPostExcerptTextNode___internal___mediaType',
  blog_post___childContentfulBlogPostExcerptTextNode___internal___owner = 'blog_post___childContentfulBlogPostExcerptTextNode___internal___owner',
  blog_post___childContentfulBlogPostExcerptTextNode___internal___type = 'blog_post___childContentfulBlogPostExcerptTextNode___internal___type',
  blog_post___childContentfulBlogPostExcerptTextNode___excerpt = 'blog_post___childContentfulBlogPostExcerptTextNode___excerpt',
  blog_post___childContentfulBlogPostExcerptTextNode___sys___type = 'blog_post___childContentfulBlogPostExcerptTextNode___sys___type',
  blog_post___parent___id = 'blog_post___parent___id',
  blog_post___parent___parent___id = 'blog_post___parent___parent___id',
  blog_post___parent___parent___children = 'blog_post___parent___parent___children',
  blog_post___parent___children = 'blog_post___parent___children',
  blog_post___parent___children___id = 'blog_post___parent___children___id',
  blog_post___parent___children___children = 'blog_post___parent___children___children',
  blog_post___parent___internal___content = 'blog_post___parent___internal___content',
  blog_post___parent___internal___contentDigest = 'blog_post___parent___internal___contentDigest',
  blog_post___parent___internal___description = 'blog_post___parent___internal___description',
  blog_post___parent___internal___fieldOwners = 'blog_post___parent___internal___fieldOwners',
  blog_post___parent___internal___ignoreType = 'blog_post___parent___internal___ignoreType',
  blog_post___parent___internal___mediaType = 'blog_post___parent___internal___mediaType',
  blog_post___parent___internal___owner = 'blog_post___parent___internal___owner',
  blog_post___parent___internal___type = 'blog_post___parent___internal___type',
  blog_post___children = 'blog_post___children',
  blog_post___children___id = 'blog_post___children___id',
  blog_post___children___parent___id = 'blog_post___children___parent___id',
  blog_post___children___parent___children = 'blog_post___children___parent___children',
  blog_post___children___children = 'blog_post___children___children',
  blog_post___children___children___id = 'blog_post___children___children___id',
  blog_post___children___children___children = 'blog_post___children___children___children',
  blog_post___children___internal___content = 'blog_post___children___internal___content',
  blog_post___children___internal___contentDigest = 'blog_post___children___internal___contentDigest',
  blog_post___children___internal___description = 'blog_post___children___internal___description',
  blog_post___children___internal___fieldOwners = 'blog_post___children___internal___fieldOwners',
  blog_post___children___internal___ignoreType = 'blog_post___children___internal___ignoreType',
  blog_post___children___internal___mediaType = 'blog_post___children___internal___mediaType',
  blog_post___children___internal___owner = 'blog_post___children___internal___owner',
  blog_post___children___internal___type = 'blog_post___children___internal___type',
  blog_post___internal___content = 'blog_post___internal___content',
  blog_post___internal___contentDigest = 'blog_post___internal___contentDigest',
  blog_post___internal___description = 'blog_post___internal___description',
  blog_post___internal___fieldOwners = 'blog_post___internal___fieldOwners',
  blog_post___internal___ignoreType = 'blog_post___internal___ignoreType',
  blog_post___internal___mediaType = 'blog_post___internal___mediaType',
  blog_post___internal___owner = 'blog_post___internal___owner',
  blog_post___internal___type = 'blog_post___internal___type',
  childrenContentfulAuthorBiographyTextNode = 'childrenContentfulAuthorBiographyTextNode',
  childrenContentfulAuthorBiographyTextNode___id = 'childrenContentfulAuthorBiographyTextNode___id',
  childrenContentfulAuthorBiographyTextNode___parent___id = 'childrenContentfulAuthorBiographyTextNode___parent___id',
  childrenContentfulAuthorBiographyTextNode___parent___parent___id = 'childrenContentfulAuthorBiographyTextNode___parent___parent___id',
  childrenContentfulAuthorBiographyTextNode___parent___parent___children = 'childrenContentfulAuthorBiographyTextNode___parent___parent___children',
  childrenContentfulAuthorBiographyTextNode___parent___children = 'childrenContentfulAuthorBiographyTextNode___parent___children',
  childrenContentfulAuthorBiographyTextNode___parent___children___id = 'childrenContentfulAuthorBiographyTextNode___parent___children___id',
  childrenContentfulAuthorBiographyTextNode___parent___children___children = 'childrenContentfulAuthorBiographyTextNode___parent___children___children',
  childrenContentfulAuthorBiographyTextNode___parent___internal___content = 'childrenContentfulAuthorBiographyTextNode___parent___internal___content',
  childrenContentfulAuthorBiographyTextNode___parent___internal___contentDigest = 'childrenContentfulAuthorBiographyTextNode___parent___internal___contentDigest',
  childrenContentfulAuthorBiographyTextNode___parent___internal___description = 'childrenContentfulAuthorBiographyTextNode___parent___internal___description',
  childrenContentfulAuthorBiographyTextNode___parent___internal___fieldOwners = 'childrenContentfulAuthorBiographyTextNode___parent___internal___fieldOwners',
  childrenContentfulAuthorBiographyTextNode___parent___internal___ignoreType = 'childrenContentfulAuthorBiographyTextNode___parent___internal___ignoreType',
  childrenContentfulAuthorBiographyTextNode___parent___internal___mediaType = 'childrenContentfulAuthorBiographyTextNode___parent___internal___mediaType',
  childrenContentfulAuthorBiographyTextNode___parent___internal___owner = 'childrenContentfulAuthorBiographyTextNode___parent___internal___owner',
  childrenContentfulAuthorBiographyTextNode___parent___internal___type = 'childrenContentfulAuthorBiographyTextNode___parent___internal___type',
  childrenContentfulAuthorBiographyTextNode___children = 'childrenContentfulAuthorBiographyTextNode___children',
  childrenContentfulAuthorBiographyTextNode___children___id = 'childrenContentfulAuthorBiographyTextNode___children___id',
  childrenContentfulAuthorBiographyTextNode___children___parent___id = 'childrenContentfulAuthorBiographyTextNode___children___parent___id',
  childrenContentfulAuthorBiographyTextNode___children___parent___children = 'childrenContentfulAuthorBiographyTextNode___children___parent___children',
  childrenContentfulAuthorBiographyTextNode___children___children = 'childrenContentfulAuthorBiographyTextNode___children___children',
  childrenContentfulAuthorBiographyTextNode___children___children___id = 'childrenContentfulAuthorBiographyTextNode___children___children___id',
  childrenContentfulAuthorBiographyTextNode___children___children___children = 'childrenContentfulAuthorBiographyTextNode___children___children___children',
  childrenContentfulAuthorBiographyTextNode___children___internal___content = 'childrenContentfulAuthorBiographyTextNode___children___internal___content',
  childrenContentfulAuthorBiographyTextNode___children___internal___contentDigest = 'childrenContentfulAuthorBiographyTextNode___children___internal___contentDigest',
  childrenContentfulAuthorBiographyTextNode___children___internal___description = 'childrenContentfulAuthorBiographyTextNode___children___internal___description',
  childrenContentfulAuthorBiographyTextNode___children___internal___fieldOwners = 'childrenContentfulAuthorBiographyTextNode___children___internal___fieldOwners',
  childrenContentfulAuthorBiographyTextNode___children___internal___ignoreType = 'childrenContentfulAuthorBiographyTextNode___children___internal___ignoreType',
  childrenContentfulAuthorBiographyTextNode___children___internal___mediaType = 'childrenContentfulAuthorBiographyTextNode___children___internal___mediaType',
  childrenContentfulAuthorBiographyTextNode___children___internal___owner = 'childrenContentfulAuthorBiographyTextNode___children___internal___owner',
  childrenContentfulAuthorBiographyTextNode___children___internal___type = 'childrenContentfulAuthorBiographyTextNode___children___internal___type',
  childrenContentfulAuthorBiographyTextNode___internal___content = 'childrenContentfulAuthorBiographyTextNode___internal___content',
  childrenContentfulAuthorBiographyTextNode___internal___contentDigest = 'childrenContentfulAuthorBiographyTextNode___internal___contentDigest',
  childrenContentfulAuthorBiographyTextNode___internal___description = 'childrenContentfulAuthorBiographyTextNode___internal___description',
  childrenContentfulAuthorBiographyTextNode___internal___fieldOwners = 'childrenContentfulAuthorBiographyTextNode___internal___fieldOwners',
  childrenContentfulAuthorBiographyTextNode___internal___ignoreType = 'childrenContentfulAuthorBiographyTextNode___internal___ignoreType',
  childrenContentfulAuthorBiographyTextNode___internal___mediaType = 'childrenContentfulAuthorBiographyTextNode___internal___mediaType',
  childrenContentfulAuthorBiographyTextNode___internal___owner = 'childrenContentfulAuthorBiographyTextNode___internal___owner',
  childrenContentfulAuthorBiographyTextNode___internal___type = 'childrenContentfulAuthorBiographyTextNode___internal___type',
  childrenContentfulAuthorBiographyTextNode___biography = 'childrenContentfulAuthorBiographyTextNode___biography',
  childrenContentfulAuthorBiographyTextNode___sys___type = 'childrenContentfulAuthorBiographyTextNode___sys___type',
  childContentfulAuthorBiographyTextNode___id = 'childContentfulAuthorBiographyTextNode___id',
  childContentfulAuthorBiographyTextNode___parent___id = 'childContentfulAuthorBiographyTextNode___parent___id',
  childContentfulAuthorBiographyTextNode___parent___parent___id = 'childContentfulAuthorBiographyTextNode___parent___parent___id',
  childContentfulAuthorBiographyTextNode___parent___parent___children = 'childContentfulAuthorBiographyTextNode___parent___parent___children',
  childContentfulAuthorBiographyTextNode___parent___children = 'childContentfulAuthorBiographyTextNode___parent___children',
  childContentfulAuthorBiographyTextNode___parent___children___id = 'childContentfulAuthorBiographyTextNode___parent___children___id',
  childContentfulAuthorBiographyTextNode___parent___children___children = 'childContentfulAuthorBiographyTextNode___parent___children___children',
  childContentfulAuthorBiographyTextNode___parent___internal___content = 'childContentfulAuthorBiographyTextNode___parent___internal___content',
  childContentfulAuthorBiographyTextNode___parent___internal___contentDigest = 'childContentfulAuthorBiographyTextNode___parent___internal___contentDigest',
  childContentfulAuthorBiographyTextNode___parent___internal___description = 'childContentfulAuthorBiographyTextNode___parent___internal___description',
  childContentfulAuthorBiographyTextNode___parent___internal___fieldOwners = 'childContentfulAuthorBiographyTextNode___parent___internal___fieldOwners',
  childContentfulAuthorBiographyTextNode___parent___internal___ignoreType = 'childContentfulAuthorBiographyTextNode___parent___internal___ignoreType',
  childContentfulAuthorBiographyTextNode___parent___internal___mediaType = 'childContentfulAuthorBiographyTextNode___parent___internal___mediaType',
  childContentfulAuthorBiographyTextNode___parent___internal___owner = 'childContentfulAuthorBiographyTextNode___parent___internal___owner',
  childContentfulAuthorBiographyTextNode___parent___internal___type = 'childContentfulAuthorBiographyTextNode___parent___internal___type',
  childContentfulAuthorBiographyTextNode___children = 'childContentfulAuthorBiographyTextNode___children',
  childContentfulAuthorBiographyTextNode___children___id = 'childContentfulAuthorBiographyTextNode___children___id',
  childContentfulAuthorBiographyTextNode___children___parent___id = 'childContentfulAuthorBiographyTextNode___children___parent___id',
  childContentfulAuthorBiographyTextNode___children___parent___children = 'childContentfulAuthorBiographyTextNode___children___parent___children',
  childContentfulAuthorBiographyTextNode___children___children = 'childContentfulAuthorBiographyTextNode___children___children',
  childContentfulAuthorBiographyTextNode___children___children___id = 'childContentfulAuthorBiographyTextNode___children___children___id',
  childContentfulAuthorBiographyTextNode___children___children___children = 'childContentfulAuthorBiographyTextNode___children___children___children',
  childContentfulAuthorBiographyTextNode___children___internal___content = 'childContentfulAuthorBiographyTextNode___children___internal___content',
  childContentfulAuthorBiographyTextNode___children___internal___contentDigest = 'childContentfulAuthorBiographyTextNode___children___internal___contentDigest',
  childContentfulAuthorBiographyTextNode___children___internal___description = 'childContentfulAuthorBiographyTextNode___children___internal___description',
  childContentfulAuthorBiographyTextNode___children___internal___fieldOwners = 'childContentfulAuthorBiographyTextNode___children___internal___fieldOwners',
  childContentfulAuthorBiographyTextNode___children___internal___ignoreType = 'childContentfulAuthorBiographyTextNode___children___internal___ignoreType',
  childContentfulAuthorBiographyTextNode___children___internal___mediaType = 'childContentfulAuthorBiographyTextNode___children___internal___mediaType',
  childContentfulAuthorBiographyTextNode___children___internal___owner = 'childContentfulAuthorBiographyTextNode___children___internal___owner',
  childContentfulAuthorBiographyTextNode___children___internal___type = 'childContentfulAuthorBiographyTextNode___children___internal___type',
  childContentfulAuthorBiographyTextNode___internal___content = 'childContentfulAuthorBiographyTextNode___internal___content',
  childContentfulAuthorBiographyTextNode___internal___contentDigest = 'childContentfulAuthorBiographyTextNode___internal___contentDigest',
  childContentfulAuthorBiographyTextNode___internal___description = 'childContentfulAuthorBiographyTextNode___internal___description',
  childContentfulAuthorBiographyTextNode___internal___fieldOwners = 'childContentfulAuthorBiographyTextNode___internal___fieldOwners',
  childContentfulAuthorBiographyTextNode___internal___ignoreType = 'childContentfulAuthorBiographyTextNode___internal___ignoreType',
  childContentfulAuthorBiographyTextNode___internal___mediaType = 'childContentfulAuthorBiographyTextNode___internal___mediaType',
  childContentfulAuthorBiographyTextNode___internal___owner = 'childContentfulAuthorBiographyTextNode___internal___owner',
  childContentfulAuthorBiographyTextNode___internal___type = 'childContentfulAuthorBiographyTextNode___internal___type',
  childContentfulAuthorBiographyTextNode___biography = 'childContentfulAuthorBiographyTextNode___biography',
  childContentfulAuthorBiographyTextNode___sys___type = 'childContentfulAuthorBiographyTextNode___sys___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulAuthorFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  news?: Maybe<ContentfulNewsFilterListInput>;
  biography?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>;
  childrenContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNodeFilterListInput>;
  childContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAuthorGroupConnection = {
  __typename?: 'ContentfulAuthorGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorEdge>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAuthorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthorSys = {
  __typename?: 'ContentfulAuthorSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAuthorSysContentType>;
};

export type ContentfulAuthorSysContentType = {
  __typename?: 'ContentfulAuthorSysContentType';
  sys?: Maybe<ContentfulAuthorSysContentTypeSys>;
};

export type ContentfulAuthorSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

export type ContentfulAuthorSysContentTypeSys = {
  __typename?: 'ContentfulAuthorSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAuthorSysContentTypeFilterInput>;
};

export type ContentfulBlockCallToAction = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulBlockCallToAction';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<ContentfulBlockCallToActionContent>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  button?: Maybe<ContentfulBlockCallToActionButtonJsonNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockCallToActionSys>;
  /** Returns all children nodes filtered by type contentfulBlockCallToActionButtonJsonNode */
  childrenContentfulBlockCallToActionButtonJsonNode?: Maybe<Array<Maybe<ContentfulBlockCallToActionButtonJsonNode>>>;
  /** Returns the first child node of type contentfulBlockCallToActionButtonJsonNode or null if there are no children of given type on this node */
  childContentfulBlockCallToActionButtonJsonNode?: Maybe<ContentfulBlockCallToActionButtonJsonNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulBlockCallToActionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockCallToActionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCallToActionConnection = {
  __typename?: 'ContentfulBlockCallToActionConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockCallToActionEdge>;
  nodes: Array<ContentfulBlockCallToAction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockCallToActionGroupConnection>;
};


export type ContentfulBlockCallToActionConnectionDistinctArgs = {
  field: ContentfulBlockCallToActionFieldsEnum;
};


export type ContentfulBlockCallToActionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockCallToActionFieldsEnum;
};

export type ContentfulBlockCallToActionContent = {
  __typename?: 'ContentfulBlockCallToActionContent';
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCallToActionContentFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockCallToActionContentfulBlockContentContentfulBlockContentListContentfulBlockImageBandContentfulBlockJumbotronUnion = ContentfulBlockCallToAction | ContentfulBlockContent | ContentfulBlockContentList | ContentfulBlockImageBand | ContentfulBlockJumbotron;

export type ContentfulBlockCallToActionEdge = {
  __typename?: 'ContentfulBlockCallToActionEdge';
  next?: Maybe<ContentfulBlockCallToAction>;
  node: ContentfulBlockCallToAction;
  previous?: Maybe<ContentfulBlockCallToAction>;
};

export enum ContentfulBlockCallToActionFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  content___raw = 'content___raw',
  page = 'page',
  page___contentful_id = 'page___contentful_id',
  page___id = 'page___id',
  page___node_locale = 'page___node_locale',
  page___title = 'page___title',
  page___slug = 'page___slug',
  page___seoTitle = 'page___seoTitle',
  page___seoDescription = 'page___seoDescription',
  page___spaceId = 'page___spaceId',
  page___createdAt = 'page___createdAt',
  page___updatedAt = 'page___updatedAt',
  page___sys___type = 'page___sys___type',
  page___sys___revision = 'page___sys___revision',
  page___parent___id = 'page___parent___id',
  page___parent___parent___id = 'page___parent___parent___id',
  page___parent___parent___children = 'page___parent___parent___children',
  page___parent___children = 'page___parent___children',
  page___parent___children___id = 'page___parent___children___id',
  page___parent___children___children = 'page___parent___children___children',
  page___parent___internal___content = 'page___parent___internal___content',
  page___parent___internal___contentDigest = 'page___parent___internal___contentDigest',
  page___parent___internal___description = 'page___parent___internal___description',
  page___parent___internal___fieldOwners = 'page___parent___internal___fieldOwners',
  page___parent___internal___ignoreType = 'page___parent___internal___ignoreType',
  page___parent___internal___mediaType = 'page___parent___internal___mediaType',
  page___parent___internal___owner = 'page___parent___internal___owner',
  page___parent___internal___type = 'page___parent___internal___type',
  page___children = 'page___children',
  page___children___id = 'page___children___id',
  page___children___parent___id = 'page___children___parent___id',
  page___children___parent___children = 'page___children___parent___children',
  page___children___children = 'page___children___children',
  page___children___children___id = 'page___children___children___id',
  page___children___children___children = 'page___children___children___children',
  page___children___internal___content = 'page___children___internal___content',
  page___children___internal___contentDigest = 'page___children___internal___contentDigest',
  page___children___internal___description = 'page___children___internal___description',
  page___children___internal___fieldOwners = 'page___children___internal___fieldOwners',
  page___children___internal___ignoreType = 'page___children___internal___ignoreType',
  page___children___internal___mediaType = 'page___children___internal___mediaType',
  page___children___internal___owner = 'page___children___internal___owner',
  page___children___internal___type = 'page___children___internal___type',
  page___internal___content = 'page___internal___content',
  page___internal___contentDigest = 'page___internal___contentDigest',
  page___internal___description = 'page___internal___description',
  page___internal___fieldOwners = 'page___internal___fieldOwners',
  page___internal___ignoreType = 'page___internal___ignoreType',
  page___internal___mediaType = 'page___internal___mediaType',
  page___internal___owner = 'page___internal___owner',
  page___internal___type = 'page___internal___type',
  button___id = 'button___id',
  button___parent___id = 'button___parent___id',
  button___parent___parent___id = 'button___parent___parent___id',
  button___parent___parent___children = 'button___parent___parent___children',
  button___parent___children = 'button___parent___children',
  button___parent___children___id = 'button___parent___children___id',
  button___parent___children___children = 'button___parent___children___children',
  button___parent___internal___content = 'button___parent___internal___content',
  button___parent___internal___contentDigest = 'button___parent___internal___contentDigest',
  button___parent___internal___description = 'button___parent___internal___description',
  button___parent___internal___fieldOwners = 'button___parent___internal___fieldOwners',
  button___parent___internal___ignoreType = 'button___parent___internal___ignoreType',
  button___parent___internal___mediaType = 'button___parent___internal___mediaType',
  button___parent___internal___owner = 'button___parent___internal___owner',
  button___parent___internal___type = 'button___parent___internal___type',
  button___children = 'button___children',
  button___children___id = 'button___children___id',
  button___children___parent___id = 'button___children___parent___id',
  button___children___parent___children = 'button___children___parent___children',
  button___children___children = 'button___children___children',
  button___children___children___id = 'button___children___children___id',
  button___children___children___children = 'button___children___children___children',
  button___children___internal___content = 'button___children___internal___content',
  button___children___internal___contentDigest = 'button___children___internal___contentDigest',
  button___children___internal___description = 'button___children___internal___description',
  button___children___internal___fieldOwners = 'button___children___internal___fieldOwners',
  button___children___internal___ignoreType = 'button___children___internal___ignoreType',
  button___children___internal___mediaType = 'button___children___internal___mediaType',
  button___children___internal___owner = 'button___children___internal___owner',
  button___children___internal___type = 'button___children___internal___type',
  button___internal___content = 'button___internal___content',
  button___internal___contentDigest = 'button___internal___contentDigest',
  button___internal___description = 'button___internal___description',
  button___internal___fieldOwners = 'button___internal___fieldOwners',
  button___internal___ignoreType = 'button___internal___ignoreType',
  button___internal___mediaType = 'button___internal___mediaType',
  button___internal___owner = 'button___internal___owner',
  button___internal___type = 'button___internal___type',
  button___action___enabled = 'button___action___enabled',
  button___action___title = 'button___action___title',
  button___action___external = 'button___action___external',
  button___action___externalUrl = 'button___action___externalUrl',
  button___action___entrySlug = 'button___action___entrySlug',
  button___sys___type = 'button___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  childrenContentfulBlockCallToActionButtonJsonNode = 'childrenContentfulBlockCallToActionButtonJsonNode',
  childrenContentfulBlockCallToActionButtonJsonNode___id = 'childrenContentfulBlockCallToActionButtonJsonNode___id',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___id = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___id',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___parent___id = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___parent___id',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___parent___children = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___parent___children',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___children = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___children',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___children___id = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___children___id',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___children___children = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___children___children',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___content = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___content',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___contentDigest = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___contentDigest',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___description = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___description',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___fieldOwners = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___fieldOwners',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___ignoreType = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___ignoreType',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___mediaType = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___mediaType',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___owner = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___owner',
  childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___type = 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___type',
  childrenContentfulBlockCallToActionButtonJsonNode___children = 'childrenContentfulBlockCallToActionButtonJsonNode___children',
  childrenContentfulBlockCallToActionButtonJsonNode___children___id = 'childrenContentfulBlockCallToActionButtonJsonNode___children___id',
  childrenContentfulBlockCallToActionButtonJsonNode___children___parent___id = 'childrenContentfulBlockCallToActionButtonJsonNode___children___parent___id',
  childrenContentfulBlockCallToActionButtonJsonNode___children___parent___children = 'childrenContentfulBlockCallToActionButtonJsonNode___children___parent___children',
  childrenContentfulBlockCallToActionButtonJsonNode___children___children = 'childrenContentfulBlockCallToActionButtonJsonNode___children___children',
  childrenContentfulBlockCallToActionButtonJsonNode___children___children___id = 'childrenContentfulBlockCallToActionButtonJsonNode___children___children___id',
  childrenContentfulBlockCallToActionButtonJsonNode___children___children___children = 'childrenContentfulBlockCallToActionButtonJsonNode___children___children___children',
  childrenContentfulBlockCallToActionButtonJsonNode___children___internal___content = 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___content',
  childrenContentfulBlockCallToActionButtonJsonNode___children___internal___contentDigest = 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___contentDigest',
  childrenContentfulBlockCallToActionButtonJsonNode___children___internal___description = 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___description',
  childrenContentfulBlockCallToActionButtonJsonNode___children___internal___fieldOwners = 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___fieldOwners',
  childrenContentfulBlockCallToActionButtonJsonNode___children___internal___ignoreType = 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___ignoreType',
  childrenContentfulBlockCallToActionButtonJsonNode___children___internal___mediaType = 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___mediaType',
  childrenContentfulBlockCallToActionButtonJsonNode___children___internal___owner = 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___owner',
  childrenContentfulBlockCallToActionButtonJsonNode___children___internal___type = 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___type',
  childrenContentfulBlockCallToActionButtonJsonNode___internal___content = 'childrenContentfulBlockCallToActionButtonJsonNode___internal___content',
  childrenContentfulBlockCallToActionButtonJsonNode___internal___contentDigest = 'childrenContentfulBlockCallToActionButtonJsonNode___internal___contentDigest',
  childrenContentfulBlockCallToActionButtonJsonNode___internal___description = 'childrenContentfulBlockCallToActionButtonJsonNode___internal___description',
  childrenContentfulBlockCallToActionButtonJsonNode___internal___fieldOwners = 'childrenContentfulBlockCallToActionButtonJsonNode___internal___fieldOwners',
  childrenContentfulBlockCallToActionButtonJsonNode___internal___ignoreType = 'childrenContentfulBlockCallToActionButtonJsonNode___internal___ignoreType',
  childrenContentfulBlockCallToActionButtonJsonNode___internal___mediaType = 'childrenContentfulBlockCallToActionButtonJsonNode___internal___mediaType',
  childrenContentfulBlockCallToActionButtonJsonNode___internal___owner = 'childrenContentfulBlockCallToActionButtonJsonNode___internal___owner',
  childrenContentfulBlockCallToActionButtonJsonNode___internal___type = 'childrenContentfulBlockCallToActionButtonJsonNode___internal___type',
  childrenContentfulBlockCallToActionButtonJsonNode___action___enabled = 'childrenContentfulBlockCallToActionButtonJsonNode___action___enabled',
  childrenContentfulBlockCallToActionButtonJsonNode___action___title = 'childrenContentfulBlockCallToActionButtonJsonNode___action___title',
  childrenContentfulBlockCallToActionButtonJsonNode___action___external = 'childrenContentfulBlockCallToActionButtonJsonNode___action___external',
  childrenContentfulBlockCallToActionButtonJsonNode___action___externalUrl = 'childrenContentfulBlockCallToActionButtonJsonNode___action___externalUrl',
  childrenContentfulBlockCallToActionButtonJsonNode___action___entrySlug = 'childrenContentfulBlockCallToActionButtonJsonNode___action___entrySlug',
  childrenContentfulBlockCallToActionButtonJsonNode___sys___type = 'childrenContentfulBlockCallToActionButtonJsonNode___sys___type',
  childContentfulBlockCallToActionButtonJsonNode___id = 'childContentfulBlockCallToActionButtonJsonNode___id',
  childContentfulBlockCallToActionButtonJsonNode___parent___id = 'childContentfulBlockCallToActionButtonJsonNode___parent___id',
  childContentfulBlockCallToActionButtonJsonNode___parent___parent___id = 'childContentfulBlockCallToActionButtonJsonNode___parent___parent___id',
  childContentfulBlockCallToActionButtonJsonNode___parent___parent___children = 'childContentfulBlockCallToActionButtonJsonNode___parent___parent___children',
  childContentfulBlockCallToActionButtonJsonNode___parent___children = 'childContentfulBlockCallToActionButtonJsonNode___parent___children',
  childContentfulBlockCallToActionButtonJsonNode___parent___children___id = 'childContentfulBlockCallToActionButtonJsonNode___parent___children___id',
  childContentfulBlockCallToActionButtonJsonNode___parent___children___children = 'childContentfulBlockCallToActionButtonJsonNode___parent___children___children',
  childContentfulBlockCallToActionButtonJsonNode___parent___internal___content = 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___content',
  childContentfulBlockCallToActionButtonJsonNode___parent___internal___contentDigest = 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___contentDigest',
  childContentfulBlockCallToActionButtonJsonNode___parent___internal___description = 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___description',
  childContentfulBlockCallToActionButtonJsonNode___parent___internal___fieldOwners = 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___fieldOwners',
  childContentfulBlockCallToActionButtonJsonNode___parent___internal___ignoreType = 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___ignoreType',
  childContentfulBlockCallToActionButtonJsonNode___parent___internal___mediaType = 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___mediaType',
  childContentfulBlockCallToActionButtonJsonNode___parent___internal___owner = 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___owner',
  childContentfulBlockCallToActionButtonJsonNode___parent___internal___type = 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___type',
  childContentfulBlockCallToActionButtonJsonNode___children = 'childContentfulBlockCallToActionButtonJsonNode___children',
  childContentfulBlockCallToActionButtonJsonNode___children___id = 'childContentfulBlockCallToActionButtonJsonNode___children___id',
  childContentfulBlockCallToActionButtonJsonNode___children___parent___id = 'childContentfulBlockCallToActionButtonJsonNode___children___parent___id',
  childContentfulBlockCallToActionButtonJsonNode___children___parent___children = 'childContentfulBlockCallToActionButtonJsonNode___children___parent___children',
  childContentfulBlockCallToActionButtonJsonNode___children___children = 'childContentfulBlockCallToActionButtonJsonNode___children___children',
  childContentfulBlockCallToActionButtonJsonNode___children___children___id = 'childContentfulBlockCallToActionButtonJsonNode___children___children___id',
  childContentfulBlockCallToActionButtonJsonNode___children___children___children = 'childContentfulBlockCallToActionButtonJsonNode___children___children___children',
  childContentfulBlockCallToActionButtonJsonNode___children___internal___content = 'childContentfulBlockCallToActionButtonJsonNode___children___internal___content',
  childContentfulBlockCallToActionButtonJsonNode___children___internal___contentDigest = 'childContentfulBlockCallToActionButtonJsonNode___children___internal___contentDigest',
  childContentfulBlockCallToActionButtonJsonNode___children___internal___description = 'childContentfulBlockCallToActionButtonJsonNode___children___internal___description',
  childContentfulBlockCallToActionButtonJsonNode___children___internal___fieldOwners = 'childContentfulBlockCallToActionButtonJsonNode___children___internal___fieldOwners',
  childContentfulBlockCallToActionButtonJsonNode___children___internal___ignoreType = 'childContentfulBlockCallToActionButtonJsonNode___children___internal___ignoreType',
  childContentfulBlockCallToActionButtonJsonNode___children___internal___mediaType = 'childContentfulBlockCallToActionButtonJsonNode___children___internal___mediaType',
  childContentfulBlockCallToActionButtonJsonNode___children___internal___owner = 'childContentfulBlockCallToActionButtonJsonNode___children___internal___owner',
  childContentfulBlockCallToActionButtonJsonNode___children___internal___type = 'childContentfulBlockCallToActionButtonJsonNode___children___internal___type',
  childContentfulBlockCallToActionButtonJsonNode___internal___content = 'childContentfulBlockCallToActionButtonJsonNode___internal___content',
  childContentfulBlockCallToActionButtonJsonNode___internal___contentDigest = 'childContentfulBlockCallToActionButtonJsonNode___internal___contentDigest',
  childContentfulBlockCallToActionButtonJsonNode___internal___description = 'childContentfulBlockCallToActionButtonJsonNode___internal___description',
  childContentfulBlockCallToActionButtonJsonNode___internal___fieldOwners = 'childContentfulBlockCallToActionButtonJsonNode___internal___fieldOwners',
  childContentfulBlockCallToActionButtonJsonNode___internal___ignoreType = 'childContentfulBlockCallToActionButtonJsonNode___internal___ignoreType',
  childContentfulBlockCallToActionButtonJsonNode___internal___mediaType = 'childContentfulBlockCallToActionButtonJsonNode___internal___mediaType',
  childContentfulBlockCallToActionButtonJsonNode___internal___owner = 'childContentfulBlockCallToActionButtonJsonNode___internal___owner',
  childContentfulBlockCallToActionButtonJsonNode___internal___type = 'childContentfulBlockCallToActionButtonJsonNode___internal___type',
  childContentfulBlockCallToActionButtonJsonNode___action___enabled = 'childContentfulBlockCallToActionButtonJsonNode___action___enabled',
  childContentfulBlockCallToActionButtonJsonNode___action___title = 'childContentfulBlockCallToActionButtonJsonNode___action___title',
  childContentfulBlockCallToActionButtonJsonNode___action___external = 'childContentfulBlockCallToActionButtonJsonNode___action___external',
  childContentfulBlockCallToActionButtonJsonNode___action___externalUrl = 'childContentfulBlockCallToActionButtonJsonNode___action___externalUrl',
  childContentfulBlockCallToActionButtonJsonNode___action___entrySlug = 'childContentfulBlockCallToActionButtonJsonNode___action___entrySlug',
  childContentfulBlockCallToActionButtonJsonNode___sys___type = 'childContentfulBlockCallToActionButtonJsonNode___sys___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulBlockCallToActionFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulBlockCallToActionContentFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  button?: Maybe<ContentfulBlockCallToActionButtonJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockCallToActionSysFilterInput>;
  childrenContentfulBlockCallToActionButtonJsonNode?: Maybe<ContentfulBlockCallToActionButtonJsonNodeFilterListInput>;
  childContentfulBlockCallToActionButtonJsonNode?: Maybe<ContentfulBlockCallToActionButtonJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulBlockCallToActionGroupConnection = {
  __typename?: 'ContentfulBlockCallToActionGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockCallToActionEdge>;
  nodes: Array<ContentfulBlockCallToAction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCallToActionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockCallToActionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockCallToActionSys = {
  __typename?: 'ContentfulBlockCallToActionSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockCallToActionSysContentType>;
};

export type ContentfulBlockCallToActionSysContentType = {
  __typename?: 'ContentfulBlockCallToActionSysContentType';
  sys?: Maybe<ContentfulBlockCallToActionSysContentTypeSys>;
};

export type ContentfulBlockCallToActionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockCallToActionSysContentTypeSysFilterInput>;
};

export type ContentfulBlockCallToActionSysContentTypeSys = {
  __typename?: 'ContentfulBlockCallToActionSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCallToActionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockCallToActionSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockCallToActionSysContentTypeFilterInput>;
};

export type ContentfulBlockContent = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulBlockContent';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  blockTitle?: Maybe<Scalars['String']>;
  variation?: Maybe<Scalars['String']>;
  content?: Maybe<ContentfulBlockContentContent>;
  button?: Maybe<ContentfulBlockContentButtonJsonNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockContentSys>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  /** Returns all children nodes filtered by type contentfulBlockContentButtonJsonNode */
  childrenContentfulBlockContentButtonJsonNode?: Maybe<Array<Maybe<ContentfulBlockContentButtonJsonNode>>>;
  /** Returns the first child node of type contentfulBlockContentButtonJsonNode or null if there are no children of given type on this node */
  childContentfulBlockContentButtonJsonNode?: Maybe<ContentfulBlockContentButtonJsonNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulBlockContentCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockContentUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentConnection = {
  __typename?: 'ContentfulBlockContentConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockContentEdge>;
  nodes: Array<ContentfulBlockContent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockContentGroupConnection>;
};


export type ContentfulBlockContentConnectionDistinctArgs = {
  field: ContentfulBlockContentFieldsEnum;
};


export type ContentfulBlockContentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockContentFieldsEnum;
};

export type ContentfulBlockContentContent = {
  __typename?: 'ContentfulBlockContentContent';
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentContentFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockContentEdge = {
  __typename?: 'ContentfulBlockContentEdge';
  next?: Maybe<ContentfulBlockContent>;
  node: ContentfulBlockContent;
  previous?: Maybe<ContentfulBlockContent>;
};

export enum ContentfulBlockContentFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  blockTitle = 'blockTitle',
  variation = 'variation',
  content___raw = 'content___raw',
  button___id = 'button___id',
  button___parent___id = 'button___parent___id',
  button___parent___parent___id = 'button___parent___parent___id',
  button___parent___parent___children = 'button___parent___parent___children',
  button___parent___children = 'button___parent___children',
  button___parent___children___id = 'button___parent___children___id',
  button___parent___children___children = 'button___parent___children___children',
  button___parent___internal___content = 'button___parent___internal___content',
  button___parent___internal___contentDigest = 'button___parent___internal___contentDigest',
  button___parent___internal___description = 'button___parent___internal___description',
  button___parent___internal___fieldOwners = 'button___parent___internal___fieldOwners',
  button___parent___internal___ignoreType = 'button___parent___internal___ignoreType',
  button___parent___internal___mediaType = 'button___parent___internal___mediaType',
  button___parent___internal___owner = 'button___parent___internal___owner',
  button___parent___internal___type = 'button___parent___internal___type',
  button___children = 'button___children',
  button___children___id = 'button___children___id',
  button___children___parent___id = 'button___children___parent___id',
  button___children___parent___children = 'button___children___parent___children',
  button___children___children = 'button___children___children',
  button___children___children___id = 'button___children___children___id',
  button___children___children___children = 'button___children___children___children',
  button___children___internal___content = 'button___children___internal___content',
  button___children___internal___contentDigest = 'button___children___internal___contentDigest',
  button___children___internal___description = 'button___children___internal___description',
  button___children___internal___fieldOwners = 'button___children___internal___fieldOwners',
  button___children___internal___ignoreType = 'button___children___internal___ignoreType',
  button___children___internal___mediaType = 'button___children___internal___mediaType',
  button___children___internal___owner = 'button___children___internal___owner',
  button___children___internal___type = 'button___children___internal___type',
  button___internal___content = 'button___internal___content',
  button___internal___contentDigest = 'button___internal___contentDigest',
  button___internal___description = 'button___internal___description',
  button___internal___fieldOwners = 'button___internal___fieldOwners',
  button___internal___ignoreType = 'button___internal___ignoreType',
  button___internal___mediaType = 'button___internal___mediaType',
  button___internal___owner = 'button___internal___owner',
  button___internal___type = 'button___internal___type',
  button___action___enabled = 'button___action___enabled',
  button___action___title = 'button___action___title',
  button___action___external = 'button___action___external',
  button___action___externalUrl = 'button___action___externalUrl',
  button___action___entrySlug = 'button___action___entrySlug',
  button___sys___type = 'button___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  page = 'page',
  page___contentful_id = 'page___contentful_id',
  page___id = 'page___id',
  page___node_locale = 'page___node_locale',
  page___title = 'page___title',
  page___slug = 'page___slug',
  page___seoTitle = 'page___seoTitle',
  page___seoDescription = 'page___seoDescription',
  page___spaceId = 'page___spaceId',
  page___createdAt = 'page___createdAt',
  page___updatedAt = 'page___updatedAt',
  page___sys___type = 'page___sys___type',
  page___sys___revision = 'page___sys___revision',
  page___parent___id = 'page___parent___id',
  page___parent___parent___id = 'page___parent___parent___id',
  page___parent___parent___children = 'page___parent___parent___children',
  page___parent___children = 'page___parent___children',
  page___parent___children___id = 'page___parent___children___id',
  page___parent___children___children = 'page___parent___children___children',
  page___parent___internal___content = 'page___parent___internal___content',
  page___parent___internal___contentDigest = 'page___parent___internal___contentDigest',
  page___parent___internal___description = 'page___parent___internal___description',
  page___parent___internal___fieldOwners = 'page___parent___internal___fieldOwners',
  page___parent___internal___ignoreType = 'page___parent___internal___ignoreType',
  page___parent___internal___mediaType = 'page___parent___internal___mediaType',
  page___parent___internal___owner = 'page___parent___internal___owner',
  page___parent___internal___type = 'page___parent___internal___type',
  page___children = 'page___children',
  page___children___id = 'page___children___id',
  page___children___parent___id = 'page___children___parent___id',
  page___children___parent___children = 'page___children___parent___children',
  page___children___children = 'page___children___children',
  page___children___children___id = 'page___children___children___id',
  page___children___children___children = 'page___children___children___children',
  page___children___internal___content = 'page___children___internal___content',
  page___children___internal___contentDigest = 'page___children___internal___contentDigest',
  page___children___internal___description = 'page___children___internal___description',
  page___children___internal___fieldOwners = 'page___children___internal___fieldOwners',
  page___children___internal___ignoreType = 'page___children___internal___ignoreType',
  page___children___internal___mediaType = 'page___children___internal___mediaType',
  page___children___internal___owner = 'page___children___internal___owner',
  page___children___internal___type = 'page___children___internal___type',
  page___internal___content = 'page___internal___content',
  page___internal___contentDigest = 'page___internal___contentDigest',
  page___internal___description = 'page___internal___description',
  page___internal___fieldOwners = 'page___internal___fieldOwners',
  page___internal___ignoreType = 'page___internal___ignoreType',
  page___internal___mediaType = 'page___internal___mediaType',
  page___internal___owner = 'page___internal___owner',
  page___internal___type = 'page___internal___type',
  childrenContentfulBlockContentButtonJsonNode = 'childrenContentfulBlockContentButtonJsonNode',
  childrenContentfulBlockContentButtonJsonNode___id = 'childrenContentfulBlockContentButtonJsonNode___id',
  childrenContentfulBlockContentButtonJsonNode___parent___id = 'childrenContentfulBlockContentButtonJsonNode___parent___id',
  childrenContentfulBlockContentButtonJsonNode___parent___parent___id = 'childrenContentfulBlockContentButtonJsonNode___parent___parent___id',
  childrenContentfulBlockContentButtonJsonNode___parent___parent___children = 'childrenContentfulBlockContentButtonJsonNode___parent___parent___children',
  childrenContentfulBlockContentButtonJsonNode___parent___children = 'childrenContentfulBlockContentButtonJsonNode___parent___children',
  childrenContentfulBlockContentButtonJsonNode___parent___children___id = 'childrenContentfulBlockContentButtonJsonNode___parent___children___id',
  childrenContentfulBlockContentButtonJsonNode___parent___children___children = 'childrenContentfulBlockContentButtonJsonNode___parent___children___children',
  childrenContentfulBlockContentButtonJsonNode___parent___internal___content = 'childrenContentfulBlockContentButtonJsonNode___parent___internal___content',
  childrenContentfulBlockContentButtonJsonNode___parent___internal___contentDigest = 'childrenContentfulBlockContentButtonJsonNode___parent___internal___contentDigest',
  childrenContentfulBlockContentButtonJsonNode___parent___internal___description = 'childrenContentfulBlockContentButtonJsonNode___parent___internal___description',
  childrenContentfulBlockContentButtonJsonNode___parent___internal___fieldOwners = 'childrenContentfulBlockContentButtonJsonNode___parent___internal___fieldOwners',
  childrenContentfulBlockContentButtonJsonNode___parent___internal___ignoreType = 'childrenContentfulBlockContentButtonJsonNode___parent___internal___ignoreType',
  childrenContentfulBlockContentButtonJsonNode___parent___internal___mediaType = 'childrenContentfulBlockContentButtonJsonNode___parent___internal___mediaType',
  childrenContentfulBlockContentButtonJsonNode___parent___internal___owner = 'childrenContentfulBlockContentButtonJsonNode___parent___internal___owner',
  childrenContentfulBlockContentButtonJsonNode___parent___internal___type = 'childrenContentfulBlockContentButtonJsonNode___parent___internal___type',
  childrenContentfulBlockContentButtonJsonNode___children = 'childrenContentfulBlockContentButtonJsonNode___children',
  childrenContentfulBlockContentButtonJsonNode___children___id = 'childrenContentfulBlockContentButtonJsonNode___children___id',
  childrenContentfulBlockContentButtonJsonNode___children___parent___id = 'childrenContentfulBlockContentButtonJsonNode___children___parent___id',
  childrenContentfulBlockContentButtonJsonNode___children___parent___children = 'childrenContentfulBlockContentButtonJsonNode___children___parent___children',
  childrenContentfulBlockContentButtonJsonNode___children___children = 'childrenContentfulBlockContentButtonJsonNode___children___children',
  childrenContentfulBlockContentButtonJsonNode___children___children___id = 'childrenContentfulBlockContentButtonJsonNode___children___children___id',
  childrenContentfulBlockContentButtonJsonNode___children___children___children = 'childrenContentfulBlockContentButtonJsonNode___children___children___children',
  childrenContentfulBlockContentButtonJsonNode___children___internal___content = 'childrenContentfulBlockContentButtonJsonNode___children___internal___content',
  childrenContentfulBlockContentButtonJsonNode___children___internal___contentDigest = 'childrenContentfulBlockContentButtonJsonNode___children___internal___contentDigest',
  childrenContentfulBlockContentButtonJsonNode___children___internal___description = 'childrenContentfulBlockContentButtonJsonNode___children___internal___description',
  childrenContentfulBlockContentButtonJsonNode___children___internal___fieldOwners = 'childrenContentfulBlockContentButtonJsonNode___children___internal___fieldOwners',
  childrenContentfulBlockContentButtonJsonNode___children___internal___ignoreType = 'childrenContentfulBlockContentButtonJsonNode___children___internal___ignoreType',
  childrenContentfulBlockContentButtonJsonNode___children___internal___mediaType = 'childrenContentfulBlockContentButtonJsonNode___children___internal___mediaType',
  childrenContentfulBlockContentButtonJsonNode___children___internal___owner = 'childrenContentfulBlockContentButtonJsonNode___children___internal___owner',
  childrenContentfulBlockContentButtonJsonNode___children___internal___type = 'childrenContentfulBlockContentButtonJsonNode___children___internal___type',
  childrenContentfulBlockContentButtonJsonNode___internal___content = 'childrenContentfulBlockContentButtonJsonNode___internal___content',
  childrenContentfulBlockContentButtonJsonNode___internal___contentDigest = 'childrenContentfulBlockContentButtonJsonNode___internal___contentDigest',
  childrenContentfulBlockContentButtonJsonNode___internal___description = 'childrenContentfulBlockContentButtonJsonNode___internal___description',
  childrenContentfulBlockContentButtonJsonNode___internal___fieldOwners = 'childrenContentfulBlockContentButtonJsonNode___internal___fieldOwners',
  childrenContentfulBlockContentButtonJsonNode___internal___ignoreType = 'childrenContentfulBlockContentButtonJsonNode___internal___ignoreType',
  childrenContentfulBlockContentButtonJsonNode___internal___mediaType = 'childrenContentfulBlockContentButtonJsonNode___internal___mediaType',
  childrenContentfulBlockContentButtonJsonNode___internal___owner = 'childrenContentfulBlockContentButtonJsonNode___internal___owner',
  childrenContentfulBlockContentButtonJsonNode___internal___type = 'childrenContentfulBlockContentButtonJsonNode___internal___type',
  childrenContentfulBlockContentButtonJsonNode___action___enabled = 'childrenContentfulBlockContentButtonJsonNode___action___enabled',
  childrenContentfulBlockContentButtonJsonNode___action___title = 'childrenContentfulBlockContentButtonJsonNode___action___title',
  childrenContentfulBlockContentButtonJsonNode___action___external = 'childrenContentfulBlockContentButtonJsonNode___action___external',
  childrenContentfulBlockContentButtonJsonNode___action___externalUrl = 'childrenContentfulBlockContentButtonJsonNode___action___externalUrl',
  childrenContentfulBlockContentButtonJsonNode___action___entrySlug = 'childrenContentfulBlockContentButtonJsonNode___action___entrySlug',
  childrenContentfulBlockContentButtonJsonNode___sys___type = 'childrenContentfulBlockContentButtonJsonNode___sys___type',
  childContentfulBlockContentButtonJsonNode___id = 'childContentfulBlockContentButtonJsonNode___id',
  childContentfulBlockContentButtonJsonNode___parent___id = 'childContentfulBlockContentButtonJsonNode___parent___id',
  childContentfulBlockContentButtonJsonNode___parent___parent___id = 'childContentfulBlockContentButtonJsonNode___parent___parent___id',
  childContentfulBlockContentButtonJsonNode___parent___parent___children = 'childContentfulBlockContentButtonJsonNode___parent___parent___children',
  childContentfulBlockContentButtonJsonNode___parent___children = 'childContentfulBlockContentButtonJsonNode___parent___children',
  childContentfulBlockContentButtonJsonNode___parent___children___id = 'childContentfulBlockContentButtonJsonNode___parent___children___id',
  childContentfulBlockContentButtonJsonNode___parent___children___children = 'childContentfulBlockContentButtonJsonNode___parent___children___children',
  childContentfulBlockContentButtonJsonNode___parent___internal___content = 'childContentfulBlockContentButtonJsonNode___parent___internal___content',
  childContentfulBlockContentButtonJsonNode___parent___internal___contentDigest = 'childContentfulBlockContentButtonJsonNode___parent___internal___contentDigest',
  childContentfulBlockContentButtonJsonNode___parent___internal___description = 'childContentfulBlockContentButtonJsonNode___parent___internal___description',
  childContentfulBlockContentButtonJsonNode___parent___internal___fieldOwners = 'childContentfulBlockContentButtonJsonNode___parent___internal___fieldOwners',
  childContentfulBlockContentButtonJsonNode___parent___internal___ignoreType = 'childContentfulBlockContentButtonJsonNode___parent___internal___ignoreType',
  childContentfulBlockContentButtonJsonNode___parent___internal___mediaType = 'childContentfulBlockContentButtonJsonNode___parent___internal___mediaType',
  childContentfulBlockContentButtonJsonNode___parent___internal___owner = 'childContentfulBlockContentButtonJsonNode___parent___internal___owner',
  childContentfulBlockContentButtonJsonNode___parent___internal___type = 'childContentfulBlockContentButtonJsonNode___parent___internal___type',
  childContentfulBlockContentButtonJsonNode___children = 'childContentfulBlockContentButtonJsonNode___children',
  childContentfulBlockContentButtonJsonNode___children___id = 'childContentfulBlockContentButtonJsonNode___children___id',
  childContentfulBlockContentButtonJsonNode___children___parent___id = 'childContentfulBlockContentButtonJsonNode___children___parent___id',
  childContentfulBlockContentButtonJsonNode___children___parent___children = 'childContentfulBlockContentButtonJsonNode___children___parent___children',
  childContentfulBlockContentButtonJsonNode___children___children = 'childContentfulBlockContentButtonJsonNode___children___children',
  childContentfulBlockContentButtonJsonNode___children___children___id = 'childContentfulBlockContentButtonJsonNode___children___children___id',
  childContentfulBlockContentButtonJsonNode___children___children___children = 'childContentfulBlockContentButtonJsonNode___children___children___children',
  childContentfulBlockContentButtonJsonNode___children___internal___content = 'childContentfulBlockContentButtonJsonNode___children___internal___content',
  childContentfulBlockContentButtonJsonNode___children___internal___contentDigest = 'childContentfulBlockContentButtonJsonNode___children___internal___contentDigest',
  childContentfulBlockContentButtonJsonNode___children___internal___description = 'childContentfulBlockContentButtonJsonNode___children___internal___description',
  childContentfulBlockContentButtonJsonNode___children___internal___fieldOwners = 'childContentfulBlockContentButtonJsonNode___children___internal___fieldOwners',
  childContentfulBlockContentButtonJsonNode___children___internal___ignoreType = 'childContentfulBlockContentButtonJsonNode___children___internal___ignoreType',
  childContentfulBlockContentButtonJsonNode___children___internal___mediaType = 'childContentfulBlockContentButtonJsonNode___children___internal___mediaType',
  childContentfulBlockContentButtonJsonNode___children___internal___owner = 'childContentfulBlockContentButtonJsonNode___children___internal___owner',
  childContentfulBlockContentButtonJsonNode___children___internal___type = 'childContentfulBlockContentButtonJsonNode___children___internal___type',
  childContentfulBlockContentButtonJsonNode___internal___content = 'childContentfulBlockContentButtonJsonNode___internal___content',
  childContentfulBlockContentButtonJsonNode___internal___contentDigest = 'childContentfulBlockContentButtonJsonNode___internal___contentDigest',
  childContentfulBlockContentButtonJsonNode___internal___description = 'childContentfulBlockContentButtonJsonNode___internal___description',
  childContentfulBlockContentButtonJsonNode___internal___fieldOwners = 'childContentfulBlockContentButtonJsonNode___internal___fieldOwners',
  childContentfulBlockContentButtonJsonNode___internal___ignoreType = 'childContentfulBlockContentButtonJsonNode___internal___ignoreType',
  childContentfulBlockContentButtonJsonNode___internal___mediaType = 'childContentfulBlockContentButtonJsonNode___internal___mediaType',
  childContentfulBlockContentButtonJsonNode___internal___owner = 'childContentfulBlockContentButtonJsonNode___internal___owner',
  childContentfulBlockContentButtonJsonNode___internal___type = 'childContentfulBlockContentButtonJsonNode___internal___type',
  childContentfulBlockContentButtonJsonNode___action___enabled = 'childContentfulBlockContentButtonJsonNode___action___enabled',
  childContentfulBlockContentButtonJsonNode___action___title = 'childContentfulBlockContentButtonJsonNode___action___title',
  childContentfulBlockContentButtonJsonNode___action___external = 'childContentfulBlockContentButtonJsonNode___action___external',
  childContentfulBlockContentButtonJsonNode___action___externalUrl = 'childContentfulBlockContentButtonJsonNode___action___externalUrl',
  childContentfulBlockContentButtonJsonNode___action___entrySlug = 'childContentfulBlockContentButtonJsonNode___action___entrySlug',
  childContentfulBlockContentButtonJsonNode___sys___type = 'childContentfulBlockContentButtonJsonNode___sys___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulBlockContentFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  blockTitle?: Maybe<StringQueryOperatorInput>;
  variation?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulBlockContentContentFilterInput>;
  button?: Maybe<ContentfulBlockContentButtonJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockContentSysFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  childrenContentfulBlockContentButtonJsonNode?: Maybe<ContentfulBlockContentButtonJsonNodeFilterListInput>;
  childContentfulBlockContentButtonJsonNode?: Maybe<ContentfulBlockContentButtonJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulBlockContentGroupConnection = {
  __typename?: 'ContentfulBlockContentGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockContentEdge>;
  nodes: Array<ContentfulBlockContent>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentList = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulBlockContentList';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  highlight?: Maybe<Scalars['String']>;
  content?: Maybe<ContentfulBlockContentListContent>;
  listTitle?: Maybe<Scalars['String']>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  button?: Maybe<ContentfulBlockContentListButtonJsonNode>;
  list?: Maybe<ContentfulBlockContentListListJsonNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockContentListSys>;
  listDescription?: Maybe<ContentfulBlockContentListListDescription>;
  /** Returns all children nodes filtered by type contentfulBlockContentListListJsonNode */
  childrenContentfulBlockContentListListJsonNode?: Maybe<Array<Maybe<ContentfulBlockContentListListJsonNode>>>;
  /** Returns the first child node of type contentfulBlockContentListListJsonNode or null if there are no children of given type on this node */
  childContentfulBlockContentListListJsonNode?: Maybe<ContentfulBlockContentListListJsonNode>;
  /** Returns all children nodes filtered by type contentfulBlockContentListButtonJsonNode */
  childrenContentfulBlockContentListButtonJsonNode?: Maybe<Array<Maybe<ContentfulBlockContentListButtonJsonNode>>>;
  /** Returns the first child node of type contentfulBlockContentListButtonJsonNode or null if there are no children of given type on this node */
  childContentfulBlockContentListButtonJsonNode?: Maybe<ContentfulBlockContentListButtonJsonNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulBlockContentListCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockContentListUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentListConnection = {
  __typename?: 'ContentfulBlockContentListConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockContentListEdge>;
  nodes: Array<ContentfulBlockContentList>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockContentListGroupConnection>;
};


export type ContentfulBlockContentListConnectionDistinctArgs = {
  field: ContentfulBlockContentListFieldsEnum;
};


export type ContentfulBlockContentListConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockContentListFieldsEnum;
};

export type ContentfulBlockContentListContent = {
  __typename?: 'ContentfulBlockContentListContent';
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentListContentFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockContentListEdge = {
  __typename?: 'ContentfulBlockContentListEdge';
  next?: Maybe<ContentfulBlockContentList>;
  node: ContentfulBlockContentList;
  previous?: Maybe<ContentfulBlockContentList>;
};

export enum ContentfulBlockContentListFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  highlight = 'highlight',
  content___raw = 'content___raw',
  listTitle = 'listTitle',
  page = 'page',
  page___contentful_id = 'page___contentful_id',
  page___id = 'page___id',
  page___node_locale = 'page___node_locale',
  page___title = 'page___title',
  page___slug = 'page___slug',
  page___seoTitle = 'page___seoTitle',
  page___seoDescription = 'page___seoDescription',
  page___spaceId = 'page___spaceId',
  page___createdAt = 'page___createdAt',
  page___updatedAt = 'page___updatedAt',
  page___sys___type = 'page___sys___type',
  page___sys___revision = 'page___sys___revision',
  page___parent___id = 'page___parent___id',
  page___parent___parent___id = 'page___parent___parent___id',
  page___parent___parent___children = 'page___parent___parent___children',
  page___parent___children = 'page___parent___children',
  page___parent___children___id = 'page___parent___children___id',
  page___parent___children___children = 'page___parent___children___children',
  page___parent___internal___content = 'page___parent___internal___content',
  page___parent___internal___contentDigest = 'page___parent___internal___contentDigest',
  page___parent___internal___description = 'page___parent___internal___description',
  page___parent___internal___fieldOwners = 'page___parent___internal___fieldOwners',
  page___parent___internal___ignoreType = 'page___parent___internal___ignoreType',
  page___parent___internal___mediaType = 'page___parent___internal___mediaType',
  page___parent___internal___owner = 'page___parent___internal___owner',
  page___parent___internal___type = 'page___parent___internal___type',
  page___children = 'page___children',
  page___children___id = 'page___children___id',
  page___children___parent___id = 'page___children___parent___id',
  page___children___parent___children = 'page___children___parent___children',
  page___children___children = 'page___children___children',
  page___children___children___id = 'page___children___children___id',
  page___children___children___children = 'page___children___children___children',
  page___children___internal___content = 'page___children___internal___content',
  page___children___internal___contentDigest = 'page___children___internal___contentDigest',
  page___children___internal___description = 'page___children___internal___description',
  page___children___internal___fieldOwners = 'page___children___internal___fieldOwners',
  page___children___internal___ignoreType = 'page___children___internal___ignoreType',
  page___children___internal___mediaType = 'page___children___internal___mediaType',
  page___children___internal___owner = 'page___children___internal___owner',
  page___children___internal___type = 'page___children___internal___type',
  page___internal___content = 'page___internal___content',
  page___internal___contentDigest = 'page___internal___contentDigest',
  page___internal___description = 'page___internal___description',
  page___internal___fieldOwners = 'page___internal___fieldOwners',
  page___internal___ignoreType = 'page___internal___ignoreType',
  page___internal___mediaType = 'page___internal___mediaType',
  page___internal___owner = 'page___internal___owner',
  page___internal___type = 'page___internal___type',
  button___id = 'button___id',
  button___parent___id = 'button___parent___id',
  button___parent___parent___id = 'button___parent___parent___id',
  button___parent___parent___children = 'button___parent___parent___children',
  button___parent___children = 'button___parent___children',
  button___parent___children___id = 'button___parent___children___id',
  button___parent___children___children = 'button___parent___children___children',
  button___parent___internal___content = 'button___parent___internal___content',
  button___parent___internal___contentDigest = 'button___parent___internal___contentDigest',
  button___parent___internal___description = 'button___parent___internal___description',
  button___parent___internal___fieldOwners = 'button___parent___internal___fieldOwners',
  button___parent___internal___ignoreType = 'button___parent___internal___ignoreType',
  button___parent___internal___mediaType = 'button___parent___internal___mediaType',
  button___parent___internal___owner = 'button___parent___internal___owner',
  button___parent___internal___type = 'button___parent___internal___type',
  button___children = 'button___children',
  button___children___id = 'button___children___id',
  button___children___parent___id = 'button___children___parent___id',
  button___children___parent___children = 'button___children___parent___children',
  button___children___children = 'button___children___children',
  button___children___children___id = 'button___children___children___id',
  button___children___children___children = 'button___children___children___children',
  button___children___internal___content = 'button___children___internal___content',
  button___children___internal___contentDigest = 'button___children___internal___contentDigest',
  button___children___internal___description = 'button___children___internal___description',
  button___children___internal___fieldOwners = 'button___children___internal___fieldOwners',
  button___children___internal___ignoreType = 'button___children___internal___ignoreType',
  button___children___internal___mediaType = 'button___children___internal___mediaType',
  button___children___internal___owner = 'button___children___internal___owner',
  button___children___internal___type = 'button___children___internal___type',
  button___internal___content = 'button___internal___content',
  button___internal___contentDigest = 'button___internal___contentDigest',
  button___internal___description = 'button___internal___description',
  button___internal___fieldOwners = 'button___internal___fieldOwners',
  button___internal___ignoreType = 'button___internal___ignoreType',
  button___internal___mediaType = 'button___internal___mediaType',
  button___internal___owner = 'button___internal___owner',
  button___internal___type = 'button___internal___type',
  button___action___title = 'button___action___title',
  button___action___enabled = 'button___action___enabled',
  button___action___entrySlug = 'button___action___entrySlug',
  button___action___externalUrl = 'button___action___externalUrl',
  button___sys___type = 'button___sys___type',
  list___id = 'list___id',
  list___parent___id = 'list___parent___id',
  list___parent___parent___id = 'list___parent___parent___id',
  list___parent___parent___children = 'list___parent___parent___children',
  list___parent___children = 'list___parent___children',
  list___parent___children___id = 'list___parent___children___id',
  list___parent___children___children = 'list___parent___children___children',
  list___parent___internal___content = 'list___parent___internal___content',
  list___parent___internal___contentDigest = 'list___parent___internal___contentDigest',
  list___parent___internal___description = 'list___parent___internal___description',
  list___parent___internal___fieldOwners = 'list___parent___internal___fieldOwners',
  list___parent___internal___ignoreType = 'list___parent___internal___ignoreType',
  list___parent___internal___mediaType = 'list___parent___internal___mediaType',
  list___parent___internal___owner = 'list___parent___internal___owner',
  list___parent___internal___type = 'list___parent___internal___type',
  list___children = 'list___children',
  list___children___id = 'list___children___id',
  list___children___parent___id = 'list___children___parent___id',
  list___children___parent___children = 'list___children___parent___children',
  list___children___children = 'list___children___children',
  list___children___children___id = 'list___children___children___id',
  list___children___children___children = 'list___children___children___children',
  list___children___internal___content = 'list___children___internal___content',
  list___children___internal___contentDigest = 'list___children___internal___contentDigest',
  list___children___internal___description = 'list___children___internal___description',
  list___children___internal___fieldOwners = 'list___children___internal___fieldOwners',
  list___children___internal___ignoreType = 'list___children___internal___ignoreType',
  list___children___internal___mediaType = 'list___children___internal___mediaType',
  list___children___internal___owner = 'list___children___internal___owner',
  list___children___internal___type = 'list___children___internal___type',
  list___internal___content = 'list___internal___content',
  list___internal___contentDigest = 'list___internal___contentDigest',
  list___internal___description = 'list___internal___description',
  list___internal___fieldOwners = 'list___internal___fieldOwners',
  list___internal___ignoreType = 'list___internal___ignoreType',
  list___internal___mediaType = 'list___internal___mediaType',
  list___internal___owner = 'list___internal___owner',
  list___internal___type = 'list___internal___type',
  list___items = 'list___items',
  list___sys___type = 'list___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  listDescription___raw = 'listDescription___raw',
  childrenContentfulBlockContentListListJsonNode = 'childrenContentfulBlockContentListListJsonNode',
  childrenContentfulBlockContentListListJsonNode___id = 'childrenContentfulBlockContentListListJsonNode___id',
  childrenContentfulBlockContentListListJsonNode___parent___id = 'childrenContentfulBlockContentListListJsonNode___parent___id',
  childrenContentfulBlockContentListListJsonNode___parent___parent___id = 'childrenContentfulBlockContentListListJsonNode___parent___parent___id',
  childrenContentfulBlockContentListListJsonNode___parent___parent___children = 'childrenContentfulBlockContentListListJsonNode___parent___parent___children',
  childrenContentfulBlockContentListListJsonNode___parent___children = 'childrenContentfulBlockContentListListJsonNode___parent___children',
  childrenContentfulBlockContentListListJsonNode___parent___children___id = 'childrenContentfulBlockContentListListJsonNode___parent___children___id',
  childrenContentfulBlockContentListListJsonNode___parent___children___children = 'childrenContentfulBlockContentListListJsonNode___parent___children___children',
  childrenContentfulBlockContentListListJsonNode___parent___internal___content = 'childrenContentfulBlockContentListListJsonNode___parent___internal___content',
  childrenContentfulBlockContentListListJsonNode___parent___internal___contentDigest = 'childrenContentfulBlockContentListListJsonNode___parent___internal___contentDigest',
  childrenContentfulBlockContentListListJsonNode___parent___internal___description = 'childrenContentfulBlockContentListListJsonNode___parent___internal___description',
  childrenContentfulBlockContentListListJsonNode___parent___internal___fieldOwners = 'childrenContentfulBlockContentListListJsonNode___parent___internal___fieldOwners',
  childrenContentfulBlockContentListListJsonNode___parent___internal___ignoreType = 'childrenContentfulBlockContentListListJsonNode___parent___internal___ignoreType',
  childrenContentfulBlockContentListListJsonNode___parent___internal___mediaType = 'childrenContentfulBlockContentListListJsonNode___parent___internal___mediaType',
  childrenContentfulBlockContentListListJsonNode___parent___internal___owner = 'childrenContentfulBlockContentListListJsonNode___parent___internal___owner',
  childrenContentfulBlockContentListListJsonNode___parent___internal___type = 'childrenContentfulBlockContentListListJsonNode___parent___internal___type',
  childrenContentfulBlockContentListListJsonNode___children = 'childrenContentfulBlockContentListListJsonNode___children',
  childrenContentfulBlockContentListListJsonNode___children___id = 'childrenContentfulBlockContentListListJsonNode___children___id',
  childrenContentfulBlockContentListListJsonNode___children___parent___id = 'childrenContentfulBlockContentListListJsonNode___children___parent___id',
  childrenContentfulBlockContentListListJsonNode___children___parent___children = 'childrenContentfulBlockContentListListJsonNode___children___parent___children',
  childrenContentfulBlockContentListListJsonNode___children___children = 'childrenContentfulBlockContentListListJsonNode___children___children',
  childrenContentfulBlockContentListListJsonNode___children___children___id = 'childrenContentfulBlockContentListListJsonNode___children___children___id',
  childrenContentfulBlockContentListListJsonNode___children___children___children = 'childrenContentfulBlockContentListListJsonNode___children___children___children',
  childrenContentfulBlockContentListListJsonNode___children___internal___content = 'childrenContentfulBlockContentListListJsonNode___children___internal___content',
  childrenContentfulBlockContentListListJsonNode___children___internal___contentDigest = 'childrenContentfulBlockContentListListJsonNode___children___internal___contentDigest',
  childrenContentfulBlockContentListListJsonNode___children___internal___description = 'childrenContentfulBlockContentListListJsonNode___children___internal___description',
  childrenContentfulBlockContentListListJsonNode___children___internal___fieldOwners = 'childrenContentfulBlockContentListListJsonNode___children___internal___fieldOwners',
  childrenContentfulBlockContentListListJsonNode___children___internal___ignoreType = 'childrenContentfulBlockContentListListJsonNode___children___internal___ignoreType',
  childrenContentfulBlockContentListListJsonNode___children___internal___mediaType = 'childrenContentfulBlockContentListListJsonNode___children___internal___mediaType',
  childrenContentfulBlockContentListListJsonNode___children___internal___owner = 'childrenContentfulBlockContentListListJsonNode___children___internal___owner',
  childrenContentfulBlockContentListListJsonNode___children___internal___type = 'childrenContentfulBlockContentListListJsonNode___children___internal___type',
  childrenContentfulBlockContentListListJsonNode___internal___content = 'childrenContentfulBlockContentListListJsonNode___internal___content',
  childrenContentfulBlockContentListListJsonNode___internal___contentDigest = 'childrenContentfulBlockContentListListJsonNode___internal___contentDigest',
  childrenContentfulBlockContentListListJsonNode___internal___description = 'childrenContentfulBlockContentListListJsonNode___internal___description',
  childrenContentfulBlockContentListListJsonNode___internal___fieldOwners = 'childrenContentfulBlockContentListListJsonNode___internal___fieldOwners',
  childrenContentfulBlockContentListListJsonNode___internal___ignoreType = 'childrenContentfulBlockContentListListJsonNode___internal___ignoreType',
  childrenContentfulBlockContentListListJsonNode___internal___mediaType = 'childrenContentfulBlockContentListListJsonNode___internal___mediaType',
  childrenContentfulBlockContentListListJsonNode___internal___owner = 'childrenContentfulBlockContentListListJsonNode___internal___owner',
  childrenContentfulBlockContentListListJsonNode___internal___type = 'childrenContentfulBlockContentListListJsonNode___internal___type',
  childrenContentfulBlockContentListListJsonNode___items = 'childrenContentfulBlockContentListListJsonNode___items',
  childrenContentfulBlockContentListListJsonNode___sys___type = 'childrenContentfulBlockContentListListJsonNode___sys___type',
  childContentfulBlockContentListListJsonNode___id = 'childContentfulBlockContentListListJsonNode___id',
  childContentfulBlockContentListListJsonNode___parent___id = 'childContentfulBlockContentListListJsonNode___parent___id',
  childContentfulBlockContentListListJsonNode___parent___parent___id = 'childContentfulBlockContentListListJsonNode___parent___parent___id',
  childContentfulBlockContentListListJsonNode___parent___parent___children = 'childContentfulBlockContentListListJsonNode___parent___parent___children',
  childContentfulBlockContentListListJsonNode___parent___children = 'childContentfulBlockContentListListJsonNode___parent___children',
  childContentfulBlockContentListListJsonNode___parent___children___id = 'childContentfulBlockContentListListJsonNode___parent___children___id',
  childContentfulBlockContentListListJsonNode___parent___children___children = 'childContentfulBlockContentListListJsonNode___parent___children___children',
  childContentfulBlockContentListListJsonNode___parent___internal___content = 'childContentfulBlockContentListListJsonNode___parent___internal___content',
  childContentfulBlockContentListListJsonNode___parent___internal___contentDigest = 'childContentfulBlockContentListListJsonNode___parent___internal___contentDigest',
  childContentfulBlockContentListListJsonNode___parent___internal___description = 'childContentfulBlockContentListListJsonNode___parent___internal___description',
  childContentfulBlockContentListListJsonNode___parent___internal___fieldOwners = 'childContentfulBlockContentListListJsonNode___parent___internal___fieldOwners',
  childContentfulBlockContentListListJsonNode___parent___internal___ignoreType = 'childContentfulBlockContentListListJsonNode___parent___internal___ignoreType',
  childContentfulBlockContentListListJsonNode___parent___internal___mediaType = 'childContentfulBlockContentListListJsonNode___parent___internal___mediaType',
  childContentfulBlockContentListListJsonNode___parent___internal___owner = 'childContentfulBlockContentListListJsonNode___parent___internal___owner',
  childContentfulBlockContentListListJsonNode___parent___internal___type = 'childContentfulBlockContentListListJsonNode___parent___internal___type',
  childContentfulBlockContentListListJsonNode___children = 'childContentfulBlockContentListListJsonNode___children',
  childContentfulBlockContentListListJsonNode___children___id = 'childContentfulBlockContentListListJsonNode___children___id',
  childContentfulBlockContentListListJsonNode___children___parent___id = 'childContentfulBlockContentListListJsonNode___children___parent___id',
  childContentfulBlockContentListListJsonNode___children___parent___children = 'childContentfulBlockContentListListJsonNode___children___parent___children',
  childContentfulBlockContentListListJsonNode___children___children = 'childContentfulBlockContentListListJsonNode___children___children',
  childContentfulBlockContentListListJsonNode___children___children___id = 'childContentfulBlockContentListListJsonNode___children___children___id',
  childContentfulBlockContentListListJsonNode___children___children___children = 'childContentfulBlockContentListListJsonNode___children___children___children',
  childContentfulBlockContentListListJsonNode___children___internal___content = 'childContentfulBlockContentListListJsonNode___children___internal___content',
  childContentfulBlockContentListListJsonNode___children___internal___contentDigest = 'childContentfulBlockContentListListJsonNode___children___internal___contentDigest',
  childContentfulBlockContentListListJsonNode___children___internal___description = 'childContentfulBlockContentListListJsonNode___children___internal___description',
  childContentfulBlockContentListListJsonNode___children___internal___fieldOwners = 'childContentfulBlockContentListListJsonNode___children___internal___fieldOwners',
  childContentfulBlockContentListListJsonNode___children___internal___ignoreType = 'childContentfulBlockContentListListJsonNode___children___internal___ignoreType',
  childContentfulBlockContentListListJsonNode___children___internal___mediaType = 'childContentfulBlockContentListListJsonNode___children___internal___mediaType',
  childContentfulBlockContentListListJsonNode___children___internal___owner = 'childContentfulBlockContentListListJsonNode___children___internal___owner',
  childContentfulBlockContentListListJsonNode___children___internal___type = 'childContentfulBlockContentListListJsonNode___children___internal___type',
  childContentfulBlockContentListListJsonNode___internal___content = 'childContentfulBlockContentListListJsonNode___internal___content',
  childContentfulBlockContentListListJsonNode___internal___contentDigest = 'childContentfulBlockContentListListJsonNode___internal___contentDigest',
  childContentfulBlockContentListListJsonNode___internal___description = 'childContentfulBlockContentListListJsonNode___internal___description',
  childContentfulBlockContentListListJsonNode___internal___fieldOwners = 'childContentfulBlockContentListListJsonNode___internal___fieldOwners',
  childContentfulBlockContentListListJsonNode___internal___ignoreType = 'childContentfulBlockContentListListJsonNode___internal___ignoreType',
  childContentfulBlockContentListListJsonNode___internal___mediaType = 'childContentfulBlockContentListListJsonNode___internal___mediaType',
  childContentfulBlockContentListListJsonNode___internal___owner = 'childContentfulBlockContentListListJsonNode___internal___owner',
  childContentfulBlockContentListListJsonNode___internal___type = 'childContentfulBlockContentListListJsonNode___internal___type',
  childContentfulBlockContentListListJsonNode___items = 'childContentfulBlockContentListListJsonNode___items',
  childContentfulBlockContentListListJsonNode___sys___type = 'childContentfulBlockContentListListJsonNode___sys___type',
  childrenContentfulBlockContentListButtonJsonNode = 'childrenContentfulBlockContentListButtonJsonNode',
  childrenContentfulBlockContentListButtonJsonNode___id = 'childrenContentfulBlockContentListButtonJsonNode___id',
  childrenContentfulBlockContentListButtonJsonNode___parent___id = 'childrenContentfulBlockContentListButtonJsonNode___parent___id',
  childrenContentfulBlockContentListButtonJsonNode___parent___parent___id = 'childrenContentfulBlockContentListButtonJsonNode___parent___parent___id',
  childrenContentfulBlockContentListButtonJsonNode___parent___parent___children = 'childrenContentfulBlockContentListButtonJsonNode___parent___parent___children',
  childrenContentfulBlockContentListButtonJsonNode___parent___children = 'childrenContentfulBlockContentListButtonJsonNode___parent___children',
  childrenContentfulBlockContentListButtonJsonNode___parent___children___id = 'childrenContentfulBlockContentListButtonJsonNode___parent___children___id',
  childrenContentfulBlockContentListButtonJsonNode___parent___children___children = 'childrenContentfulBlockContentListButtonJsonNode___parent___children___children',
  childrenContentfulBlockContentListButtonJsonNode___parent___internal___content = 'childrenContentfulBlockContentListButtonJsonNode___parent___internal___content',
  childrenContentfulBlockContentListButtonJsonNode___parent___internal___contentDigest = 'childrenContentfulBlockContentListButtonJsonNode___parent___internal___contentDigest',
  childrenContentfulBlockContentListButtonJsonNode___parent___internal___description = 'childrenContentfulBlockContentListButtonJsonNode___parent___internal___description',
  childrenContentfulBlockContentListButtonJsonNode___parent___internal___fieldOwners = 'childrenContentfulBlockContentListButtonJsonNode___parent___internal___fieldOwners',
  childrenContentfulBlockContentListButtonJsonNode___parent___internal___ignoreType = 'childrenContentfulBlockContentListButtonJsonNode___parent___internal___ignoreType',
  childrenContentfulBlockContentListButtonJsonNode___parent___internal___mediaType = 'childrenContentfulBlockContentListButtonJsonNode___parent___internal___mediaType',
  childrenContentfulBlockContentListButtonJsonNode___parent___internal___owner = 'childrenContentfulBlockContentListButtonJsonNode___parent___internal___owner',
  childrenContentfulBlockContentListButtonJsonNode___parent___internal___type = 'childrenContentfulBlockContentListButtonJsonNode___parent___internal___type',
  childrenContentfulBlockContentListButtonJsonNode___children = 'childrenContentfulBlockContentListButtonJsonNode___children',
  childrenContentfulBlockContentListButtonJsonNode___children___id = 'childrenContentfulBlockContentListButtonJsonNode___children___id',
  childrenContentfulBlockContentListButtonJsonNode___children___parent___id = 'childrenContentfulBlockContentListButtonJsonNode___children___parent___id',
  childrenContentfulBlockContentListButtonJsonNode___children___parent___children = 'childrenContentfulBlockContentListButtonJsonNode___children___parent___children',
  childrenContentfulBlockContentListButtonJsonNode___children___children = 'childrenContentfulBlockContentListButtonJsonNode___children___children',
  childrenContentfulBlockContentListButtonJsonNode___children___children___id = 'childrenContentfulBlockContentListButtonJsonNode___children___children___id',
  childrenContentfulBlockContentListButtonJsonNode___children___children___children = 'childrenContentfulBlockContentListButtonJsonNode___children___children___children',
  childrenContentfulBlockContentListButtonJsonNode___children___internal___content = 'childrenContentfulBlockContentListButtonJsonNode___children___internal___content',
  childrenContentfulBlockContentListButtonJsonNode___children___internal___contentDigest = 'childrenContentfulBlockContentListButtonJsonNode___children___internal___contentDigest',
  childrenContentfulBlockContentListButtonJsonNode___children___internal___description = 'childrenContentfulBlockContentListButtonJsonNode___children___internal___description',
  childrenContentfulBlockContentListButtonJsonNode___children___internal___fieldOwners = 'childrenContentfulBlockContentListButtonJsonNode___children___internal___fieldOwners',
  childrenContentfulBlockContentListButtonJsonNode___children___internal___ignoreType = 'childrenContentfulBlockContentListButtonJsonNode___children___internal___ignoreType',
  childrenContentfulBlockContentListButtonJsonNode___children___internal___mediaType = 'childrenContentfulBlockContentListButtonJsonNode___children___internal___mediaType',
  childrenContentfulBlockContentListButtonJsonNode___children___internal___owner = 'childrenContentfulBlockContentListButtonJsonNode___children___internal___owner',
  childrenContentfulBlockContentListButtonJsonNode___children___internal___type = 'childrenContentfulBlockContentListButtonJsonNode___children___internal___type',
  childrenContentfulBlockContentListButtonJsonNode___internal___content = 'childrenContentfulBlockContentListButtonJsonNode___internal___content',
  childrenContentfulBlockContentListButtonJsonNode___internal___contentDigest = 'childrenContentfulBlockContentListButtonJsonNode___internal___contentDigest',
  childrenContentfulBlockContentListButtonJsonNode___internal___description = 'childrenContentfulBlockContentListButtonJsonNode___internal___description',
  childrenContentfulBlockContentListButtonJsonNode___internal___fieldOwners = 'childrenContentfulBlockContentListButtonJsonNode___internal___fieldOwners',
  childrenContentfulBlockContentListButtonJsonNode___internal___ignoreType = 'childrenContentfulBlockContentListButtonJsonNode___internal___ignoreType',
  childrenContentfulBlockContentListButtonJsonNode___internal___mediaType = 'childrenContentfulBlockContentListButtonJsonNode___internal___mediaType',
  childrenContentfulBlockContentListButtonJsonNode___internal___owner = 'childrenContentfulBlockContentListButtonJsonNode___internal___owner',
  childrenContentfulBlockContentListButtonJsonNode___internal___type = 'childrenContentfulBlockContentListButtonJsonNode___internal___type',
  childrenContentfulBlockContentListButtonJsonNode___action___title = 'childrenContentfulBlockContentListButtonJsonNode___action___title',
  childrenContentfulBlockContentListButtonJsonNode___action___enabled = 'childrenContentfulBlockContentListButtonJsonNode___action___enabled',
  childrenContentfulBlockContentListButtonJsonNode___action___entrySlug = 'childrenContentfulBlockContentListButtonJsonNode___action___entrySlug',
  childrenContentfulBlockContentListButtonJsonNode___action___externalUrl = 'childrenContentfulBlockContentListButtonJsonNode___action___externalUrl',
  childrenContentfulBlockContentListButtonJsonNode___sys___type = 'childrenContentfulBlockContentListButtonJsonNode___sys___type',
  childContentfulBlockContentListButtonJsonNode___id = 'childContentfulBlockContentListButtonJsonNode___id',
  childContentfulBlockContentListButtonJsonNode___parent___id = 'childContentfulBlockContentListButtonJsonNode___parent___id',
  childContentfulBlockContentListButtonJsonNode___parent___parent___id = 'childContentfulBlockContentListButtonJsonNode___parent___parent___id',
  childContentfulBlockContentListButtonJsonNode___parent___parent___children = 'childContentfulBlockContentListButtonJsonNode___parent___parent___children',
  childContentfulBlockContentListButtonJsonNode___parent___children = 'childContentfulBlockContentListButtonJsonNode___parent___children',
  childContentfulBlockContentListButtonJsonNode___parent___children___id = 'childContentfulBlockContentListButtonJsonNode___parent___children___id',
  childContentfulBlockContentListButtonJsonNode___parent___children___children = 'childContentfulBlockContentListButtonJsonNode___parent___children___children',
  childContentfulBlockContentListButtonJsonNode___parent___internal___content = 'childContentfulBlockContentListButtonJsonNode___parent___internal___content',
  childContentfulBlockContentListButtonJsonNode___parent___internal___contentDigest = 'childContentfulBlockContentListButtonJsonNode___parent___internal___contentDigest',
  childContentfulBlockContentListButtonJsonNode___parent___internal___description = 'childContentfulBlockContentListButtonJsonNode___parent___internal___description',
  childContentfulBlockContentListButtonJsonNode___parent___internal___fieldOwners = 'childContentfulBlockContentListButtonJsonNode___parent___internal___fieldOwners',
  childContentfulBlockContentListButtonJsonNode___parent___internal___ignoreType = 'childContentfulBlockContentListButtonJsonNode___parent___internal___ignoreType',
  childContentfulBlockContentListButtonJsonNode___parent___internal___mediaType = 'childContentfulBlockContentListButtonJsonNode___parent___internal___mediaType',
  childContentfulBlockContentListButtonJsonNode___parent___internal___owner = 'childContentfulBlockContentListButtonJsonNode___parent___internal___owner',
  childContentfulBlockContentListButtonJsonNode___parent___internal___type = 'childContentfulBlockContentListButtonJsonNode___parent___internal___type',
  childContentfulBlockContentListButtonJsonNode___children = 'childContentfulBlockContentListButtonJsonNode___children',
  childContentfulBlockContentListButtonJsonNode___children___id = 'childContentfulBlockContentListButtonJsonNode___children___id',
  childContentfulBlockContentListButtonJsonNode___children___parent___id = 'childContentfulBlockContentListButtonJsonNode___children___parent___id',
  childContentfulBlockContentListButtonJsonNode___children___parent___children = 'childContentfulBlockContentListButtonJsonNode___children___parent___children',
  childContentfulBlockContentListButtonJsonNode___children___children = 'childContentfulBlockContentListButtonJsonNode___children___children',
  childContentfulBlockContentListButtonJsonNode___children___children___id = 'childContentfulBlockContentListButtonJsonNode___children___children___id',
  childContentfulBlockContentListButtonJsonNode___children___children___children = 'childContentfulBlockContentListButtonJsonNode___children___children___children',
  childContentfulBlockContentListButtonJsonNode___children___internal___content = 'childContentfulBlockContentListButtonJsonNode___children___internal___content',
  childContentfulBlockContentListButtonJsonNode___children___internal___contentDigest = 'childContentfulBlockContentListButtonJsonNode___children___internal___contentDigest',
  childContentfulBlockContentListButtonJsonNode___children___internal___description = 'childContentfulBlockContentListButtonJsonNode___children___internal___description',
  childContentfulBlockContentListButtonJsonNode___children___internal___fieldOwners = 'childContentfulBlockContentListButtonJsonNode___children___internal___fieldOwners',
  childContentfulBlockContentListButtonJsonNode___children___internal___ignoreType = 'childContentfulBlockContentListButtonJsonNode___children___internal___ignoreType',
  childContentfulBlockContentListButtonJsonNode___children___internal___mediaType = 'childContentfulBlockContentListButtonJsonNode___children___internal___mediaType',
  childContentfulBlockContentListButtonJsonNode___children___internal___owner = 'childContentfulBlockContentListButtonJsonNode___children___internal___owner',
  childContentfulBlockContentListButtonJsonNode___children___internal___type = 'childContentfulBlockContentListButtonJsonNode___children___internal___type',
  childContentfulBlockContentListButtonJsonNode___internal___content = 'childContentfulBlockContentListButtonJsonNode___internal___content',
  childContentfulBlockContentListButtonJsonNode___internal___contentDigest = 'childContentfulBlockContentListButtonJsonNode___internal___contentDigest',
  childContentfulBlockContentListButtonJsonNode___internal___description = 'childContentfulBlockContentListButtonJsonNode___internal___description',
  childContentfulBlockContentListButtonJsonNode___internal___fieldOwners = 'childContentfulBlockContentListButtonJsonNode___internal___fieldOwners',
  childContentfulBlockContentListButtonJsonNode___internal___ignoreType = 'childContentfulBlockContentListButtonJsonNode___internal___ignoreType',
  childContentfulBlockContentListButtonJsonNode___internal___mediaType = 'childContentfulBlockContentListButtonJsonNode___internal___mediaType',
  childContentfulBlockContentListButtonJsonNode___internal___owner = 'childContentfulBlockContentListButtonJsonNode___internal___owner',
  childContentfulBlockContentListButtonJsonNode___internal___type = 'childContentfulBlockContentListButtonJsonNode___internal___type',
  childContentfulBlockContentListButtonJsonNode___action___title = 'childContentfulBlockContentListButtonJsonNode___action___title',
  childContentfulBlockContentListButtonJsonNode___action___enabled = 'childContentfulBlockContentListButtonJsonNode___action___enabled',
  childContentfulBlockContentListButtonJsonNode___action___entrySlug = 'childContentfulBlockContentListButtonJsonNode___action___entrySlug',
  childContentfulBlockContentListButtonJsonNode___action___externalUrl = 'childContentfulBlockContentListButtonJsonNode___action___externalUrl',
  childContentfulBlockContentListButtonJsonNode___sys___type = 'childContentfulBlockContentListButtonJsonNode___sys___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulBlockContentListFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  highlight?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulBlockContentListContentFilterInput>;
  listTitle?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  button?: Maybe<ContentfulBlockContentListButtonJsonNodeFilterInput>;
  list?: Maybe<ContentfulBlockContentListListJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockContentListSysFilterInput>;
  listDescription?: Maybe<ContentfulBlockContentListListDescriptionFilterInput>;
  childrenContentfulBlockContentListListJsonNode?: Maybe<ContentfulBlockContentListListJsonNodeFilterListInput>;
  childContentfulBlockContentListListJsonNode?: Maybe<ContentfulBlockContentListListJsonNodeFilterInput>;
  childrenContentfulBlockContentListButtonJsonNode?: Maybe<ContentfulBlockContentListButtonJsonNodeFilterListInput>;
  childContentfulBlockContentListButtonJsonNode?: Maybe<ContentfulBlockContentListButtonJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulBlockContentListGroupConnection = {
  __typename?: 'ContentfulBlockContentListGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockContentListEdge>;
  nodes: Array<ContentfulBlockContentList>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentListListDescription = {
  __typename?: 'ContentfulBlockContentListListDescription';
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentListListDescriptionFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockContentListSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockContentListFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockContentListSys = {
  __typename?: 'ContentfulBlockContentListSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockContentListSysContentType>;
};

export type ContentfulBlockContentListSysContentType = {
  __typename?: 'ContentfulBlockContentListSysContentType';
  sys?: Maybe<ContentfulBlockContentListSysContentTypeSys>;
};

export type ContentfulBlockContentListSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockContentListSysContentTypeSysFilterInput>;
};

export type ContentfulBlockContentListSysContentTypeSys = {
  __typename?: 'ContentfulBlockContentListSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentListSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockContentListSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockContentListSysContentTypeFilterInput>;
};

export type ContentfulBlockContentSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockContentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockContentSys = {
  __typename?: 'ContentfulBlockContentSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockContentSysContentType>;
};

export type ContentfulBlockContentSysContentType = {
  __typename?: 'ContentfulBlockContentSysContentType';
  sys?: Maybe<ContentfulBlockContentSysContentTypeSys>;
};

export type ContentfulBlockContentSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockContentSysContentTypeSysFilterInput>;
};

export type ContentfulBlockContentSysContentTypeSys = {
  __typename?: 'ContentfulBlockContentSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockContentSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockContentSysContentTypeFilterInput>;
};

export type ContentfulBlockImageBand = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulBlockImageBand';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockImageBandSys>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulBlockImageBandCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockImageBandUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockImageBandConnection = {
  __typename?: 'ContentfulBlockImageBandConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockImageBandEdge>;
  nodes: Array<ContentfulBlockImageBand>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockImageBandGroupConnection>;
};


export type ContentfulBlockImageBandConnectionDistinctArgs = {
  field: ContentfulBlockImageBandFieldsEnum;
};


export type ContentfulBlockImageBandConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockImageBandFieldsEnum;
};

export type ContentfulBlockImageBandEdge = {
  __typename?: 'ContentfulBlockImageBandEdge';
  next?: Maybe<ContentfulBlockImageBand>;
  node: ContentfulBlockImageBand;
  previous?: Maybe<ContentfulBlockImageBand>;
};

export enum ContentfulBlockImageBandFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  image___contentful_id = 'image___contentful_id',
  image___id = 'image___id',
  image___spaceId = 'image___spaceId',
  image___createdAt = 'image___createdAt',
  image___updatedAt = 'image___updatedAt',
  image___file___url = 'image___file___url',
  image___file___details___size = 'image___file___details___size',
  image___file___fileName = 'image___file___fileName',
  image___file___contentType = 'image___file___contentType',
  image___title = 'image___title',
  image___description = 'image___description',
  image___node_locale = 'image___node_locale',
  image___sys___type = 'image___sys___type',
  image___sys___revision = 'image___sys___revision',
  image___fixed___base64 = 'image___fixed___base64',
  image___fixed___tracedSVG = 'image___fixed___tracedSVG',
  image___fixed___aspectRatio = 'image___fixed___aspectRatio',
  image___fixed___width = 'image___fixed___width',
  image___fixed___height = 'image___fixed___height',
  image___fixed___src = 'image___fixed___src',
  image___fixed___srcSet = 'image___fixed___srcSet',
  image___fixed___srcWebp = 'image___fixed___srcWebp',
  image___fixed___srcSetWebp = 'image___fixed___srcSetWebp',
  image___fluid___base64 = 'image___fluid___base64',
  image___fluid___tracedSVG = 'image___fluid___tracedSVG',
  image___fluid___aspectRatio = 'image___fluid___aspectRatio',
  image___fluid___src = 'image___fluid___src',
  image___fluid___srcSet = 'image___fluid___srcSet',
  image___fluid___srcWebp = 'image___fluid___srcWebp',
  image___fluid___srcSetWebp = 'image___fluid___srcSetWebp',
  image___fluid___sizes = 'image___fluid___sizes',
  image___gatsbyImageData = 'image___gatsbyImageData',
  image___resize___base64 = 'image___resize___base64',
  image___resize___tracedSVG = 'image___resize___tracedSVG',
  image___resize___src = 'image___resize___src',
  image___resize___width = 'image___resize___width',
  image___resize___height = 'image___resize___height',
  image___resize___aspectRatio = 'image___resize___aspectRatio',
  image___parent___id = 'image___parent___id',
  image___parent___parent___id = 'image___parent___parent___id',
  image___parent___parent___children = 'image___parent___parent___children',
  image___parent___children = 'image___parent___children',
  image___parent___children___id = 'image___parent___children___id',
  image___parent___children___children = 'image___parent___children___children',
  image___parent___internal___content = 'image___parent___internal___content',
  image___parent___internal___contentDigest = 'image___parent___internal___contentDigest',
  image___parent___internal___description = 'image___parent___internal___description',
  image___parent___internal___fieldOwners = 'image___parent___internal___fieldOwners',
  image___parent___internal___ignoreType = 'image___parent___internal___ignoreType',
  image___parent___internal___mediaType = 'image___parent___internal___mediaType',
  image___parent___internal___owner = 'image___parent___internal___owner',
  image___parent___internal___type = 'image___parent___internal___type',
  image___children = 'image___children',
  image___children___id = 'image___children___id',
  image___children___parent___id = 'image___children___parent___id',
  image___children___parent___children = 'image___children___parent___children',
  image___children___children = 'image___children___children',
  image___children___children___id = 'image___children___children___id',
  image___children___children___children = 'image___children___children___children',
  image___children___internal___content = 'image___children___internal___content',
  image___children___internal___contentDigest = 'image___children___internal___contentDigest',
  image___children___internal___description = 'image___children___internal___description',
  image___children___internal___fieldOwners = 'image___children___internal___fieldOwners',
  image___children___internal___ignoreType = 'image___children___internal___ignoreType',
  image___children___internal___mediaType = 'image___children___internal___mediaType',
  image___children___internal___owner = 'image___children___internal___owner',
  image___children___internal___type = 'image___children___internal___type',
  image___internal___content = 'image___internal___content',
  image___internal___contentDigest = 'image___internal___contentDigest',
  image___internal___description = 'image___internal___description',
  image___internal___fieldOwners = 'image___internal___fieldOwners',
  image___internal___ignoreType = 'image___internal___ignoreType',
  image___internal___mediaType = 'image___internal___mediaType',
  image___internal___owner = 'image___internal___owner',
  image___internal___type = 'image___internal___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  page = 'page',
  page___contentful_id = 'page___contentful_id',
  page___id = 'page___id',
  page___node_locale = 'page___node_locale',
  page___title = 'page___title',
  page___slug = 'page___slug',
  page___seoTitle = 'page___seoTitle',
  page___seoDescription = 'page___seoDescription',
  page___spaceId = 'page___spaceId',
  page___createdAt = 'page___createdAt',
  page___updatedAt = 'page___updatedAt',
  page___sys___type = 'page___sys___type',
  page___sys___revision = 'page___sys___revision',
  page___parent___id = 'page___parent___id',
  page___parent___parent___id = 'page___parent___parent___id',
  page___parent___parent___children = 'page___parent___parent___children',
  page___parent___children = 'page___parent___children',
  page___parent___children___id = 'page___parent___children___id',
  page___parent___children___children = 'page___parent___children___children',
  page___parent___internal___content = 'page___parent___internal___content',
  page___parent___internal___contentDigest = 'page___parent___internal___contentDigest',
  page___parent___internal___description = 'page___parent___internal___description',
  page___parent___internal___fieldOwners = 'page___parent___internal___fieldOwners',
  page___parent___internal___ignoreType = 'page___parent___internal___ignoreType',
  page___parent___internal___mediaType = 'page___parent___internal___mediaType',
  page___parent___internal___owner = 'page___parent___internal___owner',
  page___parent___internal___type = 'page___parent___internal___type',
  page___children = 'page___children',
  page___children___id = 'page___children___id',
  page___children___parent___id = 'page___children___parent___id',
  page___children___parent___children = 'page___children___parent___children',
  page___children___children = 'page___children___children',
  page___children___children___id = 'page___children___children___id',
  page___children___children___children = 'page___children___children___children',
  page___children___internal___content = 'page___children___internal___content',
  page___children___internal___contentDigest = 'page___children___internal___contentDigest',
  page___children___internal___description = 'page___children___internal___description',
  page___children___internal___fieldOwners = 'page___children___internal___fieldOwners',
  page___children___internal___ignoreType = 'page___children___internal___ignoreType',
  page___children___internal___mediaType = 'page___children___internal___mediaType',
  page___children___internal___owner = 'page___children___internal___owner',
  page___children___internal___type = 'page___children___internal___type',
  page___internal___content = 'page___internal___content',
  page___internal___contentDigest = 'page___internal___contentDigest',
  page___internal___description = 'page___internal___description',
  page___internal___fieldOwners = 'page___internal___fieldOwners',
  page___internal___ignoreType = 'page___internal___ignoreType',
  page___internal___mediaType = 'page___internal___mediaType',
  page___internal___owner = 'page___internal___owner',
  page___internal___type = 'page___internal___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulBlockImageBandFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockImageBandSysFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulBlockImageBandGroupConnection = {
  __typename?: 'ContentfulBlockImageBandGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockImageBandEdge>;
  nodes: Array<ContentfulBlockImageBand>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockImageBandSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockImageBandFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockImageBandSys = {
  __typename?: 'ContentfulBlockImageBandSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockImageBandSysContentType>;
};

export type ContentfulBlockImageBandSysContentType = {
  __typename?: 'ContentfulBlockImageBandSysContentType';
  sys?: Maybe<ContentfulBlockImageBandSysContentTypeSys>;
};

export type ContentfulBlockImageBandSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockImageBandSysContentTypeSysFilterInput>;
};

export type ContentfulBlockImageBandSysContentTypeSys = {
  __typename?: 'ContentfulBlockImageBandSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockImageBandSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockImageBandSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockImageBandSysContentTypeFilterInput>;
};

export type ContentfulBlockJumbotron = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulBlockJumbotron';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<ContentfulBlockJumbotronContent>;
  imageAlignment?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  imageOnLeft?: Maybe<Scalars['Boolean']>;
  image?: Maybe<ContentfulAsset>;
  backgroundImage?: Maybe<ContentfulAsset>;
  button?: Maybe<ContentfulBlockJumbotronButtonJsonNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockJumbotronSys>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  /** Returns all children nodes filtered by type contentfulBlockJumbotronButtonJsonNode */
  childrenContentfulBlockJumbotronButtonJsonNode?: Maybe<Array<Maybe<ContentfulBlockJumbotronButtonJsonNode>>>;
  /** Returns the first child node of type contentfulBlockJumbotronButtonJsonNode or null if there are no children of given type on this node */
  childContentfulBlockJumbotronButtonJsonNode?: Maybe<ContentfulBlockJumbotronButtonJsonNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulBlockJumbotronCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockJumbotronUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockJumbotronConnection = {
  __typename?: 'ContentfulBlockJumbotronConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockJumbotronEdge>;
  nodes: Array<ContentfulBlockJumbotron>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockJumbotronGroupConnection>;
};


export type ContentfulBlockJumbotronConnectionDistinctArgs = {
  field: ContentfulBlockJumbotronFieldsEnum;
};


export type ContentfulBlockJumbotronConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockJumbotronFieldsEnum;
};

export type ContentfulBlockJumbotronContent = {
  __typename?: 'ContentfulBlockJumbotronContent';
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulBlockJumbotronContentFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockJumbotronEdge = {
  __typename?: 'ContentfulBlockJumbotronEdge';
  next?: Maybe<ContentfulBlockJumbotron>;
  node: ContentfulBlockJumbotron;
  previous?: Maybe<ContentfulBlockJumbotron>;
};

export enum ContentfulBlockJumbotronFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  content___raw = 'content___raw',
  imageAlignment = 'imageAlignment',
  backgroundColor = 'backgroundColor',
  imageOnLeft = 'imageOnLeft',
  image___contentful_id = 'image___contentful_id',
  image___id = 'image___id',
  image___spaceId = 'image___spaceId',
  image___createdAt = 'image___createdAt',
  image___updatedAt = 'image___updatedAt',
  image___file___url = 'image___file___url',
  image___file___details___size = 'image___file___details___size',
  image___file___fileName = 'image___file___fileName',
  image___file___contentType = 'image___file___contentType',
  image___title = 'image___title',
  image___description = 'image___description',
  image___node_locale = 'image___node_locale',
  image___sys___type = 'image___sys___type',
  image___sys___revision = 'image___sys___revision',
  image___fixed___base64 = 'image___fixed___base64',
  image___fixed___tracedSVG = 'image___fixed___tracedSVG',
  image___fixed___aspectRatio = 'image___fixed___aspectRatio',
  image___fixed___width = 'image___fixed___width',
  image___fixed___height = 'image___fixed___height',
  image___fixed___src = 'image___fixed___src',
  image___fixed___srcSet = 'image___fixed___srcSet',
  image___fixed___srcWebp = 'image___fixed___srcWebp',
  image___fixed___srcSetWebp = 'image___fixed___srcSetWebp',
  image___fluid___base64 = 'image___fluid___base64',
  image___fluid___tracedSVG = 'image___fluid___tracedSVG',
  image___fluid___aspectRatio = 'image___fluid___aspectRatio',
  image___fluid___src = 'image___fluid___src',
  image___fluid___srcSet = 'image___fluid___srcSet',
  image___fluid___srcWebp = 'image___fluid___srcWebp',
  image___fluid___srcSetWebp = 'image___fluid___srcSetWebp',
  image___fluid___sizes = 'image___fluid___sizes',
  image___gatsbyImageData = 'image___gatsbyImageData',
  image___resize___base64 = 'image___resize___base64',
  image___resize___tracedSVG = 'image___resize___tracedSVG',
  image___resize___src = 'image___resize___src',
  image___resize___width = 'image___resize___width',
  image___resize___height = 'image___resize___height',
  image___resize___aspectRatio = 'image___resize___aspectRatio',
  image___parent___id = 'image___parent___id',
  image___parent___parent___id = 'image___parent___parent___id',
  image___parent___parent___children = 'image___parent___parent___children',
  image___parent___children = 'image___parent___children',
  image___parent___children___id = 'image___parent___children___id',
  image___parent___children___children = 'image___parent___children___children',
  image___parent___internal___content = 'image___parent___internal___content',
  image___parent___internal___contentDigest = 'image___parent___internal___contentDigest',
  image___parent___internal___description = 'image___parent___internal___description',
  image___parent___internal___fieldOwners = 'image___parent___internal___fieldOwners',
  image___parent___internal___ignoreType = 'image___parent___internal___ignoreType',
  image___parent___internal___mediaType = 'image___parent___internal___mediaType',
  image___parent___internal___owner = 'image___parent___internal___owner',
  image___parent___internal___type = 'image___parent___internal___type',
  image___children = 'image___children',
  image___children___id = 'image___children___id',
  image___children___parent___id = 'image___children___parent___id',
  image___children___parent___children = 'image___children___parent___children',
  image___children___children = 'image___children___children',
  image___children___children___id = 'image___children___children___id',
  image___children___children___children = 'image___children___children___children',
  image___children___internal___content = 'image___children___internal___content',
  image___children___internal___contentDigest = 'image___children___internal___contentDigest',
  image___children___internal___description = 'image___children___internal___description',
  image___children___internal___fieldOwners = 'image___children___internal___fieldOwners',
  image___children___internal___ignoreType = 'image___children___internal___ignoreType',
  image___children___internal___mediaType = 'image___children___internal___mediaType',
  image___children___internal___owner = 'image___children___internal___owner',
  image___children___internal___type = 'image___children___internal___type',
  image___internal___content = 'image___internal___content',
  image___internal___contentDigest = 'image___internal___contentDigest',
  image___internal___description = 'image___internal___description',
  image___internal___fieldOwners = 'image___internal___fieldOwners',
  image___internal___ignoreType = 'image___internal___ignoreType',
  image___internal___mediaType = 'image___internal___mediaType',
  image___internal___owner = 'image___internal___owner',
  image___internal___type = 'image___internal___type',
  backgroundImage___contentful_id = 'backgroundImage___contentful_id',
  backgroundImage___id = 'backgroundImage___id',
  backgroundImage___spaceId = 'backgroundImage___spaceId',
  backgroundImage___createdAt = 'backgroundImage___createdAt',
  backgroundImage___updatedAt = 'backgroundImage___updatedAt',
  backgroundImage___file___url = 'backgroundImage___file___url',
  backgroundImage___file___details___size = 'backgroundImage___file___details___size',
  backgroundImage___file___fileName = 'backgroundImage___file___fileName',
  backgroundImage___file___contentType = 'backgroundImage___file___contentType',
  backgroundImage___title = 'backgroundImage___title',
  backgroundImage___description = 'backgroundImage___description',
  backgroundImage___node_locale = 'backgroundImage___node_locale',
  backgroundImage___sys___type = 'backgroundImage___sys___type',
  backgroundImage___sys___revision = 'backgroundImage___sys___revision',
  backgroundImage___fixed___base64 = 'backgroundImage___fixed___base64',
  backgroundImage___fixed___tracedSVG = 'backgroundImage___fixed___tracedSVG',
  backgroundImage___fixed___aspectRatio = 'backgroundImage___fixed___aspectRatio',
  backgroundImage___fixed___width = 'backgroundImage___fixed___width',
  backgroundImage___fixed___height = 'backgroundImage___fixed___height',
  backgroundImage___fixed___src = 'backgroundImage___fixed___src',
  backgroundImage___fixed___srcSet = 'backgroundImage___fixed___srcSet',
  backgroundImage___fixed___srcWebp = 'backgroundImage___fixed___srcWebp',
  backgroundImage___fixed___srcSetWebp = 'backgroundImage___fixed___srcSetWebp',
  backgroundImage___fluid___base64 = 'backgroundImage___fluid___base64',
  backgroundImage___fluid___tracedSVG = 'backgroundImage___fluid___tracedSVG',
  backgroundImage___fluid___aspectRatio = 'backgroundImage___fluid___aspectRatio',
  backgroundImage___fluid___src = 'backgroundImage___fluid___src',
  backgroundImage___fluid___srcSet = 'backgroundImage___fluid___srcSet',
  backgroundImage___fluid___srcWebp = 'backgroundImage___fluid___srcWebp',
  backgroundImage___fluid___srcSetWebp = 'backgroundImage___fluid___srcSetWebp',
  backgroundImage___fluid___sizes = 'backgroundImage___fluid___sizes',
  backgroundImage___gatsbyImageData = 'backgroundImage___gatsbyImageData',
  backgroundImage___resize___base64 = 'backgroundImage___resize___base64',
  backgroundImage___resize___tracedSVG = 'backgroundImage___resize___tracedSVG',
  backgroundImage___resize___src = 'backgroundImage___resize___src',
  backgroundImage___resize___width = 'backgroundImage___resize___width',
  backgroundImage___resize___height = 'backgroundImage___resize___height',
  backgroundImage___resize___aspectRatio = 'backgroundImage___resize___aspectRatio',
  backgroundImage___parent___id = 'backgroundImage___parent___id',
  backgroundImage___parent___parent___id = 'backgroundImage___parent___parent___id',
  backgroundImage___parent___parent___children = 'backgroundImage___parent___parent___children',
  backgroundImage___parent___children = 'backgroundImage___parent___children',
  backgroundImage___parent___children___id = 'backgroundImage___parent___children___id',
  backgroundImage___parent___children___children = 'backgroundImage___parent___children___children',
  backgroundImage___parent___internal___content = 'backgroundImage___parent___internal___content',
  backgroundImage___parent___internal___contentDigest = 'backgroundImage___parent___internal___contentDigest',
  backgroundImage___parent___internal___description = 'backgroundImage___parent___internal___description',
  backgroundImage___parent___internal___fieldOwners = 'backgroundImage___parent___internal___fieldOwners',
  backgroundImage___parent___internal___ignoreType = 'backgroundImage___parent___internal___ignoreType',
  backgroundImage___parent___internal___mediaType = 'backgroundImage___parent___internal___mediaType',
  backgroundImage___parent___internal___owner = 'backgroundImage___parent___internal___owner',
  backgroundImage___parent___internal___type = 'backgroundImage___parent___internal___type',
  backgroundImage___children = 'backgroundImage___children',
  backgroundImage___children___id = 'backgroundImage___children___id',
  backgroundImage___children___parent___id = 'backgroundImage___children___parent___id',
  backgroundImage___children___parent___children = 'backgroundImage___children___parent___children',
  backgroundImage___children___children = 'backgroundImage___children___children',
  backgroundImage___children___children___id = 'backgroundImage___children___children___id',
  backgroundImage___children___children___children = 'backgroundImage___children___children___children',
  backgroundImage___children___internal___content = 'backgroundImage___children___internal___content',
  backgroundImage___children___internal___contentDigest = 'backgroundImage___children___internal___contentDigest',
  backgroundImage___children___internal___description = 'backgroundImage___children___internal___description',
  backgroundImage___children___internal___fieldOwners = 'backgroundImage___children___internal___fieldOwners',
  backgroundImage___children___internal___ignoreType = 'backgroundImage___children___internal___ignoreType',
  backgroundImage___children___internal___mediaType = 'backgroundImage___children___internal___mediaType',
  backgroundImage___children___internal___owner = 'backgroundImage___children___internal___owner',
  backgroundImage___children___internal___type = 'backgroundImage___children___internal___type',
  backgroundImage___internal___content = 'backgroundImage___internal___content',
  backgroundImage___internal___contentDigest = 'backgroundImage___internal___contentDigest',
  backgroundImage___internal___description = 'backgroundImage___internal___description',
  backgroundImage___internal___fieldOwners = 'backgroundImage___internal___fieldOwners',
  backgroundImage___internal___ignoreType = 'backgroundImage___internal___ignoreType',
  backgroundImage___internal___mediaType = 'backgroundImage___internal___mediaType',
  backgroundImage___internal___owner = 'backgroundImage___internal___owner',
  backgroundImage___internal___type = 'backgroundImage___internal___type',
  button___id = 'button___id',
  button___parent___id = 'button___parent___id',
  button___parent___parent___id = 'button___parent___parent___id',
  button___parent___parent___children = 'button___parent___parent___children',
  button___parent___children = 'button___parent___children',
  button___parent___children___id = 'button___parent___children___id',
  button___parent___children___children = 'button___parent___children___children',
  button___parent___internal___content = 'button___parent___internal___content',
  button___parent___internal___contentDigest = 'button___parent___internal___contentDigest',
  button___parent___internal___description = 'button___parent___internal___description',
  button___parent___internal___fieldOwners = 'button___parent___internal___fieldOwners',
  button___parent___internal___ignoreType = 'button___parent___internal___ignoreType',
  button___parent___internal___mediaType = 'button___parent___internal___mediaType',
  button___parent___internal___owner = 'button___parent___internal___owner',
  button___parent___internal___type = 'button___parent___internal___type',
  button___children = 'button___children',
  button___children___id = 'button___children___id',
  button___children___parent___id = 'button___children___parent___id',
  button___children___parent___children = 'button___children___parent___children',
  button___children___children = 'button___children___children',
  button___children___children___id = 'button___children___children___id',
  button___children___children___children = 'button___children___children___children',
  button___children___internal___content = 'button___children___internal___content',
  button___children___internal___contentDigest = 'button___children___internal___contentDigest',
  button___children___internal___description = 'button___children___internal___description',
  button___children___internal___fieldOwners = 'button___children___internal___fieldOwners',
  button___children___internal___ignoreType = 'button___children___internal___ignoreType',
  button___children___internal___mediaType = 'button___children___internal___mediaType',
  button___children___internal___owner = 'button___children___internal___owner',
  button___children___internal___type = 'button___children___internal___type',
  button___internal___content = 'button___internal___content',
  button___internal___contentDigest = 'button___internal___contentDigest',
  button___internal___description = 'button___internal___description',
  button___internal___fieldOwners = 'button___internal___fieldOwners',
  button___internal___ignoreType = 'button___internal___ignoreType',
  button___internal___mediaType = 'button___internal___mediaType',
  button___internal___owner = 'button___internal___owner',
  button___internal___type = 'button___internal___type',
  button___action___title = 'button___action___title',
  button___action___enabled = 'button___action___enabled',
  button___action___external = 'button___action___external',
  button___action___entrySlug = 'button___action___entrySlug',
  button___action___externalUrl = 'button___action___externalUrl',
  button___sys___type = 'button___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  page = 'page',
  page___contentful_id = 'page___contentful_id',
  page___id = 'page___id',
  page___node_locale = 'page___node_locale',
  page___title = 'page___title',
  page___slug = 'page___slug',
  page___seoTitle = 'page___seoTitle',
  page___seoDescription = 'page___seoDescription',
  page___spaceId = 'page___spaceId',
  page___createdAt = 'page___createdAt',
  page___updatedAt = 'page___updatedAt',
  page___sys___type = 'page___sys___type',
  page___sys___revision = 'page___sys___revision',
  page___parent___id = 'page___parent___id',
  page___parent___parent___id = 'page___parent___parent___id',
  page___parent___parent___children = 'page___parent___parent___children',
  page___parent___children = 'page___parent___children',
  page___parent___children___id = 'page___parent___children___id',
  page___parent___children___children = 'page___parent___children___children',
  page___parent___internal___content = 'page___parent___internal___content',
  page___parent___internal___contentDigest = 'page___parent___internal___contentDigest',
  page___parent___internal___description = 'page___parent___internal___description',
  page___parent___internal___fieldOwners = 'page___parent___internal___fieldOwners',
  page___parent___internal___ignoreType = 'page___parent___internal___ignoreType',
  page___parent___internal___mediaType = 'page___parent___internal___mediaType',
  page___parent___internal___owner = 'page___parent___internal___owner',
  page___parent___internal___type = 'page___parent___internal___type',
  page___children = 'page___children',
  page___children___id = 'page___children___id',
  page___children___parent___id = 'page___children___parent___id',
  page___children___parent___children = 'page___children___parent___children',
  page___children___children = 'page___children___children',
  page___children___children___id = 'page___children___children___id',
  page___children___children___children = 'page___children___children___children',
  page___children___internal___content = 'page___children___internal___content',
  page___children___internal___contentDigest = 'page___children___internal___contentDigest',
  page___children___internal___description = 'page___children___internal___description',
  page___children___internal___fieldOwners = 'page___children___internal___fieldOwners',
  page___children___internal___ignoreType = 'page___children___internal___ignoreType',
  page___children___internal___mediaType = 'page___children___internal___mediaType',
  page___children___internal___owner = 'page___children___internal___owner',
  page___children___internal___type = 'page___children___internal___type',
  page___internal___content = 'page___internal___content',
  page___internal___contentDigest = 'page___internal___contentDigest',
  page___internal___description = 'page___internal___description',
  page___internal___fieldOwners = 'page___internal___fieldOwners',
  page___internal___ignoreType = 'page___internal___ignoreType',
  page___internal___mediaType = 'page___internal___mediaType',
  page___internal___owner = 'page___internal___owner',
  page___internal___type = 'page___internal___type',
  childrenContentfulBlockJumbotronButtonJsonNode = 'childrenContentfulBlockJumbotronButtonJsonNode',
  childrenContentfulBlockJumbotronButtonJsonNode___id = 'childrenContentfulBlockJumbotronButtonJsonNode___id',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___id = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___id',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___parent___id = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___parent___id',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___parent___children = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___parent___children',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___children = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___children',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___children___id = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___children___id',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___children___children = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___children___children',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___content = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___content',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___contentDigest = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___contentDigest',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___description = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___description',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___fieldOwners = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___fieldOwners',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___ignoreType = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___ignoreType',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___mediaType = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___mediaType',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___owner = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___owner',
  childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___type = 'childrenContentfulBlockJumbotronButtonJsonNode___parent___internal___type',
  childrenContentfulBlockJumbotronButtonJsonNode___children = 'childrenContentfulBlockJumbotronButtonJsonNode___children',
  childrenContentfulBlockJumbotronButtonJsonNode___children___id = 'childrenContentfulBlockJumbotronButtonJsonNode___children___id',
  childrenContentfulBlockJumbotronButtonJsonNode___children___parent___id = 'childrenContentfulBlockJumbotronButtonJsonNode___children___parent___id',
  childrenContentfulBlockJumbotronButtonJsonNode___children___parent___children = 'childrenContentfulBlockJumbotronButtonJsonNode___children___parent___children',
  childrenContentfulBlockJumbotronButtonJsonNode___children___children = 'childrenContentfulBlockJumbotronButtonJsonNode___children___children',
  childrenContentfulBlockJumbotronButtonJsonNode___children___children___id = 'childrenContentfulBlockJumbotronButtonJsonNode___children___children___id',
  childrenContentfulBlockJumbotronButtonJsonNode___children___children___children = 'childrenContentfulBlockJumbotronButtonJsonNode___children___children___children',
  childrenContentfulBlockJumbotronButtonJsonNode___children___internal___content = 'childrenContentfulBlockJumbotronButtonJsonNode___children___internal___content',
  childrenContentfulBlockJumbotronButtonJsonNode___children___internal___contentDigest = 'childrenContentfulBlockJumbotronButtonJsonNode___children___internal___contentDigest',
  childrenContentfulBlockJumbotronButtonJsonNode___children___internal___description = 'childrenContentfulBlockJumbotronButtonJsonNode___children___internal___description',
  childrenContentfulBlockJumbotronButtonJsonNode___children___internal___fieldOwners = 'childrenContentfulBlockJumbotronButtonJsonNode___children___internal___fieldOwners',
  childrenContentfulBlockJumbotronButtonJsonNode___children___internal___ignoreType = 'childrenContentfulBlockJumbotronButtonJsonNode___children___internal___ignoreType',
  childrenContentfulBlockJumbotronButtonJsonNode___children___internal___mediaType = 'childrenContentfulBlockJumbotronButtonJsonNode___children___internal___mediaType',
  childrenContentfulBlockJumbotronButtonJsonNode___children___internal___owner = 'childrenContentfulBlockJumbotronButtonJsonNode___children___internal___owner',
  childrenContentfulBlockJumbotronButtonJsonNode___children___internal___type = 'childrenContentfulBlockJumbotronButtonJsonNode___children___internal___type',
  childrenContentfulBlockJumbotronButtonJsonNode___internal___content = 'childrenContentfulBlockJumbotronButtonJsonNode___internal___content',
  childrenContentfulBlockJumbotronButtonJsonNode___internal___contentDigest = 'childrenContentfulBlockJumbotronButtonJsonNode___internal___contentDigest',
  childrenContentfulBlockJumbotronButtonJsonNode___internal___description = 'childrenContentfulBlockJumbotronButtonJsonNode___internal___description',
  childrenContentfulBlockJumbotronButtonJsonNode___internal___fieldOwners = 'childrenContentfulBlockJumbotronButtonJsonNode___internal___fieldOwners',
  childrenContentfulBlockJumbotronButtonJsonNode___internal___ignoreType = 'childrenContentfulBlockJumbotronButtonJsonNode___internal___ignoreType',
  childrenContentfulBlockJumbotronButtonJsonNode___internal___mediaType = 'childrenContentfulBlockJumbotronButtonJsonNode___internal___mediaType',
  childrenContentfulBlockJumbotronButtonJsonNode___internal___owner = 'childrenContentfulBlockJumbotronButtonJsonNode___internal___owner',
  childrenContentfulBlockJumbotronButtonJsonNode___internal___type = 'childrenContentfulBlockJumbotronButtonJsonNode___internal___type',
  childrenContentfulBlockJumbotronButtonJsonNode___action___title = 'childrenContentfulBlockJumbotronButtonJsonNode___action___title',
  childrenContentfulBlockJumbotronButtonJsonNode___action___enabled = 'childrenContentfulBlockJumbotronButtonJsonNode___action___enabled',
  childrenContentfulBlockJumbotronButtonJsonNode___action___external = 'childrenContentfulBlockJumbotronButtonJsonNode___action___external',
  childrenContentfulBlockJumbotronButtonJsonNode___action___entrySlug = 'childrenContentfulBlockJumbotronButtonJsonNode___action___entrySlug',
  childrenContentfulBlockJumbotronButtonJsonNode___action___externalUrl = 'childrenContentfulBlockJumbotronButtonJsonNode___action___externalUrl',
  childrenContentfulBlockJumbotronButtonJsonNode___sys___type = 'childrenContentfulBlockJumbotronButtonJsonNode___sys___type',
  childContentfulBlockJumbotronButtonJsonNode___id = 'childContentfulBlockJumbotronButtonJsonNode___id',
  childContentfulBlockJumbotronButtonJsonNode___parent___id = 'childContentfulBlockJumbotronButtonJsonNode___parent___id',
  childContentfulBlockJumbotronButtonJsonNode___parent___parent___id = 'childContentfulBlockJumbotronButtonJsonNode___parent___parent___id',
  childContentfulBlockJumbotronButtonJsonNode___parent___parent___children = 'childContentfulBlockJumbotronButtonJsonNode___parent___parent___children',
  childContentfulBlockJumbotronButtonJsonNode___parent___children = 'childContentfulBlockJumbotronButtonJsonNode___parent___children',
  childContentfulBlockJumbotronButtonJsonNode___parent___children___id = 'childContentfulBlockJumbotronButtonJsonNode___parent___children___id',
  childContentfulBlockJumbotronButtonJsonNode___parent___children___children = 'childContentfulBlockJumbotronButtonJsonNode___parent___children___children',
  childContentfulBlockJumbotronButtonJsonNode___parent___internal___content = 'childContentfulBlockJumbotronButtonJsonNode___parent___internal___content',
  childContentfulBlockJumbotronButtonJsonNode___parent___internal___contentDigest = 'childContentfulBlockJumbotronButtonJsonNode___parent___internal___contentDigest',
  childContentfulBlockJumbotronButtonJsonNode___parent___internal___description = 'childContentfulBlockJumbotronButtonJsonNode___parent___internal___description',
  childContentfulBlockJumbotronButtonJsonNode___parent___internal___fieldOwners = 'childContentfulBlockJumbotronButtonJsonNode___parent___internal___fieldOwners',
  childContentfulBlockJumbotronButtonJsonNode___parent___internal___ignoreType = 'childContentfulBlockJumbotronButtonJsonNode___parent___internal___ignoreType',
  childContentfulBlockJumbotronButtonJsonNode___parent___internal___mediaType = 'childContentfulBlockJumbotronButtonJsonNode___parent___internal___mediaType',
  childContentfulBlockJumbotronButtonJsonNode___parent___internal___owner = 'childContentfulBlockJumbotronButtonJsonNode___parent___internal___owner',
  childContentfulBlockJumbotronButtonJsonNode___parent___internal___type = 'childContentfulBlockJumbotronButtonJsonNode___parent___internal___type',
  childContentfulBlockJumbotronButtonJsonNode___children = 'childContentfulBlockJumbotronButtonJsonNode___children',
  childContentfulBlockJumbotronButtonJsonNode___children___id = 'childContentfulBlockJumbotronButtonJsonNode___children___id',
  childContentfulBlockJumbotronButtonJsonNode___children___parent___id = 'childContentfulBlockJumbotronButtonJsonNode___children___parent___id',
  childContentfulBlockJumbotronButtonJsonNode___children___parent___children = 'childContentfulBlockJumbotronButtonJsonNode___children___parent___children',
  childContentfulBlockJumbotronButtonJsonNode___children___children = 'childContentfulBlockJumbotronButtonJsonNode___children___children',
  childContentfulBlockJumbotronButtonJsonNode___children___children___id = 'childContentfulBlockJumbotronButtonJsonNode___children___children___id',
  childContentfulBlockJumbotronButtonJsonNode___children___children___children = 'childContentfulBlockJumbotronButtonJsonNode___children___children___children',
  childContentfulBlockJumbotronButtonJsonNode___children___internal___content = 'childContentfulBlockJumbotronButtonJsonNode___children___internal___content',
  childContentfulBlockJumbotronButtonJsonNode___children___internal___contentDigest = 'childContentfulBlockJumbotronButtonJsonNode___children___internal___contentDigest',
  childContentfulBlockJumbotronButtonJsonNode___children___internal___description = 'childContentfulBlockJumbotronButtonJsonNode___children___internal___description',
  childContentfulBlockJumbotronButtonJsonNode___children___internal___fieldOwners = 'childContentfulBlockJumbotronButtonJsonNode___children___internal___fieldOwners',
  childContentfulBlockJumbotronButtonJsonNode___children___internal___ignoreType = 'childContentfulBlockJumbotronButtonJsonNode___children___internal___ignoreType',
  childContentfulBlockJumbotronButtonJsonNode___children___internal___mediaType = 'childContentfulBlockJumbotronButtonJsonNode___children___internal___mediaType',
  childContentfulBlockJumbotronButtonJsonNode___children___internal___owner = 'childContentfulBlockJumbotronButtonJsonNode___children___internal___owner',
  childContentfulBlockJumbotronButtonJsonNode___children___internal___type = 'childContentfulBlockJumbotronButtonJsonNode___children___internal___type',
  childContentfulBlockJumbotronButtonJsonNode___internal___content = 'childContentfulBlockJumbotronButtonJsonNode___internal___content',
  childContentfulBlockJumbotronButtonJsonNode___internal___contentDigest = 'childContentfulBlockJumbotronButtonJsonNode___internal___contentDigest',
  childContentfulBlockJumbotronButtonJsonNode___internal___description = 'childContentfulBlockJumbotronButtonJsonNode___internal___description',
  childContentfulBlockJumbotronButtonJsonNode___internal___fieldOwners = 'childContentfulBlockJumbotronButtonJsonNode___internal___fieldOwners',
  childContentfulBlockJumbotronButtonJsonNode___internal___ignoreType = 'childContentfulBlockJumbotronButtonJsonNode___internal___ignoreType',
  childContentfulBlockJumbotronButtonJsonNode___internal___mediaType = 'childContentfulBlockJumbotronButtonJsonNode___internal___mediaType',
  childContentfulBlockJumbotronButtonJsonNode___internal___owner = 'childContentfulBlockJumbotronButtonJsonNode___internal___owner',
  childContentfulBlockJumbotronButtonJsonNode___internal___type = 'childContentfulBlockJumbotronButtonJsonNode___internal___type',
  childContentfulBlockJumbotronButtonJsonNode___action___title = 'childContentfulBlockJumbotronButtonJsonNode___action___title',
  childContentfulBlockJumbotronButtonJsonNode___action___enabled = 'childContentfulBlockJumbotronButtonJsonNode___action___enabled',
  childContentfulBlockJumbotronButtonJsonNode___action___external = 'childContentfulBlockJumbotronButtonJsonNode___action___external',
  childContentfulBlockJumbotronButtonJsonNode___action___entrySlug = 'childContentfulBlockJumbotronButtonJsonNode___action___entrySlug',
  childContentfulBlockJumbotronButtonJsonNode___action___externalUrl = 'childContentfulBlockJumbotronButtonJsonNode___action___externalUrl',
  childContentfulBlockJumbotronButtonJsonNode___sys___type = 'childContentfulBlockJumbotronButtonJsonNode___sys___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulBlockJumbotronFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulBlockJumbotronContentFilterInput>;
  imageAlignment?: Maybe<StringQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  imageOnLeft?: Maybe<BooleanQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  backgroundImage?: Maybe<ContentfulAssetFilterInput>;
  button?: Maybe<ContentfulBlockJumbotronButtonJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockJumbotronSysFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  childrenContentfulBlockJumbotronButtonJsonNode?: Maybe<ContentfulBlockJumbotronButtonJsonNodeFilterListInput>;
  childContentfulBlockJumbotronButtonJsonNode?: Maybe<ContentfulBlockJumbotronButtonJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulBlockJumbotronGroupConnection = {
  __typename?: 'ContentfulBlockJumbotronGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockJumbotronEdge>;
  nodes: Array<ContentfulBlockJumbotron>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockJumbotronSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockJumbotronFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockJumbotronSys = {
  __typename?: 'ContentfulBlockJumbotronSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockJumbotronSysContentType>;
};

export type ContentfulBlockJumbotronSysContentType = {
  __typename?: 'ContentfulBlockJumbotronSysContentType';
  sys?: Maybe<ContentfulBlockJumbotronSysContentTypeSys>;
};

export type ContentfulBlockJumbotronSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockJumbotronSysContentTypeSysFilterInput>;
};

export type ContentfulBlockJumbotronSysContentTypeSys = {
  __typename?: 'ContentfulBlockJumbotronSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockJumbotronSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockJumbotronSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockJumbotronSysContentTypeFilterInput>;
};

export type ContentfulBlogPost = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulBlogPost';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  published?: Maybe<Scalars['Date']>;
  content?: Maybe<ContentfulBlogPostContent>;
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  author?: Maybe<ContentfulAuthor>;
  excerpt?: Maybe<ContentfulBlogPostExcerptTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogPostSys>;
  featuredImage?: Maybe<ContentfulAsset>;
  /** Returns all children nodes filtered by type contentfulBlogPostExcerptTextNode */
  childrenContentfulBlogPostExcerptTextNode?: Maybe<Array<Maybe<ContentfulBlogPostExcerptTextNode>>>;
  /** Returns the first child node of type contentfulBlogPostExcerptTextNode or null if there are no children of given type on this node */
  childContentfulBlogPostExcerptTextNode?: Maybe<ContentfulBlogPostExcerptTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulBlogPostPublishedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostConnection = {
  __typename?: 'ContentfulBlogPostConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostGroupConnection>;
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostContent = {
  __typename?: 'ContentfulBlogPostContent';
  raw?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<ContentfulAsset>>>;
};

export type ContentfulBlogPostContentFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
  references?: Maybe<ContentfulAssetFilterListInput>;
};

export type ContentfulBlogPostEdge = {
  __typename?: 'ContentfulBlogPostEdge';
  next?: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous?: Maybe<ContentfulBlogPost>;
};

export enum ContentfulBlogPostFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  slug = 'slug',
  featured = 'featured',
  published = 'published',
  content___raw = 'content___raw',
  content___references = 'content___references',
  content___references___contentful_id = 'content___references___contentful_id',
  content___references___id = 'content___references___id',
  content___references___spaceId = 'content___references___spaceId',
  content___references___createdAt = 'content___references___createdAt',
  content___references___updatedAt = 'content___references___updatedAt',
  content___references___file___url = 'content___references___file___url',
  content___references___file___fileName = 'content___references___file___fileName',
  content___references___file___contentType = 'content___references___file___contentType',
  content___references___title = 'content___references___title',
  content___references___description = 'content___references___description',
  content___references___node_locale = 'content___references___node_locale',
  content___references___sys___type = 'content___references___sys___type',
  content___references___sys___revision = 'content___references___sys___revision',
  content___references___fixed___base64 = 'content___references___fixed___base64',
  content___references___fixed___tracedSVG = 'content___references___fixed___tracedSVG',
  content___references___fixed___aspectRatio = 'content___references___fixed___aspectRatio',
  content___references___fixed___width = 'content___references___fixed___width',
  content___references___fixed___height = 'content___references___fixed___height',
  content___references___fixed___src = 'content___references___fixed___src',
  content___references___fixed___srcSet = 'content___references___fixed___srcSet',
  content___references___fixed___srcWebp = 'content___references___fixed___srcWebp',
  content___references___fixed___srcSetWebp = 'content___references___fixed___srcSetWebp',
  content___references___fluid___base64 = 'content___references___fluid___base64',
  content___references___fluid___tracedSVG = 'content___references___fluid___tracedSVG',
  content___references___fluid___aspectRatio = 'content___references___fluid___aspectRatio',
  content___references___fluid___src = 'content___references___fluid___src',
  content___references___fluid___srcSet = 'content___references___fluid___srcSet',
  content___references___fluid___srcWebp = 'content___references___fluid___srcWebp',
  content___references___fluid___srcSetWebp = 'content___references___fluid___srcSetWebp',
  content___references___fluid___sizes = 'content___references___fluid___sizes',
  content___references___gatsbyImageData = 'content___references___gatsbyImageData',
  content___references___resize___base64 = 'content___references___resize___base64',
  content___references___resize___tracedSVG = 'content___references___resize___tracedSVG',
  content___references___resize___src = 'content___references___resize___src',
  content___references___resize___width = 'content___references___resize___width',
  content___references___resize___height = 'content___references___resize___height',
  content___references___resize___aspectRatio = 'content___references___resize___aspectRatio',
  content___references___parent___id = 'content___references___parent___id',
  content___references___parent___children = 'content___references___parent___children',
  content___references___children = 'content___references___children',
  content___references___children___id = 'content___references___children___id',
  content___references___children___children = 'content___references___children___children',
  content___references___internal___content = 'content___references___internal___content',
  content___references___internal___contentDigest = 'content___references___internal___contentDigest',
  content___references___internal___description = 'content___references___internal___description',
  content___references___internal___fieldOwners = 'content___references___internal___fieldOwners',
  content___references___internal___ignoreType = 'content___references___internal___ignoreType',
  content___references___internal___mediaType = 'content___references___internal___mediaType',
  content___references___internal___owner = 'content___references___internal___owner',
  content___references___internal___type = 'content___references___internal___type',
  seoTitle = 'seoTitle',
  seoDescription = 'seoDescription',
  author___contentful_id = 'author___contentful_id',
  author___id = 'author___id',
  author___node_locale = 'author___node_locale',
  author___name = 'author___name',
  author___news = 'author___news',
  author___news___contentful_id = 'author___news___contentful_id',
  author___news___id = 'author___news___id',
  author___news___node_locale = 'author___news___node_locale',
  author___news___title = 'author___news___title',
  author___news___slug = 'author___news___slug',
  author___news___featured = 'author___news___featured',
  author___news___published = 'author___news___published',
  author___news___content___raw = 'author___news___content___raw',
  author___news___featuredImage___contentful_id = 'author___news___featuredImage___contentful_id',
  author___news___featuredImage___id = 'author___news___featuredImage___id',
  author___news___featuredImage___spaceId = 'author___news___featuredImage___spaceId',
  author___news___featuredImage___createdAt = 'author___news___featuredImage___createdAt',
  author___news___featuredImage___updatedAt = 'author___news___featuredImage___updatedAt',
  author___news___featuredImage___title = 'author___news___featuredImage___title',
  author___news___featuredImage___description = 'author___news___featuredImage___description',
  author___news___featuredImage___node_locale = 'author___news___featuredImage___node_locale',
  author___news___featuredImage___gatsbyImageData = 'author___news___featuredImage___gatsbyImageData',
  author___news___featuredImage___children = 'author___news___featuredImage___children',
  author___news___excerpt___id = 'author___news___excerpt___id',
  author___news___excerpt___children = 'author___news___excerpt___children',
  author___news___excerpt___excerpt = 'author___news___excerpt___excerpt',
  author___news___spaceId = 'author___news___spaceId',
  author___news___createdAt = 'author___news___createdAt',
  author___news___updatedAt = 'author___news___updatedAt',
  author___news___sys___type = 'author___news___sys___type',
  author___news___sys___revision = 'author___news___sys___revision',
  author___news___seoTitle = 'author___news___seoTitle',
  author___news___seoDescription = 'author___news___seoDescription',
  author___news___author___contentful_id = 'author___news___author___contentful_id',
  author___news___author___id = 'author___news___author___id',
  author___news___author___node_locale = 'author___news___author___node_locale',
  author___news___author___name = 'author___news___author___name',
  author___news___author___news = 'author___news___author___news',
  author___news___author___spaceId = 'author___news___author___spaceId',
  author___news___author___createdAt = 'author___news___author___createdAt',
  author___news___author___updatedAt = 'author___news___author___updatedAt',
  author___news___author___blog_post = 'author___news___author___blog_post',
  author___news___author___childrenContentfulAuthorBiographyTextNode = 'author___news___author___childrenContentfulAuthorBiographyTextNode',
  author___news___author___children = 'author___news___author___children',
  author___news___childrenContentfulNewsExcerptTextNode = 'author___news___childrenContentfulNewsExcerptTextNode',
  author___news___childrenContentfulNewsExcerptTextNode___id = 'author___news___childrenContentfulNewsExcerptTextNode___id',
  author___news___childrenContentfulNewsExcerptTextNode___children = 'author___news___childrenContentfulNewsExcerptTextNode___children',
  author___news___childrenContentfulNewsExcerptTextNode___excerpt = 'author___news___childrenContentfulNewsExcerptTextNode___excerpt',
  author___news___childContentfulNewsExcerptTextNode___id = 'author___news___childContentfulNewsExcerptTextNode___id',
  author___news___childContentfulNewsExcerptTextNode___children = 'author___news___childContentfulNewsExcerptTextNode___children',
  author___news___childContentfulNewsExcerptTextNode___excerpt = 'author___news___childContentfulNewsExcerptTextNode___excerpt',
  author___news___parent___id = 'author___news___parent___id',
  author___news___parent___children = 'author___news___parent___children',
  author___news___children = 'author___news___children',
  author___news___children___id = 'author___news___children___id',
  author___news___children___children = 'author___news___children___children',
  author___news___internal___content = 'author___news___internal___content',
  author___news___internal___contentDigest = 'author___news___internal___contentDigest',
  author___news___internal___description = 'author___news___internal___description',
  author___news___internal___fieldOwners = 'author___news___internal___fieldOwners',
  author___news___internal___ignoreType = 'author___news___internal___ignoreType',
  author___news___internal___mediaType = 'author___news___internal___mediaType',
  author___news___internal___owner = 'author___news___internal___owner',
  author___news___internal___type = 'author___news___internal___type',
  author___biography___id = 'author___biography___id',
  author___biography___parent___id = 'author___biography___parent___id',
  author___biography___parent___children = 'author___biography___parent___children',
  author___biography___children = 'author___biography___children',
  author___biography___children___id = 'author___biography___children___id',
  author___biography___children___children = 'author___biography___children___children',
  author___biography___internal___content = 'author___biography___internal___content',
  author___biography___internal___contentDigest = 'author___biography___internal___contentDigest',
  author___biography___internal___description = 'author___biography___internal___description',
  author___biography___internal___fieldOwners = 'author___biography___internal___fieldOwners',
  author___biography___internal___ignoreType = 'author___biography___internal___ignoreType',
  author___biography___internal___mediaType = 'author___biography___internal___mediaType',
  author___biography___internal___owner = 'author___biography___internal___owner',
  author___biography___internal___type = 'author___biography___internal___type',
  author___biography___biography = 'author___biography___biography',
  author___biography___sys___type = 'author___biography___sys___type',
  author___spaceId = 'author___spaceId',
  author___createdAt = 'author___createdAt',
  author___updatedAt = 'author___updatedAt',
  author___sys___type = 'author___sys___type',
  author___sys___revision = 'author___sys___revision',
  author___blog_post = 'author___blog_post',
  author___blog_post___contentful_id = 'author___blog_post___contentful_id',
  author___blog_post___id = 'author___blog_post___id',
  author___blog_post___node_locale = 'author___blog_post___node_locale',
  author___blog_post___title = 'author___blog_post___title',
  author___blog_post___slug = 'author___blog_post___slug',
  author___blog_post___featured = 'author___blog_post___featured',
  author___blog_post___published = 'author___blog_post___published',
  author___blog_post___content___raw = 'author___blog_post___content___raw',
  author___blog_post___content___references = 'author___blog_post___content___references',
  author___blog_post___seoTitle = 'author___blog_post___seoTitle',
  author___blog_post___seoDescription = 'author___blog_post___seoDescription',
  author___blog_post___author___contentful_id = 'author___blog_post___author___contentful_id',
  author___blog_post___author___id = 'author___blog_post___author___id',
  author___blog_post___author___node_locale = 'author___blog_post___author___node_locale',
  author___blog_post___author___name = 'author___blog_post___author___name',
  author___blog_post___author___news = 'author___blog_post___author___news',
  author___blog_post___author___spaceId = 'author___blog_post___author___spaceId',
  author___blog_post___author___createdAt = 'author___blog_post___author___createdAt',
  author___blog_post___author___updatedAt = 'author___blog_post___author___updatedAt',
  author___blog_post___author___blog_post = 'author___blog_post___author___blog_post',
  author___blog_post___author___childrenContentfulAuthorBiographyTextNode = 'author___blog_post___author___childrenContentfulAuthorBiographyTextNode',
  author___blog_post___author___children = 'author___blog_post___author___children',
  author___blog_post___excerpt___id = 'author___blog_post___excerpt___id',
  author___blog_post___excerpt___children = 'author___blog_post___excerpt___children',
  author___blog_post___excerpt___excerpt = 'author___blog_post___excerpt___excerpt',
  author___blog_post___spaceId = 'author___blog_post___spaceId',
  author___blog_post___createdAt = 'author___blog_post___createdAt',
  author___blog_post___updatedAt = 'author___blog_post___updatedAt',
  author___blog_post___sys___type = 'author___blog_post___sys___type',
  author___blog_post___sys___revision = 'author___blog_post___sys___revision',
  author___blog_post___featuredImage___contentful_id = 'author___blog_post___featuredImage___contentful_id',
  author___blog_post___featuredImage___id = 'author___blog_post___featuredImage___id',
  author___blog_post___featuredImage___spaceId = 'author___blog_post___featuredImage___spaceId',
  author___blog_post___featuredImage___createdAt = 'author___blog_post___featuredImage___createdAt',
  author___blog_post___featuredImage___updatedAt = 'author___blog_post___featuredImage___updatedAt',
  author___blog_post___featuredImage___title = 'author___blog_post___featuredImage___title',
  author___blog_post___featuredImage___description = 'author___blog_post___featuredImage___description',
  author___blog_post___featuredImage___node_locale = 'author___blog_post___featuredImage___node_locale',
  author___blog_post___featuredImage___gatsbyImageData = 'author___blog_post___featuredImage___gatsbyImageData',
  author___blog_post___featuredImage___children = 'author___blog_post___featuredImage___children',
  author___blog_post___childrenContentfulBlogPostExcerptTextNode = 'author___blog_post___childrenContentfulBlogPostExcerptTextNode',
  author___blog_post___childrenContentfulBlogPostExcerptTextNode___id = 'author___blog_post___childrenContentfulBlogPostExcerptTextNode___id',
  author___blog_post___childrenContentfulBlogPostExcerptTextNode___children = 'author___blog_post___childrenContentfulBlogPostExcerptTextNode___children',
  author___blog_post___childrenContentfulBlogPostExcerptTextNode___excerpt = 'author___blog_post___childrenContentfulBlogPostExcerptTextNode___excerpt',
  author___blog_post___childContentfulBlogPostExcerptTextNode___id = 'author___blog_post___childContentfulBlogPostExcerptTextNode___id',
  author___blog_post___childContentfulBlogPostExcerptTextNode___children = 'author___blog_post___childContentfulBlogPostExcerptTextNode___children',
  author___blog_post___childContentfulBlogPostExcerptTextNode___excerpt = 'author___blog_post___childContentfulBlogPostExcerptTextNode___excerpt',
  author___blog_post___parent___id = 'author___blog_post___parent___id',
  author___blog_post___parent___children = 'author___blog_post___parent___children',
  author___blog_post___children = 'author___blog_post___children',
  author___blog_post___children___id = 'author___blog_post___children___id',
  author___blog_post___children___children = 'author___blog_post___children___children',
  author___blog_post___internal___content = 'author___blog_post___internal___content',
  author___blog_post___internal___contentDigest = 'author___blog_post___internal___contentDigest',
  author___blog_post___internal___description = 'author___blog_post___internal___description',
  author___blog_post___internal___fieldOwners = 'author___blog_post___internal___fieldOwners',
  author___blog_post___internal___ignoreType = 'author___blog_post___internal___ignoreType',
  author___blog_post___internal___mediaType = 'author___blog_post___internal___mediaType',
  author___blog_post___internal___owner = 'author___blog_post___internal___owner',
  author___blog_post___internal___type = 'author___blog_post___internal___type',
  author___childrenContentfulAuthorBiographyTextNode = 'author___childrenContentfulAuthorBiographyTextNode',
  author___childrenContentfulAuthorBiographyTextNode___id = 'author___childrenContentfulAuthorBiographyTextNode___id',
  author___childrenContentfulAuthorBiographyTextNode___parent___id = 'author___childrenContentfulAuthorBiographyTextNode___parent___id',
  author___childrenContentfulAuthorBiographyTextNode___parent___children = 'author___childrenContentfulAuthorBiographyTextNode___parent___children',
  author___childrenContentfulAuthorBiographyTextNode___children = 'author___childrenContentfulAuthorBiographyTextNode___children',
  author___childrenContentfulAuthorBiographyTextNode___children___id = 'author___childrenContentfulAuthorBiographyTextNode___children___id',
  author___childrenContentfulAuthorBiographyTextNode___children___children = 'author___childrenContentfulAuthorBiographyTextNode___children___children',
  author___childrenContentfulAuthorBiographyTextNode___internal___content = 'author___childrenContentfulAuthorBiographyTextNode___internal___content',
  author___childrenContentfulAuthorBiographyTextNode___internal___contentDigest = 'author___childrenContentfulAuthorBiographyTextNode___internal___contentDigest',
  author___childrenContentfulAuthorBiographyTextNode___internal___description = 'author___childrenContentfulAuthorBiographyTextNode___internal___description',
  author___childrenContentfulAuthorBiographyTextNode___internal___fieldOwners = 'author___childrenContentfulAuthorBiographyTextNode___internal___fieldOwners',
  author___childrenContentfulAuthorBiographyTextNode___internal___ignoreType = 'author___childrenContentfulAuthorBiographyTextNode___internal___ignoreType',
  author___childrenContentfulAuthorBiographyTextNode___internal___mediaType = 'author___childrenContentfulAuthorBiographyTextNode___internal___mediaType',
  author___childrenContentfulAuthorBiographyTextNode___internal___owner = 'author___childrenContentfulAuthorBiographyTextNode___internal___owner',
  author___childrenContentfulAuthorBiographyTextNode___internal___type = 'author___childrenContentfulAuthorBiographyTextNode___internal___type',
  author___childrenContentfulAuthorBiographyTextNode___biography = 'author___childrenContentfulAuthorBiographyTextNode___biography',
  author___childrenContentfulAuthorBiographyTextNode___sys___type = 'author___childrenContentfulAuthorBiographyTextNode___sys___type',
  author___childContentfulAuthorBiographyTextNode___id = 'author___childContentfulAuthorBiographyTextNode___id',
  author___childContentfulAuthorBiographyTextNode___parent___id = 'author___childContentfulAuthorBiographyTextNode___parent___id',
  author___childContentfulAuthorBiographyTextNode___parent___children = 'author___childContentfulAuthorBiographyTextNode___parent___children',
  author___childContentfulAuthorBiographyTextNode___children = 'author___childContentfulAuthorBiographyTextNode___children',
  author___childContentfulAuthorBiographyTextNode___children___id = 'author___childContentfulAuthorBiographyTextNode___children___id',
  author___childContentfulAuthorBiographyTextNode___children___children = 'author___childContentfulAuthorBiographyTextNode___children___children',
  author___childContentfulAuthorBiographyTextNode___internal___content = 'author___childContentfulAuthorBiographyTextNode___internal___content',
  author___childContentfulAuthorBiographyTextNode___internal___contentDigest = 'author___childContentfulAuthorBiographyTextNode___internal___contentDigest',
  author___childContentfulAuthorBiographyTextNode___internal___description = 'author___childContentfulAuthorBiographyTextNode___internal___description',
  author___childContentfulAuthorBiographyTextNode___internal___fieldOwners = 'author___childContentfulAuthorBiographyTextNode___internal___fieldOwners',
  author___childContentfulAuthorBiographyTextNode___internal___ignoreType = 'author___childContentfulAuthorBiographyTextNode___internal___ignoreType',
  author___childContentfulAuthorBiographyTextNode___internal___mediaType = 'author___childContentfulAuthorBiographyTextNode___internal___mediaType',
  author___childContentfulAuthorBiographyTextNode___internal___owner = 'author___childContentfulAuthorBiographyTextNode___internal___owner',
  author___childContentfulAuthorBiographyTextNode___internal___type = 'author___childContentfulAuthorBiographyTextNode___internal___type',
  author___childContentfulAuthorBiographyTextNode___biography = 'author___childContentfulAuthorBiographyTextNode___biography',
  author___childContentfulAuthorBiographyTextNode___sys___type = 'author___childContentfulAuthorBiographyTextNode___sys___type',
  author___parent___id = 'author___parent___id',
  author___parent___parent___id = 'author___parent___parent___id',
  author___parent___parent___children = 'author___parent___parent___children',
  author___parent___children = 'author___parent___children',
  author___parent___children___id = 'author___parent___children___id',
  author___parent___children___children = 'author___parent___children___children',
  author___parent___internal___content = 'author___parent___internal___content',
  author___parent___internal___contentDigest = 'author___parent___internal___contentDigest',
  author___parent___internal___description = 'author___parent___internal___description',
  author___parent___internal___fieldOwners = 'author___parent___internal___fieldOwners',
  author___parent___internal___ignoreType = 'author___parent___internal___ignoreType',
  author___parent___internal___mediaType = 'author___parent___internal___mediaType',
  author___parent___internal___owner = 'author___parent___internal___owner',
  author___parent___internal___type = 'author___parent___internal___type',
  author___children = 'author___children',
  author___children___id = 'author___children___id',
  author___children___parent___id = 'author___children___parent___id',
  author___children___parent___children = 'author___children___parent___children',
  author___children___children = 'author___children___children',
  author___children___children___id = 'author___children___children___id',
  author___children___children___children = 'author___children___children___children',
  author___children___internal___content = 'author___children___internal___content',
  author___children___internal___contentDigest = 'author___children___internal___contentDigest',
  author___children___internal___description = 'author___children___internal___description',
  author___children___internal___fieldOwners = 'author___children___internal___fieldOwners',
  author___children___internal___ignoreType = 'author___children___internal___ignoreType',
  author___children___internal___mediaType = 'author___children___internal___mediaType',
  author___children___internal___owner = 'author___children___internal___owner',
  author___children___internal___type = 'author___children___internal___type',
  author___internal___content = 'author___internal___content',
  author___internal___contentDigest = 'author___internal___contentDigest',
  author___internal___description = 'author___internal___description',
  author___internal___fieldOwners = 'author___internal___fieldOwners',
  author___internal___ignoreType = 'author___internal___ignoreType',
  author___internal___mediaType = 'author___internal___mediaType',
  author___internal___owner = 'author___internal___owner',
  author___internal___type = 'author___internal___type',
  excerpt___id = 'excerpt___id',
  excerpt___parent___id = 'excerpt___parent___id',
  excerpt___parent___parent___id = 'excerpt___parent___parent___id',
  excerpt___parent___parent___children = 'excerpt___parent___parent___children',
  excerpt___parent___children = 'excerpt___parent___children',
  excerpt___parent___children___id = 'excerpt___parent___children___id',
  excerpt___parent___children___children = 'excerpt___parent___children___children',
  excerpt___parent___internal___content = 'excerpt___parent___internal___content',
  excerpt___parent___internal___contentDigest = 'excerpt___parent___internal___contentDigest',
  excerpt___parent___internal___description = 'excerpt___parent___internal___description',
  excerpt___parent___internal___fieldOwners = 'excerpt___parent___internal___fieldOwners',
  excerpt___parent___internal___ignoreType = 'excerpt___parent___internal___ignoreType',
  excerpt___parent___internal___mediaType = 'excerpt___parent___internal___mediaType',
  excerpt___parent___internal___owner = 'excerpt___parent___internal___owner',
  excerpt___parent___internal___type = 'excerpt___parent___internal___type',
  excerpt___children = 'excerpt___children',
  excerpt___children___id = 'excerpt___children___id',
  excerpt___children___parent___id = 'excerpt___children___parent___id',
  excerpt___children___parent___children = 'excerpt___children___parent___children',
  excerpt___children___children = 'excerpt___children___children',
  excerpt___children___children___id = 'excerpt___children___children___id',
  excerpt___children___children___children = 'excerpt___children___children___children',
  excerpt___children___internal___content = 'excerpt___children___internal___content',
  excerpt___children___internal___contentDigest = 'excerpt___children___internal___contentDigest',
  excerpt___children___internal___description = 'excerpt___children___internal___description',
  excerpt___children___internal___fieldOwners = 'excerpt___children___internal___fieldOwners',
  excerpt___children___internal___ignoreType = 'excerpt___children___internal___ignoreType',
  excerpt___children___internal___mediaType = 'excerpt___children___internal___mediaType',
  excerpt___children___internal___owner = 'excerpt___children___internal___owner',
  excerpt___children___internal___type = 'excerpt___children___internal___type',
  excerpt___internal___content = 'excerpt___internal___content',
  excerpt___internal___contentDigest = 'excerpt___internal___contentDigest',
  excerpt___internal___description = 'excerpt___internal___description',
  excerpt___internal___fieldOwners = 'excerpt___internal___fieldOwners',
  excerpt___internal___ignoreType = 'excerpt___internal___ignoreType',
  excerpt___internal___mediaType = 'excerpt___internal___mediaType',
  excerpt___internal___owner = 'excerpt___internal___owner',
  excerpt___internal___type = 'excerpt___internal___type',
  excerpt___excerpt = 'excerpt___excerpt',
  excerpt___sys___type = 'excerpt___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  featuredImage___contentful_id = 'featuredImage___contentful_id',
  featuredImage___id = 'featuredImage___id',
  featuredImage___spaceId = 'featuredImage___spaceId',
  featuredImage___createdAt = 'featuredImage___createdAt',
  featuredImage___updatedAt = 'featuredImage___updatedAt',
  featuredImage___file___url = 'featuredImage___file___url',
  featuredImage___file___details___size = 'featuredImage___file___details___size',
  featuredImage___file___fileName = 'featuredImage___file___fileName',
  featuredImage___file___contentType = 'featuredImage___file___contentType',
  featuredImage___title = 'featuredImage___title',
  featuredImage___description = 'featuredImage___description',
  featuredImage___node_locale = 'featuredImage___node_locale',
  featuredImage___sys___type = 'featuredImage___sys___type',
  featuredImage___sys___revision = 'featuredImage___sys___revision',
  featuredImage___fixed___base64 = 'featuredImage___fixed___base64',
  featuredImage___fixed___tracedSVG = 'featuredImage___fixed___tracedSVG',
  featuredImage___fixed___aspectRatio = 'featuredImage___fixed___aspectRatio',
  featuredImage___fixed___width = 'featuredImage___fixed___width',
  featuredImage___fixed___height = 'featuredImage___fixed___height',
  featuredImage___fixed___src = 'featuredImage___fixed___src',
  featuredImage___fixed___srcSet = 'featuredImage___fixed___srcSet',
  featuredImage___fixed___srcWebp = 'featuredImage___fixed___srcWebp',
  featuredImage___fixed___srcSetWebp = 'featuredImage___fixed___srcSetWebp',
  featuredImage___fluid___base64 = 'featuredImage___fluid___base64',
  featuredImage___fluid___tracedSVG = 'featuredImage___fluid___tracedSVG',
  featuredImage___fluid___aspectRatio = 'featuredImage___fluid___aspectRatio',
  featuredImage___fluid___src = 'featuredImage___fluid___src',
  featuredImage___fluid___srcSet = 'featuredImage___fluid___srcSet',
  featuredImage___fluid___srcWebp = 'featuredImage___fluid___srcWebp',
  featuredImage___fluid___srcSetWebp = 'featuredImage___fluid___srcSetWebp',
  featuredImage___fluid___sizes = 'featuredImage___fluid___sizes',
  featuredImage___gatsbyImageData = 'featuredImage___gatsbyImageData',
  featuredImage___resize___base64 = 'featuredImage___resize___base64',
  featuredImage___resize___tracedSVG = 'featuredImage___resize___tracedSVG',
  featuredImage___resize___src = 'featuredImage___resize___src',
  featuredImage___resize___width = 'featuredImage___resize___width',
  featuredImage___resize___height = 'featuredImage___resize___height',
  featuredImage___resize___aspectRatio = 'featuredImage___resize___aspectRatio',
  featuredImage___parent___id = 'featuredImage___parent___id',
  featuredImage___parent___parent___id = 'featuredImage___parent___parent___id',
  featuredImage___parent___parent___children = 'featuredImage___parent___parent___children',
  featuredImage___parent___children = 'featuredImage___parent___children',
  featuredImage___parent___children___id = 'featuredImage___parent___children___id',
  featuredImage___parent___children___children = 'featuredImage___parent___children___children',
  featuredImage___parent___internal___content = 'featuredImage___parent___internal___content',
  featuredImage___parent___internal___contentDigest = 'featuredImage___parent___internal___contentDigest',
  featuredImage___parent___internal___description = 'featuredImage___parent___internal___description',
  featuredImage___parent___internal___fieldOwners = 'featuredImage___parent___internal___fieldOwners',
  featuredImage___parent___internal___ignoreType = 'featuredImage___parent___internal___ignoreType',
  featuredImage___parent___internal___mediaType = 'featuredImage___parent___internal___mediaType',
  featuredImage___parent___internal___owner = 'featuredImage___parent___internal___owner',
  featuredImage___parent___internal___type = 'featuredImage___parent___internal___type',
  featuredImage___children = 'featuredImage___children',
  featuredImage___children___id = 'featuredImage___children___id',
  featuredImage___children___parent___id = 'featuredImage___children___parent___id',
  featuredImage___children___parent___children = 'featuredImage___children___parent___children',
  featuredImage___children___children = 'featuredImage___children___children',
  featuredImage___children___children___id = 'featuredImage___children___children___id',
  featuredImage___children___children___children = 'featuredImage___children___children___children',
  featuredImage___children___internal___content = 'featuredImage___children___internal___content',
  featuredImage___children___internal___contentDigest = 'featuredImage___children___internal___contentDigest',
  featuredImage___children___internal___description = 'featuredImage___children___internal___description',
  featuredImage___children___internal___fieldOwners = 'featuredImage___children___internal___fieldOwners',
  featuredImage___children___internal___ignoreType = 'featuredImage___children___internal___ignoreType',
  featuredImage___children___internal___mediaType = 'featuredImage___children___internal___mediaType',
  featuredImage___children___internal___owner = 'featuredImage___children___internal___owner',
  featuredImage___children___internal___type = 'featuredImage___children___internal___type',
  featuredImage___internal___content = 'featuredImage___internal___content',
  featuredImage___internal___contentDigest = 'featuredImage___internal___contentDigest',
  featuredImage___internal___description = 'featuredImage___internal___description',
  featuredImage___internal___fieldOwners = 'featuredImage___internal___fieldOwners',
  featuredImage___internal___ignoreType = 'featuredImage___internal___ignoreType',
  featuredImage___internal___mediaType = 'featuredImage___internal___mediaType',
  featuredImage___internal___owner = 'featuredImage___internal___owner',
  featuredImage___internal___type = 'featuredImage___internal___type',
  childrenContentfulBlogPostExcerptTextNode = 'childrenContentfulBlogPostExcerptTextNode',
  childrenContentfulBlogPostExcerptTextNode___id = 'childrenContentfulBlogPostExcerptTextNode___id',
  childrenContentfulBlogPostExcerptTextNode___parent___id = 'childrenContentfulBlogPostExcerptTextNode___parent___id',
  childrenContentfulBlogPostExcerptTextNode___parent___parent___id = 'childrenContentfulBlogPostExcerptTextNode___parent___parent___id',
  childrenContentfulBlogPostExcerptTextNode___parent___parent___children = 'childrenContentfulBlogPostExcerptTextNode___parent___parent___children',
  childrenContentfulBlogPostExcerptTextNode___parent___children = 'childrenContentfulBlogPostExcerptTextNode___parent___children',
  childrenContentfulBlogPostExcerptTextNode___parent___children___id = 'childrenContentfulBlogPostExcerptTextNode___parent___children___id',
  childrenContentfulBlogPostExcerptTextNode___parent___children___children = 'childrenContentfulBlogPostExcerptTextNode___parent___children___children',
  childrenContentfulBlogPostExcerptTextNode___parent___internal___content = 'childrenContentfulBlogPostExcerptTextNode___parent___internal___content',
  childrenContentfulBlogPostExcerptTextNode___parent___internal___contentDigest = 'childrenContentfulBlogPostExcerptTextNode___parent___internal___contentDigest',
  childrenContentfulBlogPostExcerptTextNode___parent___internal___description = 'childrenContentfulBlogPostExcerptTextNode___parent___internal___description',
  childrenContentfulBlogPostExcerptTextNode___parent___internal___fieldOwners = 'childrenContentfulBlogPostExcerptTextNode___parent___internal___fieldOwners',
  childrenContentfulBlogPostExcerptTextNode___parent___internal___ignoreType = 'childrenContentfulBlogPostExcerptTextNode___parent___internal___ignoreType',
  childrenContentfulBlogPostExcerptTextNode___parent___internal___mediaType = 'childrenContentfulBlogPostExcerptTextNode___parent___internal___mediaType',
  childrenContentfulBlogPostExcerptTextNode___parent___internal___owner = 'childrenContentfulBlogPostExcerptTextNode___parent___internal___owner',
  childrenContentfulBlogPostExcerptTextNode___parent___internal___type = 'childrenContentfulBlogPostExcerptTextNode___parent___internal___type',
  childrenContentfulBlogPostExcerptTextNode___children = 'childrenContentfulBlogPostExcerptTextNode___children',
  childrenContentfulBlogPostExcerptTextNode___children___id = 'childrenContentfulBlogPostExcerptTextNode___children___id',
  childrenContentfulBlogPostExcerptTextNode___children___parent___id = 'childrenContentfulBlogPostExcerptTextNode___children___parent___id',
  childrenContentfulBlogPostExcerptTextNode___children___parent___children = 'childrenContentfulBlogPostExcerptTextNode___children___parent___children',
  childrenContentfulBlogPostExcerptTextNode___children___children = 'childrenContentfulBlogPostExcerptTextNode___children___children',
  childrenContentfulBlogPostExcerptTextNode___children___children___id = 'childrenContentfulBlogPostExcerptTextNode___children___children___id',
  childrenContentfulBlogPostExcerptTextNode___children___children___children = 'childrenContentfulBlogPostExcerptTextNode___children___children___children',
  childrenContentfulBlogPostExcerptTextNode___children___internal___content = 'childrenContentfulBlogPostExcerptTextNode___children___internal___content',
  childrenContentfulBlogPostExcerptTextNode___children___internal___contentDigest = 'childrenContentfulBlogPostExcerptTextNode___children___internal___contentDigest',
  childrenContentfulBlogPostExcerptTextNode___children___internal___description = 'childrenContentfulBlogPostExcerptTextNode___children___internal___description',
  childrenContentfulBlogPostExcerptTextNode___children___internal___fieldOwners = 'childrenContentfulBlogPostExcerptTextNode___children___internal___fieldOwners',
  childrenContentfulBlogPostExcerptTextNode___children___internal___ignoreType = 'childrenContentfulBlogPostExcerptTextNode___children___internal___ignoreType',
  childrenContentfulBlogPostExcerptTextNode___children___internal___mediaType = 'childrenContentfulBlogPostExcerptTextNode___children___internal___mediaType',
  childrenContentfulBlogPostExcerptTextNode___children___internal___owner = 'childrenContentfulBlogPostExcerptTextNode___children___internal___owner',
  childrenContentfulBlogPostExcerptTextNode___children___internal___type = 'childrenContentfulBlogPostExcerptTextNode___children___internal___type',
  childrenContentfulBlogPostExcerptTextNode___internal___content = 'childrenContentfulBlogPostExcerptTextNode___internal___content',
  childrenContentfulBlogPostExcerptTextNode___internal___contentDigest = 'childrenContentfulBlogPostExcerptTextNode___internal___contentDigest',
  childrenContentfulBlogPostExcerptTextNode___internal___description = 'childrenContentfulBlogPostExcerptTextNode___internal___description',
  childrenContentfulBlogPostExcerptTextNode___internal___fieldOwners = 'childrenContentfulBlogPostExcerptTextNode___internal___fieldOwners',
  childrenContentfulBlogPostExcerptTextNode___internal___ignoreType = 'childrenContentfulBlogPostExcerptTextNode___internal___ignoreType',
  childrenContentfulBlogPostExcerptTextNode___internal___mediaType = 'childrenContentfulBlogPostExcerptTextNode___internal___mediaType',
  childrenContentfulBlogPostExcerptTextNode___internal___owner = 'childrenContentfulBlogPostExcerptTextNode___internal___owner',
  childrenContentfulBlogPostExcerptTextNode___internal___type = 'childrenContentfulBlogPostExcerptTextNode___internal___type',
  childrenContentfulBlogPostExcerptTextNode___excerpt = 'childrenContentfulBlogPostExcerptTextNode___excerpt',
  childrenContentfulBlogPostExcerptTextNode___sys___type = 'childrenContentfulBlogPostExcerptTextNode___sys___type',
  childContentfulBlogPostExcerptTextNode___id = 'childContentfulBlogPostExcerptTextNode___id',
  childContentfulBlogPostExcerptTextNode___parent___id = 'childContentfulBlogPostExcerptTextNode___parent___id',
  childContentfulBlogPostExcerptTextNode___parent___parent___id = 'childContentfulBlogPostExcerptTextNode___parent___parent___id',
  childContentfulBlogPostExcerptTextNode___parent___parent___children = 'childContentfulBlogPostExcerptTextNode___parent___parent___children',
  childContentfulBlogPostExcerptTextNode___parent___children = 'childContentfulBlogPostExcerptTextNode___parent___children',
  childContentfulBlogPostExcerptTextNode___parent___children___id = 'childContentfulBlogPostExcerptTextNode___parent___children___id',
  childContentfulBlogPostExcerptTextNode___parent___children___children = 'childContentfulBlogPostExcerptTextNode___parent___children___children',
  childContentfulBlogPostExcerptTextNode___parent___internal___content = 'childContentfulBlogPostExcerptTextNode___parent___internal___content',
  childContentfulBlogPostExcerptTextNode___parent___internal___contentDigest = 'childContentfulBlogPostExcerptTextNode___parent___internal___contentDigest',
  childContentfulBlogPostExcerptTextNode___parent___internal___description = 'childContentfulBlogPostExcerptTextNode___parent___internal___description',
  childContentfulBlogPostExcerptTextNode___parent___internal___fieldOwners = 'childContentfulBlogPostExcerptTextNode___parent___internal___fieldOwners',
  childContentfulBlogPostExcerptTextNode___parent___internal___ignoreType = 'childContentfulBlogPostExcerptTextNode___parent___internal___ignoreType',
  childContentfulBlogPostExcerptTextNode___parent___internal___mediaType = 'childContentfulBlogPostExcerptTextNode___parent___internal___mediaType',
  childContentfulBlogPostExcerptTextNode___parent___internal___owner = 'childContentfulBlogPostExcerptTextNode___parent___internal___owner',
  childContentfulBlogPostExcerptTextNode___parent___internal___type = 'childContentfulBlogPostExcerptTextNode___parent___internal___type',
  childContentfulBlogPostExcerptTextNode___children = 'childContentfulBlogPostExcerptTextNode___children',
  childContentfulBlogPostExcerptTextNode___children___id = 'childContentfulBlogPostExcerptTextNode___children___id',
  childContentfulBlogPostExcerptTextNode___children___parent___id = 'childContentfulBlogPostExcerptTextNode___children___parent___id',
  childContentfulBlogPostExcerptTextNode___children___parent___children = 'childContentfulBlogPostExcerptTextNode___children___parent___children',
  childContentfulBlogPostExcerptTextNode___children___children = 'childContentfulBlogPostExcerptTextNode___children___children',
  childContentfulBlogPostExcerptTextNode___children___children___id = 'childContentfulBlogPostExcerptTextNode___children___children___id',
  childContentfulBlogPostExcerptTextNode___children___children___children = 'childContentfulBlogPostExcerptTextNode___children___children___children',
  childContentfulBlogPostExcerptTextNode___children___internal___content = 'childContentfulBlogPostExcerptTextNode___children___internal___content',
  childContentfulBlogPostExcerptTextNode___children___internal___contentDigest = 'childContentfulBlogPostExcerptTextNode___children___internal___contentDigest',
  childContentfulBlogPostExcerptTextNode___children___internal___description = 'childContentfulBlogPostExcerptTextNode___children___internal___description',
  childContentfulBlogPostExcerptTextNode___children___internal___fieldOwners = 'childContentfulBlogPostExcerptTextNode___children___internal___fieldOwners',
  childContentfulBlogPostExcerptTextNode___children___internal___ignoreType = 'childContentfulBlogPostExcerptTextNode___children___internal___ignoreType',
  childContentfulBlogPostExcerptTextNode___children___internal___mediaType = 'childContentfulBlogPostExcerptTextNode___children___internal___mediaType',
  childContentfulBlogPostExcerptTextNode___children___internal___owner = 'childContentfulBlogPostExcerptTextNode___children___internal___owner',
  childContentfulBlogPostExcerptTextNode___children___internal___type = 'childContentfulBlogPostExcerptTextNode___children___internal___type',
  childContentfulBlogPostExcerptTextNode___internal___content = 'childContentfulBlogPostExcerptTextNode___internal___content',
  childContentfulBlogPostExcerptTextNode___internal___contentDigest = 'childContentfulBlogPostExcerptTextNode___internal___contentDigest',
  childContentfulBlogPostExcerptTextNode___internal___description = 'childContentfulBlogPostExcerptTextNode___internal___description',
  childContentfulBlogPostExcerptTextNode___internal___fieldOwners = 'childContentfulBlogPostExcerptTextNode___internal___fieldOwners',
  childContentfulBlogPostExcerptTextNode___internal___ignoreType = 'childContentfulBlogPostExcerptTextNode___internal___ignoreType',
  childContentfulBlogPostExcerptTextNode___internal___mediaType = 'childContentfulBlogPostExcerptTextNode___internal___mediaType',
  childContentfulBlogPostExcerptTextNode___internal___owner = 'childContentfulBlogPostExcerptTextNode___internal___owner',
  childContentfulBlogPostExcerptTextNode___internal___type = 'childContentfulBlogPostExcerptTextNode___internal___type',
  childContentfulBlogPostExcerptTextNode___excerpt = 'childContentfulBlogPostExcerptTextNode___excerpt',
  childContentfulBlogPostExcerptTextNode___sys___type = 'childContentfulBlogPostExcerptTextNode___sys___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulBlogPostFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  published?: Maybe<DateQueryOperatorInput>;
  content?: Maybe<ContentfulBlogPostContentFilterInput>;
  seoTitle?: Maybe<StringQueryOperatorInput>;
  seoDescription?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<ContentfulAuthorFilterInput>;
  excerpt?: Maybe<ContentfulBlogPostExcerptTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  featuredImage?: Maybe<ContentfulAssetFilterInput>;
  childrenContentfulBlogPostExcerptTextNode?: Maybe<ContentfulBlogPostExcerptTextNodeFilterListInput>;
  childContentfulBlogPostExcerptTextNode?: Maybe<ContentfulBlogPostExcerptTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulBlogPostFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  __typename?: 'ContentfulBlogPostGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  __typename?: 'ContentfulBlogPostSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogPostSysContentType>;
};

export type ContentfulBlogPostSysContentType = {
  __typename?: 'ContentfulBlogPostSysContentType';
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  __typename?: 'ContentfulBlogPostSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge';
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  name = 'name',
  displayField = 'displayField',
  description = 'description',
  sys___type = 'sys___type'
}

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  __typename?: 'ContentfulContentTypeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulEntryConnection = {
  __typename?: 'ContentfulEntryConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  __typename?: 'ContentfulEntryEdge';
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulEntryGroupConnection = {
  __typename?: 'ContentfulEntryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  __typename?: 'ContentfulFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  __typename?: 'ContentfulFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export enum ContentfulImageCropFocus {
  TOP = 'TOP',
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM = 'BOTTOM',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  FACE = 'FACE',
  FACES = 'FACES',
  CENTER = 'CENTER'
}

export enum ContentfulImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP'
}

export type ContentfulMicroContent = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulMicroContent';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMicroContentSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulMicroContentCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulMicroContentUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulMicroContentConnection = {
  __typename?: 'ContentfulMicroContentConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMicroContentEdge>;
  nodes: Array<ContentfulMicroContent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMicroContentGroupConnection>;
};


export type ContentfulMicroContentConnectionDistinctArgs = {
  field: ContentfulMicroContentFieldsEnum;
};


export type ContentfulMicroContentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMicroContentFieldsEnum;
};

export type ContentfulMicroContentEdge = {
  __typename?: 'ContentfulMicroContentEdge';
  next?: Maybe<ContentfulMicroContent>;
  node: ContentfulMicroContent;
  previous?: Maybe<ContentfulMicroContent>;
};

export enum ContentfulMicroContentFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  key = 'key',
  value = 'value',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulMicroContentFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMicroContentSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulMicroContentGroupConnection = {
  __typename?: 'ContentfulMicroContentGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMicroContentEdge>;
  nodes: Array<ContentfulMicroContent>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMicroContentSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMicroContentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMicroContentSys = {
  __typename?: 'ContentfulMicroContentSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulMicroContentSysContentType>;
};

export type ContentfulMicroContentSysContentType = {
  __typename?: 'ContentfulMicroContentSysContentType';
  sys?: Maybe<ContentfulMicroContentSysContentTypeSys>;
};

export type ContentfulMicroContentSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMicroContentSysContentTypeSysFilterInput>;
};

export type ContentfulMicroContentSysContentTypeSys = {
  __typename?: 'ContentfulMicroContentSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulMicroContentSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMicroContentSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulMicroContentSysContentTypeFilterInput>;
};

export type ContentfulNews = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulNews';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  published?: Maybe<Scalars['Date']>;
  content?: Maybe<ContentfulNewsContent>;
  featuredImage?: Maybe<ContentfulAsset>;
  excerpt?: Maybe<ContentfulNewsExcerptTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulNewsSys>;
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  author?: Maybe<ContentfulAuthor>;
  /** Returns all children nodes filtered by type contentfulNewsExcerptTextNode */
  childrenContentfulNewsExcerptTextNode?: Maybe<Array<Maybe<ContentfulNewsExcerptTextNode>>>;
  /** Returns the first child node of type contentfulNewsExcerptTextNode or null if there are no children of given type on this node */
  childContentfulNewsExcerptTextNode?: Maybe<ContentfulNewsExcerptTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulNewsPublishedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulNewsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulNewsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulNewsConnection = {
  __typename?: 'ContentfulNewsConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNewsEdge>;
  nodes: Array<ContentfulNews>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulNewsGroupConnection>;
};


export type ContentfulNewsConnectionDistinctArgs = {
  field: ContentfulNewsFieldsEnum;
};


export type ContentfulNewsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulNewsFieldsEnum;
};

export type ContentfulNewsContent = {
  __typename?: 'ContentfulNewsContent';
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulNewsContentFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNewsEdge = {
  __typename?: 'ContentfulNewsEdge';
  next?: Maybe<ContentfulNews>;
  node: ContentfulNews;
  previous?: Maybe<ContentfulNews>;
};

export enum ContentfulNewsFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  slug = 'slug',
  featured = 'featured',
  published = 'published',
  content___raw = 'content___raw',
  featuredImage___contentful_id = 'featuredImage___contentful_id',
  featuredImage___id = 'featuredImage___id',
  featuredImage___spaceId = 'featuredImage___spaceId',
  featuredImage___createdAt = 'featuredImage___createdAt',
  featuredImage___updatedAt = 'featuredImage___updatedAt',
  featuredImage___file___url = 'featuredImage___file___url',
  featuredImage___file___details___size = 'featuredImage___file___details___size',
  featuredImage___file___fileName = 'featuredImage___file___fileName',
  featuredImage___file___contentType = 'featuredImage___file___contentType',
  featuredImage___title = 'featuredImage___title',
  featuredImage___description = 'featuredImage___description',
  featuredImage___node_locale = 'featuredImage___node_locale',
  featuredImage___sys___type = 'featuredImage___sys___type',
  featuredImage___sys___revision = 'featuredImage___sys___revision',
  featuredImage___fixed___base64 = 'featuredImage___fixed___base64',
  featuredImage___fixed___tracedSVG = 'featuredImage___fixed___tracedSVG',
  featuredImage___fixed___aspectRatio = 'featuredImage___fixed___aspectRatio',
  featuredImage___fixed___width = 'featuredImage___fixed___width',
  featuredImage___fixed___height = 'featuredImage___fixed___height',
  featuredImage___fixed___src = 'featuredImage___fixed___src',
  featuredImage___fixed___srcSet = 'featuredImage___fixed___srcSet',
  featuredImage___fixed___srcWebp = 'featuredImage___fixed___srcWebp',
  featuredImage___fixed___srcSetWebp = 'featuredImage___fixed___srcSetWebp',
  featuredImage___fluid___base64 = 'featuredImage___fluid___base64',
  featuredImage___fluid___tracedSVG = 'featuredImage___fluid___tracedSVG',
  featuredImage___fluid___aspectRatio = 'featuredImage___fluid___aspectRatio',
  featuredImage___fluid___src = 'featuredImage___fluid___src',
  featuredImage___fluid___srcSet = 'featuredImage___fluid___srcSet',
  featuredImage___fluid___srcWebp = 'featuredImage___fluid___srcWebp',
  featuredImage___fluid___srcSetWebp = 'featuredImage___fluid___srcSetWebp',
  featuredImage___fluid___sizes = 'featuredImage___fluid___sizes',
  featuredImage___gatsbyImageData = 'featuredImage___gatsbyImageData',
  featuredImage___resize___base64 = 'featuredImage___resize___base64',
  featuredImage___resize___tracedSVG = 'featuredImage___resize___tracedSVG',
  featuredImage___resize___src = 'featuredImage___resize___src',
  featuredImage___resize___width = 'featuredImage___resize___width',
  featuredImage___resize___height = 'featuredImage___resize___height',
  featuredImage___resize___aspectRatio = 'featuredImage___resize___aspectRatio',
  featuredImage___parent___id = 'featuredImage___parent___id',
  featuredImage___parent___parent___id = 'featuredImage___parent___parent___id',
  featuredImage___parent___parent___children = 'featuredImage___parent___parent___children',
  featuredImage___parent___children = 'featuredImage___parent___children',
  featuredImage___parent___children___id = 'featuredImage___parent___children___id',
  featuredImage___parent___children___children = 'featuredImage___parent___children___children',
  featuredImage___parent___internal___content = 'featuredImage___parent___internal___content',
  featuredImage___parent___internal___contentDigest = 'featuredImage___parent___internal___contentDigest',
  featuredImage___parent___internal___description = 'featuredImage___parent___internal___description',
  featuredImage___parent___internal___fieldOwners = 'featuredImage___parent___internal___fieldOwners',
  featuredImage___parent___internal___ignoreType = 'featuredImage___parent___internal___ignoreType',
  featuredImage___parent___internal___mediaType = 'featuredImage___parent___internal___mediaType',
  featuredImage___parent___internal___owner = 'featuredImage___parent___internal___owner',
  featuredImage___parent___internal___type = 'featuredImage___parent___internal___type',
  featuredImage___children = 'featuredImage___children',
  featuredImage___children___id = 'featuredImage___children___id',
  featuredImage___children___parent___id = 'featuredImage___children___parent___id',
  featuredImage___children___parent___children = 'featuredImage___children___parent___children',
  featuredImage___children___children = 'featuredImage___children___children',
  featuredImage___children___children___id = 'featuredImage___children___children___id',
  featuredImage___children___children___children = 'featuredImage___children___children___children',
  featuredImage___children___internal___content = 'featuredImage___children___internal___content',
  featuredImage___children___internal___contentDigest = 'featuredImage___children___internal___contentDigest',
  featuredImage___children___internal___description = 'featuredImage___children___internal___description',
  featuredImage___children___internal___fieldOwners = 'featuredImage___children___internal___fieldOwners',
  featuredImage___children___internal___ignoreType = 'featuredImage___children___internal___ignoreType',
  featuredImage___children___internal___mediaType = 'featuredImage___children___internal___mediaType',
  featuredImage___children___internal___owner = 'featuredImage___children___internal___owner',
  featuredImage___children___internal___type = 'featuredImage___children___internal___type',
  featuredImage___internal___content = 'featuredImage___internal___content',
  featuredImage___internal___contentDigest = 'featuredImage___internal___contentDigest',
  featuredImage___internal___description = 'featuredImage___internal___description',
  featuredImage___internal___fieldOwners = 'featuredImage___internal___fieldOwners',
  featuredImage___internal___ignoreType = 'featuredImage___internal___ignoreType',
  featuredImage___internal___mediaType = 'featuredImage___internal___mediaType',
  featuredImage___internal___owner = 'featuredImage___internal___owner',
  featuredImage___internal___type = 'featuredImage___internal___type',
  excerpt___id = 'excerpt___id',
  excerpt___parent___id = 'excerpt___parent___id',
  excerpt___parent___parent___id = 'excerpt___parent___parent___id',
  excerpt___parent___parent___children = 'excerpt___parent___parent___children',
  excerpt___parent___children = 'excerpt___parent___children',
  excerpt___parent___children___id = 'excerpt___parent___children___id',
  excerpt___parent___children___children = 'excerpt___parent___children___children',
  excerpt___parent___internal___content = 'excerpt___parent___internal___content',
  excerpt___parent___internal___contentDigest = 'excerpt___parent___internal___contentDigest',
  excerpt___parent___internal___description = 'excerpt___parent___internal___description',
  excerpt___parent___internal___fieldOwners = 'excerpt___parent___internal___fieldOwners',
  excerpt___parent___internal___ignoreType = 'excerpt___parent___internal___ignoreType',
  excerpt___parent___internal___mediaType = 'excerpt___parent___internal___mediaType',
  excerpt___parent___internal___owner = 'excerpt___parent___internal___owner',
  excerpt___parent___internal___type = 'excerpt___parent___internal___type',
  excerpt___children = 'excerpt___children',
  excerpt___children___id = 'excerpt___children___id',
  excerpt___children___parent___id = 'excerpt___children___parent___id',
  excerpt___children___parent___children = 'excerpt___children___parent___children',
  excerpt___children___children = 'excerpt___children___children',
  excerpt___children___children___id = 'excerpt___children___children___id',
  excerpt___children___children___children = 'excerpt___children___children___children',
  excerpt___children___internal___content = 'excerpt___children___internal___content',
  excerpt___children___internal___contentDigest = 'excerpt___children___internal___contentDigest',
  excerpt___children___internal___description = 'excerpt___children___internal___description',
  excerpt___children___internal___fieldOwners = 'excerpt___children___internal___fieldOwners',
  excerpt___children___internal___ignoreType = 'excerpt___children___internal___ignoreType',
  excerpt___children___internal___mediaType = 'excerpt___children___internal___mediaType',
  excerpt___children___internal___owner = 'excerpt___children___internal___owner',
  excerpt___children___internal___type = 'excerpt___children___internal___type',
  excerpt___internal___content = 'excerpt___internal___content',
  excerpt___internal___contentDigest = 'excerpt___internal___contentDigest',
  excerpt___internal___description = 'excerpt___internal___description',
  excerpt___internal___fieldOwners = 'excerpt___internal___fieldOwners',
  excerpt___internal___ignoreType = 'excerpt___internal___ignoreType',
  excerpt___internal___mediaType = 'excerpt___internal___mediaType',
  excerpt___internal___owner = 'excerpt___internal___owner',
  excerpt___internal___type = 'excerpt___internal___type',
  excerpt___excerpt = 'excerpt___excerpt',
  excerpt___sys___type = 'excerpt___sys___type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  seoTitle = 'seoTitle',
  seoDescription = 'seoDescription',
  author___contentful_id = 'author___contentful_id',
  author___id = 'author___id',
  author___node_locale = 'author___node_locale',
  author___name = 'author___name',
  author___news = 'author___news',
  author___news___contentful_id = 'author___news___contentful_id',
  author___news___id = 'author___news___id',
  author___news___node_locale = 'author___news___node_locale',
  author___news___title = 'author___news___title',
  author___news___slug = 'author___news___slug',
  author___news___featured = 'author___news___featured',
  author___news___published = 'author___news___published',
  author___news___content___raw = 'author___news___content___raw',
  author___news___featuredImage___contentful_id = 'author___news___featuredImage___contentful_id',
  author___news___featuredImage___id = 'author___news___featuredImage___id',
  author___news___featuredImage___spaceId = 'author___news___featuredImage___spaceId',
  author___news___featuredImage___createdAt = 'author___news___featuredImage___createdAt',
  author___news___featuredImage___updatedAt = 'author___news___featuredImage___updatedAt',
  author___news___featuredImage___title = 'author___news___featuredImage___title',
  author___news___featuredImage___description = 'author___news___featuredImage___description',
  author___news___featuredImage___node_locale = 'author___news___featuredImage___node_locale',
  author___news___featuredImage___gatsbyImageData = 'author___news___featuredImage___gatsbyImageData',
  author___news___featuredImage___children = 'author___news___featuredImage___children',
  author___news___excerpt___id = 'author___news___excerpt___id',
  author___news___excerpt___children = 'author___news___excerpt___children',
  author___news___excerpt___excerpt = 'author___news___excerpt___excerpt',
  author___news___spaceId = 'author___news___spaceId',
  author___news___createdAt = 'author___news___createdAt',
  author___news___updatedAt = 'author___news___updatedAt',
  author___news___sys___type = 'author___news___sys___type',
  author___news___sys___revision = 'author___news___sys___revision',
  author___news___seoTitle = 'author___news___seoTitle',
  author___news___seoDescription = 'author___news___seoDescription',
  author___news___author___contentful_id = 'author___news___author___contentful_id',
  author___news___author___id = 'author___news___author___id',
  author___news___author___node_locale = 'author___news___author___node_locale',
  author___news___author___name = 'author___news___author___name',
  author___news___author___news = 'author___news___author___news',
  author___news___author___spaceId = 'author___news___author___spaceId',
  author___news___author___createdAt = 'author___news___author___createdAt',
  author___news___author___updatedAt = 'author___news___author___updatedAt',
  author___news___author___blog_post = 'author___news___author___blog_post',
  author___news___author___childrenContentfulAuthorBiographyTextNode = 'author___news___author___childrenContentfulAuthorBiographyTextNode',
  author___news___author___children = 'author___news___author___children',
  author___news___childrenContentfulNewsExcerptTextNode = 'author___news___childrenContentfulNewsExcerptTextNode',
  author___news___childrenContentfulNewsExcerptTextNode___id = 'author___news___childrenContentfulNewsExcerptTextNode___id',
  author___news___childrenContentfulNewsExcerptTextNode___children = 'author___news___childrenContentfulNewsExcerptTextNode___children',
  author___news___childrenContentfulNewsExcerptTextNode___excerpt = 'author___news___childrenContentfulNewsExcerptTextNode___excerpt',
  author___news___childContentfulNewsExcerptTextNode___id = 'author___news___childContentfulNewsExcerptTextNode___id',
  author___news___childContentfulNewsExcerptTextNode___children = 'author___news___childContentfulNewsExcerptTextNode___children',
  author___news___childContentfulNewsExcerptTextNode___excerpt = 'author___news___childContentfulNewsExcerptTextNode___excerpt',
  author___news___parent___id = 'author___news___parent___id',
  author___news___parent___children = 'author___news___parent___children',
  author___news___children = 'author___news___children',
  author___news___children___id = 'author___news___children___id',
  author___news___children___children = 'author___news___children___children',
  author___news___internal___content = 'author___news___internal___content',
  author___news___internal___contentDigest = 'author___news___internal___contentDigest',
  author___news___internal___description = 'author___news___internal___description',
  author___news___internal___fieldOwners = 'author___news___internal___fieldOwners',
  author___news___internal___ignoreType = 'author___news___internal___ignoreType',
  author___news___internal___mediaType = 'author___news___internal___mediaType',
  author___news___internal___owner = 'author___news___internal___owner',
  author___news___internal___type = 'author___news___internal___type',
  author___biography___id = 'author___biography___id',
  author___biography___parent___id = 'author___biography___parent___id',
  author___biography___parent___children = 'author___biography___parent___children',
  author___biography___children = 'author___biography___children',
  author___biography___children___id = 'author___biography___children___id',
  author___biography___children___children = 'author___biography___children___children',
  author___biography___internal___content = 'author___biography___internal___content',
  author___biography___internal___contentDigest = 'author___biography___internal___contentDigest',
  author___biography___internal___description = 'author___biography___internal___description',
  author___biography___internal___fieldOwners = 'author___biography___internal___fieldOwners',
  author___biography___internal___ignoreType = 'author___biography___internal___ignoreType',
  author___biography___internal___mediaType = 'author___biography___internal___mediaType',
  author___biography___internal___owner = 'author___biography___internal___owner',
  author___biography___internal___type = 'author___biography___internal___type',
  author___biography___biography = 'author___biography___biography',
  author___biography___sys___type = 'author___biography___sys___type',
  author___spaceId = 'author___spaceId',
  author___createdAt = 'author___createdAt',
  author___updatedAt = 'author___updatedAt',
  author___sys___type = 'author___sys___type',
  author___sys___revision = 'author___sys___revision',
  author___blog_post = 'author___blog_post',
  author___blog_post___contentful_id = 'author___blog_post___contentful_id',
  author___blog_post___id = 'author___blog_post___id',
  author___blog_post___node_locale = 'author___blog_post___node_locale',
  author___blog_post___title = 'author___blog_post___title',
  author___blog_post___slug = 'author___blog_post___slug',
  author___blog_post___featured = 'author___blog_post___featured',
  author___blog_post___published = 'author___blog_post___published',
  author___blog_post___content___raw = 'author___blog_post___content___raw',
  author___blog_post___content___references = 'author___blog_post___content___references',
  author___blog_post___seoTitle = 'author___blog_post___seoTitle',
  author___blog_post___seoDescription = 'author___blog_post___seoDescription',
  author___blog_post___author___contentful_id = 'author___blog_post___author___contentful_id',
  author___blog_post___author___id = 'author___blog_post___author___id',
  author___blog_post___author___node_locale = 'author___blog_post___author___node_locale',
  author___blog_post___author___name = 'author___blog_post___author___name',
  author___blog_post___author___news = 'author___blog_post___author___news',
  author___blog_post___author___spaceId = 'author___blog_post___author___spaceId',
  author___blog_post___author___createdAt = 'author___blog_post___author___createdAt',
  author___blog_post___author___updatedAt = 'author___blog_post___author___updatedAt',
  author___blog_post___author___blog_post = 'author___blog_post___author___blog_post',
  author___blog_post___author___childrenContentfulAuthorBiographyTextNode = 'author___blog_post___author___childrenContentfulAuthorBiographyTextNode',
  author___blog_post___author___children = 'author___blog_post___author___children',
  author___blog_post___excerpt___id = 'author___blog_post___excerpt___id',
  author___blog_post___excerpt___children = 'author___blog_post___excerpt___children',
  author___blog_post___excerpt___excerpt = 'author___blog_post___excerpt___excerpt',
  author___blog_post___spaceId = 'author___blog_post___spaceId',
  author___blog_post___createdAt = 'author___blog_post___createdAt',
  author___blog_post___updatedAt = 'author___blog_post___updatedAt',
  author___blog_post___sys___type = 'author___blog_post___sys___type',
  author___blog_post___sys___revision = 'author___blog_post___sys___revision',
  author___blog_post___featuredImage___contentful_id = 'author___blog_post___featuredImage___contentful_id',
  author___blog_post___featuredImage___id = 'author___blog_post___featuredImage___id',
  author___blog_post___featuredImage___spaceId = 'author___blog_post___featuredImage___spaceId',
  author___blog_post___featuredImage___createdAt = 'author___blog_post___featuredImage___createdAt',
  author___blog_post___featuredImage___updatedAt = 'author___blog_post___featuredImage___updatedAt',
  author___blog_post___featuredImage___title = 'author___blog_post___featuredImage___title',
  author___blog_post___featuredImage___description = 'author___blog_post___featuredImage___description',
  author___blog_post___featuredImage___node_locale = 'author___blog_post___featuredImage___node_locale',
  author___blog_post___featuredImage___gatsbyImageData = 'author___blog_post___featuredImage___gatsbyImageData',
  author___blog_post___featuredImage___children = 'author___blog_post___featuredImage___children',
  author___blog_post___childrenContentfulBlogPostExcerptTextNode = 'author___blog_post___childrenContentfulBlogPostExcerptTextNode',
  author___blog_post___childrenContentfulBlogPostExcerptTextNode___id = 'author___blog_post___childrenContentfulBlogPostExcerptTextNode___id',
  author___blog_post___childrenContentfulBlogPostExcerptTextNode___children = 'author___blog_post___childrenContentfulBlogPostExcerptTextNode___children',
  author___blog_post___childrenContentfulBlogPostExcerptTextNode___excerpt = 'author___blog_post___childrenContentfulBlogPostExcerptTextNode___excerpt',
  author___blog_post___childContentfulBlogPostExcerptTextNode___id = 'author___blog_post___childContentfulBlogPostExcerptTextNode___id',
  author___blog_post___childContentfulBlogPostExcerptTextNode___children = 'author___blog_post___childContentfulBlogPostExcerptTextNode___children',
  author___blog_post___childContentfulBlogPostExcerptTextNode___excerpt = 'author___blog_post___childContentfulBlogPostExcerptTextNode___excerpt',
  author___blog_post___parent___id = 'author___blog_post___parent___id',
  author___blog_post___parent___children = 'author___blog_post___parent___children',
  author___blog_post___children = 'author___blog_post___children',
  author___blog_post___children___id = 'author___blog_post___children___id',
  author___blog_post___children___children = 'author___blog_post___children___children',
  author___blog_post___internal___content = 'author___blog_post___internal___content',
  author___blog_post___internal___contentDigest = 'author___blog_post___internal___contentDigest',
  author___blog_post___internal___description = 'author___blog_post___internal___description',
  author___blog_post___internal___fieldOwners = 'author___blog_post___internal___fieldOwners',
  author___blog_post___internal___ignoreType = 'author___blog_post___internal___ignoreType',
  author___blog_post___internal___mediaType = 'author___blog_post___internal___mediaType',
  author___blog_post___internal___owner = 'author___blog_post___internal___owner',
  author___blog_post___internal___type = 'author___blog_post___internal___type',
  author___childrenContentfulAuthorBiographyTextNode = 'author___childrenContentfulAuthorBiographyTextNode',
  author___childrenContentfulAuthorBiographyTextNode___id = 'author___childrenContentfulAuthorBiographyTextNode___id',
  author___childrenContentfulAuthorBiographyTextNode___parent___id = 'author___childrenContentfulAuthorBiographyTextNode___parent___id',
  author___childrenContentfulAuthorBiographyTextNode___parent___children = 'author___childrenContentfulAuthorBiographyTextNode___parent___children',
  author___childrenContentfulAuthorBiographyTextNode___children = 'author___childrenContentfulAuthorBiographyTextNode___children',
  author___childrenContentfulAuthorBiographyTextNode___children___id = 'author___childrenContentfulAuthorBiographyTextNode___children___id',
  author___childrenContentfulAuthorBiographyTextNode___children___children = 'author___childrenContentfulAuthorBiographyTextNode___children___children',
  author___childrenContentfulAuthorBiographyTextNode___internal___content = 'author___childrenContentfulAuthorBiographyTextNode___internal___content',
  author___childrenContentfulAuthorBiographyTextNode___internal___contentDigest = 'author___childrenContentfulAuthorBiographyTextNode___internal___contentDigest',
  author___childrenContentfulAuthorBiographyTextNode___internal___description = 'author___childrenContentfulAuthorBiographyTextNode___internal___description',
  author___childrenContentfulAuthorBiographyTextNode___internal___fieldOwners = 'author___childrenContentfulAuthorBiographyTextNode___internal___fieldOwners',
  author___childrenContentfulAuthorBiographyTextNode___internal___ignoreType = 'author___childrenContentfulAuthorBiographyTextNode___internal___ignoreType',
  author___childrenContentfulAuthorBiographyTextNode___internal___mediaType = 'author___childrenContentfulAuthorBiographyTextNode___internal___mediaType',
  author___childrenContentfulAuthorBiographyTextNode___internal___owner = 'author___childrenContentfulAuthorBiographyTextNode___internal___owner',
  author___childrenContentfulAuthorBiographyTextNode___internal___type = 'author___childrenContentfulAuthorBiographyTextNode___internal___type',
  author___childrenContentfulAuthorBiographyTextNode___biography = 'author___childrenContentfulAuthorBiographyTextNode___biography',
  author___childrenContentfulAuthorBiographyTextNode___sys___type = 'author___childrenContentfulAuthorBiographyTextNode___sys___type',
  author___childContentfulAuthorBiographyTextNode___id = 'author___childContentfulAuthorBiographyTextNode___id',
  author___childContentfulAuthorBiographyTextNode___parent___id = 'author___childContentfulAuthorBiographyTextNode___parent___id',
  author___childContentfulAuthorBiographyTextNode___parent___children = 'author___childContentfulAuthorBiographyTextNode___parent___children',
  author___childContentfulAuthorBiographyTextNode___children = 'author___childContentfulAuthorBiographyTextNode___children',
  author___childContentfulAuthorBiographyTextNode___children___id = 'author___childContentfulAuthorBiographyTextNode___children___id',
  author___childContentfulAuthorBiographyTextNode___children___children = 'author___childContentfulAuthorBiographyTextNode___children___children',
  author___childContentfulAuthorBiographyTextNode___internal___content = 'author___childContentfulAuthorBiographyTextNode___internal___content',
  author___childContentfulAuthorBiographyTextNode___internal___contentDigest = 'author___childContentfulAuthorBiographyTextNode___internal___contentDigest',
  author___childContentfulAuthorBiographyTextNode___internal___description = 'author___childContentfulAuthorBiographyTextNode___internal___description',
  author___childContentfulAuthorBiographyTextNode___internal___fieldOwners = 'author___childContentfulAuthorBiographyTextNode___internal___fieldOwners',
  author___childContentfulAuthorBiographyTextNode___internal___ignoreType = 'author___childContentfulAuthorBiographyTextNode___internal___ignoreType',
  author___childContentfulAuthorBiographyTextNode___internal___mediaType = 'author___childContentfulAuthorBiographyTextNode___internal___mediaType',
  author___childContentfulAuthorBiographyTextNode___internal___owner = 'author___childContentfulAuthorBiographyTextNode___internal___owner',
  author___childContentfulAuthorBiographyTextNode___internal___type = 'author___childContentfulAuthorBiographyTextNode___internal___type',
  author___childContentfulAuthorBiographyTextNode___biography = 'author___childContentfulAuthorBiographyTextNode___biography',
  author___childContentfulAuthorBiographyTextNode___sys___type = 'author___childContentfulAuthorBiographyTextNode___sys___type',
  author___parent___id = 'author___parent___id',
  author___parent___parent___id = 'author___parent___parent___id',
  author___parent___parent___children = 'author___parent___parent___children',
  author___parent___children = 'author___parent___children',
  author___parent___children___id = 'author___parent___children___id',
  author___parent___children___children = 'author___parent___children___children',
  author___parent___internal___content = 'author___parent___internal___content',
  author___parent___internal___contentDigest = 'author___parent___internal___contentDigest',
  author___parent___internal___description = 'author___parent___internal___description',
  author___parent___internal___fieldOwners = 'author___parent___internal___fieldOwners',
  author___parent___internal___ignoreType = 'author___parent___internal___ignoreType',
  author___parent___internal___mediaType = 'author___parent___internal___mediaType',
  author___parent___internal___owner = 'author___parent___internal___owner',
  author___parent___internal___type = 'author___parent___internal___type',
  author___children = 'author___children',
  author___children___id = 'author___children___id',
  author___children___parent___id = 'author___children___parent___id',
  author___children___parent___children = 'author___children___parent___children',
  author___children___children = 'author___children___children',
  author___children___children___id = 'author___children___children___id',
  author___children___children___children = 'author___children___children___children',
  author___children___internal___content = 'author___children___internal___content',
  author___children___internal___contentDigest = 'author___children___internal___contentDigest',
  author___children___internal___description = 'author___children___internal___description',
  author___children___internal___fieldOwners = 'author___children___internal___fieldOwners',
  author___children___internal___ignoreType = 'author___children___internal___ignoreType',
  author___children___internal___mediaType = 'author___children___internal___mediaType',
  author___children___internal___owner = 'author___children___internal___owner',
  author___children___internal___type = 'author___children___internal___type',
  author___internal___content = 'author___internal___content',
  author___internal___contentDigest = 'author___internal___contentDigest',
  author___internal___description = 'author___internal___description',
  author___internal___fieldOwners = 'author___internal___fieldOwners',
  author___internal___ignoreType = 'author___internal___ignoreType',
  author___internal___mediaType = 'author___internal___mediaType',
  author___internal___owner = 'author___internal___owner',
  author___internal___type = 'author___internal___type',
  childrenContentfulNewsExcerptTextNode = 'childrenContentfulNewsExcerptTextNode',
  childrenContentfulNewsExcerptTextNode___id = 'childrenContentfulNewsExcerptTextNode___id',
  childrenContentfulNewsExcerptTextNode___parent___id = 'childrenContentfulNewsExcerptTextNode___parent___id',
  childrenContentfulNewsExcerptTextNode___parent___parent___id = 'childrenContentfulNewsExcerptTextNode___parent___parent___id',
  childrenContentfulNewsExcerptTextNode___parent___parent___children = 'childrenContentfulNewsExcerptTextNode___parent___parent___children',
  childrenContentfulNewsExcerptTextNode___parent___children = 'childrenContentfulNewsExcerptTextNode___parent___children',
  childrenContentfulNewsExcerptTextNode___parent___children___id = 'childrenContentfulNewsExcerptTextNode___parent___children___id',
  childrenContentfulNewsExcerptTextNode___parent___children___children = 'childrenContentfulNewsExcerptTextNode___parent___children___children',
  childrenContentfulNewsExcerptTextNode___parent___internal___content = 'childrenContentfulNewsExcerptTextNode___parent___internal___content',
  childrenContentfulNewsExcerptTextNode___parent___internal___contentDigest = 'childrenContentfulNewsExcerptTextNode___parent___internal___contentDigest',
  childrenContentfulNewsExcerptTextNode___parent___internal___description = 'childrenContentfulNewsExcerptTextNode___parent___internal___description',
  childrenContentfulNewsExcerptTextNode___parent___internal___fieldOwners = 'childrenContentfulNewsExcerptTextNode___parent___internal___fieldOwners',
  childrenContentfulNewsExcerptTextNode___parent___internal___ignoreType = 'childrenContentfulNewsExcerptTextNode___parent___internal___ignoreType',
  childrenContentfulNewsExcerptTextNode___parent___internal___mediaType = 'childrenContentfulNewsExcerptTextNode___parent___internal___mediaType',
  childrenContentfulNewsExcerptTextNode___parent___internal___owner = 'childrenContentfulNewsExcerptTextNode___parent___internal___owner',
  childrenContentfulNewsExcerptTextNode___parent___internal___type = 'childrenContentfulNewsExcerptTextNode___parent___internal___type',
  childrenContentfulNewsExcerptTextNode___children = 'childrenContentfulNewsExcerptTextNode___children',
  childrenContentfulNewsExcerptTextNode___children___id = 'childrenContentfulNewsExcerptTextNode___children___id',
  childrenContentfulNewsExcerptTextNode___children___parent___id = 'childrenContentfulNewsExcerptTextNode___children___parent___id',
  childrenContentfulNewsExcerptTextNode___children___parent___children = 'childrenContentfulNewsExcerptTextNode___children___parent___children',
  childrenContentfulNewsExcerptTextNode___children___children = 'childrenContentfulNewsExcerptTextNode___children___children',
  childrenContentfulNewsExcerptTextNode___children___children___id = 'childrenContentfulNewsExcerptTextNode___children___children___id',
  childrenContentfulNewsExcerptTextNode___children___children___children = 'childrenContentfulNewsExcerptTextNode___children___children___children',
  childrenContentfulNewsExcerptTextNode___children___internal___content = 'childrenContentfulNewsExcerptTextNode___children___internal___content',
  childrenContentfulNewsExcerptTextNode___children___internal___contentDigest = 'childrenContentfulNewsExcerptTextNode___children___internal___contentDigest',
  childrenContentfulNewsExcerptTextNode___children___internal___description = 'childrenContentfulNewsExcerptTextNode___children___internal___description',
  childrenContentfulNewsExcerptTextNode___children___internal___fieldOwners = 'childrenContentfulNewsExcerptTextNode___children___internal___fieldOwners',
  childrenContentfulNewsExcerptTextNode___children___internal___ignoreType = 'childrenContentfulNewsExcerptTextNode___children___internal___ignoreType',
  childrenContentfulNewsExcerptTextNode___children___internal___mediaType = 'childrenContentfulNewsExcerptTextNode___children___internal___mediaType',
  childrenContentfulNewsExcerptTextNode___children___internal___owner = 'childrenContentfulNewsExcerptTextNode___children___internal___owner',
  childrenContentfulNewsExcerptTextNode___children___internal___type = 'childrenContentfulNewsExcerptTextNode___children___internal___type',
  childrenContentfulNewsExcerptTextNode___internal___content = 'childrenContentfulNewsExcerptTextNode___internal___content',
  childrenContentfulNewsExcerptTextNode___internal___contentDigest = 'childrenContentfulNewsExcerptTextNode___internal___contentDigest',
  childrenContentfulNewsExcerptTextNode___internal___description = 'childrenContentfulNewsExcerptTextNode___internal___description',
  childrenContentfulNewsExcerptTextNode___internal___fieldOwners = 'childrenContentfulNewsExcerptTextNode___internal___fieldOwners',
  childrenContentfulNewsExcerptTextNode___internal___ignoreType = 'childrenContentfulNewsExcerptTextNode___internal___ignoreType',
  childrenContentfulNewsExcerptTextNode___internal___mediaType = 'childrenContentfulNewsExcerptTextNode___internal___mediaType',
  childrenContentfulNewsExcerptTextNode___internal___owner = 'childrenContentfulNewsExcerptTextNode___internal___owner',
  childrenContentfulNewsExcerptTextNode___internal___type = 'childrenContentfulNewsExcerptTextNode___internal___type',
  childrenContentfulNewsExcerptTextNode___excerpt = 'childrenContentfulNewsExcerptTextNode___excerpt',
  childrenContentfulNewsExcerptTextNode___sys___type = 'childrenContentfulNewsExcerptTextNode___sys___type',
  childContentfulNewsExcerptTextNode___id = 'childContentfulNewsExcerptTextNode___id',
  childContentfulNewsExcerptTextNode___parent___id = 'childContentfulNewsExcerptTextNode___parent___id',
  childContentfulNewsExcerptTextNode___parent___parent___id = 'childContentfulNewsExcerptTextNode___parent___parent___id',
  childContentfulNewsExcerptTextNode___parent___parent___children = 'childContentfulNewsExcerptTextNode___parent___parent___children',
  childContentfulNewsExcerptTextNode___parent___children = 'childContentfulNewsExcerptTextNode___parent___children',
  childContentfulNewsExcerptTextNode___parent___children___id = 'childContentfulNewsExcerptTextNode___parent___children___id',
  childContentfulNewsExcerptTextNode___parent___children___children = 'childContentfulNewsExcerptTextNode___parent___children___children',
  childContentfulNewsExcerptTextNode___parent___internal___content = 'childContentfulNewsExcerptTextNode___parent___internal___content',
  childContentfulNewsExcerptTextNode___parent___internal___contentDigest = 'childContentfulNewsExcerptTextNode___parent___internal___contentDigest',
  childContentfulNewsExcerptTextNode___parent___internal___description = 'childContentfulNewsExcerptTextNode___parent___internal___description',
  childContentfulNewsExcerptTextNode___parent___internal___fieldOwners = 'childContentfulNewsExcerptTextNode___parent___internal___fieldOwners',
  childContentfulNewsExcerptTextNode___parent___internal___ignoreType = 'childContentfulNewsExcerptTextNode___parent___internal___ignoreType',
  childContentfulNewsExcerptTextNode___parent___internal___mediaType = 'childContentfulNewsExcerptTextNode___parent___internal___mediaType',
  childContentfulNewsExcerptTextNode___parent___internal___owner = 'childContentfulNewsExcerptTextNode___parent___internal___owner',
  childContentfulNewsExcerptTextNode___parent___internal___type = 'childContentfulNewsExcerptTextNode___parent___internal___type',
  childContentfulNewsExcerptTextNode___children = 'childContentfulNewsExcerptTextNode___children',
  childContentfulNewsExcerptTextNode___children___id = 'childContentfulNewsExcerptTextNode___children___id',
  childContentfulNewsExcerptTextNode___children___parent___id = 'childContentfulNewsExcerptTextNode___children___parent___id',
  childContentfulNewsExcerptTextNode___children___parent___children = 'childContentfulNewsExcerptTextNode___children___parent___children',
  childContentfulNewsExcerptTextNode___children___children = 'childContentfulNewsExcerptTextNode___children___children',
  childContentfulNewsExcerptTextNode___children___children___id = 'childContentfulNewsExcerptTextNode___children___children___id',
  childContentfulNewsExcerptTextNode___children___children___children = 'childContentfulNewsExcerptTextNode___children___children___children',
  childContentfulNewsExcerptTextNode___children___internal___content = 'childContentfulNewsExcerptTextNode___children___internal___content',
  childContentfulNewsExcerptTextNode___children___internal___contentDigest = 'childContentfulNewsExcerptTextNode___children___internal___contentDigest',
  childContentfulNewsExcerptTextNode___children___internal___description = 'childContentfulNewsExcerptTextNode___children___internal___description',
  childContentfulNewsExcerptTextNode___children___internal___fieldOwners = 'childContentfulNewsExcerptTextNode___children___internal___fieldOwners',
  childContentfulNewsExcerptTextNode___children___internal___ignoreType = 'childContentfulNewsExcerptTextNode___children___internal___ignoreType',
  childContentfulNewsExcerptTextNode___children___internal___mediaType = 'childContentfulNewsExcerptTextNode___children___internal___mediaType',
  childContentfulNewsExcerptTextNode___children___internal___owner = 'childContentfulNewsExcerptTextNode___children___internal___owner',
  childContentfulNewsExcerptTextNode___children___internal___type = 'childContentfulNewsExcerptTextNode___children___internal___type',
  childContentfulNewsExcerptTextNode___internal___content = 'childContentfulNewsExcerptTextNode___internal___content',
  childContentfulNewsExcerptTextNode___internal___contentDigest = 'childContentfulNewsExcerptTextNode___internal___contentDigest',
  childContentfulNewsExcerptTextNode___internal___description = 'childContentfulNewsExcerptTextNode___internal___description',
  childContentfulNewsExcerptTextNode___internal___fieldOwners = 'childContentfulNewsExcerptTextNode___internal___fieldOwners',
  childContentfulNewsExcerptTextNode___internal___ignoreType = 'childContentfulNewsExcerptTextNode___internal___ignoreType',
  childContentfulNewsExcerptTextNode___internal___mediaType = 'childContentfulNewsExcerptTextNode___internal___mediaType',
  childContentfulNewsExcerptTextNode___internal___owner = 'childContentfulNewsExcerptTextNode___internal___owner',
  childContentfulNewsExcerptTextNode___internal___type = 'childContentfulNewsExcerptTextNode___internal___type',
  childContentfulNewsExcerptTextNode___excerpt = 'childContentfulNewsExcerptTextNode___excerpt',
  childContentfulNewsExcerptTextNode___sys___type = 'childContentfulNewsExcerptTextNode___sys___type',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulNewsFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  published?: Maybe<DateQueryOperatorInput>;
  content?: Maybe<ContentfulNewsContentFilterInput>;
  featuredImage?: Maybe<ContentfulAssetFilterInput>;
  excerpt?: Maybe<ContentfulNewsExcerptTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNewsSysFilterInput>;
  seoTitle?: Maybe<StringQueryOperatorInput>;
  seoDescription?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<ContentfulAuthorFilterInput>;
  childrenContentfulNewsExcerptTextNode?: Maybe<ContentfulNewsExcerptTextNodeFilterListInput>;
  childContentfulNewsExcerptTextNode?: Maybe<ContentfulNewsExcerptTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulNewsFilterListInput = {
  elemMatch?: Maybe<ContentfulNewsFilterInput>;
};

export type ContentfulNewsGroupConnection = {
  __typename?: 'ContentfulNewsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNewsEdge>;
  nodes: Array<ContentfulNews>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulNewsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulNewsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulNewsSys = {
  __typename?: 'ContentfulNewsSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulNewsSysContentType>;
};

export type ContentfulNewsSysContentType = {
  __typename?: 'ContentfulNewsSysContentType';
  sys?: Maybe<ContentfulNewsSysContentTypeSys>;
};

export type ContentfulNewsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulNewsSysContentTypeSysFilterInput>;
};

export type ContentfulNewsSysContentTypeSys = {
  __typename?: 'ContentfulNewsSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulNewsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNewsSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulNewsSysContentTypeFilterInput>;
};

export type ContentfulPage = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulPage';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  blocks?: Maybe<Array<Maybe<ContentfulBlockCallToActionContentfulBlockContentContentfulBlockContentListContentfulBlockImageBandContentfulBlockJumbotronUnion>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPageConnection = {
  __typename?: 'ContentfulPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageGroupConnection>;
};


export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageEdge = {
  __typename?: 'ContentfulPageEdge';
  next?: Maybe<ContentfulPage>;
  node: ContentfulPage;
  previous?: Maybe<ContentfulPage>;
};

export enum ContentfulPageFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  slug = 'slug',
  seoTitle = 'seoTitle',
  seoDescription = 'seoDescription',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys___type',
  sys___revision = 'sys___revision',
  sys___contentType___sys___type = 'sys___contentType___sys___type',
  sys___contentType___sys___linkType = 'sys___contentType___sys___linkType',
  sys___contentType___sys___id = 'sys___contentType___sys___id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ContentfulPageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  seoTitle?: Maybe<StringQueryOperatorInput>;
  seoDescription?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulPageFilterListInput = {
  elemMatch?: Maybe<ContentfulPageFilterInput>;
};

export type ContentfulPageGroupConnection = {
  __typename?: 'ContentfulPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageSys = {
  __typename?: 'ContentfulPageSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageSysContentType>;
};

export type ContentfulPageSysContentType = {
  __typename?: 'ContentfulPageSysContentType';
  sys?: Maybe<ContentfulPageSysContentTypeSys>;
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageSysContentTypeSysFilterInput>;
};

export type ContentfulPageSysContentTypeSys = {
  __typename?: 'ContentfulPageSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageSysContentTypeFilterInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulResize = {
  __typename?: 'ContentfulResize';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum GatsbyImageLayout {
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
  CONSTRAINED = 'CONSTRAINED'
}

export enum GatsbyImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE'
}

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
  AVIF = 'AVIF'
}

export enum ImageLayout {
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
  CONSTRAINED = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE'
}

export enum ImageResizingBehavior {
  NO_CHANGE = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  PAD = 'PAD',
  /** Crop a part of the original image to match the specified size. */
  CROP = 'CROP',
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  FILL = 'FILL',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  THUMB = 'THUMB',
  /** Scale the image regardless of the original aspect ratio. */
  SCALE = 'SCALE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulMicroContent?: Maybe<ContentfulMicroContent>;
  allContentfulMicroContent: ContentfulMicroContentConnection;
  contentfulBlogPost?: Maybe<ContentfulBlogPost>;
  allContentfulBlogPost: ContentfulBlogPostConnection;
  contentfulAuthor?: Maybe<ContentfulAuthor>;
  allContentfulAuthor: ContentfulAuthorConnection;
  contentfulPage?: Maybe<ContentfulPage>;
  allContentfulPage: ContentfulPageConnection;
  contentfulBlockCallToAction?: Maybe<ContentfulBlockCallToAction>;
  allContentfulBlockCallToAction: ContentfulBlockCallToActionConnection;
  contentfulBlockContent?: Maybe<ContentfulBlockContent>;
  allContentfulBlockContent: ContentfulBlockContentConnection;
  contentfulBlockContentList?: Maybe<ContentfulBlockContentList>;
  allContentfulBlockContentList: ContentfulBlockContentListConnection;
  contentfulBlockImageBand?: Maybe<ContentfulBlockImageBand>;
  allContentfulBlockImageBand: ContentfulBlockImageBandConnection;
  contentfulBlockJumbotron?: Maybe<ContentfulBlockJumbotron>;
  allContentfulBlockJumbotron: ContentfulBlockJumbotronConnection;
  contentfulNews?: Maybe<ContentfulNews>;
  allContentfulNews: ContentfulNewsConnection;
  contentfulNewsExcerptTextNode?: Maybe<ContentfulNewsExcerptTextNode>;
  allContentfulNewsExcerptTextNode: ContentfulNewsExcerptTextNodeConnection;
  contentfulBlockJumbotronButtonJsonNode?: Maybe<ContentfulBlockJumbotronButtonJsonNode>;
  allContentfulBlockJumbotronButtonJsonNode: ContentfulBlockJumbotronButtonJsonNodeConnection;
  contentfulBlockContentListListJsonNode?: Maybe<ContentfulBlockContentListListJsonNode>;
  allContentfulBlockContentListListJsonNode: ContentfulBlockContentListListJsonNodeConnection;
  contentfulBlockContentListButtonJsonNode?: Maybe<ContentfulBlockContentListButtonJsonNode>;
  allContentfulBlockContentListButtonJsonNode: ContentfulBlockContentListButtonJsonNodeConnection;
  contentfulBlockContentButtonJsonNode?: Maybe<ContentfulBlockContentButtonJsonNode>;
  allContentfulBlockContentButtonJsonNode: ContentfulBlockContentButtonJsonNodeConnection;
  contentfulBlockCallToActionButtonJsonNode?: Maybe<ContentfulBlockCallToActionButtonJsonNode>;
  allContentfulBlockCallToActionButtonJsonNode: ContentfulBlockCallToActionButtonJsonNodeConnection;
  contentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNode>;
  allContentfulAuthorBiographyTextNode: ContentfulAuthorBiographyTextNodeConnection;
  contentfulBlogPostExcerptTextNode?: Maybe<ContentfulBlogPostExcerptTextNode>;
  allContentfulBlogPostExcerptTextNode: ContentfulBlogPostExcerptTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>;
  sort?: Maybe<ContentfulEntrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMicroContentArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMicroContentSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulMicroContentArgs = {
  filter?: Maybe<ContentfulMicroContentFilterInput>;
  sort?: Maybe<ContentfulMicroContentSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  published?: Maybe<DateQueryOperatorInput>;
  content?: Maybe<ContentfulBlogPostContentFilterInput>;
  seoTitle?: Maybe<StringQueryOperatorInput>;
  seoDescription?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<ContentfulAuthorFilterInput>;
  excerpt?: Maybe<ContentfulBlogPostExcerptTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  featuredImage?: Maybe<ContentfulAssetFilterInput>;
  childrenContentfulBlogPostExcerptTextNode?: Maybe<ContentfulBlogPostExcerptTextNodeFilterListInput>;
  childContentfulBlogPostExcerptTextNode?: Maybe<ContentfulBlogPostExcerptTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter?: Maybe<ContentfulBlogPostFilterInput>;
  sort?: Maybe<ContentfulBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAuthorArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  news?: Maybe<ContentfulNewsFilterListInput>;
  biography?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>;
  childrenContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNodeFilterListInput>;
  childContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAuthorArgs = {
  filter?: Maybe<ContentfulAuthorFilterInput>;
  sort?: Maybe<ContentfulAuthorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  seoTitle?: Maybe<StringQueryOperatorInput>;
  seoDescription?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulPageArgs = {
  filter?: Maybe<ContentfulPageFilterInput>;
  sort?: Maybe<ContentfulPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockCallToActionArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulBlockCallToActionContentFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  button?: Maybe<ContentfulBlockCallToActionButtonJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockCallToActionSysFilterInput>;
  childrenContentfulBlockCallToActionButtonJsonNode?: Maybe<ContentfulBlockCallToActionButtonJsonNodeFilterListInput>;
  childContentfulBlockCallToActionButtonJsonNode?: Maybe<ContentfulBlockCallToActionButtonJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulBlockCallToActionArgs = {
  filter?: Maybe<ContentfulBlockCallToActionFilterInput>;
  sort?: Maybe<ContentfulBlockCallToActionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockContentArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  blockTitle?: Maybe<StringQueryOperatorInput>;
  variation?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulBlockContentContentFilterInput>;
  button?: Maybe<ContentfulBlockContentButtonJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockContentSysFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  childrenContentfulBlockContentButtonJsonNode?: Maybe<ContentfulBlockContentButtonJsonNodeFilterListInput>;
  childContentfulBlockContentButtonJsonNode?: Maybe<ContentfulBlockContentButtonJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulBlockContentArgs = {
  filter?: Maybe<ContentfulBlockContentFilterInput>;
  sort?: Maybe<ContentfulBlockContentSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockContentListArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  highlight?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulBlockContentListContentFilterInput>;
  listTitle?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  button?: Maybe<ContentfulBlockContentListButtonJsonNodeFilterInput>;
  list?: Maybe<ContentfulBlockContentListListJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockContentListSysFilterInput>;
  listDescription?: Maybe<ContentfulBlockContentListListDescriptionFilterInput>;
  childrenContentfulBlockContentListListJsonNode?: Maybe<ContentfulBlockContentListListJsonNodeFilterListInput>;
  childContentfulBlockContentListListJsonNode?: Maybe<ContentfulBlockContentListListJsonNodeFilterInput>;
  childrenContentfulBlockContentListButtonJsonNode?: Maybe<ContentfulBlockContentListButtonJsonNodeFilterListInput>;
  childContentfulBlockContentListButtonJsonNode?: Maybe<ContentfulBlockContentListButtonJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulBlockContentListArgs = {
  filter?: Maybe<ContentfulBlockContentListFilterInput>;
  sort?: Maybe<ContentfulBlockContentListSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockImageBandArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockImageBandSysFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulBlockImageBandArgs = {
  filter?: Maybe<ContentfulBlockImageBandFilterInput>;
  sort?: Maybe<ContentfulBlockImageBandSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockJumbotronArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<ContentfulBlockJumbotronContentFilterInput>;
  imageAlignment?: Maybe<StringQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  imageOnLeft?: Maybe<BooleanQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  backgroundImage?: Maybe<ContentfulAssetFilterInput>;
  button?: Maybe<ContentfulBlockJumbotronButtonJsonNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockJumbotronSysFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  childrenContentfulBlockJumbotronButtonJsonNode?: Maybe<ContentfulBlockJumbotronButtonJsonNodeFilterListInput>;
  childContentfulBlockJumbotronButtonJsonNode?: Maybe<ContentfulBlockJumbotronButtonJsonNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulBlockJumbotronArgs = {
  filter?: Maybe<ContentfulBlockJumbotronFilterInput>;
  sort?: Maybe<ContentfulBlockJumbotronSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulNewsArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  published?: Maybe<DateQueryOperatorInput>;
  content?: Maybe<ContentfulNewsContentFilterInput>;
  featuredImage?: Maybe<ContentfulAssetFilterInput>;
  excerpt?: Maybe<ContentfulNewsExcerptTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulNewsSysFilterInput>;
  seoTitle?: Maybe<StringQueryOperatorInput>;
  seoDescription?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<ContentfulAuthorFilterInput>;
  childrenContentfulNewsExcerptTextNode?: Maybe<ContentfulNewsExcerptTextNodeFilterListInput>;
  childContentfulNewsExcerptTextNode?: Maybe<ContentfulNewsExcerptTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulNewsArgs = {
  filter?: Maybe<ContentfulNewsFilterInput>;
  sort?: Maybe<ContentfulNewsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulNewsExcerptTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulNewsExcerptTextNodeSysFilterInput>;
};


export type QueryAllContentfulNewsExcerptTextNodeArgs = {
  filter?: Maybe<ContentfulNewsExcerptTextNodeFilterInput>;
  sort?: Maybe<ContentfulNewsExcerptTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockJumbotronButtonJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  action?: Maybe<ContentfulBlockJumbotronButtonJsonNodeActionFilterInput>;
  sys?: Maybe<ContentfulBlockJumbotronButtonJsonNodeSysFilterInput>;
};


export type QueryAllContentfulBlockJumbotronButtonJsonNodeArgs = {
  filter?: Maybe<ContentfulBlockJumbotronButtonJsonNodeFilterInput>;
  sort?: Maybe<ContentfulBlockJumbotronButtonJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockContentListListJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  items?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockContentListListJsonNodeSysFilterInput>;
};


export type QueryAllContentfulBlockContentListListJsonNodeArgs = {
  filter?: Maybe<ContentfulBlockContentListListJsonNodeFilterInput>;
  sort?: Maybe<ContentfulBlockContentListListJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockContentListButtonJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  action?: Maybe<ContentfulBlockContentListButtonJsonNodeActionFilterInput>;
  sys?: Maybe<ContentfulBlockContentListButtonJsonNodeSysFilterInput>;
};


export type QueryAllContentfulBlockContentListButtonJsonNodeArgs = {
  filter?: Maybe<ContentfulBlockContentListButtonJsonNodeFilterInput>;
  sort?: Maybe<ContentfulBlockContentListButtonJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockContentButtonJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  action?: Maybe<ContentfulBlockContentButtonJsonNodeActionFilterInput>;
  sys?: Maybe<ContentfulBlockContentButtonJsonNodeSysFilterInput>;
};


export type QueryAllContentfulBlockContentButtonJsonNodeArgs = {
  filter?: Maybe<ContentfulBlockContentButtonJsonNodeFilterInput>;
  sort?: Maybe<ContentfulBlockContentButtonJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockCallToActionButtonJsonNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  action?: Maybe<ContentfulBlockCallToActionButtonJsonNodeActionFilterInput>;
  sys?: Maybe<ContentfulBlockCallToActionButtonJsonNodeSysFilterInput>;
};


export type QueryAllContentfulBlockCallToActionButtonJsonNodeArgs = {
  filter?: Maybe<ContentfulBlockCallToActionButtonJsonNodeFilterInput>;
  sort?: Maybe<ContentfulBlockCallToActionButtonJsonNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAuthorBiographyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  biography?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorBiographyTextNodeSysFilterInput>;
};


export type QueryAllContentfulAuthorBiographyTextNodeArgs = {
  filter?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  sort?: Maybe<ContentfulAuthorBiographyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostExcerptTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostExcerptTextNodeSysFilterInput>;
};


export type QueryAllContentfulBlogPostExcerptTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostExcerptTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostExcerptTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  buildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  siteMetadata___author = 'siteMetadata___author',
  siteMetadata___siteUrl = 'siteMetadata___siteUrl',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___slug = 'context___slug',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___displayName = 'pluginCreator___pluginOptions___displayName',
  pluginCreator___pluginOptions___fileName = 'pluginCreator___pluginOptions___fileName',
  pluginCreator___pluginOptions___minify = 'pluginCreator___pluginOptions___minify',
  pluginCreator___pluginOptions___namespace = 'pluginCreator___pluginOptions___namespace',
  pluginCreator___pluginOptions___transpileTemplateLiterals = 'pluginCreator___pluginOptions___transpileTemplateLiterals',
  pluginCreator___pluginOptions___pure = 'pluginCreator___pluginOptions___pure',
  pluginCreator___pluginOptions___output = 'pluginCreator___pluginOptions___output',
  pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator___pluginOptions___base64Width',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator___pluginOptions___failOnError',
  pluginCreator___pluginOptions___cssLoaderOptions___esModule = 'pluginCreator___pluginOptions___cssLoaderOptions___esModule',
  pluginCreator___pluginOptions___content = 'pluginCreator___pluginOptions___content',
  pluginCreator___pluginOptions___async = 'pluginCreator___pluginOptions___async',
  pluginCreator___pluginOptions___defer = 'pluginCreator___pluginOptions___defer',
  pluginCreator___pluginOptions___icon = 'pluginCreator___pluginOptions___icon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator___pluginOptions___legacy',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator___pluginOptions___theme_color_in_head',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator___pluginOptions___cache_busting_mode',
  pluginCreator___pluginOptions___crossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator___pluginOptions___include_favicon',
  pluginCreator___pluginOptions___cacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  pluginCreator___pluginOptions___forceBase64Format = 'pluginCreator___pluginOptions___forceBase64Format',
  pluginCreator___pluginOptions___useMozJpeg = 'pluginCreator___pluginOptions___useMozJpeg',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___pluginConfig___head = 'pluginCreator___pluginOptions___pluginConfig___head',
  pluginCreator___pluginOptions___accessToken = 'pluginCreator___pluginOptions___accessToken',
  pluginCreator___pluginOptions___spaceId = 'pluginCreator___pluginOptions___spaceId',
  pluginCreator___pluginOptions___host = 'pluginCreator___pluginOptions___host',
  pluginCreator___pluginOptions___environment = 'pluginCreator___pluginOptions___environment',
  pluginCreator___pluginOptions___downloadLocal = 'pluginCreator___pluginOptions___downloadLocal',
  pluginCreator___pluginOptions___forceFullSync = 'pluginCreator___pluginOptions___forceFullSync',
  pluginCreator___pluginOptions___pageLimit = 'pluginCreator___pluginOptions___pageLimit',
  pluginCreator___pluginOptions___assetDownloadWorkers = 'pluginCreator___pluginOptions___assetDownloadWorkers',
  pluginCreator___pluginOptions___useNameForId = 'pluginCreator___pluginOptions___useNameForId',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___author = 'pluginCreator___packageJson___author',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___displayName = 'pluginOptions___displayName',
  pluginOptions___fileName = 'pluginOptions___fileName',
  pluginOptions___minify = 'pluginOptions___minify',
  pluginOptions___namespace = 'pluginOptions___namespace',
  pluginOptions___transpileTemplateLiterals = 'pluginOptions___transpileTemplateLiterals',
  pluginOptions___pure = 'pluginOptions___pure',
  pluginOptions___output = 'pluginOptions___output',
  pluginOptions___createLinkInHead = 'pluginOptions___createLinkInHead',
  pluginOptions___base64Width = 'pluginOptions___base64Width',
  pluginOptions___stripMetadata = 'pluginOptions___stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions___defaultQuality',
  pluginOptions___failOnError = 'pluginOptions___failOnError',
  pluginOptions___cssLoaderOptions___esModule = 'pluginOptions___cssLoaderOptions___esModule',
  pluginOptions___cssLoaderOptions___modules___namedExport = 'pluginOptions___cssLoaderOptions___modules___namedExport',
  pluginOptions___content = 'pluginOptions___content',
  pluginOptions___async = 'pluginOptions___async',
  pluginOptions___defer = 'pluginOptions___defer',
  pluginOptions___icon = 'pluginOptions___icon',
  pluginOptions___legacy = 'pluginOptions___legacy',
  pluginOptions___theme_color_in_head = 'pluginOptions___theme_color_in_head',
  pluginOptions___cache_busting_mode = 'pluginOptions___cache_busting_mode',
  pluginOptions___crossOrigin = 'pluginOptions___crossOrigin',
  pluginOptions___include_favicon = 'pluginOptions___include_favicon',
  pluginOptions___cacheDigest = 'pluginOptions___cacheDigest',
  pluginOptions___forceBase64Format = 'pluginOptions___forceBase64Format',
  pluginOptions___useMozJpeg = 'pluginOptions___useMozJpeg',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___pluginConfig___head = 'pluginOptions___pluginConfig___head',
  pluginOptions___accessToken = 'pluginOptions___accessToken',
  pluginOptions___spaceId = 'pluginOptions___spaceId',
  pluginOptions___host = 'pluginOptions___host',
  pluginOptions___environment = 'pluginOptions___environment',
  pluginOptions___downloadLocal = 'pluginOptions___downloadLocal',
  pluginOptions___forceFullSync = 'pluginOptions___forceFullSync',
  pluginOptions___pageLimit = 'pluginOptions___pageLimit',
  pluginOptions___assetDownloadWorkers = 'pluginOptions___assetDownloadWorkers',
  pluginOptions___useNameForId = 'pluginOptions___useNameForId',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___author = 'packageJson___author',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  displayName?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  namespace?: Maybe<Scalars['String']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  cssLoaderOptions?: Maybe<SitePluginPluginOptionsCssLoaderOptions>;
  content?: Maybe<Scalars['String']>;
  async?: Maybe<Scalars['Boolean']>;
  defer?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  forceBase64Format?: Maybe<Scalars['String']>;
  useMozJpeg?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pluginConfig?: Maybe<SitePluginPluginOptionsPluginConfig>;
  accessToken?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  forceFullSync?: Maybe<Scalars['Boolean']>;
  pageLimit?: Maybe<Scalars['Int']>;
  assetDownloadWorkers?: Maybe<Scalars['Int']>;
  useNameForId?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsCssLoaderOptions = {
  __typename?: 'SitePluginPluginOptionsCssLoaderOptions';
  esModule?: Maybe<Scalars['Boolean']>;
  modules?: Maybe<SitePluginPluginOptionsCssLoaderOptionsModules>;
};

export type SitePluginPluginOptionsCssLoaderOptionsFilterInput = {
  esModule?: Maybe<BooleanQueryOperatorInput>;
  modules?: Maybe<SitePluginPluginOptionsCssLoaderOptionsModulesFilterInput>;
};

export type SitePluginPluginOptionsCssLoaderOptionsModules = {
  __typename?: 'SitePluginPluginOptionsCssLoaderOptionsModules';
  namedExport?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsCssLoaderOptionsModulesFilterInput = {
  namedExport?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  displayName?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  cssLoaderOptions?: Maybe<SitePluginPluginOptionsCssLoaderOptionsFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  async?: Maybe<BooleanQueryOperatorInput>;
  defer?: Maybe<BooleanQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  forceBase64Format?: Maybe<StringQueryOperatorInput>;
  useMozJpeg?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pluginConfig?: Maybe<SitePluginPluginOptionsPluginConfigFilterInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  forceFullSync?: Maybe<BooleanQueryOperatorInput>;
  pageLimit?: Maybe<IntQueryOperatorInput>;
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>;
  useNameForId?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginConfig = {
  __typename?: 'SitePluginPluginOptionsPluginConfig';
  head?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPluginConfigFilterInput = {
  head?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type ContentfulAuthorBiographyTextNode = Node & {
  __typename?: 'contentfulAuthorBiographyTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  biography?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAuthorBiographyTextNodeSys>;
};

export type ContentfulAuthorBiographyTextNodeConnection = {
  __typename?: 'contentfulAuthorBiographyTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorBiographyTextNodeEdge>;
  nodes: Array<ContentfulAuthorBiographyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAuthorBiographyTextNodeGroupConnection>;
};


export type ContentfulAuthorBiographyTextNodeConnectionDistinctArgs = {
  field: ContentfulAuthorBiographyTextNodeFieldsEnum;
};


export type ContentfulAuthorBiographyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAuthorBiographyTextNodeFieldsEnum;
};

export type ContentfulAuthorBiographyTextNodeEdge = {
  __typename?: 'contentfulAuthorBiographyTextNodeEdge';
  next?: Maybe<ContentfulAuthorBiographyTextNode>;
  node: ContentfulAuthorBiographyTextNode;
  previous?: Maybe<ContentfulAuthorBiographyTextNode>;
};

export enum ContentfulAuthorBiographyTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  biography = 'biography',
  sys___type = 'sys___type'
}

export type ContentfulAuthorBiographyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  biography?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorBiographyTextNodeSysFilterInput>;
};

export type ContentfulAuthorBiographyTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
};

export type ContentfulAuthorBiographyTextNodeGroupConnection = {
  __typename?: 'contentfulAuthorBiographyTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorBiographyTextNodeEdge>;
  nodes: Array<ContentfulAuthorBiographyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorBiographyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAuthorBiographyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthorBiographyTextNodeSys = {
  __typename?: 'contentfulAuthorBiographyTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorBiographyTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockCallToActionButtonJsonNode = Node & {
  __typename?: 'contentfulBlockCallToActionButtonJsonNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  action?: Maybe<ContentfulBlockCallToActionButtonJsonNodeAction>;
  sys?: Maybe<ContentfulBlockCallToActionButtonJsonNodeSys>;
};

export type ContentfulBlockCallToActionButtonJsonNodeAction = {
  __typename?: 'contentfulBlockCallToActionButtonJsonNodeAction';
  enabled?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  external?: Maybe<Scalars['Boolean']>;
  externalUrl?: Maybe<Scalars['String']>;
  entrySlug?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCallToActionButtonJsonNodeActionFilterInput = {
  enabled?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  external?: Maybe<BooleanQueryOperatorInput>;
  externalUrl?: Maybe<StringQueryOperatorInput>;
  entrySlug?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockCallToActionButtonJsonNodeConnection = {
  __typename?: 'contentfulBlockCallToActionButtonJsonNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockCallToActionButtonJsonNodeEdge>;
  nodes: Array<ContentfulBlockCallToActionButtonJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockCallToActionButtonJsonNodeGroupConnection>;
};


export type ContentfulBlockCallToActionButtonJsonNodeConnectionDistinctArgs = {
  field: ContentfulBlockCallToActionButtonJsonNodeFieldsEnum;
};


export type ContentfulBlockCallToActionButtonJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockCallToActionButtonJsonNodeFieldsEnum;
};

export type ContentfulBlockCallToActionButtonJsonNodeEdge = {
  __typename?: 'contentfulBlockCallToActionButtonJsonNodeEdge';
  next?: Maybe<ContentfulBlockCallToActionButtonJsonNode>;
  node: ContentfulBlockCallToActionButtonJsonNode;
  previous?: Maybe<ContentfulBlockCallToActionButtonJsonNode>;
};

export enum ContentfulBlockCallToActionButtonJsonNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  action___enabled = 'action___enabled',
  action___title = 'action___title',
  action___external = 'action___external',
  action___externalUrl = 'action___externalUrl',
  action___entrySlug = 'action___entrySlug',
  sys___type = 'sys___type'
}

export type ContentfulBlockCallToActionButtonJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  action?: Maybe<ContentfulBlockCallToActionButtonJsonNodeActionFilterInput>;
  sys?: Maybe<ContentfulBlockCallToActionButtonJsonNodeSysFilterInput>;
};

export type ContentfulBlockCallToActionButtonJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockCallToActionButtonJsonNodeFilterInput>;
};

export type ContentfulBlockCallToActionButtonJsonNodeGroupConnection = {
  __typename?: 'contentfulBlockCallToActionButtonJsonNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockCallToActionButtonJsonNodeEdge>;
  nodes: Array<ContentfulBlockCallToActionButtonJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCallToActionButtonJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockCallToActionButtonJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockCallToActionButtonJsonNodeSys = {
  __typename?: 'contentfulBlockCallToActionButtonJsonNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCallToActionButtonJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockContentButtonJsonNode = Node & {
  __typename?: 'contentfulBlockContentButtonJsonNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  action?: Maybe<ContentfulBlockContentButtonJsonNodeAction>;
  sys?: Maybe<ContentfulBlockContentButtonJsonNodeSys>;
};

export type ContentfulBlockContentButtonJsonNodeAction = {
  __typename?: 'contentfulBlockContentButtonJsonNodeAction';
  enabled?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  external?: Maybe<Scalars['Boolean']>;
  externalUrl?: Maybe<Scalars['String']>;
  entrySlug?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentButtonJsonNodeActionFilterInput = {
  enabled?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  external?: Maybe<BooleanQueryOperatorInput>;
  externalUrl?: Maybe<StringQueryOperatorInput>;
  entrySlug?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockContentButtonJsonNodeConnection = {
  __typename?: 'contentfulBlockContentButtonJsonNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockContentButtonJsonNodeEdge>;
  nodes: Array<ContentfulBlockContentButtonJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockContentButtonJsonNodeGroupConnection>;
};


export type ContentfulBlockContentButtonJsonNodeConnectionDistinctArgs = {
  field: ContentfulBlockContentButtonJsonNodeFieldsEnum;
};


export type ContentfulBlockContentButtonJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockContentButtonJsonNodeFieldsEnum;
};

export type ContentfulBlockContentButtonJsonNodeEdge = {
  __typename?: 'contentfulBlockContentButtonJsonNodeEdge';
  next?: Maybe<ContentfulBlockContentButtonJsonNode>;
  node: ContentfulBlockContentButtonJsonNode;
  previous?: Maybe<ContentfulBlockContentButtonJsonNode>;
};

export enum ContentfulBlockContentButtonJsonNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  action___enabled = 'action___enabled',
  action___title = 'action___title',
  action___external = 'action___external',
  action___externalUrl = 'action___externalUrl',
  action___entrySlug = 'action___entrySlug',
  sys___type = 'sys___type'
}

export type ContentfulBlockContentButtonJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  action?: Maybe<ContentfulBlockContentButtonJsonNodeActionFilterInput>;
  sys?: Maybe<ContentfulBlockContentButtonJsonNodeSysFilterInput>;
};

export type ContentfulBlockContentButtonJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockContentButtonJsonNodeFilterInput>;
};

export type ContentfulBlockContentButtonJsonNodeGroupConnection = {
  __typename?: 'contentfulBlockContentButtonJsonNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockContentButtonJsonNodeEdge>;
  nodes: Array<ContentfulBlockContentButtonJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentButtonJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockContentButtonJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockContentButtonJsonNodeSys = {
  __typename?: 'contentfulBlockContentButtonJsonNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentButtonJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockContentListButtonJsonNode = Node & {
  __typename?: 'contentfulBlockContentListButtonJsonNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  action?: Maybe<ContentfulBlockContentListButtonJsonNodeAction>;
  sys?: Maybe<ContentfulBlockContentListButtonJsonNodeSys>;
};

export type ContentfulBlockContentListButtonJsonNodeAction = {
  __typename?: 'contentfulBlockContentListButtonJsonNodeAction';
  title?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  entrySlug?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentListButtonJsonNodeActionFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  enabled?: Maybe<BooleanQueryOperatorInput>;
  entrySlug?: Maybe<StringQueryOperatorInput>;
  externalUrl?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockContentListButtonJsonNodeConnection = {
  __typename?: 'contentfulBlockContentListButtonJsonNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockContentListButtonJsonNodeEdge>;
  nodes: Array<ContentfulBlockContentListButtonJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockContentListButtonJsonNodeGroupConnection>;
};


export type ContentfulBlockContentListButtonJsonNodeConnectionDistinctArgs = {
  field: ContentfulBlockContentListButtonJsonNodeFieldsEnum;
};


export type ContentfulBlockContentListButtonJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockContentListButtonJsonNodeFieldsEnum;
};

export type ContentfulBlockContentListButtonJsonNodeEdge = {
  __typename?: 'contentfulBlockContentListButtonJsonNodeEdge';
  next?: Maybe<ContentfulBlockContentListButtonJsonNode>;
  node: ContentfulBlockContentListButtonJsonNode;
  previous?: Maybe<ContentfulBlockContentListButtonJsonNode>;
};

export enum ContentfulBlockContentListButtonJsonNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  action___title = 'action___title',
  action___enabled = 'action___enabled',
  action___entrySlug = 'action___entrySlug',
  action___externalUrl = 'action___externalUrl',
  sys___type = 'sys___type'
}

export type ContentfulBlockContentListButtonJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  action?: Maybe<ContentfulBlockContentListButtonJsonNodeActionFilterInput>;
  sys?: Maybe<ContentfulBlockContentListButtonJsonNodeSysFilterInput>;
};

export type ContentfulBlockContentListButtonJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockContentListButtonJsonNodeFilterInput>;
};

export type ContentfulBlockContentListButtonJsonNodeGroupConnection = {
  __typename?: 'contentfulBlockContentListButtonJsonNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockContentListButtonJsonNodeEdge>;
  nodes: Array<ContentfulBlockContentListButtonJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentListButtonJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockContentListButtonJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockContentListButtonJsonNodeSys = {
  __typename?: 'contentfulBlockContentListButtonJsonNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentListButtonJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockContentListListJsonNode = Node & {
  __typename?: 'contentfulBlockContentListListJsonNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys?: Maybe<ContentfulBlockContentListListJsonNodeSys>;
};

export type ContentfulBlockContentListListJsonNodeConnection = {
  __typename?: 'contentfulBlockContentListListJsonNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockContentListListJsonNodeEdge>;
  nodes: Array<ContentfulBlockContentListListJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockContentListListJsonNodeGroupConnection>;
};


export type ContentfulBlockContentListListJsonNodeConnectionDistinctArgs = {
  field: ContentfulBlockContentListListJsonNodeFieldsEnum;
};


export type ContentfulBlockContentListListJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockContentListListJsonNodeFieldsEnum;
};

export type ContentfulBlockContentListListJsonNodeEdge = {
  __typename?: 'contentfulBlockContentListListJsonNodeEdge';
  next?: Maybe<ContentfulBlockContentListListJsonNode>;
  node: ContentfulBlockContentListListJsonNode;
  previous?: Maybe<ContentfulBlockContentListListJsonNode>;
};

export enum ContentfulBlockContentListListJsonNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  items = 'items',
  sys___type = 'sys___type'
}

export type ContentfulBlockContentListListJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  items?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockContentListListJsonNodeSysFilterInput>;
};

export type ContentfulBlockContentListListJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockContentListListJsonNodeFilterInput>;
};

export type ContentfulBlockContentListListJsonNodeGroupConnection = {
  __typename?: 'contentfulBlockContentListListJsonNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockContentListListJsonNodeEdge>;
  nodes: Array<ContentfulBlockContentListListJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentListListJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockContentListListJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockContentListListJsonNodeSys = {
  __typename?: 'contentfulBlockContentListListJsonNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlockContentListListJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockJumbotronButtonJsonNode = Node & {
  __typename?: 'contentfulBlockJumbotronButtonJsonNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  action?: Maybe<ContentfulBlockJumbotronButtonJsonNodeAction>;
  sys?: Maybe<ContentfulBlockJumbotronButtonJsonNodeSys>;
};

export type ContentfulBlockJumbotronButtonJsonNodeAction = {
  __typename?: 'contentfulBlockJumbotronButtonJsonNodeAction';
  title?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  external?: Maybe<Scalars['Boolean']>;
  entrySlug?: Maybe<Scalars['String']>;
  externalUrl?: Maybe<Scalars['String']>;
};

export type ContentfulBlockJumbotronButtonJsonNodeActionFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  enabled?: Maybe<BooleanQueryOperatorInput>;
  external?: Maybe<BooleanQueryOperatorInput>;
  entrySlug?: Maybe<StringQueryOperatorInput>;
  externalUrl?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockJumbotronButtonJsonNodeConnection = {
  __typename?: 'contentfulBlockJumbotronButtonJsonNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockJumbotronButtonJsonNodeEdge>;
  nodes: Array<ContentfulBlockJumbotronButtonJsonNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockJumbotronButtonJsonNodeGroupConnection>;
};


export type ContentfulBlockJumbotronButtonJsonNodeConnectionDistinctArgs = {
  field: ContentfulBlockJumbotronButtonJsonNodeFieldsEnum;
};


export type ContentfulBlockJumbotronButtonJsonNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockJumbotronButtonJsonNodeFieldsEnum;
};

export type ContentfulBlockJumbotronButtonJsonNodeEdge = {
  __typename?: 'contentfulBlockJumbotronButtonJsonNodeEdge';
  next?: Maybe<ContentfulBlockJumbotronButtonJsonNode>;
  node: ContentfulBlockJumbotronButtonJsonNode;
  previous?: Maybe<ContentfulBlockJumbotronButtonJsonNode>;
};

export enum ContentfulBlockJumbotronButtonJsonNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  action___title = 'action___title',
  action___enabled = 'action___enabled',
  action___external = 'action___external',
  action___entrySlug = 'action___entrySlug',
  action___externalUrl = 'action___externalUrl',
  sys___type = 'sys___type'
}

export type ContentfulBlockJumbotronButtonJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  action?: Maybe<ContentfulBlockJumbotronButtonJsonNodeActionFilterInput>;
  sys?: Maybe<ContentfulBlockJumbotronButtonJsonNodeSysFilterInput>;
};

export type ContentfulBlockJumbotronButtonJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockJumbotronButtonJsonNodeFilterInput>;
};

export type ContentfulBlockJumbotronButtonJsonNodeGroupConnection = {
  __typename?: 'contentfulBlockJumbotronButtonJsonNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockJumbotronButtonJsonNodeEdge>;
  nodes: Array<ContentfulBlockJumbotronButtonJsonNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockJumbotronButtonJsonNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockJumbotronButtonJsonNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockJumbotronButtonJsonNodeSys = {
  __typename?: 'contentfulBlockJumbotronButtonJsonNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlockJumbotronButtonJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostExcerptTextNode = Node & {
  __typename?: 'contentfulBlogPostExcerptTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  excerpt?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulBlogPostExcerptTextNodeSys>;
};

export type ContentfulBlogPostExcerptTextNodeConnection = {
  __typename?: 'contentfulBlogPostExcerptTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostExcerptTextNodeEdge>;
  nodes: Array<ContentfulBlogPostExcerptTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostExcerptTextNodeGroupConnection>;
};


export type ContentfulBlogPostExcerptTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostExcerptTextNodeFieldsEnum;
};


export type ContentfulBlogPostExcerptTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostExcerptTextNodeFieldsEnum;
};

export type ContentfulBlogPostExcerptTextNodeEdge = {
  __typename?: 'contentfulBlogPostExcerptTextNodeEdge';
  next?: Maybe<ContentfulBlogPostExcerptTextNode>;
  node: ContentfulBlogPostExcerptTextNode;
  previous?: Maybe<ContentfulBlogPostExcerptTextNode>;
};

export enum ContentfulBlogPostExcerptTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  excerpt = 'excerpt',
  sys___type = 'sys___type'
}

export type ContentfulBlogPostExcerptTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostExcerptTextNodeSysFilterInput>;
};

export type ContentfulBlogPostExcerptTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostExcerptTextNodeFilterInput>;
};

export type ContentfulBlogPostExcerptTextNodeGroupConnection = {
  __typename?: 'contentfulBlogPostExcerptTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostExcerptTextNodeEdge>;
  nodes: Array<ContentfulBlogPostExcerptTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostExcerptTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostExcerptTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostExcerptTextNodeSys = {
  __typename?: 'contentfulBlogPostExcerptTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostExcerptTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulNewsExcerptTextNode = Node & {
  __typename?: 'contentfulNewsExcerptTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  excerpt?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulNewsExcerptTextNodeSys>;
};

export type ContentfulNewsExcerptTextNodeConnection = {
  __typename?: 'contentfulNewsExcerptTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNewsExcerptTextNodeEdge>;
  nodes: Array<ContentfulNewsExcerptTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulNewsExcerptTextNodeGroupConnection>;
};


export type ContentfulNewsExcerptTextNodeConnectionDistinctArgs = {
  field: ContentfulNewsExcerptTextNodeFieldsEnum;
};


export type ContentfulNewsExcerptTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulNewsExcerptTextNodeFieldsEnum;
};

export type ContentfulNewsExcerptTextNodeEdge = {
  __typename?: 'contentfulNewsExcerptTextNodeEdge';
  next?: Maybe<ContentfulNewsExcerptTextNode>;
  node: ContentfulNewsExcerptTextNode;
  previous?: Maybe<ContentfulNewsExcerptTextNode>;
};

export enum ContentfulNewsExcerptTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  excerpt = 'excerpt',
  sys___type = 'sys___type'
}

export type ContentfulNewsExcerptTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulNewsExcerptTextNodeSysFilterInput>;
};

export type ContentfulNewsExcerptTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulNewsExcerptTextNodeFilterInput>;
};

export type ContentfulNewsExcerptTextNodeGroupConnection = {
  __typename?: 'contentfulNewsExcerptTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulNewsExcerptTextNodeEdge>;
  nodes: Array<ContentfulNewsExcerptTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulNewsExcerptTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulNewsExcerptTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulNewsExcerptTextNodeSys = {
  __typename?: 'contentfulNewsExcerptTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulNewsExcerptTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type CallToActionFragmentFragment = (
  { __typename: 'ContentfulBlockCallToAction' }
  & Pick<ContentfulBlockCallToAction, 'id' | 'title'>
  & { content?: Maybe<(
    { __typename?: 'ContentfulBlockCallToActionContent' }
    & Pick<ContentfulBlockCallToActionContent, 'raw'>
  )>, button?: Maybe<(
    { __typename?: 'contentfulBlockCallToActionButtonJsonNode' }
    & { action?: Maybe<(
      { __typename?: 'contentfulBlockCallToActionButtonJsonNodeAction' }
      & Pick<ContentfulBlockCallToActionButtonJsonNodeAction, 'enabled' | 'entrySlug' | 'external' | 'externalUrl' | 'title'>
    )> }
  )> }
);

export type ContentFragmentFragment = (
  { __typename: 'ContentfulBlockContent' }
  & Pick<ContentfulBlockContent, 'id' | 'variation'>
  & { content?: Maybe<(
    { __typename?: 'ContentfulBlockContentContent' }
    & Pick<ContentfulBlockContentContent, 'raw'>
  )>, button?: Maybe<(
    { __typename?: 'contentfulBlockContentButtonJsonNode' }
    & { action?: Maybe<(
      { __typename?: 'contentfulBlockContentButtonJsonNodeAction' }
      & Pick<ContentfulBlockContentButtonJsonNodeAction, 'enabled' | 'entrySlug' | 'external' | 'externalUrl' | 'title'>
    )> }
  )> }
);

export type AllContentBlockContentQueryVariables = Exact<{ [key: string]: never; }>;


export type AllContentBlockContentQuery = (
  { __typename?: 'Query' }
  & { allContentfulBlockContent: (
    { __typename?: 'ContentfulBlockContentConnection' }
    & { nodes: Array<(
      { __typename?: 'ContentfulBlockContent' }
      & Pick<ContentfulBlockContent, 'blockTitle'>
      & { page?: Maybe<Array<Maybe<(
        { __typename?: 'ContentfulPage' }
        & Pick<ContentfulPage, 'title'>
      )>>> }
      & ContentFragmentFragment
    )> }
  ) }
);

export type ContentListFragmentFragment = (
  { __typename: 'ContentfulBlockContentList' }
  & Pick<ContentfulBlockContentList, 'id' | 'highlight' | 'title' | 'listTitle'>
  & { content?: Maybe<(
    { __typename?: 'ContentfulBlockContentListContent' }
    & Pick<ContentfulBlockContentListContent, 'raw'>
  )>, button?: Maybe<(
    { __typename?: 'contentfulBlockContentListButtonJsonNode' }
    & { action?: Maybe<(
      { __typename?: 'contentfulBlockContentListButtonJsonNodeAction' }
      & Pick<ContentfulBlockContentListButtonJsonNodeAction, 'enabled' | 'entrySlug' | 'externalUrl' | 'title'>
    )> }
  )>, listDescription?: Maybe<(
    { __typename?: 'ContentfulBlockContentListListDescription' }
    & Pick<ContentfulBlockContentListListDescription, 'raw'>
  )>, list?: Maybe<(
    { __typename?: 'contentfulBlockContentListListJsonNode' }
    & Pick<ContentfulBlockContentListListJsonNode, 'items'>
  )> }
);

export type AllContentListBlockContentQueryVariables = Exact<{ [key: string]: never; }>;


export type AllContentListBlockContentQuery = (
  { __typename?: 'Query' }
  & { allContentfulBlockContentList: (
    { __typename?: 'ContentfulBlockContentListConnection' }
    & { nodes: Array<(
      { __typename?: 'ContentfulBlockContentList' }
      & { page?: Maybe<Array<Maybe<(
        { __typename?: 'ContentfulPage' }
        & Pick<ContentfulPage, 'title'>
      )>>> }
      & ContentListFragmentFragment
    )> }
  ) }
);

export type ImageBandFragmentFragment = (
  { __typename: 'ContentfulBlockImageBand' }
  & Pick<ContentfulBlockImageBand, 'id'>
  & { image?: Maybe<(
    { __typename?: 'ContentfulAsset' }
    & Pick<ContentfulAsset, 'title' | 'description' | 'gatsbyImageData'>
  )> }
);

export type AllContentImageBandBlocksQueryVariables = Exact<{ [key: string]: never; }>;


export type AllContentImageBandBlocksQuery = (
  { __typename?: 'Query' }
  & { allContentfulBlockImageBand: (
    { __typename?: 'ContentfulBlockImageBandConnection' }
    & { nodes: Array<(
      { __typename?: 'ContentfulBlockImageBand' }
      & Pick<ContentfulBlockImageBand, 'title'>
      & ImageBandFragmentFragment
    )> }
  ) }
);

export type JumbotronFragmentFragment = (
  { __typename: 'ContentfulBlockJumbotron' }
  & Pick<ContentfulBlockJumbotron, 'id' | 'title' | 'backgroundColor' | 'imageAlignment' | 'imageOnLeft'>
  & { content?: Maybe<(
    { __typename?: 'ContentfulBlockJumbotronContent' }
    & Pick<ContentfulBlockJumbotronContent, 'raw'>
  )>, button?: Maybe<(
    { __typename?: 'contentfulBlockJumbotronButtonJsonNode' }
    & { action?: Maybe<(
      { __typename?: 'contentfulBlockJumbotronButtonJsonNodeAction' }
      & Pick<ContentfulBlockJumbotronButtonJsonNodeAction, 'enabled' | 'entrySlug' | 'external' | 'externalUrl' | 'title'>
    )> }
  )>, image?: Maybe<(
    { __typename?: 'ContentfulAsset' }
    & Pick<ContentfulAsset, 'gatsbyImageData' | 'title' | 'description'>
  )>, backgroundImage?: Maybe<(
    { __typename?: 'ContentfulAsset' }
    & Pick<ContentfulAsset, 'gatsbyImageData'>
  )> }
);

export type AllJumbotronBlocksQueryVariables = Exact<{ [key: string]: never; }>;


export type AllJumbotronBlocksQuery = (
  { __typename?: 'Query' }
  & { allContentfulBlockJumbotron: (
    { __typename?: 'ContentfulBlockJumbotronConnection' }
    & { nodes: Array<(
      { __typename?: 'ContentfulBlockJumbotron' }
      & JumbotronFragmentFragment
    )> }
  ) }
);

export type ImageFragmentFragment = (
  { __typename?: 'ContentfulAsset' }
  & Pick<ContentfulAsset, 'title' | 'description' | 'gatsbyImageData'>
);

export type BannerQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type BannerQueryQuery = (
  { __typename?: 'Query' }
  & { contentfulMicroContent?: Maybe<(
    { __typename?: 'ContentfulMicroContent' }
    & Pick<ContentfulMicroContent, 'value'>
  )> }
);

export type AllContentfulAssetsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllContentfulAssetsQuery = (
  { __typename?: 'Query' }
  & { allContentfulAsset: (
    { __typename?: 'ContentfulAssetConnection' }
    & { nodes: Array<(
      { __typename?: 'ContentfulAsset' }
      & Pick<ContentfulAsset, 'title' | 'description' | 'gatsbyImageData' | 'contentful_id'>
    )> }
  ) }
);

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { allContentfulBlogPost: (
    { __typename?: 'ContentfulBlogPostConnection' }
    & { nodes: Array<(
      { __typename?: 'ContentfulBlogPost' }
      & Pick<ContentfulBlogPost, 'id' | 'slug' | 'title' | 'published' | 'featured'>
      & { excerpt?: Maybe<(
        { __typename?: 'contentfulBlogPostExcerptTextNode' }
        & Pick<ContentfulBlogPostExcerptTextNode, 'excerpt'>
      )>, featuredImage?: Maybe<(
        { __typename?: 'ContentfulAsset' }
        & Pick<ContentfulAsset, 'gatsbyImageData'>
      )> }
    )> }
  ) }
);

export type BlogTemplateQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type BlogTemplateQueryQuery = (
  { __typename?: 'Query' }
  & { blog?: Maybe<(
    { __typename?: 'ContentfulBlogPost' }
    & Pick<ContentfulBlogPost, 'id' | 'title' | 'published' | 'seoTitle' | 'seoDescription'>
    & { author?: Maybe<(
      { __typename?: 'ContentfulAuthor' }
      & Pick<ContentfulAuthor, 'name'>
      & { biography?: Maybe<(
        { __typename?: 'contentfulAuthorBiographyTextNode' }
        & Pick<ContentfulAuthorBiographyTextNode, 'biography'>
      )> }
    )>, featuredImage?: Maybe<(
      { __typename?: 'ContentfulAsset' }
      & Pick<ContentfulAsset, 'gatsbyImageData'>
    )>, content?: Maybe<(
      { __typename?: 'ContentfulBlogPostContent' }
      & Pick<ContentfulBlogPostContent, 'raw'>
    )> }
  )> }
);

export type PageTemplateQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PageTemplateQueryQuery = (
  { __typename?: 'Query' }
  & { page?: Maybe<(
    { __typename?: 'ContentfulPage' }
    & Pick<ContentfulPage, 'title' | 'seoTitle' | 'seoDescription'>
    & { blocks?: Maybe<Array<Maybe<(
      { __typename?: 'ContentfulBlockCallToAction' }
      & CallToActionFragmentFragment
    ) | (
      { __typename?: 'ContentfulBlockContent' }
      & ContentFragmentFragment
    ) | (
      { __typename?: 'ContentfulBlockContentList' }
      & ContentListFragmentFragment
    ) | (
      { __typename?: 'ContentfulBlockImageBand' }
      & ImageBandFragmentFragment
    ) | (
      { __typename?: 'ContentfulBlockJumbotron' }
      & JumbotronFragmentFragment
    )>>> }
  )> }
);
