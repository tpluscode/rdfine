import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface UnRegisterAction extends Schema.InteractAction, RdfResource {
}

export default function UnRegisterActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UnRegisterActionClass extends InteractActionMixin(Resource) implements UnRegisterAction {
  }
  return UnRegisterActionClass
}

class UnRegisterActionImpl extends UnRegisterActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UnRegisterAction>) {
    super(arg, init)
    this.types.add(schema.UnRegisterAction)
  }
}
UnRegisterActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UnRegisterAction)
UnRegisterActionMixin.Class = UnRegisterActionImpl
