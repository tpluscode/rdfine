import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import UpdateActionMixin from './UpdateAction';

export interface DeleteAction extends Schema.UpdateAction, RdfResource {
}

export default function DeleteActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DeleteActionClass extends UpdateActionMixin(Resource) implements DeleteAction {
  }
  return DeleteActionClass
}

class DeleteActionImpl extends DeleteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DeleteAction>) {
    super(arg)
    this.types.add(schema.DeleteAction)
    initializeProperties(this, init)
  }
}
DeleteActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DeleteAction)
DeleteActionMixin.Class = DeleteActionImpl
