import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface OrganizeAction extends Schema.Action, RdfResource {
}

export default function OrganizeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrganizeActionClass extends ActionMixin(Resource) implements OrganizeAction {
  }
  return OrganizeActionClass
}

class OrganizeActionImpl extends OrganizeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrganizeAction>) {
    super(arg, init)
    this.types.add(schema.OrganizeAction)
  }
}
OrganizeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OrganizeAction)
OrganizeActionMixin.Class = OrganizeActionImpl
