import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface AchieveAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, RdfResource<D> {
}

export function AchieveActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AchieveAction> & RdfResourceCore> & Base {
  @namespace(schema)
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
