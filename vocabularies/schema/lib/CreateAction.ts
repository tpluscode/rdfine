import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface CreateAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
}

export function CreateActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<CreateAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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
