import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface MediaSubscription extends Schema.Intangible, RdfResource {
  authenticator: Schema.Organization;
  expectsAcceptanceOf: Schema.Offer;
}

export default function MediaSubscriptionMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<MediaSubscription>) {
    super(arg)
    this.types.add(schema.MediaSubscription)
    initializeProperties<MediaSubscription>(this, init)
  }
}
MediaSubscriptionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MediaSubscription)
MediaSubscriptionMixin.Class = MediaSubscriptionImpl
