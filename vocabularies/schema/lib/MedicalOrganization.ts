import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface MedicalOrganization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
  healthPlanNetworkId: string | undefined;
  isAcceptingNewPatients: boolean | undefined;
  medicalSpecialty: Schema.MedicalSpecialty | undefined;
}

export function MedicalOrganizationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalOrganization> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalOrganizationClass extends OrganizationMixin(Resource) implements Partial<MedicalOrganization> {
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

export const fromPointer = createFactory<MedicalOrganization>([OrganizationMixin, MedicalOrganizationMixin], { types: [schema.MedicalOrganization] });
