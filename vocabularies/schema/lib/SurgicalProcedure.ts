import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalProcedureMixin } from './MedicalProcedure';

export interface SurgicalProcedure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalProcedure<D>, RdfResource<D> {
}

export function SurgicalProcedureMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SurgicalProcedureClass extends MedicalProcedureMixin(Resource) implements SurgicalProcedure {
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
