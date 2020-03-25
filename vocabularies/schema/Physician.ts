import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Physician>) {
    super(arg)
    this.types.add(schema.Physician)
    initializeProperties<Physician>(this, init)
  }
}
PhysicianMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Physician)
PhysicianMixin.Class = PhysicianImpl
