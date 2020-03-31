import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Physician>) {
    super(arg, init)
    this.types.add(schema.Physician)
  }
}
PhysicianMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Physician)
PhysicianMixin.Class = PhysicianImpl
