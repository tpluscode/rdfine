import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalConditionMixin } from './MedicalCondition';

export interface MedicalSignOrSymptom<ID extends ResourceNode = ResourceNode> extends Schema.MedicalCondition<ID>, RdfResource<ID> {
  possibleTreatment: Schema.MedicalTherapy<SiblingNode<ID>> | undefined;
}

export function MedicalSignOrSymptomMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalSignOrSymptomClass extends MedicalConditionMixin(Resource) implements MedicalSignOrSymptom {
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
