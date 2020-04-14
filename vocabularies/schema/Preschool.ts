import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Preschool>) {
    super(arg, init)
    this.types.add(schema.Preschool)
  }
}
PreschoolMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Preschool)
PreschoolMixin.Class = PreschoolImpl
