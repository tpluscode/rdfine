import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ArriveAction>) {
    super(arg)
    this.types.add(schema.ArriveAction)
    initializeProperties<ArriveAction>(this, init)
  }
}
ArriveActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ArriveAction)
ArriveActionMixin.Class = ArriveActionImpl
