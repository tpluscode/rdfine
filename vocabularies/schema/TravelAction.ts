import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import MoveActionMixin from './MoveAction';

export interface TravelAction extends Schema.MoveAction, RdfResource {
  distance: Schema.Distance;
}

export default function TravelActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TravelActionClass extends MoveActionMixin(Resource) implements TravelAction {
    @property.resource()
    distance!: Schema.Distance;
  }
  return TravelActionClass
}

class TravelActionImpl extends TravelActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TravelAction>) {
    super(arg)
    this.types.add(schema.TravelAction)
    initializeProperties(this, init)
  }
}
TravelActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TravelAction)
TravelActionMixin.Class = TravelActionImpl
