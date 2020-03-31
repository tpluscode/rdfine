import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import FindActionMixin from './FindAction';

export interface CheckAction extends Schema.FindAction, RdfResource {
}

export default function CheckActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CheckActionClass extends FindActionMixin(Resource) implements CheckAction {
  }
  return CheckActionClass
}

class CheckActionImpl extends CheckActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CheckAction>) {
    super(arg, init)
    this.types.add(schema.CheckAction)
  }
}
CheckActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CheckAction)
CheckActionMixin.Class = CheckActionImpl
