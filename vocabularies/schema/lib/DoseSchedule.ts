import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalIntangibleMixin } from './MedicalIntangible';

export interface DoseSchedule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalIntangible<D>, RdfResource<D> {
  doseUnit: string | undefined;
  doseValue: number | undefined;
  doseValueTerm: Schema.QualitativeValue | undefined;
  frequency: string | undefined;
  targetPopulation: string | undefined;
}

export function DoseScheduleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DoseScheduleClass extends MedicalIntangibleMixin(Resource) implements DoseSchedule {
    @property.literal()
    doseUnit: string | undefined;
    @property.literal({ type: Number })
    doseValue: number | undefined;
    @property({ path: schema.doseValue })
    doseValueTerm: Schema.QualitativeValue | undefined;
    @property.literal()
    frequency: string | undefined;
    @property.literal()
    targetPopulation: string | undefined;
  }
  return DoseScheduleClass
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
