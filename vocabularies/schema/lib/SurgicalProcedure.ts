import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalProcedureMixin } from './MedicalProcedure.js';

export interface SurgicalProcedure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalProcedure<D>, rdfine.RdfResource<D> {
}

export function SurgicalProcedureMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SurgicalProcedure> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SurgicalProcedureClass extends MedicalProcedureMixin(Resource) implements Partial<SurgicalProcedure> {
  }
  return SurgicalProcedureClass
}

class SurgicalProcedureImpl extends SurgicalProcedureMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SurgicalProcedure>) {
    super(arg, init)
    this.types.add(schema.SurgicalProcedure)
  }

  static readonly __mixins: Mixin[] = [SurgicalProcedureMixin, MedicalProcedureMixin];
}
SurgicalProcedureMixin.appliesTo = schema.SurgicalProcedure
SurgicalProcedureMixin.Class = SurgicalProcedureImpl

export const fromPointer = createFactory<SurgicalProcedure>([MedicalProcedureMixin, SurgicalProcedureMixin], { types: [schema.SurgicalProcedure] });
