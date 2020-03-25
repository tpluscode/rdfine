import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface UpdateAction extends Schema.Action, RdfResource {
  collection: Schema.Thing;
  targetCollection: Schema.Thing;
}

export default function UpdateActionMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<UpdateAction>) {
    super(arg)
    this.types.add(schema.UpdateAction)
    initializeProperties<UpdateAction>(this, init)
  }
}
UpdateActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UpdateAction)
UpdateActionMixin.Class = UpdateActionImpl
