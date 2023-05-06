import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlanActionMixin } from './PlanAction.js';

export interface ReserveAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlanAction<D>, RdfResource<D> {
}

export function ReserveActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ReserveAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ReserveActionClass extends PlanActionMixin(Resource) implements Partial<ReserveAction> {
  }
  return ReserveActionClass
}

class ReserveActionImpl extends ReserveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReserveAction>) {
    super(arg, init)
    this.types.add(schema.ReserveAction)
  }

  static readonly __mixins: Mixin[] = [ReserveActionMixin, PlanActionMixin];
}
ReserveActionMixin.appliesTo = schema.ReserveAction
ReserveActionMixin.Class = ReserveActionImpl

export const fromPointer = createFactory<ReserveAction>([PlanActionMixin, ReserveActionMixin], { types: [schema.ReserveAction] });
