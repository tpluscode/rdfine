import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface MediaObject extends Schema.CreativeWork, RdfResource {
  associatedArticle: Schema.NewsArticle;
  bitrate: string;
  contentSize: string;
  contentUrl: string;
  duration: Schema.Duration;
  embedUrl: string;
  encodesCreativeWork: Schema.CreativeWork;
  encodingFormat: string | string;
  endTime: Date | Date;
  height: Schema.Distance | Schema.QuantitativeValue;
  playerType: string;
  productionCompany: Schema.Organization;
  regionsAllowed: Schema.Place;
  requiresSubscription: Schema.MediaSubscription;
  requiresSubscriptionLiteral: boolean;
  startTime: Date | Date;
  uploadDate: Date;
  width: Schema.Distance | Schema.QuantitativeValue;
}

export default function MediaObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MediaObjectClass extends CreativeWorkMixin(Resource) implements MediaObject {
    @property.resource()
    associatedArticle!: Schema.NewsArticle;
    @property.literal()
    bitrate!: string;
    @property.literal()
    contentSize!: string;
    @property.literal()
    contentUrl!: string;
    @property.resource()
    duration!: Schema.Duration;
    @property.literal()
    embedUrl!: string;
    @property.resource()
    encodesCreativeWork!: Schema.CreativeWork;
    @property.literal()
    encodingFormat!: string | string;
    @property.literal()
    endTime!: Date | Date;
    @property.resource()
    height!: Schema.Distance | Schema.QuantitativeValue;
    @property.literal()
    playerType!: string;
    @property.resource()
    productionCompany!: Schema.Organization;
    @property.resource()
    regionsAllowed!: Schema.Place;
    @property.resource()
    requiresSubscription!: Schema.MediaSubscription;
    @property.literal({ type: Boolean, path: schema.requiresSubscription })
    requiresSubscriptionLiteral!: boolean;
    @property.literal()
    startTime!: Date | Date;
    @property.literal()
    uploadDate!: Date;
    @property.resource()
    width!: Schema.Distance | Schema.QuantitativeValue;
  }
  return MediaObjectClass
}

class MediaObjectImpl extends MediaObjectMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MediaObject)
  }
}
MediaObjectMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MediaObject)
MediaObjectMixin.Class = MediaObjectImpl
