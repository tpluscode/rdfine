import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalProcedureMixin } from './MedicalProcedure.js';

export interface DiagnosticProcedure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalProcedure<D>, rdfine.RdfResource<D> {
}

export function DiagnosticProcedureMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<DiagnosticProcedure> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DiagnosticProcedureClass extends MedicalProcedureMixin(Resource) implements Partial<DiagnosticProcedure> {
  }
  return DiagnosticProcedureClass
}

class DiagnosticProcedureImpl extends DiagnosticProcedureMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DiagnosticProcedure>) {
    super(arg, init)
    this.types.add(schema.DiagnosticProcedure)
  }

  static readonly __mixins: Mixin[] = [DiagnosticProcedureMixin, MedicalProcedureMixin];
}
DiagnosticProcedureMixin.appliesTo = schema.DiagnosticProcedure
DiagnosticProcedureMixin.Class = DiagnosticProcedureImpl

export const fromPointer = createFactory<DiagnosticProcedure>([MedicalProcedureMixin, DiagnosticProcedureMixin], { types: [schema.DiagnosticProcedure] });
