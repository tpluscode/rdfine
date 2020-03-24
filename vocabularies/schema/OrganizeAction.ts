import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<OrganizeAction>) {
    super(arg)
    this.types.add(schema.OrganizeAction)
    initializeProperties(this, init)
  }
}
OrganizeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OrganizeAction)
OrganizeActionMixin.Class = OrganizeActionImpl
