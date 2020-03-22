import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import MedicalOrganizationMixin from './MedicalOrganization';

export interface Physician extends Schema.MedicalOrganization, RdfResource {
}

export default function PhysicianMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PhysicianClass extends MedicalOrganizationMixin(Resource) implements Physician {
  }
  return PhysicianClass
}

class PhysicianImpl extends PhysicianMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Physician)
  }
}
PhysicianMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Physician)
PhysicianMixin.Class = PhysicianImpl
