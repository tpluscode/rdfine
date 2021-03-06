import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface SolveMathAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, RdfResource<D> {
  eduQuestionType: string | undefined;
}

export function SolveMathActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SolveMathAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class SolveMathActionClass extends ActionMixin(Resource) implements Partial<SolveMathAction> {
    @property.literal()
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
