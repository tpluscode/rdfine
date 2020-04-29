import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface MediaSubscription extends Schema.Intangible, RdfResource {
  authenticator: Schema.Organization;
  expectsAcceptanceOf: Schema.Offer;
}

export function MediaSubscriptionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MediaSubscriptionClass extends IntangibleMixin(Resource) implements MediaSubscription {
    @property.resource()
    authenticator!: Schema.Organization;
    @property.resource()
    expectsAcceptanceOf!: Schema.Offer;
  }
  return MediaSubscriptionClass
}

class MediaSubscriptionImpl extends MediaSubscriptionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MediaSubscription>) {
    super(arg, init)
    this.types.add(schema.MediaSubscription)
  }
}
MediaSubscriptionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MediaSubscription)
MediaSubscriptionMixin.Class = MediaSubscriptionImpl
