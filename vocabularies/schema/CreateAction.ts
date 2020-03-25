import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface CreateAction extends Schema.Action, RdfResource {
}

export default function CreateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreateActionClass extends ActionMixin(Resource) implements CreateAction {
  }
  return CreateActionClass
}

class CreateActionImpl extends CreateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<CreateAction>) {
    super(arg)
    this.types.add(schema.CreateAction)
    initializeProperties<CreateAction>(this, init)
  }
}
CreateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CreateAction)
CreateActionMixin.Class = CreateActionImpl
