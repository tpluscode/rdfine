import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalProcedureMixin } from './MedicalProcedure';

export interface DiagnosticProcedure<ID extends ResourceNode = ResourceNode> extends Schema.MedicalProcedure<ID>, RdfResource<ID> {
}

export function DiagnosticProcedureMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DiagnosticProcedureClass extends MedicalProcedureMixin(Resource) implements DiagnosticProcedure {
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
