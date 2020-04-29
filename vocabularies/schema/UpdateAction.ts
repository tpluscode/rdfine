import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ActionMixin } from './Action';

export interface UpdateAction extends Schema.Action, RdfResource {
  collection: Schema.Thing;
  targetCollection: Schema.Thing;
}

export function UpdateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UpdateActionClass extends ActionMixin(Resource) implements UpdateAction {
    @property.resource()
    collection!: Schema.Thing;
    @property.resource()
    targetCollection!: Schema.Thing;
  }
  return UpdateActionClass
}

class UpdateActionImpl extends UpdateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UpdateAction>) {
    super(arg, init)
    this.types.add(schema.UpdateAction)
  }
}
UpdateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UpdateAction)
UpdateActionMixin.Class = UpdateActionImpl
