import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface MediaObject<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  associatedArticle: Schema.NewsArticle<D> | undefined;
  bitrate: string | undefined;
  contentSize: string | undefined;
  contentUrl: RDF.NamedNode | undefined;
  duration: Schema.Duration<D> | undefined;
  embedUrl: RDF.NamedNode | undefined;
  encodesCreativeWork: Schema.CreativeWork<D> | undefined;
  encodingFormat: string | undefined;
  encodingFormatTerm: RDF.NamedNode | undefined;
  endTime: Date | undefined;
  height: Schema.Distance<D> | Schema.QuantitativeValue<D> | undefined;
  playerType: string | undefined;
  productionCompany: Schema.Organization<D> | undefined;
  regionsAllowed: Schema.Place<D> | undefined;
  requiresSubscription: Schema.MediaSubscription<D> | undefined;
  requiresSubscriptionLiteral: boolean | undefined;
  startTime: Date | undefined;
  uploadDate: Date | undefined;
  width: Schema.Distance<D> | Schema.QuantitativeValue<D> | undefined;
}

export function MediaObjectMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MediaObjectClass extends CreativeWorkMixin(Resource) implements MediaObject {
    @property.resource()
    associatedArticle: Schema.NewsArticle | undefined;
    @property.literal()
    bitrate: string | undefined;
    @property.literal()
    contentSize: string | undefined;
    @property()
    contentUrl: RDF.NamedNode | undefined;
    @property.resource()
    duration: Schema.Duration | undefined;
    @property()
    embedUrl: RDF.NamedNode | undefined;
    @property.resource()
    encodesCreativeWork: Schema.CreativeWork | undefined;
    @property.literal()
    encodingFormat: string | undefined;
    @property({ path: schema.encodingFormat })
    encodingFormatTerm: RDF.NamedNode | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    endTime: Date | undefined;
    @property.resource()
    height: Schema.Distance | Schema.QuantitativeValue | undefined;
    @property.literal()
    playerType: string | undefined;
    @property.resource()
    productionCompany: Schema.Organization | undefined;
    @property.resource()
    regionsAllowed: Schema.Place | undefined;
    @property.resource()
    requiresSubscription: Schema.MediaSubscription | undefined;
    @property.literal({ path: schema.requiresSubscription, type: Boolean })
    requiresSubscriptionLiteral: boolean | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    startTime: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    uploadDate: Date | undefined;
    @property.resource()
    width: Schema.Distance | Schema.QuantitativeValue | undefined;
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
