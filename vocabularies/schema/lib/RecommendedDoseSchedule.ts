import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { DoseScheduleMixin } from './DoseSchedule.js';

export interface RecommendedDoseSchedule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DoseSchedule<D>, RdfResource<D> {
}

export function RecommendedDoseScheduleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RecommendedDoseSchedule> & RdfResourceCore> & Base {
  @namespace(schema)
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
