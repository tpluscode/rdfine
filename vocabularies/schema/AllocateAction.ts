import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import OrganizeActionMixin from './OrganizeAction';

export interface AllocateAction extends Schema.OrganizeAction, RdfResource {
}

export default function AllocateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AllocateActionClass extends OrganizeActionMixin(Resource) implements AllocateAction {
  }
  return AllocateActionClass
}

class AllocateActionImpl extends AllocateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AllocateAction>) {
    super(arg, init)
    this.types.add(schema.AllocateAction)
  }
}
AllocateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AllocateAction)
AllocateActionMixin.Class = AllocateActionImpl
