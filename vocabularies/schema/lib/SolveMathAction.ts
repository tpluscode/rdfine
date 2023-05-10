import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface SolveMathAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
  eduQuestionType: string | undefined;
}

export function SolveMathActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SolveMathAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SolveMathActionClass extends ActionMixin(Resource) implements Partial<SolveMathAction> {
    @rdfine.property.literal()
    eduQuestionType: string | undefined;
  }
  return SolveMathActionClass
}

class SolveMathActionImpl extends SolveMathActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SolveMathAction>) {
    super(arg, init)
    this.types.add(schema.SolveMathAction)
  }

  static readonly __mixins: Mixin[] = [SolveMathActionMixin, ActionMixin];
}
SolveMathActionMixin.appliesTo = schema.SolveMathAction
SolveMathActionMixin.Class = SolveMathActionImpl

export const fromPointer = createFactory<SolveMathAction>([ActionMixin, SolveMathActionMixin], { types: [schema.SolveMathAction] });
