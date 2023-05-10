import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalProcedureMixin } from './MedicalProcedure.js';

export interface TherapeuticProcedure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalProcedure<D>, rdfine.RdfResource<D> {
  adverseOutcome: Schema.MedicalEntity<D> | undefined;
  doseSchedule: Schema.DoseSchedule<D> | undefined;
  drug: Schema.Drug<D> | undefined;
}

export function TherapeuticProcedureMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TherapeuticProcedure> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TherapeuticProcedureClass extends MedicalProcedureMixin(Resource) implements Partial<TherapeuticProcedure> {
    @rdfine.property.resource()
    adverseOutcome: Schema.MedicalEntity | undefined;
    @rdfine.property.resource()
    doseSchedule: Schema.DoseSchedule | undefined;
    @rdfine.property.resource()
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

export const fromPointer = createFactory<TherapeuticProcedure>([MedicalProcedureMixin, TherapeuticProcedureMixin], { types: [schema.TherapeuticProcedure] });
