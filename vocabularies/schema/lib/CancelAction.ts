import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlanActionMixin } from './PlanAction.js';

export interface CancelAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlanAction<D>, RdfResource<D> {
}

export function CancelActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CancelAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class CancelActionClass extends PlanActionMixin(Resource) implements Partial<CancelAction> {
  }
  return CancelActionClass
}

class CancelActionImpl extends CancelActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CancelAction>) {
    super(arg, init)
    this.types.add(schema.CancelAction)
  }

  static readonly __mixins: Mixin[] = [CancelActionMixin, PlanActionMixin];
}
CancelActionMixin.appliesTo = schema.CancelAction
CancelActionMixin.Class = CancelActionImpl

export const fromPointer = createFactory<CancelAction>([PlanActionMixin, CancelActionMixin], { types: [schema.CancelAction] });
