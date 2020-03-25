import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ConsumeActionMixin from './ConsumeAction';

export interface EatAction extends Schema.ConsumeAction, RdfResource {
}

export default function EatActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EatActionClass extends ConsumeActionMixin(Resource) implements EatAction {
  }
  return EatActionClass
}

class EatActionImpl extends EatActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EatAction>) {
    super(arg, init)
    this.types.add(schema.EatAction)
  }
}
EatActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EatAction)
EatActionMixin.Class = EatActionImpl
