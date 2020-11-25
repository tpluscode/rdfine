import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalTherapyMixin } from './MedicalTherapy';

export interface RadiationTherapy<ID extends ResourceNode = ResourceNode> extends Schema.MedicalTherapy<ID>, RdfResource<ID> {
}

export function RadiationTherapyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RadiationTherapyClass extends MedicalTherapyMixin(Resource) implements RadiationTherapy {
  }
  return RadiationTherapyClass
}

class RadiationTherapyImpl extends RadiationTherapyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadiationTherapy>) {
    super(arg, init)
    this.types.add(schema.RadiationTherapy)
  }

  static readonly __mixins: Mixin[] = [RadiationTherapyMixin, MedicalTherapyMixin];
}
RadiationTherapyMixin.appliesTo = schema.RadiationTherapy
RadiationTherapyMixin.Class = RadiationTherapyImpl
