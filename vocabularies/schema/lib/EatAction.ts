import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ConsumeActionMixin } from './ConsumeAction.js';

export interface EatAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, rdfine.RdfResource<D> {
}

export function EatActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<EatAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EatActionClass extends ConsumeActionMixin(Resource) implements Partial<EatAction> {
  }
  return EatActionClass
}

class EatActionImpl extends EatActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EatAction>) {
    super(arg, init)
    this.types.add(schema.EatAction)
  }

  static readonly __mixins: Mixin[] = [EatActionMixin, ConsumeActionMixin];
}
EatActionMixin.appliesTo = schema.EatAction
EatActionMixin.Class = EatActionImpl

export const fromPointer = createFactory<EatAction>([ConsumeActionMixin, EatActionMixin], { types: [schema.EatAction] });
