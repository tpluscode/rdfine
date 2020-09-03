import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface MediaObject extends Schema.CreativeWork, RdfResource {
  associatedArticle: Schema.NewsArticle;
  bitrate: string;
  contentSize: string;
  contentUrl: RDF.NamedNode;
  duration: Schema.Duration;
  embedUrl: RDF.NamedNode;
  encodesCreativeWork: Schema.CreativeWork;
  encodingFormat: string;
  encodingFormatTerm: RDF.NamedNode;
  endTime: Date;
  height: Schema.Distance | Schema.QuantitativeValue;
  playerType: string;
  productionCompany: Schema.Organization;
  regionsAllowed: Schema.Place;
  requiresSubscription: Schema.MediaSubscription;
  requiresSubscriptionLiteral: boolean;
  startTime: Date;
  uploadDate: Date;
  width: Schema.Distance | Schema.QuantitativeValue;
}

export function MediaObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MediaObjectClass extends CreativeWorkMixin(Resource) implements MediaObject {
    @property.resource()
    associatedArticle!: Schema.NewsArticle;
    @property.literal()
    bitrate!: string;
    @property.literal()
    contentSize!: string;
    @property()
    contentUrl!: RDF.NamedNode;
    @property.resource()
    duration!: Schema.Duration;
    @property()
    embedUrl!: RDF.NamedNode;
    @property.resource()
    encodesCreativeWork!: Schema.CreativeWork;
    @property.literal()
    encodingFormat!: string;
    @property({ path: schema.encodingFormat })
    encodingFormatTerm!: RDF.NamedNode;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    endTime!: Date;
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
    @property.literal({ path: schema.requiresSubscription, type: Boolean })
    requiresSubscriptionLiteral!: boolean;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    startTime!: Date;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    uploadDate!: Date;
    @property.resource()
    width!: Schema.Distance | Schema.QuantitativeValue;
  }
  return MediaObjectClass
}

class MediaObjectImpl extends MediaObjectMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MediaObject>) {
    super(arg, init)
    this.types.add(schema.MediaObject)
  }

  static readonly __mixins: Mixin[] = [MediaObjectMixin, CreativeWorkMixin];
}
MediaObjectMixin.appliesTo = schema.MediaObject
MediaObjectMixin.Class = MediaObjectImpl
