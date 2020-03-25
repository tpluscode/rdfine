import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import UpdateActionMixin from './UpdateAction';

export interface AddAction extends Schema.UpdateAction, RdfResource {
}

export default function AddActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AddActionClass extends UpdateActionMixin(Resource) implements AddAction {
  }
  return AddActionClass
}

class AddActionImpl extends AddActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AddAction>) {
    super(arg)
    this.types.add(schema.AddAction)
    initializeProperties<AddAction>(this, init)
  }
}
AddActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AddAction)
AddActionMixin.Class = AddActionImpl
