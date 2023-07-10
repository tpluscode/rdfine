import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { UpdateActionMixin } from './UpdateAction.js';

export interface DeleteAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UpdateAction<D>, rdfine.RdfResource<D> {
}

export function DeleteActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DeleteAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DeleteActionClass extends UpdateActionMixin(Resource) {
  }
  return DeleteActionClass as any
}

class DeleteActionImpl extends DeleteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DeleteAction>) {
    super(arg, init)
    this.types.add(schema.DeleteAction)
  }

  static readonly __mixins: Mixin[] = [DeleteActionMixin, UpdateActionMixin];
}
DeleteActionMixin.appliesTo = schema.DeleteAction
DeleteActionMixin.Class = DeleteActionImpl

export const fromPointer = createFactory<DeleteAction>([UpdateActionMixin, DeleteActionMixin], { types: [schema.DeleteAction] });
