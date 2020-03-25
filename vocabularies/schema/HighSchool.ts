import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EducationalOrganizationMixin from './EducationalOrganization';

export interface HighSchool extends Schema.EducationalOrganization, RdfResource {
}

export default function HighSchoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HighSchoolClass extends EducationalOrganizationMixin(Resource) implements HighSchool {
  }
  return HighSchoolClass
}

class HighSchoolImpl extends HighSchoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HighSchool>) {
    super(arg, init)
    this.types.add(schema.HighSchool)
  }
}
HighSchoolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HighSchool)
HighSchoolMixin.Class = HighSchoolImpl
