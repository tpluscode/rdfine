import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ActionMixin } from './Action';

export interface CreateAction extends Schema.Action, RdfResource {
}

export function CreateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreateActionClass extends ActionMixin(Resource) implements CreateAction {
  }
  return CreateActionClass
}

class CreateActionImpl extends CreateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CreateAction>) {
    super(arg, init)
    this.types.add(schema.CreateAction)
  }
}
CreateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CreateAction)
CreateActionMixin.Class = CreateActionImpl
