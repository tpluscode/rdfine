import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalSignOrSymptomMixin } from './MedicalSignOrSymptom';

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
