import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalIndicationMixin } from './MedicalIndication';

export interface PreventionIndication<ID extends ResourceNode = ResourceNode> extends Schema.MedicalIndication<ID>, RdfResource<ID> {
}

export function PreventionIndicationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PreventionIndicationClass extends MedicalIndicationMixin(Resource) implements PreventionIndication {
  }
  return PreventionIndicationClass
}

class PreventionIndicationImpl extends PreventionIndicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PreventionIndication>) {
    super(arg, init)
    this.types.add(schema.PreventionIndication)
  }

  static readonly __mixins: Mixin[] = [PreventionIndicationMixin, MedicalIndicationMixin];
}
PreventionIndicationMixin.appliesTo = schema.PreventionIndication
PreventionIndicationMixin.Class = PreventionIndicationImpl
