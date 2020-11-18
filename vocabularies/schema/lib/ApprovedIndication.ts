import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalIndicationMixin } from './MedicalIndication';

export interface ApprovedIndication<ID extends ResourceNode = ResourceNode> extends Schema.MedicalIndication<ID>, RdfResource<ID> {
}

export function ApprovedIndicationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ApprovedIndicationClass extends MedicalIndicationMixin(Resource) implements ApprovedIndication {
  }
  return ApprovedIndicationClass
}

class ApprovedIndicationImpl extends ApprovedIndicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ApprovedIndication>) {
    super(arg, init)
    this.types.add(schema.ApprovedIndication)
  }

  static readonly __mixins: Mixin[] = [ApprovedIndicationMixin, MedicalIndicationMixin];
}
ApprovedIndicationMixin.appliesTo = schema.ApprovedIndication
ApprovedIndicationMixin.Class = ApprovedIndicationImpl
