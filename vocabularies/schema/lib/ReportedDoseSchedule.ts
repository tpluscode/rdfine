import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { DoseScheduleMixin } from './DoseSchedule.js';

export interface ReportedDoseSchedule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DoseSchedule<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    ReportedDoseSchedule: Factory<Schema.ReportedDoseSchedule>;
  }
}

export function ReportedDoseScheduleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ReportedDoseSchedule & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ReportedDoseScheduleClass extends DoseScheduleMixin(Resource) {
  }
  return ReportedDoseScheduleClass as any
}
ReportedDoseScheduleMixin.appliesTo = schema.ReportedDoseSchedule
ReportedDoseScheduleMixin.createFactory = (env: RdfineEnvironment) => createFactory<ReportedDoseSchedule>([DoseScheduleMixin, ReportedDoseScheduleMixin], { types: [schema.ReportedDoseSchedule] }, env)
