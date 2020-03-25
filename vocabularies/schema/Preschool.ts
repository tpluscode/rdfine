import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EducationalOrganizationMixin from './EducationalOrganization';

export interface Preschool extends Schema.EducationalOrganization, RdfResource {
}

export default function PreschoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PreschoolClass extends EducationalOrganizationMixin(Resource) implements Preschool {
  }
  return PreschoolClass
}

class PreschoolImpl extends PreschoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Preschool>) {
    super(arg)
    this.types.add(schema.Preschool)
    initializeProperties<Preschool>(this, init)
  }
}
PreschoolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Preschool)
PreschoolMixin.Class = PreschoolImpl
