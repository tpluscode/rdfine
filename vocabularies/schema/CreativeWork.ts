import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ThingMixin } from './Thing';

export interface CreativeWork extends Schema.Thing, RdfResource {
  about: Schema.Thing | undefined;
  accessibilityAPI: string | undefined;
  accessibilityControl: string | undefined;
  accessibilityFeature: string | undefined;
  accessibilityHazard: string | undefined;
  accessibilitySummary: string | undefined;
  accessMode: string | undefined;
  accessModeSufficient: Schema.ItemList | undefined;
  accountablePerson: Schema.Person | undefined;
  aggregateRating: Schema.AggregateRating | undefined;
  alternativeHeadline: string | undefined;
  associatedMedia: Schema.MediaObject | undefined;
  audience: Schema.Audience | undefined;
  audio: Schema.AudioObject | Schema.Clip | Schema.MusicRecording | undefined;
  author: Schema.Organization | Schema.Person | undefined;
  award: string | undefined;
  awards: string | undefined;
  character: Schema.Person | undefined;
  citation: Schema.CreativeWork | undefined;
  citationLiteral: string | undefined;
  comment: Schema.Comment | undefined;
  commentCount: number | undefined;
  contentLocation: Schema.Place | undefined;
  contentRating: Schema.Rating | undefined;
  contentRatingLiteral: string | undefined;
  contributor: Schema.Organization | Schema.Person | undefined;
  copyrightHolder: Schema.Organization | Schema.Person | undefined;
  copyrightYear: number | undefined;
  creator: Schema.Organization | Schema.Person | undefined;
  dateCreated: Date | undefined;
  dateModified: Date | undefined;
  datePublished: Date | undefined;
  discussionUrl: RDF.NamedNode | undefined;
  editor: Schema.Person | undefined;
  educationalAlignment: Schema.AlignmentObject | undefined;
  educationalUse: string | undefined;
  encoding: Schema.MediaObject | undefined;
  encodingFormat: string | undefined;
  encodingFormatTerm: RDF.NamedNode | undefined;
  encodings: Schema.MediaObject | undefined;
  exampleOfWork: Schema.CreativeWork | undefined;
  expires: Date | undefined;
  fileFormat: string | undefined;
  fileFormatTerm: RDF.NamedNode | undefined;
  funder: Schema.Organization | Schema.Person | undefined;
  genre: string | undefined;
  genreTerm: RDF.NamedNode | undefined;
  hasPart: Schema.CreativeWork | undefined;
  headline: string | undefined;
  inLanguage: Schema.Language | undefined;
  inLanguageLiteral: string | undefined;
  interactionStatistic: Schema.InteractionCounter | undefined;
  interactivityType: string | undefined;
  isAccessibleForFree: boolean | undefined;
  isBasedOn: Schema.CreativeWork | Schema.Product | undefined;
  isBasedOnUrl: Schema.CreativeWork | Schema.Product | undefined;
  isFamilyFriendly: boolean | undefined;
  isPartOf: Schema.CreativeWork | undefined;
  keywords: string | undefined;
  learningResourceType: string | undefined;
  license: Schema.CreativeWork | undefined;
  locationCreated: Schema.Place | undefined;
  mainEntity: Schema.Thing | undefined;
  material: Schema.Product | undefined;
  materialLiteral: string | undefined;
  mentions: Schema.Thing | undefined;
  offers: Schema.Demand | Schema.Offer | undefined;
  position: number | string | undefined;
  producer: Schema.Organization | Schema.Person | undefined;
  provider: Schema.Organization | Schema.Person | undefined;
  publication: Schema.PublicationEvent | undefined;
  publisher: Schema.Organization | Schema.Person | undefined;
  publishingPrinciples: Schema.CreativeWork | undefined;
  recordedAt: Schema.Event | undefined;
  releasedEvent: Schema.PublicationEvent | undefined;
  review: Schema.Review | undefined;
  reviews: Schema.Review | undefined;
  schemaVersion: string | undefined;
  schemaVersionTerm: RDF.NamedNode | undefined;
  sourceOrganization: Schema.Organization | undefined;
  spatial: Schema.Place | undefined;
  spatialCoverage: Schema.Place | undefined;
  sponsor: Schema.Organization | Schema.Person | undefined;
  temporal: Date | string | undefined;
  temporalCoverage: Date | string | undefined;
  temporalCoverageTerm: RDF.NamedNode | undefined;
  text: string | undefined;
  thumbnailUrl: RDF.NamedNode | undefined;
  timeRequired: Schema.Duration | undefined;
  translator: Schema.Organization | Schema.Person | undefined;
  typicalAgeRange: string | undefined;
  version: number | string | undefined;
  video: Schema.Clip | Schema.VideoObject | undefined;
  workExample: Schema.CreativeWork | undefined;
}

export function CreativeWorkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreativeWorkClass extends ThingMixin(Resource) implements CreativeWork {
    @property.resource()
    about: Schema.Thing | undefined;
    @property.literal()
    accessibilityAPI: string | undefined;
    @property.literal()
    accessibilityControl: string | undefined;
    @property.literal()
    accessibilityFeature: string | undefined;
    @property.literal()
    accessibilityHazard: string | undefined;
    @property.literal()
    accessibilitySummary: string | undefined;
    @property.literal()
    accessMode: string | undefined;
    @property.resource()
    accessModeSufficient: Schema.ItemList | undefined;
    @property.resource()
    accountablePerson: Schema.Person | undefined;
    @property.resource()
    aggregateRating: Schema.AggregateRating | undefined;
    @property.literal()
    alternativeHeadline: string | undefined;
    @property.resource()
    associatedMedia: Schema.MediaObject | undefined;
    @property.resource()
    audience: Schema.Audience | undefined;
    @property.resource()
    audio: Schema.AudioObject | Schema.Clip | Schema.MusicRecording | undefined;
    @property.resource()
    author: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    award: string | undefined;
    @property.literal()
    awards: string | undefined;
    @property.resource()
    character: Schema.Person | undefined;
    @property.resource()
    citation: Schema.CreativeWork | undefined;
    @property.literal({ path: schema.citation })
    citationLiteral: string | undefined;
    @property.resource()
    comment: Schema.Comment | undefined;
    @property.literal({ type: Number })
    commentCount: number | undefined;
    @property.resource()
    contentLocation: Schema.Place | undefined;
    @property.resource()
    contentRating: Schema.Rating | undefined;
    @property.literal({ path: schema.contentRating })
    contentRatingLiteral: string | undefined;
    @property.resource()
    contributor: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    copyrightHolder: Schema.Organization | Schema.Person | undefined;
    @property.literal({ type: Number })
    copyrightYear: number | undefined;
    @property.resource()
    creator: Schema.Organization | Schema.Person | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    dateCreated: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    dateModified: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    datePublished: Date | undefined;
    @property()
    discussionUrl: RDF.NamedNode | undefined;
    @property.resource()
    editor: Schema.Person | undefined;
    @property.resource()
    educationalAlignment: Schema.AlignmentObject | undefined;
    @property.literal()
    educationalUse: string | undefined;
    @property.resource()
    encoding: Schema.MediaObject | undefined;
    @property.literal()
    encodingFormat: string | undefined;
    @property({ path: schema.encodingFormat })
    encodingFormatTerm: RDF.NamedNode | undefined;
    @property.resource()
    encodings: Schema.MediaObject | undefined;
    @property.resource()
    exampleOfWork: Schema.CreativeWork | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    expires: Date | undefined;
    @property.literal()
    fileFormat: string | undefined;
    @property({ path: schema.fileFormat })
    fileFormatTerm: RDF.NamedNode | undefined;
    @property.resource()
    funder: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    genre: string | undefined;
    @property({ path: schema.genre })
    genreTerm: RDF.NamedNode | undefined;
    @property.resource()
    hasPart: Schema.CreativeWork | undefined;
    @property.literal()
    headline: string | undefined;
    @property.resource()
    inLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.inLanguage })
    inLanguageLiteral: string | undefined;
    @property.resource()
    interactionStatistic: Schema.InteractionCounter | undefined;
    @property.literal()
    interactivityType: string | undefined;
    @property.literal({ type: Boolean })
    isAccessibleForFree: boolean | undefined;
    @property.resource()
    isBasedOn: Schema.CreativeWork | Schema.Product | undefined;
    @property.resource()
    isBasedOnUrl: Schema.CreativeWork | Schema.Product | undefined;
    @property.literal({ type: Boolean })
    isFamilyFriendly: boolean | undefined;
    @property.resource()
    isPartOf: Schema.CreativeWork | undefined;
    @property.literal()
    keywords: string | undefined;
    @property.literal()
    learningResourceType: string | undefined;
    @property.resource()
    license: Schema.CreativeWork | undefined;
    @property.resource()
    locationCreated: Schema.Place | undefined;
    @property.resource()
    mainEntity: Schema.Thing | undefined;
    @property.resource()
    material: Schema.Product | undefined;
    @property.literal({ path: schema.material })
    materialLiteral: string | undefined;
    @property.resource()
    mentions: Schema.Thing | undefined;
    @property.resource()
    offers: Schema.Demand | Schema.Offer | undefined;
    @property.literal()
    position: number | string | undefined;
    @property.resource()
    producer: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    provider: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    publication: Schema.PublicationEvent | undefined;
    @property.resource()
    publisher: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    publishingPrinciples: Schema.CreativeWork | undefined;
    @property.resource()
    recordedAt: Schema.Event | undefined;
    @property.resource()
    releasedEvent: Schema.PublicationEvent | undefined;
    @property.resource()
    review: Schema.Review | undefined;
    @property.resource()
    reviews: Schema.Review | undefined;
    @property.literal()
    schemaVersion: string | undefined;
    @property({ path: schema.schemaVersion })
    schemaVersionTerm: RDF.NamedNode | undefined;
    @property.resource()
    sourceOrganization: Schema.Organization | undefined;
    @property.resource()
    spatial: Schema.Place | undefined;
    @property.resource()
    spatialCoverage: Schema.Place | undefined;
    @property.resource()
    sponsor: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    temporal: Date | string | undefined;
    @property.literal()
    temporalCoverage: Date | string | undefined;
    @property({ path: schema.temporalCoverage })
    temporalCoverageTerm: RDF.NamedNode | undefined;
    @property.literal()
    text: string | undefined;
    @property()
    thumbnailUrl: RDF.NamedNode | undefined;
    @property.resource()
    timeRequired: Schema.Duration | undefined;
    @property.resource()
    translator: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    typicalAgeRange: string | undefined;
    @property.literal()
    version: number | string | undefined;
    @property.resource()
    video: Schema.Clip | Schema.VideoObject | undefined;
    @property.resource()
    workExample: Schema.CreativeWork | undefined;
  }
  return CreativeWorkClass
}

class CreativeWorkImpl extends CreativeWorkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CreativeWork>) {
    super(arg, init)
    this.types.add(schema.CreativeWork)
  }

  static readonly __mixins: Mixin[] = [CreativeWorkMixin, ThingMixin];
}
CreativeWorkMixin.appliesTo = schema.CreativeWork
CreativeWorkMixin.Class = CreativeWorkImpl
