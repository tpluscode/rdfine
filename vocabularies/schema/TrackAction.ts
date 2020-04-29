import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { FindActionMixin } from './FindAction';

export interface TrackAction extends Schema.FindAction, RdfResource {
  deliveryMethod: Schema.DeliveryMethod;
}

export function TrackActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TrackActionClass extends FindActionMixin(Resource) implements TrackAction {
    @property()
    deliveryMethod!: Schema.DeliveryMethod;
  }
  return TrackActionClass
}

class TrackActionImpl extends TrackActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TrackAction>) {
    super(arg, init)
    this.types.add(schema.TrackAction)
  }
}
TrackActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TrackAction)
TrackActionMixin.Class = TrackActionImpl
