import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EducationalOrganizationMixin from './EducationalOrganization';

export interface School extends Schema.EducationalOrganization, RdfResource {
}

export default function SchoolMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SchoolClass extends EducationalOrganizationMixin(Resource) implements School {
  }
  return SchoolClass
}

class SchoolImpl extends SchoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<School>) {
    super(arg)
    this.types.add(schema.School)
    initializeProperties<School>(this, init)
  }
}
SchoolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.School)
SchoolMixin.Class = SchoolImpl
