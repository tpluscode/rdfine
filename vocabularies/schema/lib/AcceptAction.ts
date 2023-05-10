import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AllocateActionMixin } from './AllocateAction.js';

export interface AcceptAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AllocateAction<D>, rdfine.RdfResource<D> {
}

export function AcceptActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AcceptAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AcceptActionClass extends AllocateActionMixin(Resource) implements Partial<AcceptAction> {
  }
  return AcceptActionClass
}

class AcceptActionImpl extends AcceptActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AcceptAction>) {
    super(arg, init)
    this.types.add(schema.AcceptAction)
  }

  static readonly __mixins: Mixin[] = [AcceptActionMixin, AllocateActionMixin];
}
AcceptActionMixin.appliesTo = schema.AcceptAction
AcceptActionMixin.Class = AcceptActionImpl

export const fromPointer = createFactory<AcceptAction>([AllocateActionMixin, AcceptActionMixin], { types: [schema.AcceptAction] });
