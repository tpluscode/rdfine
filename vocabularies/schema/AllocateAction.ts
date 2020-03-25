import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<AllocateAction>) {
    super(arg)
    this.types.add(schema.AllocateAction)
    initializeProperties<AllocateAction>(this, init)
  }
}
AllocateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AllocateAction)
AllocateActionMixin.Class = AllocateActionImpl
