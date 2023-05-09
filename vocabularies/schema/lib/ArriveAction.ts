import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MoveActionMixin } from './MoveAction.js';

export interface ArriveAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MoveAction<D>, rdfine.RdfResource<D> {
}

export function ArriveActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ArriveAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ArriveActionClass extends MoveActionMixin(Resource) implements Partial<ArriveAction> {
  }
  return ArriveActionClass
}

class ArriveActionImpl extends ArriveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ArriveAction>) {
    super(arg, init)
    this.types.add(schema.ArriveAction)
  }

  static readonly __mixins: Mixin[] = [ArriveActionMixin, MoveActionMixin];
}
ArriveActionMixin.appliesTo = schema.ArriveAction
ArriveActionMixin.Class = ArriveActionImpl

export const fromPointer = createFactory<ArriveAction>([MoveActionMixin, ArriveActionMixin], { types: [schema.ArriveAction] });
