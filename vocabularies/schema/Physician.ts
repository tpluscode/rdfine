import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MedicalOrganizationMixin } from './MedicalOrganization';

export interface Physician extends Schema.MedicalOrganization, RdfResource {
}

export function PhysicianMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [PhysicianMixin, MedicalOrganizationMixin];
}
PhysicianMixin.appliesTo = schema.Physician
PhysicianMixin.Class = PhysicianImpl
