import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface AchieveAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
}

export function AchieveActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AchieveAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AchieveActionClass extends ActionMixin(Resource) implements Partial<AchieveAction> {
  }
  return AchieveActionClass
}

class AchieveActionImpl extends AchieveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AchieveAction>) {
    super(arg, init)
    this.types.add(schema.AchieveAction)
  }

  static readonly __mixins: Mixin[] = [AchieveActionMixin, ActionMixin];
}
AchieveActionMixin.appliesTo = schema.AchieveAction
AchieveActionMixin.Class = AchieveActionImpl

export const fromPointer = createFactory<AchieveAction>([ActionMixin, AchieveActionMixin], { types: [schema.AchieveAction] });
