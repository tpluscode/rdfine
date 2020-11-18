import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalIntangibleMixin } from './MedicalIntangible';

export interface DrugLegalStatus<ID extends ResourceNode = ResourceNode> extends Schema.MedicalIntangible<ID>, RdfResource<ID> {
  applicableLocation: Schema.AdministrativeArea<SiblingNode<ID>> | undefined;
}

export function DrugLegalStatusMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DrugLegalStatusClass extends MedicalIntangibleMixin(Resource) implements DrugLegalStatus {
    @property.resource()
    applicableLocation: Schema.AdministrativeArea | undefined;
  }
  return DrugLegalStatusClass
}

class DrugLegalStatusImpl extends DrugLegalStatusMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DrugLegalStatus>) {
    super(arg, init)
    this.types.add(schema.DrugLegalStatus)
  }

  static readonly __mixins: Mixin[] = [DrugLegalStatusMixin, MedicalIntangibleMixin];
}
DrugLegalStatusMixin.appliesTo = schema.DrugLegalStatus
DrugLegalStatusMixin.Class = DrugLegalStatusImpl
