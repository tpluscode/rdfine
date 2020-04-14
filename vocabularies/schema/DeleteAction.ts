import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<DeleteAction>) {
    super(arg, init)
    this.types.add(schema.DeleteAction)
  }
}
DeleteActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DeleteAction)
DeleteActionMixin.Class = DeleteActionImpl
