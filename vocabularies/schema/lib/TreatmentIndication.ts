import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalIndicationMixin } from './MedicalIndication.js';

export interface TreatmentIndication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalIndication<D>, rdfine.RdfResource<D> {
}

export function TreatmentIndicationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TreatmentIndication> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TreatmentIndicationClass extends MedicalIndicationMixin(Resource) implements Partial<TreatmentIndication> {
  }
  return TreatmentIndicationClass
}

class TreatmentIndicationImpl extends TreatmentIndicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TreatmentIndication>) {
    super(arg, init)
    this.types.add(schema.TreatmentIndication)
  }

  static readonly __mixins: Mixin[] = [TreatmentIndicationMixin, MedicalIndicationMixin];
}
TreatmentIndicationMixin.appliesTo = schema.TreatmentIndication
TreatmentIndicationMixin.Class = TreatmentIndicationImpl

export const fromPointer = createFactory<TreatmentIndication>([MedicalIndicationMixin, TreatmentIndicationMixin], { types: [schema.TreatmentIndication] });
