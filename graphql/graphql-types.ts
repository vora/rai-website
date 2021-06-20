export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type File = Node & {
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

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
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

export type Site = Node & {
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

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
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

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

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

export type ImageSharp = Node & {
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

export type ImageSharpFixed = {
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

export type ImageSharpFluid = {
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


export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulAsset = ContentfulReference & Node & {
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

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulFixed = {
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

export type ContentfulImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageResizingBehavior =
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /** Crop the image to the specified dimensions, if the original image is smaller than these dimensions, then the image will be upscaled. */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ContentfulImageCropFocus =
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulMicroContent = ContentfulReference & ContentfulEntry & Node & {
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

export type ContentfulMicroContentSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulMicroContentSysContentType>;
};

export type ContentfulMicroContentSysContentType = {
  sys?: Maybe<ContentfulMicroContentSysContentTypeSys>;
};

export type ContentfulMicroContentSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPost = ContentfulReference & ContentfulEntry & Node & {
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

export type ContentfulBlogPostContent = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogPostSysContentType>;
};

export type ContentfulBlogPostSysContentType = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAuthor = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  blog_post?: Maybe<Array<Maybe<ContentfulBlogPost>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAuthorSys>;
  biography?: Maybe<ContentfulAuthorBiographyTextNode>;
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

export type ContentfulAuthorSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAuthorSysContentType>;
};

export type ContentfulAuthorSysContentType = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSys>;
};

export type ContentfulAuthorSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulPage = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  blocks?: Maybe<Array<Maybe<ContentfulBlockCallToAction>>>;
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

export type ContentfulPageSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageSysContentType>;
};

export type ContentfulPageSysContentType = {
  sys?: Maybe<ContentfulPageSysContentTypeSys>;
};

export type ContentfulPageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCallToAction = ContentfulReference & ContentfulEntry & Node & {
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

export type ContentfulBlockCallToActionContent = {
  raw?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCallToActionSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockCallToActionSysContentType>;
};

export type ContentfulBlockCallToActionSysContentType = {
  sys?: Maybe<ContentfulBlockCallToActionSysContentTypeSys>;
};

export type ContentfulBlockCallToActionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockCallToActionButtonJsonNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  action?: Maybe<ContentfulBlockCallToActionButtonJsonNodeAction>;
  sys?: Maybe<ContentfulBlockCallToActionButtonJsonNodeSys>;
};

export type ContentfulBlockCallToActionButtonJsonNodeAction = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  external?: Maybe<Scalars['Boolean']>;
};

export type ContentfulBlockCallToActionButtonJsonNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorBiographyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  biography?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAuthorBiographyTextNodeSys>;
};

export type ContentfulAuthorBiographyTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostExcerptTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  excerpt?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulBlogPostExcerptTextNodeSys>;
};

export type ContentfulBlogPostExcerptTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
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

export type SitePlugin = Node & {
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

export type SitePluginPluginOptions = {
  displayName?: Maybe<Scalars['Boolean']>;
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
  esModule?: Maybe<Scalars['Boolean']>;
  modules?: Maybe<SitePluginPluginOptionsCssLoaderOptionsModules>;
};

export type SitePluginPluginOptionsCssLoaderOptionsModules = {
  namedExport?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPluginConfig = {
  head?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Query = {
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
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  biography?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
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
  blocks?: Maybe<ContentfulBlockCallToActionFilterListInput>;
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

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
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

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

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

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
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

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
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
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

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

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
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
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

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

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
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
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

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

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

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

export type SitePluginPluginOptionsFilterInput = {
  displayName?: Maybe<BooleanQueryOperatorInput>;
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

export type SitePluginPluginOptionsCssLoaderOptionsFilterInput = {
  esModule?: Maybe<BooleanQueryOperatorInput>;
  modules?: Maybe<SitePluginPluginOptionsCssLoaderOptionsModulesFilterInput>;
};

export type SitePluginPluginOptionsCssLoaderOptionsModulesFilterInput = {
  namedExport?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginConfigFilterInput = {
  head?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
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

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___minify'
  | 'pluginCreator___pluginOptions___namespace'
  | 'pluginCreator___pluginOptions___transpileTemplateLiterals'
  | 'pluginCreator___pluginOptions___pure'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___cssLoaderOptions___esModule'
  | 'pluginCreator___pluginOptions___content'
  | 'pluginCreator___pluginOptions___async'
  | 'pluginCreator___pluginOptions___defer'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___forceBase64Format'
  | 'pluginCreator___pluginOptions___useMozJpeg'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pluginConfig___head'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___downloadLocal'
  | 'pluginCreator___pluginOptions___forceFullSync'
  | 'pluginCreator___pluginOptions___pageLimit'
  | 'pluginCreator___pluginOptions___assetDownloadWorkers'
  | 'pluginCreator___pluginOptions___useNameForId'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

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

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
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
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulEntryConnection = {
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
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
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

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulAssetConnection = {
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
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___type'
  | 'sys___revision'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'gatsbyImageData'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
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

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMicroContentSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulMicroContentSysContentTypeFilterInput>;
};

export type ContentfulMicroContentSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMicroContentSysContentTypeSysFilterInput>;
};

export type ContentfulMicroContentSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMicroContentConnection = {
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
  next?: Maybe<ContentfulMicroContent>;
  node: ContentfulMicroContent;
  previous?: Maybe<ContentfulMicroContent>;
};

export type ContentfulMicroContentFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'key'
  | 'value'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulMicroContentGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMicroContentEdge>;
  nodes: Array<ContentfulMicroContent>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

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

export type ContentfulMicroContentSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMicroContentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostContentFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  blog_post?: Maybe<ContentfulBlogPostFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  biography?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  childrenContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNodeFilterListInput>;
  childContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulBlogPostFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostFilterInput>;
};

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

export type ContentfulBlogPostExcerptTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostExcerptTextNodeSysFilterInput>;
};

export type ContentfulBlogPostExcerptTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostExcerptTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostExcerptTextNodeFilterInput>;
};

export type ContentfulAuthorSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAuthorSysContentTypeFilterInput>;
};

export type ContentfulAuthorSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

export type ContentfulAuthorSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorBiographyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  biography?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorBiographyTextNodeSysFilterInput>;
};

export type ContentfulAuthorBiographyTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorBiographyTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
};

export type ContentfulBlogPostConnection = {
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

export type ContentfulBlogPostEdge = {
  next?: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous?: Maybe<ContentfulBlogPost>;
};

export type ContentfulBlogPostFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'featured'
  | 'published'
  | 'content___raw'
  | 'seoTitle'
  | 'seoDescription'
  | 'author___contentful_id'
  | 'author___id'
  | 'author___node_locale'
  | 'author___name'
  | 'author___blog_post'
  | 'author___blog_post___contentful_id'
  | 'author___blog_post___id'
  | 'author___blog_post___node_locale'
  | 'author___blog_post___title'
  | 'author___blog_post___slug'
  | 'author___blog_post___featured'
  | 'author___blog_post___published'
  | 'author___blog_post___content___raw'
  | 'author___blog_post___seoTitle'
  | 'author___blog_post___seoDescription'
  | 'author___blog_post___author___contentful_id'
  | 'author___blog_post___author___id'
  | 'author___blog_post___author___node_locale'
  | 'author___blog_post___author___name'
  | 'author___blog_post___author___blog_post'
  | 'author___blog_post___author___spaceId'
  | 'author___blog_post___author___createdAt'
  | 'author___blog_post___author___updatedAt'
  | 'author___blog_post___author___childrenContentfulAuthorBiographyTextNode'
  | 'author___blog_post___author___children'
  | 'author___blog_post___excerpt___id'
  | 'author___blog_post___excerpt___children'
  | 'author___blog_post___excerpt___excerpt'
  | 'author___blog_post___spaceId'
  | 'author___blog_post___createdAt'
  | 'author___blog_post___updatedAt'
  | 'author___blog_post___sys___type'
  | 'author___blog_post___sys___revision'
  | 'author___blog_post___featuredImage___contentful_id'
  | 'author___blog_post___featuredImage___id'
  | 'author___blog_post___featuredImage___spaceId'
  | 'author___blog_post___featuredImage___createdAt'
  | 'author___blog_post___featuredImage___updatedAt'
  | 'author___blog_post___featuredImage___title'
  | 'author___blog_post___featuredImage___description'
  | 'author___blog_post___featuredImage___node_locale'
  | 'author___blog_post___featuredImage___gatsbyImageData'
  | 'author___blog_post___featuredImage___children'
  | 'author___blog_post___childrenContentfulBlogPostExcerptTextNode'
  | 'author___blog_post___childrenContentfulBlogPostExcerptTextNode___id'
  | 'author___blog_post___childrenContentfulBlogPostExcerptTextNode___children'
  | 'author___blog_post___childrenContentfulBlogPostExcerptTextNode___excerpt'
  | 'author___blog_post___childContentfulBlogPostExcerptTextNode___id'
  | 'author___blog_post___childContentfulBlogPostExcerptTextNode___children'
  | 'author___blog_post___childContentfulBlogPostExcerptTextNode___excerpt'
  | 'author___blog_post___parent___id'
  | 'author___blog_post___parent___children'
  | 'author___blog_post___children'
  | 'author___blog_post___children___id'
  | 'author___blog_post___children___children'
  | 'author___blog_post___internal___content'
  | 'author___blog_post___internal___contentDigest'
  | 'author___blog_post___internal___description'
  | 'author___blog_post___internal___fieldOwners'
  | 'author___blog_post___internal___ignoreType'
  | 'author___blog_post___internal___mediaType'
  | 'author___blog_post___internal___owner'
  | 'author___blog_post___internal___type'
  | 'author___spaceId'
  | 'author___createdAt'
  | 'author___updatedAt'
  | 'author___sys___type'
  | 'author___sys___revision'
  | 'author___biography___id'
  | 'author___biography___parent___id'
  | 'author___biography___parent___children'
  | 'author___biography___children'
  | 'author___biography___children___id'
  | 'author___biography___children___children'
  | 'author___biography___internal___content'
  | 'author___biography___internal___contentDigest'
  | 'author___biography___internal___description'
  | 'author___biography___internal___fieldOwners'
  | 'author___biography___internal___ignoreType'
  | 'author___biography___internal___mediaType'
  | 'author___biography___internal___owner'
  | 'author___biography___internal___type'
  | 'author___biography___biography'
  | 'author___biography___sys___type'
  | 'author___childrenContentfulAuthorBiographyTextNode'
  | 'author___childrenContentfulAuthorBiographyTextNode___id'
  | 'author___childrenContentfulAuthorBiographyTextNode___parent___id'
  | 'author___childrenContentfulAuthorBiographyTextNode___parent___children'
  | 'author___childrenContentfulAuthorBiographyTextNode___children'
  | 'author___childrenContentfulAuthorBiographyTextNode___children___id'
  | 'author___childrenContentfulAuthorBiographyTextNode___children___children'
  | 'author___childrenContentfulAuthorBiographyTextNode___internal___content'
  | 'author___childrenContentfulAuthorBiographyTextNode___internal___contentDigest'
  | 'author___childrenContentfulAuthorBiographyTextNode___internal___description'
  | 'author___childrenContentfulAuthorBiographyTextNode___internal___fieldOwners'
  | 'author___childrenContentfulAuthorBiographyTextNode___internal___ignoreType'
  | 'author___childrenContentfulAuthorBiographyTextNode___internal___mediaType'
  | 'author___childrenContentfulAuthorBiographyTextNode___internal___owner'
  | 'author___childrenContentfulAuthorBiographyTextNode___internal___type'
  | 'author___childrenContentfulAuthorBiographyTextNode___biography'
  | 'author___childrenContentfulAuthorBiographyTextNode___sys___type'
  | 'author___childContentfulAuthorBiographyTextNode___id'
  | 'author___childContentfulAuthorBiographyTextNode___parent___id'
  | 'author___childContentfulAuthorBiographyTextNode___parent___children'
  | 'author___childContentfulAuthorBiographyTextNode___children'
  | 'author___childContentfulAuthorBiographyTextNode___children___id'
  | 'author___childContentfulAuthorBiographyTextNode___children___children'
  | 'author___childContentfulAuthorBiographyTextNode___internal___content'
  | 'author___childContentfulAuthorBiographyTextNode___internal___contentDigest'
  | 'author___childContentfulAuthorBiographyTextNode___internal___description'
  | 'author___childContentfulAuthorBiographyTextNode___internal___fieldOwners'
  | 'author___childContentfulAuthorBiographyTextNode___internal___ignoreType'
  | 'author___childContentfulAuthorBiographyTextNode___internal___mediaType'
  | 'author___childContentfulAuthorBiographyTextNode___internal___owner'
  | 'author___childContentfulAuthorBiographyTextNode___internal___type'
  | 'author___childContentfulAuthorBiographyTextNode___biography'
  | 'author___childContentfulAuthorBiographyTextNode___sys___type'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'excerpt___id'
  | 'excerpt___parent___id'
  | 'excerpt___parent___parent___id'
  | 'excerpt___parent___parent___children'
  | 'excerpt___parent___children'
  | 'excerpt___parent___children___id'
  | 'excerpt___parent___children___children'
  | 'excerpt___parent___internal___content'
  | 'excerpt___parent___internal___contentDigest'
  | 'excerpt___parent___internal___description'
  | 'excerpt___parent___internal___fieldOwners'
  | 'excerpt___parent___internal___ignoreType'
  | 'excerpt___parent___internal___mediaType'
  | 'excerpt___parent___internal___owner'
  | 'excerpt___parent___internal___type'
  | 'excerpt___children'
  | 'excerpt___children___id'
  | 'excerpt___children___parent___id'
  | 'excerpt___children___parent___children'
  | 'excerpt___children___children'
  | 'excerpt___children___children___id'
  | 'excerpt___children___children___children'
  | 'excerpt___children___internal___content'
  | 'excerpt___children___internal___contentDigest'
  | 'excerpt___children___internal___description'
  | 'excerpt___children___internal___fieldOwners'
  | 'excerpt___children___internal___ignoreType'
  | 'excerpt___children___internal___mediaType'
  | 'excerpt___children___internal___owner'
  | 'excerpt___children___internal___type'
  | 'excerpt___internal___content'
  | 'excerpt___internal___contentDigest'
  | 'excerpt___internal___description'
  | 'excerpt___internal___fieldOwners'
  | 'excerpt___internal___ignoreType'
  | 'excerpt___internal___mediaType'
  | 'excerpt___internal___owner'
  | 'excerpt___internal___type'
  | 'excerpt___excerpt'
  | 'excerpt___sys___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'featuredImage___contentful_id'
  | 'featuredImage___id'
  | 'featuredImage___spaceId'
  | 'featuredImage___createdAt'
  | 'featuredImage___updatedAt'
  | 'featuredImage___file___url'
  | 'featuredImage___file___details___size'
  | 'featuredImage___file___fileName'
  | 'featuredImage___file___contentType'
  | 'featuredImage___title'
  | 'featuredImage___description'
  | 'featuredImage___node_locale'
  | 'featuredImage___sys___type'
  | 'featuredImage___sys___revision'
  | 'featuredImage___fixed___base64'
  | 'featuredImage___fixed___tracedSVG'
  | 'featuredImage___fixed___aspectRatio'
  | 'featuredImage___fixed___width'
  | 'featuredImage___fixed___height'
  | 'featuredImage___fixed___src'
  | 'featuredImage___fixed___srcSet'
  | 'featuredImage___fixed___srcWebp'
  | 'featuredImage___fixed___srcSetWebp'
  | 'featuredImage___fluid___base64'
  | 'featuredImage___fluid___tracedSVG'
  | 'featuredImage___fluid___aspectRatio'
  | 'featuredImage___fluid___src'
  | 'featuredImage___fluid___srcSet'
  | 'featuredImage___fluid___srcWebp'
  | 'featuredImage___fluid___srcSetWebp'
  | 'featuredImage___fluid___sizes'
  | 'featuredImage___gatsbyImageData'
  | 'featuredImage___resize___base64'
  | 'featuredImage___resize___tracedSVG'
  | 'featuredImage___resize___src'
  | 'featuredImage___resize___width'
  | 'featuredImage___resize___height'
  | 'featuredImage___resize___aspectRatio'
  | 'featuredImage___parent___id'
  | 'featuredImage___parent___parent___id'
  | 'featuredImage___parent___parent___children'
  | 'featuredImage___parent___children'
  | 'featuredImage___parent___children___id'
  | 'featuredImage___parent___children___children'
  | 'featuredImage___parent___internal___content'
  | 'featuredImage___parent___internal___contentDigest'
  | 'featuredImage___parent___internal___description'
  | 'featuredImage___parent___internal___fieldOwners'
  | 'featuredImage___parent___internal___ignoreType'
  | 'featuredImage___parent___internal___mediaType'
  | 'featuredImage___parent___internal___owner'
  | 'featuredImage___parent___internal___type'
  | 'featuredImage___children'
  | 'featuredImage___children___id'
  | 'featuredImage___children___parent___id'
  | 'featuredImage___children___parent___children'
  | 'featuredImage___children___children'
  | 'featuredImage___children___children___id'
  | 'featuredImage___children___children___children'
  | 'featuredImage___children___internal___content'
  | 'featuredImage___children___internal___contentDigest'
  | 'featuredImage___children___internal___description'
  | 'featuredImage___children___internal___fieldOwners'
  | 'featuredImage___children___internal___ignoreType'
  | 'featuredImage___children___internal___mediaType'
  | 'featuredImage___children___internal___owner'
  | 'featuredImage___children___internal___type'
  | 'featuredImage___internal___content'
  | 'featuredImage___internal___contentDigest'
  | 'featuredImage___internal___description'
  | 'featuredImage___internal___fieldOwners'
  | 'featuredImage___internal___ignoreType'
  | 'featuredImage___internal___mediaType'
  | 'featuredImage___internal___owner'
  | 'featuredImage___internal___type'
  | 'childrenContentfulBlogPostExcerptTextNode'
  | 'childrenContentfulBlogPostExcerptTextNode___id'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___id'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___parent___id'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___parent___children'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___children'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___children___id'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___children___children'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___internal___content'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___internal___contentDigest'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___internal___description'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___internal___ignoreType'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___internal___mediaType'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___internal___owner'
  | 'childrenContentfulBlogPostExcerptTextNode___parent___internal___type'
  | 'childrenContentfulBlogPostExcerptTextNode___children'
  | 'childrenContentfulBlogPostExcerptTextNode___children___id'
  | 'childrenContentfulBlogPostExcerptTextNode___children___parent___id'
  | 'childrenContentfulBlogPostExcerptTextNode___children___parent___children'
  | 'childrenContentfulBlogPostExcerptTextNode___children___children'
  | 'childrenContentfulBlogPostExcerptTextNode___children___children___id'
  | 'childrenContentfulBlogPostExcerptTextNode___children___children___children'
  | 'childrenContentfulBlogPostExcerptTextNode___children___internal___content'
  | 'childrenContentfulBlogPostExcerptTextNode___children___internal___contentDigest'
  | 'childrenContentfulBlogPostExcerptTextNode___children___internal___description'
  | 'childrenContentfulBlogPostExcerptTextNode___children___internal___fieldOwners'
  | 'childrenContentfulBlogPostExcerptTextNode___children___internal___ignoreType'
  | 'childrenContentfulBlogPostExcerptTextNode___children___internal___mediaType'
  | 'childrenContentfulBlogPostExcerptTextNode___children___internal___owner'
  | 'childrenContentfulBlogPostExcerptTextNode___children___internal___type'
  | 'childrenContentfulBlogPostExcerptTextNode___internal___content'
  | 'childrenContentfulBlogPostExcerptTextNode___internal___contentDigest'
  | 'childrenContentfulBlogPostExcerptTextNode___internal___description'
  | 'childrenContentfulBlogPostExcerptTextNode___internal___fieldOwners'
  | 'childrenContentfulBlogPostExcerptTextNode___internal___ignoreType'
  | 'childrenContentfulBlogPostExcerptTextNode___internal___mediaType'
  | 'childrenContentfulBlogPostExcerptTextNode___internal___owner'
  | 'childrenContentfulBlogPostExcerptTextNode___internal___type'
  | 'childrenContentfulBlogPostExcerptTextNode___excerpt'
  | 'childrenContentfulBlogPostExcerptTextNode___sys___type'
  | 'childContentfulBlogPostExcerptTextNode___id'
  | 'childContentfulBlogPostExcerptTextNode___parent___id'
  | 'childContentfulBlogPostExcerptTextNode___parent___parent___id'
  | 'childContentfulBlogPostExcerptTextNode___parent___parent___children'
  | 'childContentfulBlogPostExcerptTextNode___parent___children'
  | 'childContentfulBlogPostExcerptTextNode___parent___children___id'
  | 'childContentfulBlogPostExcerptTextNode___parent___children___children'
  | 'childContentfulBlogPostExcerptTextNode___parent___internal___content'
  | 'childContentfulBlogPostExcerptTextNode___parent___internal___contentDigest'
  | 'childContentfulBlogPostExcerptTextNode___parent___internal___description'
  | 'childContentfulBlogPostExcerptTextNode___parent___internal___fieldOwners'
  | 'childContentfulBlogPostExcerptTextNode___parent___internal___ignoreType'
  | 'childContentfulBlogPostExcerptTextNode___parent___internal___mediaType'
  | 'childContentfulBlogPostExcerptTextNode___parent___internal___owner'
  | 'childContentfulBlogPostExcerptTextNode___parent___internal___type'
  | 'childContentfulBlogPostExcerptTextNode___children'
  | 'childContentfulBlogPostExcerptTextNode___children___id'
  | 'childContentfulBlogPostExcerptTextNode___children___parent___id'
  | 'childContentfulBlogPostExcerptTextNode___children___parent___children'
  | 'childContentfulBlogPostExcerptTextNode___children___children'
  | 'childContentfulBlogPostExcerptTextNode___children___children___id'
  | 'childContentfulBlogPostExcerptTextNode___children___children___children'
  | 'childContentfulBlogPostExcerptTextNode___children___internal___content'
  | 'childContentfulBlogPostExcerptTextNode___children___internal___contentDigest'
  | 'childContentfulBlogPostExcerptTextNode___children___internal___description'
  | 'childContentfulBlogPostExcerptTextNode___children___internal___fieldOwners'
  | 'childContentfulBlogPostExcerptTextNode___children___internal___ignoreType'
  | 'childContentfulBlogPostExcerptTextNode___children___internal___mediaType'
  | 'childContentfulBlogPostExcerptTextNode___children___internal___owner'
  | 'childContentfulBlogPostExcerptTextNode___children___internal___type'
  | 'childContentfulBlogPostExcerptTextNode___internal___content'
  | 'childContentfulBlogPostExcerptTextNode___internal___contentDigest'
  | 'childContentfulBlogPostExcerptTextNode___internal___description'
  | 'childContentfulBlogPostExcerptTextNode___internal___fieldOwners'
  | 'childContentfulBlogPostExcerptTextNode___internal___ignoreType'
  | 'childContentfulBlogPostExcerptTextNode___internal___mediaType'
  | 'childContentfulBlogPostExcerptTextNode___internal___owner'
  | 'childContentfulBlogPostExcerptTextNode___internal___type'
  | 'childContentfulBlogPostExcerptTextNode___excerpt'
  | 'childContentfulBlogPostExcerptTextNode___sys___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulBlogPostGroupConnection = {
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

export type ContentfulAuthorConnection = {
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
  next?: Maybe<ContentfulAuthor>;
  node: ContentfulAuthor;
  previous?: Maybe<ContentfulAuthor>;
};

export type ContentfulAuthorFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'blog_post'
  | 'blog_post___contentful_id'
  | 'blog_post___id'
  | 'blog_post___node_locale'
  | 'blog_post___title'
  | 'blog_post___slug'
  | 'blog_post___featured'
  | 'blog_post___published'
  | 'blog_post___content___raw'
  | 'blog_post___seoTitle'
  | 'blog_post___seoDescription'
  | 'blog_post___author___contentful_id'
  | 'blog_post___author___id'
  | 'blog_post___author___node_locale'
  | 'blog_post___author___name'
  | 'blog_post___author___blog_post'
  | 'blog_post___author___blog_post___contentful_id'
  | 'blog_post___author___blog_post___id'
  | 'blog_post___author___blog_post___node_locale'
  | 'blog_post___author___blog_post___title'
  | 'blog_post___author___blog_post___slug'
  | 'blog_post___author___blog_post___featured'
  | 'blog_post___author___blog_post___published'
  | 'blog_post___author___blog_post___seoTitle'
  | 'blog_post___author___blog_post___seoDescription'
  | 'blog_post___author___blog_post___spaceId'
  | 'blog_post___author___blog_post___createdAt'
  | 'blog_post___author___blog_post___updatedAt'
  | 'blog_post___author___blog_post___childrenContentfulBlogPostExcerptTextNode'
  | 'blog_post___author___blog_post___children'
  | 'blog_post___author___spaceId'
  | 'blog_post___author___createdAt'
  | 'blog_post___author___updatedAt'
  | 'blog_post___author___sys___type'
  | 'blog_post___author___sys___revision'
  | 'blog_post___author___biography___id'
  | 'blog_post___author___biography___children'
  | 'blog_post___author___biography___biography'
  | 'blog_post___author___childrenContentfulAuthorBiographyTextNode'
  | 'blog_post___author___childrenContentfulAuthorBiographyTextNode___id'
  | 'blog_post___author___childrenContentfulAuthorBiographyTextNode___children'
  | 'blog_post___author___childrenContentfulAuthorBiographyTextNode___biography'
  | 'blog_post___author___childContentfulAuthorBiographyTextNode___id'
  | 'blog_post___author___childContentfulAuthorBiographyTextNode___children'
  | 'blog_post___author___childContentfulAuthorBiographyTextNode___biography'
  | 'blog_post___author___parent___id'
  | 'blog_post___author___parent___children'
  | 'blog_post___author___children'
  | 'blog_post___author___children___id'
  | 'blog_post___author___children___children'
  | 'blog_post___author___internal___content'
  | 'blog_post___author___internal___contentDigest'
  | 'blog_post___author___internal___description'
  | 'blog_post___author___internal___fieldOwners'
  | 'blog_post___author___internal___ignoreType'
  | 'blog_post___author___internal___mediaType'
  | 'blog_post___author___internal___owner'
  | 'blog_post___author___internal___type'
  | 'blog_post___excerpt___id'
  | 'blog_post___excerpt___parent___id'
  | 'blog_post___excerpt___parent___children'
  | 'blog_post___excerpt___children'
  | 'blog_post___excerpt___children___id'
  | 'blog_post___excerpt___children___children'
  | 'blog_post___excerpt___internal___content'
  | 'blog_post___excerpt___internal___contentDigest'
  | 'blog_post___excerpt___internal___description'
  | 'blog_post___excerpt___internal___fieldOwners'
  | 'blog_post___excerpt___internal___ignoreType'
  | 'blog_post___excerpt___internal___mediaType'
  | 'blog_post___excerpt___internal___owner'
  | 'blog_post___excerpt___internal___type'
  | 'blog_post___excerpt___excerpt'
  | 'blog_post___excerpt___sys___type'
  | 'blog_post___spaceId'
  | 'blog_post___createdAt'
  | 'blog_post___updatedAt'
  | 'blog_post___sys___type'
  | 'blog_post___sys___revision'
  | 'blog_post___featuredImage___contentful_id'
  | 'blog_post___featuredImage___id'
  | 'blog_post___featuredImage___spaceId'
  | 'blog_post___featuredImage___createdAt'
  | 'blog_post___featuredImage___updatedAt'
  | 'blog_post___featuredImage___file___url'
  | 'blog_post___featuredImage___file___fileName'
  | 'blog_post___featuredImage___file___contentType'
  | 'blog_post___featuredImage___title'
  | 'blog_post___featuredImage___description'
  | 'blog_post___featuredImage___node_locale'
  | 'blog_post___featuredImage___sys___type'
  | 'blog_post___featuredImage___sys___revision'
  | 'blog_post___featuredImage___fixed___base64'
  | 'blog_post___featuredImage___fixed___tracedSVG'
  | 'blog_post___featuredImage___fixed___aspectRatio'
  | 'blog_post___featuredImage___fixed___width'
  | 'blog_post___featuredImage___fixed___height'
  | 'blog_post___featuredImage___fixed___src'
  | 'blog_post___featuredImage___fixed___srcSet'
  | 'blog_post___featuredImage___fixed___srcWebp'
  | 'blog_post___featuredImage___fixed___srcSetWebp'
  | 'blog_post___featuredImage___fluid___base64'
  | 'blog_post___featuredImage___fluid___tracedSVG'
  | 'blog_post___featuredImage___fluid___aspectRatio'
  | 'blog_post___featuredImage___fluid___src'
  | 'blog_post___featuredImage___fluid___srcSet'
  | 'blog_post___featuredImage___fluid___srcWebp'
  | 'blog_post___featuredImage___fluid___srcSetWebp'
  | 'blog_post___featuredImage___fluid___sizes'
  | 'blog_post___featuredImage___gatsbyImageData'
  | 'blog_post___featuredImage___resize___base64'
  | 'blog_post___featuredImage___resize___tracedSVG'
  | 'blog_post___featuredImage___resize___src'
  | 'blog_post___featuredImage___resize___width'
  | 'blog_post___featuredImage___resize___height'
  | 'blog_post___featuredImage___resize___aspectRatio'
  | 'blog_post___featuredImage___parent___id'
  | 'blog_post___featuredImage___parent___children'
  | 'blog_post___featuredImage___children'
  | 'blog_post___featuredImage___children___id'
  | 'blog_post___featuredImage___children___children'
  | 'blog_post___featuredImage___internal___content'
  | 'blog_post___featuredImage___internal___contentDigest'
  | 'blog_post___featuredImage___internal___description'
  | 'blog_post___featuredImage___internal___fieldOwners'
  | 'blog_post___featuredImage___internal___ignoreType'
  | 'blog_post___featuredImage___internal___mediaType'
  | 'blog_post___featuredImage___internal___owner'
  | 'blog_post___featuredImage___internal___type'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___id'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___parent___id'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___parent___children'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___children'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___children___id'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___children___children'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___content'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___contentDigest'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___description'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___fieldOwners'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___ignoreType'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___mediaType'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___owner'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___internal___type'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___excerpt'
  | 'blog_post___childrenContentfulBlogPostExcerptTextNode___sys___type'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___id'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___parent___id'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___parent___children'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___children'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___children___id'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___children___children'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___internal___content'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___internal___contentDigest'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___internal___description'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___internal___fieldOwners'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___internal___ignoreType'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___internal___mediaType'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___internal___owner'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___internal___type'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___excerpt'
  | 'blog_post___childContentfulBlogPostExcerptTextNode___sys___type'
  | 'blog_post___parent___id'
  | 'blog_post___parent___parent___id'
  | 'blog_post___parent___parent___children'
  | 'blog_post___parent___children'
  | 'blog_post___parent___children___id'
  | 'blog_post___parent___children___children'
  | 'blog_post___parent___internal___content'
  | 'blog_post___parent___internal___contentDigest'
  | 'blog_post___parent___internal___description'
  | 'blog_post___parent___internal___fieldOwners'
  | 'blog_post___parent___internal___ignoreType'
  | 'blog_post___parent___internal___mediaType'
  | 'blog_post___parent___internal___owner'
  | 'blog_post___parent___internal___type'
  | 'blog_post___children'
  | 'blog_post___children___id'
  | 'blog_post___children___parent___id'
  | 'blog_post___children___parent___children'
  | 'blog_post___children___children'
  | 'blog_post___children___children___id'
  | 'blog_post___children___children___children'
  | 'blog_post___children___internal___content'
  | 'blog_post___children___internal___contentDigest'
  | 'blog_post___children___internal___description'
  | 'blog_post___children___internal___fieldOwners'
  | 'blog_post___children___internal___ignoreType'
  | 'blog_post___children___internal___mediaType'
  | 'blog_post___children___internal___owner'
  | 'blog_post___children___internal___type'
  | 'blog_post___internal___content'
  | 'blog_post___internal___contentDigest'
  | 'blog_post___internal___description'
  | 'blog_post___internal___fieldOwners'
  | 'blog_post___internal___ignoreType'
  | 'blog_post___internal___mediaType'
  | 'blog_post___internal___owner'
  | 'blog_post___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'biography___id'
  | 'biography___parent___id'
  | 'biography___parent___parent___id'
  | 'biography___parent___parent___children'
  | 'biography___parent___children'
  | 'biography___parent___children___id'
  | 'biography___parent___children___children'
  | 'biography___parent___internal___content'
  | 'biography___parent___internal___contentDigest'
  | 'biography___parent___internal___description'
  | 'biography___parent___internal___fieldOwners'
  | 'biography___parent___internal___ignoreType'
  | 'biography___parent___internal___mediaType'
  | 'biography___parent___internal___owner'
  | 'biography___parent___internal___type'
  | 'biography___children'
  | 'biography___children___id'
  | 'biography___children___parent___id'
  | 'biography___children___parent___children'
  | 'biography___children___children'
  | 'biography___children___children___id'
  | 'biography___children___children___children'
  | 'biography___children___internal___content'
  | 'biography___children___internal___contentDigest'
  | 'biography___children___internal___description'
  | 'biography___children___internal___fieldOwners'
  | 'biography___children___internal___ignoreType'
  | 'biography___children___internal___mediaType'
  | 'biography___children___internal___owner'
  | 'biography___children___internal___type'
  | 'biography___internal___content'
  | 'biography___internal___contentDigest'
  | 'biography___internal___description'
  | 'biography___internal___fieldOwners'
  | 'biography___internal___ignoreType'
  | 'biography___internal___mediaType'
  | 'biography___internal___owner'
  | 'biography___internal___type'
  | 'biography___biography'
  | 'biography___sys___type'
  | 'childrenContentfulAuthorBiographyTextNode'
  | 'childrenContentfulAuthorBiographyTextNode___id'
  | 'childrenContentfulAuthorBiographyTextNode___parent___id'
  | 'childrenContentfulAuthorBiographyTextNode___parent___parent___id'
  | 'childrenContentfulAuthorBiographyTextNode___parent___parent___children'
  | 'childrenContentfulAuthorBiographyTextNode___parent___children'
  | 'childrenContentfulAuthorBiographyTextNode___parent___children___id'
  | 'childrenContentfulAuthorBiographyTextNode___parent___children___children'
  | 'childrenContentfulAuthorBiographyTextNode___parent___internal___content'
  | 'childrenContentfulAuthorBiographyTextNode___parent___internal___contentDigest'
  | 'childrenContentfulAuthorBiographyTextNode___parent___internal___description'
  | 'childrenContentfulAuthorBiographyTextNode___parent___internal___fieldOwners'
  | 'childrenContentfulAuthorBiographyTextNode___parent___internal___ignoreType'
  | 'childrenContentfulAuthorBiographyTextNode___parent___internal___mediaType'
  | 'childrenContentfulAuthorBiographyTextNode___parent___internal___owner'
  | 'childrenContentfulAuthorBiographyTextNode___parent___internal___type'
  | 'childrenContentfulAuthorBiographyTextNode___children'
  | 'childrenContentfulAuthorBiographyTextNode___children___id'
  | 'childrenContentfulAuthorBiographyTextNode___children___parent___id'
  | 'childrenContentfulAuthorBiographyTextNode___children___parent___children'
  | 'childrenContentfulAuthorBiographyTextNode___children___children'
  | 'childrenContentfulAuthorBiographyTextNode___children___children___id'
  | 'childrenContentfulAuthorBiographyTextNode___children___children___children'
  | 'childrenContentfulAuthorBiographyTextNode___children___internal___content'
  | 'childrenContentfulAuthorBiographyTextNode___children___internal___contentDigest'
  | 'childrenContentfulAuthorBiographyTextNode___children___internal___description'
  | 'childrenContentfulAuthorBiographyTextNode___children___internal___fieldOwners'
  | 'childrenContentfulAuthorBiographyTextNode___children___internal___ignoreType'
  | 'childrenContentfulAuthorBiographyTextNode___children___internal___mediaType'
  | 'childrenContentfulAuthorBiographyTextNode___children___internal___owner'
  | 'childrenContentfulAuthorBiographyTextNode___children___internal___type'
  | 'childrenContentfulAuthorBiographyTextNode___internal___content'
  | 'childrenContentfulAuthorBiographyTextNode___internal___contentDigest'
  | 'childrenContentfulAuthorBiographyTextNode___internal___description'
  | 'childrenContentfulAuthorBiographyTextNode___internal___fieldOwners'
  | 'childrenContentfulAuthorBiographyTextNode___internal___ignoreType'
  | 'childrenContentfulAuthorBiographyTextNode___internal___mediaType'
  | 'childrenContentfulAuthorBiographyTextNode___internal___owner'
  | 'childrenContentfulAuthorBiographyTextNode___internal___type'
  | 'childrenContentfulAuthorBiographyTextNode___biography'
  | 'childrenContentfulAuthorBiographyTextNode___sys___type'
  | 'childContentfulAuthorBiographyTextNode___id'
  | 'childContentfulAuthorBiographyTextNode___parent___id'
  | 'childContentfulAuthorBiographyTextNode___parent___parent___id'
  | 'childContentfulAuthorBiographyTextNode___parent___parent___children'
  | 'childContentfulAuthorBiographyTextNode___parent___children'
  | 'childContentfulAuthorBiographyTextNode___parent___children___id'
  | 'childContentfulAuthorBiographyTextNode___parent___children___children'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___content'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___contentDigest'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___description'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___fieldOwners'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___ignoreType'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___mediaType'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___owner'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___type'
  | 'childContentfulAuthorBiographyTextNode___children'
  | 'childContentfulAuthorBiographyTextNode___children___id'
  | 'childContentfulAuthorBiographyTextNode___children___parent___id'
  | 'childContentfulAuthorBiographyTextNode___children___parent___children'
  | 'childContentfulAuthorBiographyTextNode___children___children'
  | 'childContentfulAuthorBiographyTextNode___children___children___id'
  | 'childContentfulAuthorBiographyTextNode___children___children___children'
  | 'childContentfulAuthorBiographyTextNode___children___internal___content'
  | 'childContentfulAuthorBiographyTextNode___children___internal___contentDigest'
  | 'childContentfulAuthorBiographyTextNode___children___internal___description'
  | 'childContentfulAuthorBiographyTextNode___children___internal___fieldOwners'
  | 'childContentfulAuthorBiographyTextNode___children___internal___ignoreType'
  | 'childContentfulAuthorBiographyTextNode___children___internal___mediaType'
  | 'childContentfulAuthorBiographyTextNode___children___internal___owner'
  | 'childContentfulAuthorBiographyTextNode___children___internal___type'
  | 'childContentfulAuthorBiographyTextNode___internal___content'
  | 'childContentfulAuthorBiographyTextNode___internal___contentDigest'
  | 'childContentfulAuthorBiographyTextNode___internal___description'
  | 'childContentfulAuthorBiographyTextNode___internal___fieldOwners'
  | 'childContentfulAuthorBiographyTextNode___internal___ignoreType'
  | 'childContentfulAuthorBiographyTextNode___internal___mediaType'
  | 'childContentfulAuthorBiographyTextNode___internal___owner'
  | 'childContentfulAuthorBiographyTextNode___internal___type'
  | 'childContentfulAuthorBiographyTextNode___biography'
  | 'childContentfulAuthorBiographyTextNode___sys___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAuthorGroupConnection = {
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

export type ContentfulBlockCallToActionFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockCallToActionFilterInput>;
};

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

export type ContentfulBlockCallToActionContentFilterInput = {
  raw?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageFilterListInput = {
  elemMatch?: Maybe<ContentfulPageFilterInput>;
};

export type ContentfulPageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  blocks?: Maybe<ContentfulBlockCallToActionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulPageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageSysContentTypeFilterInput>;
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageSysContentTypeSysFilterInput>;
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockCallToActionButtonJsonNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  action?: Maybe<ContentfulBlockCallToActionButtonJsonNodeActionFilterInput>;
  sys?: Maybe<ContentfulBlockCallToActionButtonJsonNodeSysFilterInput>;
};

export type ContentfulBlockCallToActionButtonJsonNodeActionFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  external?: Maybe<BooleanQueryOperatorInput>;
};

export type ContentfulBlockCallToActionButtonJsonNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockCallToActionSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockCallToActionSysContentTypeFilterInput>;
};

export type ContentfulBlockCallToActionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockCallToActionSysContentTypeSysFilterInput>;
};

export type ContentfulBlockCallToActionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockCallToActionButtonJsonNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockCallToActionButtonJsonNodeFilterInput>;
};

export type ContentfulPageConnection = {
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
  next?: Maybe<ContentfulPage>;
  node: ContentfulPage;
  previous?: Maybe<ContentfulPage>;
};

export type ContentfulPageFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'slug'
  | 'blocks'
  | 'blocks___contentful_id'
  | 'blocks___id'
  | 'blocks___node_locale'
  | 'blocks___title'
  | 'blocks___content___raw'
  | 'blocks___page'
  | 'blocks___page___contentful_id'
  | 'blocks___page___id'
  | 'blocks___page___node_locale'
  | 'blocks___page___title'
  | 'blocks___page___slug'
  | 'blocks___page___blocks'
  | 'blocks___page___blocks___contentful_id'
  | 'blocks___page___blocks___id'
  | 'blocks___page___blocks___node_locale'
  | 'blocks___page___blocks___title'
  | 'blocks___page___blocks___page'
  | 'blocks___page___blocks___spaceId'
  | 'blocks___page___blocks___createdAt'
  | 'blocks___page___blocks___updatedAt'
  | 'blocks___page___blocks___childrenContentfulBlockCallToActionButtonJsonNode'
  | 'blocks___page___blocks___children'
  | 'blocks___page___spaceId'
  | 'blocks___page___createdAt'
  | 'blocks___page___updatedAt'
  | 'blocks___page___sys___type'
  | 'blocks___page___sys___revision'
  | 'blocks___page___parent___id'
  | 'blocks___page___parent___children'
  | 'blocks___page___children'
  | 'blocks___page___children___id'
  | 'blocks___page___children___children'
  | 'blocks___page___internal___content'
  | 'blocks___page___internal___contentDigest'
  | 'blocks___page___internal___description'
  | 'blocks___page___internal___fieldOwners'
  | 'blocks___page___internal___ignoreType'
  | 'blocks___page___internal___mediaType'
  | 'blocks___page___internal___owner'
  | 'blocks___page___internal___type'
  | 'blocks___button___id'
  | 'blocks___button___parent___id'
  | 'blocks___button___parent___children'
  | 'blocks___button___children'
  | 'blocks___button___children___id'
  | 'blocks___button___children___children'
  | 'blocks___button___internal___content'
  | 'blocks___button___internal___contentDigest'
  | 'blocks___button___internal___description'
  | 'blocks___button___internal___fieldOwners'
  | 'blocks___button___internal___ignoreType'
  | 'blocks___button___internal___mediaType'
  | 'blocks___button___internal___owner'
  | 'blocks___button___internal___type'
  | 'blocks___button___action___title'
  | 'blocks___button___action___url'
  | 'blocks___button___action___external'
  | 'blocks___button___sys___type'
  | 'blocks___spaceId'
  | 'blocks___createdAt'
  | 'blocks___updatedAt'
  | 'blocks___sys___type'
  | 'blocks___sys___revision'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___id'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___parent___id'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___parent___children'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___children'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___children___id'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___children___children'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___internal___content'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___internal___contentDigest'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___internal___description'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___internal___fieldOwners'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___internal___ignoreType'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___internal___mediaType'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___internal___owner'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___internal___type'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___action___title'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___action___url'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___action___external'
  | 'blocks___childrenContentfulBlockCallToActionButtonJsonNode___sys___type'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___id'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___parent___id'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___parent___children'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___children'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___children___id'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___children___children'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___internal___content'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___internal___contentDigest'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___internal___description'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___internal___fieldOwners'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___internal___ignoreType'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___internal___mediaType'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___internal___owner'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___internal___type'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___action___title'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___action___url'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___action___external'
  | 'blocks___childContentfulBlockCallToActionButtonJsonNode___sys___type'
  | 'blocks___parent___id'
  | 'blocks___parent___parent___id'
  | 'blocks___parent___parent___children'
  | 'blocks___parent___children'
  | 'blocks___parent___children___id'
  | 'blocks___parent___children___children'
  | 'blocks___parent___internal___content'
  | 'blocks___parent___internal___contentDigest'
  | 'blocks___parent___internal___description'
  | 'blocks___parent___internal___fieldOwners'
  | 'blocks___parent___internal___ignoreType'
  | 'blocks___parent___internal___mediaType'
  | 'blocks___parent___internal___owner'
  | 'blocks___parent___internal___type'
  | 'blocks___children'
  | 'blocks___children___id'
  | 'blocks___children___parent___id'
  | 'blocks___children___parent___children'
  | 'blocks___children___children'
  | 'blocks___children___children___id'
  | 'blocks___children___children___children'
  | 'blocks___children___internal___content'
  | 'blocks___children___internal___contentDigest'
  | 'blocks___children___internal___description'
  | 'blocks___children___internal___fieldOwners'
  | 'blocks___children___internal___ignoreType'
  | 'blocks___children___internal___mediaType'
  | 'blocks___children___internal___owner'
  | 'blocks___children___internal___type'
  | 'blocks___internal___content'
  | 'blocks___internal___contentDigest'
  | 'blocks___internal___description'
  | 'blocks___internal___fieldOwners'
  | 'blocks___internal___ignoreType'
  | 'blocks___internal___mediaType'
  | 'blocks___internal___owner'
  | 'blocks___internal___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulPageGroupConnection = {
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

export type ContentfulBlockCallToActionConnection = {
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

export type ContentfulBlockCallToActionEdge = {
  next?: Maybe<ContentfulBlockCallToAction>;
  node: ContentfulBlockCallToAction;
  previous?: Maybe<ContentfulBlockCallToAction>;
};

export type ContentfulBlockCallToActionFieldsEnum =
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'content___raw'
  | 'page'
  | 'page___contentful_id'
  | 'page___id'
  | 'page___node_locale'
  | 'page___title'
  | 'page___slug'
  | 'page___blocks'
  | 'page___blocks___contentful_id'
  | 'page___blocks___id'
  | 'page___blocks___node_locale'
  | 'page___blocks___title'
  | 'page___blocks___content___raw'
  | 'page___blocks___page'
  | 'page___blocks___page___contentful_id'
  | 'page___blocks___page___id'
  | 'page___blocks___page___node_locale'
  | 'page___blocks___page___title'
  | 'page___blocks___page___slug'
  | 'page___blocks___page___blocks'
  | 'page___blocks___page___spaceId'
  | 'page___blocks___page___createdAt'
  | 'page___blocks___page___updatedAt'
  | 'page___blocks___page___children'
  | 'page___blocks___button___id'
  | 'page___blocks___button___children'
  | 'page___blocks___spaceId'
  | 'page___blocks___createdAt'
  | 'page___blocks___updatedAt'
  | 'page___blocks___sys___type'
  | 'page___blocks___sys___revision'
  | 'page___blocks___childrenContentfulBlockCallToActionButtonJsonNode'
  | 'page___blocks___childrenContentfulBlockCallToActionButtonJsonNode___id'
  | 'page___blocks___childrenContentfulBlockCallToActionButtonJsonNode___children'
  | 'page___blocks___childContentfulBlockCallToActionButtonJsonNode___id'
  | 'page___blocks___childContentfulBlockCallToActionButtonJsonNode___children'
  | 'page___blocks___parent___id'
  | 'page___blocks___parent___children'
  | 'page___blocks___children'
  | 'page___blocks___children___id'
  | 'page___blocks___children___children'
  | 'page___blocks___internal___content'
  | 'page___blocks___internal___contentDigest'
  | 'page___blocks___internal___description'
  | 'page___blocks___internal___fieldOwners'
  | 'page___blocks___internal___ignoreType'
  | 'page___blocks___internal___mediaType'
  | 'page___blocks___internal___owner'
  | 'page___blocks___internal___type'
  | 'page___spaceId'
  | 'page___createdAt'
  | 'page___updatedAt'
  | 'page___sys___type'
  | 'page___sys___revision'
  | 'page___parent___id'
  | 'page___parent___parent___id'
  | 'page___parent___parent___children'
  | 'page___parent___children'
  | 'page___parent___children___id'
  | 'page___parent___children___children'
  | 'page___parent___internal___content'
  | 'page___parent___internal___contentDigest'
  | 'page___parent___internal___description'
  | 'page___parent___internal___fieldOwners'
  | 'page___parent___internal___ignoreType'
  | 'page___parent___internal___mediaType'
  | 'page___parent___internal___owner'
  | 'page___parent___internal___type'
  | 'page___children'
  | 'page___children___id'
  | 'page___children___parent___id'
  | 'page___children___parent___children'
  | 'page___children___children'
  | 'page___children___children___id'
  | 'page___children___children___children'
  | 'page___children___internal___content'
  | 'page___children___internal___contentDigest'
  | 'page___children___internal___description'
  | 'page___children___internal___fieldOwners'
  | 'page___children___internal___ignoreType'
  | 'page___children___internal___mediaType'
  | 'page___children___internal___owner'
  | 'page___children___internal___type'
  | 'page___internal___content'
  | 'page___internal___contentDigest'
  | 'page___internal___description'
  | 'page___internal___fieldOwners'
  | 'page___internal___ignoreType'
  | 'page___internal___mediaType'
  | 'page___internal___owner'
  | 'page___internal___type'
  | 'button___id'
  | 'button___parent___id'
  | 'button___parent___parent___id'
  | 'button___parent___parent___children'
  | 'button___parent___children'
  | 'button___parent___children___id'
  | 'button___parent___children___children'
  | 'button___parent___internal___content'
  | 'button___parent___internal___contentDigest'
  | 'button___parent___internal___description'
  | 'button___parent___internal___fieldOwners'
  | 'button___parent___internal___ignoreType'
  | 'button___parent___internal___mediaType'
  | 'button___parent___internal___owner'
  | 'button___parent___internal___type'
  | 'button___children'
  | 'button___children___id'
  | 'button___children___parent___id'
  | 'button___children___parent___children'
  | 'button___children___children'
  | 'button___children___children___id'
  | 'button___children___children___children'
  | 'button___children___internal___content'
  | 'button___children___internal___contentDigest'
  | 'button___children___internal___description'
  | 'button___children___internal___fieldOwners'
  | 'button___children___internal___ignoreType'
  | 'button___children___internal___mediaType'
  | 'button___children___internal___owner'
  | 'button___children___internal___type'
  | 'button___internal___content'
  | 'button___internal___contentDigest'
  | 'button___internal___description'
  | 'button___internal___fieldOwners'
  | 'button___internal___ignoreType'
  | 'button___internal___mediaType'
  | 'button___internal___owner'
  | 'button___internal___type'
  | 'button___action___title'
  | 'button___action___url'
  | 'button___action___external'
  | 'button___sys___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'childrenContentfulBlockCallToActionButtonJsonNode'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___id'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___id'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___parent___id'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___parent___children'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___children'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___children___id'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___children___children'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___content'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___contentDigest'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___description'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___fieldOwners'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___ignoreType'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___mediaType'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___owner'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___parent___internal___type'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___id'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___parent___id'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___parent___children'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___children'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___children___id'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___children___children'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___content'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___contentDigest'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___description'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___fieldOwners'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___ignoreType'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___mediaType'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___owner'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___children___internal___type'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___internal___content'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___internal___contentDigest'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___internal___description'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___internal___fieldOwners'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___internal___ignoreType'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___internal___mediaType'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___internal___owner'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___internal___type'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___action___title'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___action___url'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___action___external'
  | 'childrenContentfulBlockCallToActionButtonJsonNode___sys___type'
  | 'childContentfulBlockCallToActionButtonJsonNode___id'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___id'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___parent___id'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___parent___children'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___children'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___children___id'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___children___children'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___content'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___contentDigest'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___description'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___fieldOwners'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___ignoreType'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___mediaType'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___owner'
  | 'childContentfulBlockCallToActionButtonJsonNode___parent___internal___type'
  | 'childContentfulBlockCallToActionButtonJsonNode___children'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___id'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___parent___id'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___parent___children'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___children'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___children___id'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___children___children'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___internal___content'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___internal___contentDigest'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___internal___description'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___internal___fieldOwners'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___internal___ignoreType'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___internal___mediaType'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___internal___owner'
  | 'childContentfulBlockCallToActionButtonJsonNode___children___internal___type'
  | 'childContentfulBlockCallToActionButtonJsonNode___internal___content'
  | 'childContentfulBlockCallToActionButtonJsonNode___internal___contentDigest'
  | 'childContentfulBlockCallToActionButtonJsonNode___internal___description'
  | 'childContentfulBlockCallToActionButtonJsonNode___internal___fieldOwners'
  | 'childContentfulBlockCallToActionButtonJsonNode___internal___ignoreType'
  | 'childContentfulBlockCallToActionButtonJsonNode___internal___mediaType'
  | 'childContentfulBlockCallToActionButtonJsonNode___internal___owner'
  | 'childContentfulBlockCallToActionButtonJsonNode___internal___type'
  | 'childContentfulBlockCallToActionButtonJsonNode___action___title'
  | 'childContentfulBlockCallToActionButtonJsonNode___action___url'
  | 'childContentfulBlockCallToActionButtonJsonNode___action___external'
  | 'childContentfulBlockCallToActionButtonJsonNode___sys___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulBlockCallToActionGroupConnection = {
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

export type ContentfulBlockCallToActionButtonJsonNodeConnection = {
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
  next?: Maybe<ContentfulBlockCallToActionButtonJsonNode>;
  node: ContentfulBlockCallToActionButtonJsonNode;
  previous?: Maybe<ContentfulBlockCallToActionButtonJsonNode>;
};

export type ContentfulBlockCallToActionButtonJsonNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'action___title'
  | 'action___url'
  | 'action___external'
  | 'sys___type';

export type ContentfulBlockCallToActionButtonJsonNodeGroupConnection = {
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

export type ContentfulAuthorBiographyTextNodeConnection = {
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
  next?: Maybe<ContentfulAuthorBiographyTextNode>;
  node: ContentfulAuthorBiographyTextNode;
  previous?: Maybe<ContentfulAuthorBiographyTextNode>;
};

export type ContentfulAuthorBiographyTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'biography'
  | 'sys___type';

export type ContentfulAuthorBiographyTextNodeGroupConnection = {
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

export type ContentfulBlogPostExcerptTextNodeConnection = {
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
  next?: Maybe<ContentfulBlogPostExcerptTextNode>;
  node: ContentfulBlogPostExcerptTextNode;
  previous?: Maybe<ContentfulBlogPostExcerptTextNode>;
};

export type ContentfulBlogPostExcerptTextNodeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'excerpt'
  | 'sys___type';

export type ContentfulBlogPostExcerptTextNodeGroupConnection = {
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

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeConnection = {
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
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description'
  | 'sys___type';

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

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

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
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
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
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
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___displayName'
  | 'pluginOptions___minify'
  | 'pluginOptions___namespace'
  | 'pluginOptions___transpileTemplateLiterals'
  | 'pluginOptions___pure'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___cssLoaderOptions___esModule'
  | 'pluginOptions___cssLoaderOptions___modules___namedExport'
  | 'pluginOptions___content'
  | 'pluginOptions___async'
  | 'pluginOptions___defer'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___forceBase64Format'
  | 'pluginOptions___useMozJpeg'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___pluginConfig___head'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___host'
  | 'pluginOptions___environment'
  | 'pluginOptions___downloadLocal'
  | 'pluginOptions___forceFullSync'
  | 'pluginOptions___pageLimit'
  | 'pluginOptions___assetDownloadWorkers'
  | 'pluginOptions___useNameForId'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type CallToActionFragmentFragment = (
  { __typename: 'ContentfulBlockCallToAction' }
  & Pick<ContentfulBlockCallToAction, 'title'>
);

export type BannerQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type BannerQueryQuery = { contentfulMicroContent?: Maybe<Pick<ContentfulMicroContent, 'value'>> };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { allContentfulBlogPost: { nodes: Array<(
      Pick<ContentfulBlogPost, 'id' | 'slug' | 'title' | 'published' | 'featured'>
      & { excerpt?: Maybe<Pick<ContentfulBlogPostExcerptTextNode, 'excerpt'>>, featuredImage?: Maybe<Pick<ContentfulAsset, 'gatsbyImageData'>> }
    )> } };

export type BlogTemplateQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type BlogTemplateQueryQuery = { blog?: Maybe<(
    Pick<ContentfulBlogPost, 'id' | 'title' | 'published' | 'seoTitle' | 'seoDescription'>
    & { author?: Maybe<(
      Pick<ContentfulAuthor, 'name'>
      & { biography?: Maybe<Pick<ContentfulAuthorBiographyTextNode, 'biography'>> }
    )>, featuredImage?: Maybe<Pick<ContentfulAsset, 'gatsbyImageData'>>, content?: Maybe<Pick<ContentfulBlogPostContent, 'raw'>> }
  )> };

export type PageTemplateQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type PageTemplateQueryQuery = { page?: Maybe<(
    Pick<ContentfulPage, 'title'>
    & { blocks?: Maybe<Array<Maybe<(
      { __typename: 'ContentfulBlockCallToAction' }
      & Pick<ContentfulBlockCallToAction, 'title'>
      & { content?: Maybe<Pick<ContentfulBlockCallToActionContent, 'raw'>>, button?: Maybe<{ action?: Maybe<Pick<ContentfulBlockCallToActionButtonJsonNodeAction, 'title' | 'url' | 'external'>> }> }
    )>>> }
  )> };
