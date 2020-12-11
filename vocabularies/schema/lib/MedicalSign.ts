import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalSignOrSymptomMixin } from './MedicalSignOrSymptom';

export interface MedicalSign<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalSignOrSymptom<D>, RdfResource<D> {
  identifyingExam: Schema.PhysicalExam | undefined;
  identifyingTest: Schema.MedicalTest<D> | undefined;
}

export function MedicalSignMixin<Base extends Constructor>(Resource: Base): Constructor<MedicalSign> & Base {
  @namespace(schema)
  class MedicalSignClass extends MedicalSignOrSymptomMixin(Resource) implements Partial<MedicalSign> {
    @property()
    identifyingExam: Schema.PhysicalExam | undefined;
    @property.resource()
    identifyingTest: Schema.MedicalTest | undefined;
  }
  return MedicalSignClass
}

class MedicalSignImpl extends MedicalSignMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalSign>) {
    super(arg, init)
    this.types.add(schema.MedicalSign)
  }

  static readonly __mixins: Mixin[] = [MedicalSignMixin, MedicalSignOrSymptomMixin];
}
MedicalSignMixin.appliesTo = schema.MedicalSign
MedicalSignMixin.Class = MedicalSignImpl
