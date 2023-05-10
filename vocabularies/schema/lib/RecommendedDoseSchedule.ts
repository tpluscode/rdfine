import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { DoseScheduleMixin } from './DoseSchedule.js';

export interface RecommendedDoseSchedule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DoseSchedule<D>, rdfine.RdfResource<D> {
}

export function RecommendedDoseScheduleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<RecommendedDoseSchedule> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class RecommendedDoseScheduleClass extends DoseScheduleMixin(Resource) implements Partial<RecommendedDoseSchedule> {
  }
  return RecommendedDoseScheduleClass
}

class RecommendedDoseScheduleImpl extends RecommendedDoseScheduleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecommendedDoseSchedule>) {
    super(arg, init)
    this.types.add(schema.RecommendedDoseSchedule)
  }

  static readonly __mixins: Mixin[] = [RecommendedDoseScheduleMixin, DoseScheduleMixin];
}
RecommendedDoseScheduleMixin.appliesTo = schema.RecommendedDoseSchedule
RecommendedDoseScheduleMixin.Class = RecommendedDoseScheduleImpl

export const fromPointer = createFactory<RecommendedDoseSchedule>([DoseScheduleMixin, RecommendedDoseScheduleMixin], { types: [schema.RecommendedDoseSchedule] });
