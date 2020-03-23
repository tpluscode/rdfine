import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ThingMixin from './Thing';

export interface CreativeWork extends Schema.Thing, RdfResource {
  about: Schema.Thing;
  accessibilityAPI: string;
  accessibilityControl: string;
  accessibilityFeature: string;
  accessibilityHazard: string;
  accessibilitySummary: string;
  accessMode: string;
  accessModeSufficient: Schema.ItemList;
  accountablePerson: Schema.Person;
  aggregateRating: Schema.AggregateRating;
  alternativeHeadline: string;
  associatedMedia: Schema.MediaObject;
  audience: Schema.Audience;
  audio: Schema.AudioObject | Schema.Clip | Schema.MusicRecording;
  author: Schema.Organization | Schema.Person;
  award: string;
  awards: string;
  character: Schema.Person;
  citation: CreativeWork;
  citationLiteral: string;
  comment: Schema.Comment;
  commentCount: number;
  contentLocation: Schema.Place;
  contentRating: Schema.Rating;
  contentRatingLiteral: string;
  contributor: Schema.Organization | Schema.Person;
  copyrightHolder: Schema.Organization | Schema.Person;
  copyrightYear: number;
  creator: Schema.Organization | Schema.Person;
  dateCreated: Date | Date;
  dateModified: Date | Date;
  datePublished: Date | Date;
  discussionUrl: string;
  editor: Schema.Person;
  educationalAlignment: Schema.AlignmentObject;
  educationalUse: string;
  encoding: Schema.MediaObject;
  encodingFormat: string | string;
  encodings: Schema.MediaObject;
  exampleOfWork: CreativeWork;
  expires: Date;
  fileFormat: string | string;
  funder: Schema.Organization | Schema.Person;
  genre: string | string;
  hasPart: CreativeWork;
  headline: string;
  inLanguage: Schema.Language;
  inLanguageLiteral: string;
  interactionStatistic: Schema.InteractionCounter;
  interactivityType: string;
  isAccessibleForFree: boolean;
  isBasedOn: CreativeWork | Schema.Product;
  isBasedOnLiteral: string;
  isBasedOnUrl: CreativeWork | Schema.Product;
  isBasedOnUrlLiteral: string;
  isFamilyFriendly: boolean;
  isPartOf: CreativeWork;
  isPartOfLiteral: string;
  keywords: string;
  learningResourceType: string;
  license: CreativeWork;
  licenseLiteral: string;
  locationCreated: Schema.Place;
  mainEntity: Schema.Thing;
  material: Schema.Product;
  materialLiteral: string | string;
  mentions: Schema.Thing;
  offers: Schema.Demand | Schema.Offer;
  position: number | string;
  producer: Schema.Organization | Schema.Person;
  provider: Schema.Organization | Schema.Person;
  publication: Schema.PublicationEvent;
  publisher: Schema.Organization | Schema.Person;
  publishingPrinciples: CreativeWork;
  publishingPrinciplesLiteral: string;
  recordedAt: Schema.Event;
  releasedEvent: Schema.PublicationEvent;
  review: Schema.Review;
  reviews: Schema.Review;
  schemaVersion: string | string;
  sourceOrganization: Schema.Organization;
  spatial: Schema.Place;
  spatialCoverage: Schema.Place;
  sponsor: Schema.Organization | Schema.Person;
  temporal: Date | string;
  temporalCoverage: Date | string | string;
  text: string;
  thumbnailUrl: string;
  timeRequired: Schema.Duration;
  translator: Schema.Organization | Schema.Person;
  typicalAgeRange: string;
  version: number | string;
  video: Schema.Clip | Schema.VideoObject;
  workExample: CreativeWork;
}

export default function CreativeWorkMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreativeWorkClass extends ThingMixin(Resource) implements CreativeWork {
    @property.resource()
    about!: Schema.Thing;
    @property.literal()
    accessibilityAPI!: string;
    @property.literal()
    accessibilityControl!: string;
    @property.literal()
    accessibilityFeature!: string;
    @property.literal()
    accessibilityHazard!: string;
    @property.literal()
    accessibilitySummary!: string;
    @property.literal()
    accessMode!: string;
    @property.resource()
    accessModeSufficient!: Schema.ItemList;
    @property.resource()
    accountablePerson!: Schema.Person;
    @property.resource()
    aggregateRating!: Schema.AggregateRating;
    @property.literal()
    alternativeHeadline!: string;
    @property.resource()
    associatedMedia!: Schema.MediaObject;
    @property.resource()
    audience!: Schema.Audience;
    @property.resource()
    audio!: Schema.AudioObject | Schema.Clip | Schema.MusicRecording;
    @property.resource()
    author!: Schema.Organization | Schema.Person;
    @property.literal()
    award!: string;
    @property.literal()
    awards!: string;
    @property.resource()
    character!: Schema.Person;
    @property.resource()
    citation!: CreativeWork;
    @property.literal({ path: schema.citation })
    citationLiteral!: string;
    @property.resource()
    comment!: Schema.Comment;
    @property.literal({ type: Number })
    commentCount!: number;
    @property.resource()
    contentLocation!: Schema.Place;
    @property.resource()
    contentRating!: Schema.Rating;
    @property.literal({ path: schema.contentRating })
    contentRatingLiteral!: string;
    @property.resource()
    contributor!: Schema.Organization | Schema.Person;
    @property.resource()
    copyrightHolder!: Schema.Organization | Schema.Person;
    @property.literal({ type: Number })
    copyrightYear!: number;
    @property.resource()
    creator!: Schema.Organization | Schema.Person;
    @property.literal()
    dateCreated!: Date | Date;
    @property.literal()
    dateModified!: Date | Date;
    @property.literal()
    datePublished!: Date | Date;
    @property.literal()
    discussionUrl!: string;
    @property.resource()
    editor!: Schema.Person;
    @property.resource()
    educationalAlignment!: Schema.AlignmentObject;
    @property.literal()
    educationalUse!: string;
    @property.resource()
    encoding!: Schema.MediaObject;
    @property.literal()
    encodingFormat!: string | string;
    @property.resource()
    encodings!: Schema.MediaObject;
    @property.resource()
    exampleOfWork!: CreativeWork;
    @property.literal()
    expires!: Date;
    @property.literal()
    fileFormat!: string | string;
    @property.resource()
    funder!: Schema.Organization | Schema.Person;
    @property.literal()
    genre!: string | string;
    @property.resource()
    hasPart!: CreativeWork;
    @property.literal()
    headline!: string;
    @property.resource()
    inLanguage!: Schema.Language;
    @property.literal({ path: schema.inLanguage })
    inLanguageLiteral!: string;
    @property.resource()
    interactionStatistic!: Schema.InteractionCounter;
    @property.literal()
    interactivityType!: string;
    @property.literal({ type: Boolean })
    isAccessibleForFree!: boolean;
    @property.resource()
    isBasedOn!: CreativeWork | Schema.Product;
    @property.literal({ path: schema.isBasedOn })
    isBasedOnLiteral!: string;
    @property.resource()
    isBasedOnUrl!: CreativeWork | Schema.Product;
    @property.literal({ path: schema.isBasedOnUrl })
    isBasedOnUrlLiteral!: string;
    @property.literal({ type: Boolean })
    isFamilyFriendly!: boolean;
    @property.resource()
    isPartOf!: CreativeWork;
    @property.literal({ path: schema.isPartOf })
    isPartOfLiteral!: string;
    @property.literal()
    keywords!: string;
    @property.literal()
    learningResourceType!: string;
    @property.resource()
    license!: CreativeWork;
    @property.literal({ path: schema.license })
    licenseLiteral!: string;
    @property.resource()
    locationCreated!: Schema.Place;
    @property.resource()
    mainEntity!: Schema.Thing;
    @property.resource()
    material!: Schema.Product;
    @property.literal({ path: schema.material })
    materialLiteral!: string | string;
    @property.resource()
    mentions!: Schema.Thing;
    @property.resource()
    offers!: Schema.Demand | Schema.Offer;
    @property.literal()
    position!: number | string;
    @property.resource()
    producer!: Schema.Organization | Schema.Person;
    @property.resource()
    provider!: Schema.Organization | Schema.Person;
    @property.resource()
    publication!: Schema.PublicationEvent;
    @property.resource()
    publisher!: Schema.Organization | Schema.Person;
    @property.resource()
    publishingPrinciples!: CreativeWork;
    @property.literal({ path: schema.publishingPrinciples })
    publishingPrinciplesLiteral!: string;
    @property.resource()
    recordedAt!: Schema.Event;
    @property.resource()
    releasedEvent!: Schema.PublicationEvent;
    @property.resource()
    review!: Schema.Review;
    @property.resource()
    reviews!: Schema.Review;
    @property.literal()
    schemaVersion!: string | string;
    @property.resource()
    sourceOrganization!: Schema.Organization;
    @property.resource()
    spatial!: Schema.Place;
    @property.resource()
    spatialCoverage!: Schema.Place;
    @property.resource()
    sponsor!: Schema.Organization | Schema.Person;
    @property.literal()
    temporal!: Date | string;
    @property.literal()
    temporalCoverage!: Date | string | string;
    @property.literal()
    text!: string;
    @property.literal()
    thumbnailUrl!: string;
    @property.resource()
    timeRequired!: Schema.Duration;
    @property.resource()
    translator!: Schema.Organization | Schema.Person;
    @property.literal()
    typicalAgeRange!: string;
    @property.literal()
    version!: number | string;
    @property.resource()
    video!: Schema.Clip | Schema.VideoObject;
    @property.resource()
    workExample!: CreativeWork;
  }
  return CreativeWorkClass
}

class CreativeWorkImpl extends CreativeWorkMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CreativeWork)
  }
}
CreativeWorkMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CreativeWork)
CreativeWorkMixin.Class = CreativeWorkImpl
