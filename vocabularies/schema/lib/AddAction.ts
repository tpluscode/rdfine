import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UpdateActionMixin } from './UpdateAction';

export interface AddAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UpdateAction<D>, RdfResource<D> {
}

export function AddActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AddAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class AddActionClass extends UpdateActionMixin(Resource) implements Partial<AddAction> {
  }
  return AddActionClass
}

class AddActionImpl extends AddActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AddAction>) {
    super(arg, init)
    this.types.add(schema.AddAction)
  }

  static readonly __mixins: Mixin[] = [AddActionMixin, UpdateActionMixin];
}
AddActionMixin.appliesTo = schema.AddAction
AddActionMixin.Class = AddActionImpl

export const fromPointer = createFactory<AddAction>([UpdateActionMixin, AddActionMixin], { types: [schema.AddAction] });
