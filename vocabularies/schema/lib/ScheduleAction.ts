import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlanActionMixin } from './PlanAction.js';

export interface ScheduleAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlanAction<D>, rdfine.RdfResource<D> {
}

export function ScheduleActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ScheduleAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ScheduleActionClass extends PlanActionMixin(Resource) implements Partial<ScheduleAction> {
  }
  return ScheduleActionClass
}

class ScheduleActionImpl extends ScheduleActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ScheduleAction>) {
    super(arg, init)
    this.types.add(schema.ScheduleAction)
  }

  static readonly __mixins: Mixin[] = [ScheduleActionMixin, PlanActionMixin];
}
ScheduleActionMixin.appliesTo = schema.ScheduleAction
ScheduleActionMixin.Class = ScheduleActionImpl

export const fromPointer = createFactory<ScheduleAction>([PlanActionMixin, ScheduleActionMixin], { types: [schema.ScheduleAction] });
