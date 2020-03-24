import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';
import MedicalOrganizationMixin from './MedicalOrganization';

export interface Dentist extends Schema.LocalBusiness, Schema.MedicalOrganization, RdfResource {
}

export default function DentistMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DentistClass extends MedicalOrganizationMixin(LocalBusinessMixin(Resource)) implements Dentist {
  }
  return DentistClass
}

class DentistImpl extends DentistMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Dentist>) {
    super(arg)
    this.types.add(schema.Dentist)
    initializeProperties(this, init)
  }
}
DentistMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Dentist)
DentistMixin.Class = DentistImpl
