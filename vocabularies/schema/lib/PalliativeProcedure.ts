import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalProcedureMixin } from './MedicalProcedure';
import { MedicalTherapyMixin } from './MedicalTherapy';

export interface PalliativeProcedure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalProcedure<D>, Schema.MedicalTherapy<D>, RdfResource<D> {
}

export function PalliativeProcedureMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PalliativeProcedureClass extends MedicalTherapyMixin(MedicalProcedureMixin(Resource)) implements PalliativeProcedure {
  }
  return PalliativeProcedureClass
}

class PalliativeProcedureImpl extends PalliativeProcedureMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PalliativeProcedure>) {
    super(arg, init)
    this.types.add(schema.PalliativeProcedure)
  }

  static readonly __mixins: Mixin[] = [PalliativeProcedureMixin, MedicalProcedureMixin, MedicalTherapyMixin];
}
PalliativeProcedureMixin.appliesTo = schema.PalliativeProcedure
PalliativeProcedureMixin.Class = PalliativeProcedureImpl
