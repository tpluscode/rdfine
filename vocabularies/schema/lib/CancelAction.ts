import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlanActionMixin } from './PlanAction.js';

export interface CancelAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlanAction<D>, rdfine.RdfResource<D> {
}

export function CancelActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CancelAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CancelActionClass extends PlanActionMixin(Resource) {
  }
  return CancelActionClass as any
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
