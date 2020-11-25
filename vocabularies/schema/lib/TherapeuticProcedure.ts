import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalProcedureMixin } from './MedicalProcedure';

export interface TherapeuticProcedure<ID extends ResourceNode = ResourceNode> extends Schema.MedicalProcedure<ID>, RdfResource<ID> {
  adverseOutcome: Schema.MedicalEntity<SiblingNode<ID>> | undefined;
  doseSchedule: Schema.DoseSchedule<SiblingNode<ID>> | undefined;
  drug: Schema.Drug<SiblingNode<ID>> | undefined;
}

export function TherapeuticProcedureMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TherapeuticProcedureClass extends MedicalProcedureMixin(Resource) implements TherapeuticProcedure {
    @property.resource()
    adverseOutcome: Schema.MedicalEntity | undefined;
    @property.resource()
    doseSchedule: Schema.DoseSchedule | undefined;
    @property.resource()
    drug: Schema.Drug | undefined;
  }
  return TherapeuticProcedureClass
}

class TherapeuticProcedureImpl extends TherapeuticProcedureMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TherapeuticProcedure>) {
    super(arg, init)
    this.types.add(schema.TherapeuticProcedure)
  }

  static readonly __mixins: Mixin[] = [TherapeuticProcedureMixin, MedicalProcedureMixin];
}
TherapeuticProcedureMixin.appliesTo = schema.TherapeuticProcedure
TherapeuticProcedureMixin.Class = TherapeuticProcedureImpl
