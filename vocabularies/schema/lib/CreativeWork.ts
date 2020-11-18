import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ThingMixin } from './Thing';

export interface CreativeWork<ID extends ResourceNode = ResourceNode> extends Schema.Thing<ID>, RdfResource<ID> {
  about: Schema.Thing<SiblingNode<ID>> | undefined;
  abstract: string | undefined;
  accessibilityAPI: string | undefined;
  accessibilityControl: string | undefined;
  accessibilityFeature: string | undefined;
  accessibilityHazard: string | undefined;
  accessibilitySummary: string | undefined;
  accessMode: string | undefined;
  accessModeSufficient: Schema.ItemList<SiblingNode<ID>> | undefined;
  accountablePerson: Schema.Person<SiblingNode<ID>> | undefined;
  acquireLicensePage: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  aggregateRating: Schema.AggregateRating<SiblingNode<ID>> | undefined;
  alternativeHeadline: string | undefined;
  assesses: string | undefined;
  associatedMedia: Schema.MediaObject<SiblingNode<ID>> | undefined;
  audience: Schema.Audience<SiblingNode<ID>> | undefined;
  audio: Schema.AudioObject<SiblingNode<ID>> | Schema.Clip<SiblingNode<ID>> | Schema.MusicRecording<SiblingNode<ID>> | undefined;
  author: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  award: string | undefined;
  awards: string | undefined;
  character: Schema.Person<SiblingNode<ID>> | undefined;
  citation: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  citationLiteral: string | undefined;
  comment: Schema.Comment<SiblingNode<ID>> | undefined;
  commentCount: number | undefined;
  conditionsOfAccess: string | undefined;
  contentLocation: Schema.Place<SiblingNode<ID>> | undefined;
  contentRating: Schema.Rating<SiblingNode<ID>> | undefined;
  contentRatingLiteral: string | undefined;
  contentReferenceTime: Date | undefined;
  contributor: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  copyrightHolder: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  copyrightYear: number | undefined;
  correction: Schema.CorrectionComment<SiblingNode<ID>> | undefined;
  correctionLiteral: string | undefined;
  creativeWorkStatus: string | undefined;
  creator: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  dateCreated: Date | undefined;
  dateModified: Date | undefined;
  datePublished: Date | undefined;
  discussionUrl: RDF.NamedNode | undefined;
  editEIDR: string | undefined;
  editEIDRTerm: RDF.NamedNode | undefined;
  editor: Schema.Person<SiblingNode<ID>> | undefined;
  educationalAlignment: Schema.AlignmentObject<SiblingNode<ID>> | undefined;
  educationalLevel: string | undefined;
  educationalLevelTerm: RDF.NamedNode | undefined;
  educationalUse: string | undefined;
  encoding: Schema.MediaObject<SiblingNode<ID>> | undefined;
  encodingFormat: string | undefined;
  encodingFormatTerm: RDF.NamedNode | undefined;
  encodings: Schema.MediaObject<SiblingNode<ID>> | undefined;
  exampleOfWork: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  expires: Date | undefined;
  fileFormat: string | undefined;
  fileFormatTerm: RDF.NamedNode | undefined;
  funder: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  genre: string | undefined;
  genreTerm: RDF.NamedNode | undefined;
  hasPart: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  headline: string | undefined;
  inLanguage: Schema.Language<SiblingNode<ID>> | undefined;
  inLanguageLiteral: string | undefined;
  interactionStatistic: Schema.InteractionCounter<SiblingNode<ID>> | undefined;
  interactivityType: string | undefined;
  isAccessibleForFree: boolean | undefined;
  isBasedOn: Schema.CreativeWork<SiblingNode<ID>> | Schema.Product<SiblingNode<ID>> | undefined;
  isBasedOnUrl: Schema.CreativeWork<SiblingNode<ID>> | Schema.Product<SiblingNode<ID>> | undefined;
  isFamilyFriendly: boolean | undefined;
  isPartOf: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  keywords: string | undefined;
  learningResourceType: string | undefined;
  license: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  locationCreated: Schema.Place<SiblingNode<ID>> | undefined;
  mainEntity: Schema.Thing<SiblingNode<ID>> | undefined;
  maintainer: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  material: Schema.Product<SiblingNode<ID>> | undefined;
  materialLiteral: string | undefined;
  materialExtent: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  materialExtentLiteral: string | undefined;
  mentions: Schema.Thing<SiblingNode<ID>> | undefined;
  offers: Schema.Demand<SiblingNode<ID>> | Schema.Offer<SiblingNode<ID>> | undefined;
  pattern: string | undefined;
  position: number | string | undefined;
  producer: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  provider: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  publication: Schema.PublicationEvent<SiblingNode<ID>> | undefined;
  publisher: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  publisherImprint: Schema.Organization<SiblingNode<ID>> | undefined;
  publishingPrinciples: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  recordedAt: Schema.Event<SiblingNode<ID>> | undefined;
  releasedEvent: Schema.PublicationEvent<SiblingNode<ID>> | undefined;
  review: Schema.Review<SiblingNode<ID>> | undefined;
  reviews: Schema.Review<SiblingNode<ID>> | undefined;
  schemaVersion: string | undefined;
  schemaVersionTerm: RDF.NamedNode | undefined;
  sdDatePublished: Date | undefined;
  sdLicense: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  sdPublisher: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  size: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  sizeLiteral: string | undefined;
  sourceOrganization: Schema.Organization<SiblingNode<ID>> | undefined;
  spatial: Schema.Place<SiblingNode<ID>> | undefined;
  spatialCoverage: Schema.Place<SiblingNode<ID>> | undefined;
  sponsor: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  teaches: string | undefined;
  temporal: Date | string | undefined;
  temporalCoverage: Date | string | undefined;
  temporalCoverageTerm: RDF.NamedNode | undefined;
  text: string | undefined;
  thumbnailUrl: RDF.NamedNode | undefined;
  timeRequired: Schema.Duration<SiblingNode<ID>> | undefined;
  translationOfWork: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  translator: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  typicalAgeRange: string | undefined;
  usageInfo: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  version: number | string | undefined;
  video: Schema.Clip<SiblingNode<ID>> | Schema.VideoObject<SiblingNode<ID>> | undefined;
  workExample: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  workTranslation: Schema.CreativeWork<SiblingNode<ID>> | undefined;
}

export function CreativeWorkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreativeWorkClass extends ThingMixin(Resource) implements CreativeWork {
    @property.resource()
    about: Schema.Thing | undefined;
    @property.literal()
    abstract: string | undefined;
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
    acquireLicensePage: Schema.CreativeWork | undefined;
    @property.resource()
    aggregateRating: Schema.AggregateRating | undefined;
    @property.literal()
    alternativeHeadline: string | undefined;
    @property.literal()
    assesses: string | undefined;
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
    @property.literal()
    conditionsOfAccess: string | undefined;
    @property.resource()
    contentLocation: Schema.Place | undefined;
    @property.resource()
    contentRating: Schema.Rating | undefined;
    @property.literal({ path: schema.contentRating })
    contentRatingLiteral: string | undefined;
    @property.literal({ type: Date })
    contentReferenceTime: Date | undefined;
    @property.resource()
    contributor: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    copyrightHolder: Schema.Organization | Schema.Person | undefined;
    @property.literal({ type: Number })
    copyrightYear: number | undefined;
    @property.resource()
    correction: Schema.CorrectionComment | undefined;
    @property.literal({ path: schema.correction })
    correctionLiteral: string | undefined;
    @property.literal()
    creativeWorkStatus: string | undefined;
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
    @property.literal()
    editEIDR: string | undefined;
    @property({ path: schema.editEIDR })
    editEIDRTerm: RDF.NamedNode | undefined;
    @property.resource()
    editor: Schema.Person | undefined;
    @property.resource()
    educationalAlignment: Schema.AlignmentObject | undefined;
    @property.literal()
    educationalLevel: string | undefined;
    @property({ path: schema.educationalLevel })
    educationalLevelTerm: RDF.NamedNode | undefined;
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
    maintainer: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    material: Schema.Product | undefined;
    @property.literal({ path: schema.material })
    materialLiteral: string | undefined;
    @property.resource()
    materialExtent: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.materialExtent })
    materialExtentLiteral: string | undefined;
    @property.resource()
    mentions: Schema.Thing | undefined;
    @property.resource()
    offers: Schema.Demand | Schema.Offer | undefined;
    @property.literal()
    pattern: string | undefined;
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
    publisherImprint: Schema.Organization | undefined;
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
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    sdDatePublished: Date | undefined;
    @property.resource()
    sdLicense: Schema.CreativeWork | undefined;
    @property.resource()
    sdPublisher: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    size: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.size })
    sizeLiteral: string | undefined;
    @property.resource()
    sourceOrganization: Schema.Organization | undefined;
    @property.resource()
    spatial: Schema.Place | undefined;
    @property.resource()
    spatialCoverage: Schema.Place | undefined;
    @property.resource()
    sponsor: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    teaches: string | undefined;
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
    translationOfWork: Schema.CreativeWork | undefined;
    @property.resource()
    translator: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    typicalAgeRange: string | undefined;
    @property.resource()
    usageInfo: Schema.CreativeWork | undefined;
    @property.literal()
    version: number | string | undefined;
    @property.resource()
    video: Schema.Clip | Schema.VideoObject | undefined;
    @property.resource()
    workExample: Schema.CreativeWork | undefined;
    @property.resource()
    workTranslation: Schema.CreativeWork | undefined;
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
