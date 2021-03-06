import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalProcedureMixin } from './MedicalProcedure';

export interface DiagnosticProcedure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalProcedure<D>, RdfResource<D> {
}

export function DiagnosticProcedureMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DiagnosticProcedure> & RdfResourceCore> & Base {
  @namespace(schema)
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
