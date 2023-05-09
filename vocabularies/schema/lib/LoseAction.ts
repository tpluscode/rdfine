import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AchieveActionMixin } from './AchieveAction.js';

export interface LoseAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AchieveAction<D>, rdfine.RdfResource<D> {
  winner: Schema.Person<D> | undefined;
}

export function LoseActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<LoseAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LoseActionClass extends AchieveActionMixin(Resource) implements Partial<LoseAction> {
    @rdfine.property.resource()
    winner: Schema.Person | undefined;
  }
  return LoseActionClass
}

class LoseActionImpl extends LoseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LoseAction>) {
    super(arg, init)
    this.types.add(schema.LoseAction)
  }

  static readonly __mixins: Mixin[] = [LoseActionMixin, AchieveActionMixin];
}
LoseActionMixin.appliesTo = schema.LoseAction
LoseActionMixin.Class = LoseActionImpl

export const fromPointer = createFactory<LoseAction>([AchieveActionMixin, LoseActionMixin], { types: [schema.LoseAction] });
