import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EducationalOrganizationMixin } from './EducationalOrganization';

export interface CollegeOrUniversity<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, RdfResource<D> {
}

export function CollegeOrUniversityMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CollegeOrUniversityClass extends EducationalOrganizationMixin(Resource) implements CollegeOrUniversity {
  }
  return CollegeOrUniversityClass
}

class CollegeOrUniversityImpl extends CollegeOrUniversityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CollegeOrUniversity>) {
    super(arg, init)
    this.types.add(schema.CollegeOrUniversity)
  }

  static readonly __mixins: Mixin[] = [CollegeOrUniversityMixin, EducationalOrganizationMixin];
}
CollegeOrUniversityMixin.appliesTo = schema.CollegeOrUniversity
CollegeOrUniversityMixin.Class = CollegeOrUniversityImpl
