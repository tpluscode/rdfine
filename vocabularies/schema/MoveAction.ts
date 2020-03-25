import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface MoveAction extends Schema.Action, RdfResource {
  fromLocation: Schema.Place;
  toLocation: Schema.Place;
}

export default function MoveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MoveActionClass extends ActionMixin(Resource) implements MoveAction {
    @property.resource()
    fromLocation!: Schema.Place;
    @property.resource()
    toLocation!: Schema.Place;
  }
  return MoveActionClass
}

class MoveActionImpl extends MoveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MoveAction>) {
    super(arg)
    this.types.add(schema.MoveAction)
    initializeProperties<MoveAction>(this, init)
  }
}
MoveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MoveAction)
MoveActionMixin.Class = MoveActionImpl
