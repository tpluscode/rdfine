import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizationMixin } from './Organization';

export interface MedicalOrganization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
  healthPlanNetworkId: string | undefined;
  isAcceptingNewPatients: boolean | undefined;
  medicalSpecialty: Schema.MedicalSpecialty | undefined;
}

export function MedicalOrganizationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalOrganizationClass extends OrganizationMixin(Resource) implements MedicalOrganization {
    @property.literal()
    healthPlanNetworkId: string | undefined;
    @property.literal({ type: Boolean })
    isAcceptingNewPatients: boolean | undefined;
    @property()
    medicalSpecialty: Schema.MedicalSpecialty | undefined;
  }
  return MedicalOrganizationClass
}

class MedicalOrganizationImpl extends MedicalOrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalOrganization>) {
    super(arg, init)
    this.types.add(schema.MedicalOrganization)
  }

  static readonly __mixins: Mixin[] = [MedicalOrganizationMixin, OrganizationMixin];
}
MedicalOrganizationMixin.appliesTo = schema.MedicalOrganization
MedicalOrganizationMixin.Class = MedicalOrganizationImpl
