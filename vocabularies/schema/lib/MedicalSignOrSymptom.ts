import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalConditionMixin } from './MedicalCondition.js';

export interface MedicalSignOrSymptom<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalCondition<D>, RdfResource<D> {
  possibleTreatment: Schema.MedicalTherapy<D> | undefined;
}

export function MedicalSignOrSymptomMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalSignOrSymptom> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalSignOrSymptomClass extends MedicalConditionMixin(Resource) implements Partial<MedicalSignOrSymptom> {
    @property.resource()
    possibleTreatment: Schema.MedicalTherapy | undefined;
  }
  return MedicalSignOrSymptomClass
}

class MedicalSignOrSymptomImpl extends MedicalSignOrSymptomMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalSignOrSymptom>) {
    super(arg, init)
    this.types.add(schema.MedicalSignOrSymptom)
  }

  static readonly __mixins: Mixin[] = [MedicalSignOrSymptomMixin, MedicalConditionMixin];
}
MedicalSignOrSymptomMixin.appliesTo = schema.MedicalSignOrSymptom
MedicalSignOrSymptomMixin.Class = MedicalSignOrSymptomImpl

export const fromPointer = createFactory<MedicalSignOrSymptom>([MedicalConditionMixin, MedicalSignOrSymptomMixin], { types: [schema.MedicalSignOrSymptom] });
