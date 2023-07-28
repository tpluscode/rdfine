import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EducationalOrganizationMixin } from './EducationalOrganization.js';

export interface CollegeOrUniversity<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, rdfine.RdfResource<D> {
}

export function CollegeOrUniversityMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CollegeOrUniversity & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CollegeOrUniversityClass extends EducationalOrganizationMixin(Resource) {
  }
  return CollegeOrUniversityClass as any
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

export const fromPointer = createFactory<CollegeOrUniversity>([EducationalOrganizationMixin, CollegeOrUniversityMixin], { types: [schema.CollegeOrUniversity] });
