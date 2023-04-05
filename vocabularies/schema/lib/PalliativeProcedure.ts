import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalProcedureMixin } from './MedicalProcedure.js';
import { MedicalTherapyMixin } from './MedicalTherapy.js';

export interface PalliativeProcedure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalProcedure<D>, Schema.MedicalTherapy<D>, RdfResource<D> {
}

export function PalliativeProcedureMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PalliativeProcedure> & RdfResourceCore> & Base {
  @namespace(schema)
  class PalliativeProcedureClass extends MedicalTherapyMixin(MedicalProcedureMixin(Resource)) implements Partial<PalliativeProcedure> {
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

export const fromPointer = createFactory<PalliativeProcedure>([MedicalTherapyMixin, MedicalProcedureMixin, PalliativeProcedureMixin], { types: [schema.PalliativeProcedure] });
