import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalIntangibleMixin } from './MedicalIntangible.js';

export interface DoseSchedule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalIntangible<D>, rdfine.RdfResource<D> {
  doseUnit: string | undefined;
  doseValue: number | undefined;
  doseValueTerm: Schema.QualitativeValue | undefined;
  frequency: string | undefined;
  targetPopulation: string | undefined;
}

export function DoseScheduleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DoseSchedule & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DoseScheduleClass extends MedicalIntangibleMixin(Resource) {
    @rdfine.property.literal()
    doseUnit: string | undefined;
    @rdfine.property.literal({ type: Number })
    doseValue: number | undefined;
    @rdfine.property({ path: schema.doseValue })
    doseValueTerm: Schema.QualitativeValue | undefined;
    @rdfine.property.literal()
    frequency: string | undefined;
    @rdfine.property.literal()
    targetPopulation: string | undefined;
  }
  return DoseScheduleClass as any
}

class DoseScheduleImpl extends DoseScheduleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DoseSchedule>) {
    super(arg, init)
    this.types.add(schema.DoseSchedule)
  }

  static readonly __mixins: Mixin[] = [DoseScheduleMixin, MedicalIntangibleMixin];
}
DoseScheduleMixin.appliesTo = schema.DoseSchedule
DoseScheduleMixin.Class = DoseScheduleImpl

export const fromPointer = createFactory<DoseSchedule>([MedicalIntangibleMixin, DoseScheduleMixin], { types: [schema.DoseSchedule] });
