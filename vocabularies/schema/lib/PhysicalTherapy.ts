import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalTherapyMixin } from './MedicalTherapy';

export interface PhysicalTherapy<ID extends ResourceNode = ResourceNode> extends Schema.MedicalTherapy<ID>, RdfResource<ID> {
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
