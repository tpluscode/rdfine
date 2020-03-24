import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import FindActionMixin from './FindAction';

export interface TrackAction extends Schema.FindAction, RdfResource {
  deliveryMethod: Schema.DeliveryMethod;
}

export default function TrackActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TrackActionClass extends FindActionMixin(Resource) implements TrackAction {
    @property()
    deliveryMethod!: Schema.DeliveryMethod;
  }
  return TrackActionClass
}

class TrackActionImpl extends TrackActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TrackAction>) {
    super(arg)
    this.types.add(schema.TrackAction)
    initializeProperties(this, init)
  }
}
TrackActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TrackAction)
TrackActionMixin.Class = TrackActionImpl
