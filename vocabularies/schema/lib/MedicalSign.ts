import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalSignOrSymptomMixin } from './MedicalSignOrSymptom.js';

export interface MedicalSign<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalSignOrSymptom<D>, rdfine.RdfResource<D> {
  identifyingExam: Schema.PhysicalExam | undefined;
  identifyingTest: Schema.MedicalTest<D> | undefined;
}

export function MedicalSignMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MedicalSign & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalSignClass extends MedicalSignOrSymptomMixin(Resource) {
    @rdfine.property()
    identifyingExam: Schema.PhysicalExam | undefined;
    @rdfine.property.resource()
    identifyingTest: Schema.MedicalTest | undefined;
  }
  return MedicalSignClass as any
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

export const fromPointer = createFactory<MedicalSign>([MedicalSignOrSymptomMixin, MedicalSignMixin], { types: [schema.MedicalSign] });
