import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UpdateActionMixin } from './UpdateAction';

export interface DeleteAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UpdateAction<D>, RdfResource<D> {
}

export function DeleteActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DeleteAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class DeleteActionClass extends UpdateActionMixin(Resource) implements Partial<DeleteAction> {
  }
  return DeleteActionClass
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
