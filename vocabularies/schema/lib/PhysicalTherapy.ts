import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalTherapyMixin } from './MedicalTherapy';

export interface PhysicalTherapy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalTherapy<D>, RdfResource<D> {
}

export function PhysicalTherapyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PhysicalTherapy> & RdfResourceCore> & Base {
  @namespace(schema)
  class PhysicalTherapyClass extends MedicalTherapyMixin(Resource) implements Partial<PhysicalTherapy> {
  }
  return PhysicalTherapyClass
}

class PhysicalTherapyImpl extends PhysicalTherapyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PhysicalTherapy>) {
    super(arg, init)
    this.types.add(schema.PhysicalTherapy)
  }

  static readonly __mixins: Mixin[] = [PhysicalTherapyMixin, MedicalTherapyMixin];
}
PhysicalTherapyMixin.appliesTo = schema.PhysicalTherapy
PhysicalTherapyMixin.Class = PhysicalTherapyImpl

export const fromPointer = createFactory<PhysicalTherapy>([MedicalTherapyMixin, PhysicalTherapyMixin], { types: [schema.PhysicalTherapy] });
