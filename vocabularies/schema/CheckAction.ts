import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<CheckAction>) {
    super(arg)
    this.types.add(schema.CheckAction)
    initializeProperties<CheckAction>(this, init)
  }
}
CheckActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CheckAction)
CheckActionMixin.Class = CheckActionImpl
