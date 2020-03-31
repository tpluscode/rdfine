import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<TravelAction>) {
    super(arg, init)
    this.types.add(schema.TravelAction)
  }
}
TravelActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TravelAction)
TravelActionMixin.Class = TravelActionImpl
