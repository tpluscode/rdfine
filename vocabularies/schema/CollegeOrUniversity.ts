import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EducationalOrganizationMixin from './EducationalOrganization';

export interface CollegeOrUniversity extends Schema.EducationalOrganization, RdfResource {
}

export default function CollegeOrUniversityMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CollegeOrUniversityClass extends EducationalOrganizationMixin(Resource) implements CollegeOrUniversity {
  }
  return CollegeOrUniversityClass
}

class CollegeOrUniversityImpl extends CollegeOrUniversityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<CollegeOrUniversity>) {
    super(arg)
    this.types.add(schema.CollegeOrUniversity)
    initializeProperties(this, init)
  }
}
CollegeOrUniversityMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CollegeOrUniversity)
CollegeOrUniversityMixin.Class = CollegeOrUniversityImpl
