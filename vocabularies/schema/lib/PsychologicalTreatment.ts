import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TherapeuticProcedureMixin } from './TherapeuticProcedure';

export interface PsychologicalTreatment<ID extends ResourceNode = ResourceNode> extends Schema.TherapeuticProcedure<ID>, RdfResource<ID> {
}

export function PsychologicalTreatmentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PsychologicalTreatmentClass extends TherapeuticProcedureMixin(Resource) implements PsychologicalTreatment {
  }
  return PsychologicalTreatmentClass
}

class PsychologicalTreatmentImpl extends PsychologicalTreatmentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PsychologicalTreatment>) {
    super(arg, init)
    this.types.add(schema.PsychologicalTreatment)
  }

  static readonly __mixins: Mixin[] = [PsychologicalTreatmentMixin, TherapeuticProcedureMixin];
}
PsychologicalTreatmentMixin.appliesTo = schema.PsychologicalTreatment
PsychologicalTreatmentMixin.Class = PsychologicalTreatmentImpl
