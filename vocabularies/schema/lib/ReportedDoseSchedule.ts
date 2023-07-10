import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { DoseScheduleMixin } from './DoseSchedule.js';

export interface ReportedDoseSchedule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DoseSchedule<D>, rdfine.RdfResource<D> {
}

export function ReportedDoseScheduleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ReportedDoseSchedule & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ReportedDoseScheduleClass extends DoseScheduleMixin(Resource) {
  }
  return ReportedDoseScheduleClass as any
}

class ReportedDoseScheduleImpl extends ReportedDoseScheduleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReportedDoseSchedule>) {
    super(arg, init)
    this.types.add(schema.ReportedDoseSchedule)
  }

  static readonly __mixins: Mixin[] = [ReportedDoseScheduleMixin, DoseScheduleMixin];
}
ReportedDoseScheduleMixin.appliesTo = schema.ReportedDoseSchedule
ReportedDoseScheduleMixin.Class = ReportedDoseScheduleImpl

export const fromPointer = createFactory<ReportedDoseSchedule>([DoseScheduleMixin, ReportedDoseScheduleMixin], { types: [schema.ReportedDoseSchedule] });
