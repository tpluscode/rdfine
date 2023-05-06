import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalSignOrSymptomMixin } from './MedicalSignOrSymptom.js';

export interface MedicalSymptom<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalSignOrSymptom<D>, RdfResource<D> {
}

export function MedicalSymptomMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalSymptom> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalSymptomClass extends MedicalSignOrSymptomMixin(Resource) implements Partial<MedicalSymptom> {
  }
  return MedicalSymptomClass
}

class MedicalSymptomImpl extends MedicalSymptomMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalSymptom>) {
    super(arg, init)
    this.types.add(schema.MedicalSymptom)
  }

  static readonly __mixins: Mixin[] = [MedicalSymptomMixin, MedicalSignOrSymptomMixin];
}
MedicalSymptomMixin.appliesTo = schema.MedicalSymptom
MedicalSymptomMixin.Class = MedicalSymptomImpl

export const fromPointer = createFactory<MedicalSymptom>([MedicalSignOrSymptomMixin, MedicalSymptomMixin], { types: [schema.MedicalSymptom] });
