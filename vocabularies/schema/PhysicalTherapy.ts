import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MedicalTherapyMixin } from './MedicalTherapy';

export interface PhysicalTherapy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalTherapy<D>, RdfResource<D> {
}

export function PhysicalTherapyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PhysicalTherapyClass extends MedicalTherapyMixin(Resource) implements PhysicalTherapy {
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
