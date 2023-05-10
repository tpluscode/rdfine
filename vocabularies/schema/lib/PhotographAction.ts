import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreateActionMixin } from './CreateAction.js';

export interface PhotographAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreateAction<D>, rdfine.RdfResource<D> {
}

export function PhotographActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PhotographAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PhotographActionClass extends CreateActionMixin(Resource) implements Partial<PhotographAction> {
  }
  return PhotographActionClass
}

class PhotographActionImpl extends PhotographActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PhotographAction>) {
    super(arg, init)
    this.types.add(schema.PhotographAction)
  }

  static readonly __mixins: Mixin[] = [PhotographActionMixin, CreateActionMixin];
}
PhotographActionMixin.appliesTo = schema.PhotographAction
PhotographActionMixin.Class = PhotographActionImpl

export const fromPointer = createFactory<PhotographAction>([CreateActionMixin, PhotographActionMixin], { types: [schema.PhotographAction] });
