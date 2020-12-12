import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface CreateAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, RdfResource<D> {
}

export function CreateActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CreateAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class CreateActionClass extends ActionMixin(Resource) implements Partial<CreateAction> {
  }
  return CreateActionClass
}

class CreateActionImpl extends CreateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CreateAction>) {
    super(arg, init)
    this.types.add(schema.CreateAction)
  }

  static readonly __mixins: Mixin[] = [CreateActionMixin, ActionMixin];
}
CreateActionMixin.appliesTo = schema.CreateAction
CreateActionMixin.Class = CreateActionImpl

export const fromPointer = createFactory<CreateAction>([ActionMixin, CreateActionMixin], { types: [schema.CreateAction] });
