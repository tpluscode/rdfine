import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import MoveActionMixin from './MoveAction';

export interface ArriveAction extends Schema.MoveAction, RdfResource {
}

export default function ArriveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ArriveActionClass extends MoveActionMixin(Resource) implements ArriveAction {
  }
  return ArriveActionClass
}

class ArriveActionImpl extends ArriveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ArriveAction>) {
    super(arg, init)
    this.types.add(schema.ArriveAction)
  }
}
ArriveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ArriveAction)
ArriveActionMixin.Class = ArriveActionImpl
