import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TherapeuticProcedureMixin } from './TherapeuticProcedure.js';

export interface PsychologicalTreatment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TherapeuticProcedure<D>, rdfine.RdfResource<D> {
}

export function PsychologicalTreatmentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PsychologicalTreatment> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PsychologicalTreatmentClass extends TherapeuticProcedureMixin(Resource) implements Partial<PsychologicalTreatment> {
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

export const fromPointer = createFactory<PsychologicalTreatment>([TherapeuticProcedureMixin, PsychologicalTreatmentMixin], { types: [schema.PsychologicalTreatment] });
