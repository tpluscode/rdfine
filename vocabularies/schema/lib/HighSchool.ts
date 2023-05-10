import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EducationalOrganizationMixin } from './EducationalOrganization.js';

export interface HighSchool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, rdfine.RdfResource<D> {
}

export function HighSchoolMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HighSchool> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HighSchoolClass extends EducationalOrganizationMixin(Resource) implements Partial<HighSchool> {
  }
  return HighSchoolClass
}

class HighSchoolImpl extends HighSchoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HighSchool>) {
    super(arg, init)
    this.types.add(schema.HighSchool)
  }

  static readonly __mixins: Mixin[] = [HighSchoolMixin, EducationalOrganizationMixin];
}
HighSchoolMixin.appliesTo = schema.HighSchool
HighSchoolMixin.Class = HighSchoolImpl

export const fromPointer = createFactory<HighSchool>([EducationalOrganizationMixin, HighSchoolMixin], { types: [schema.HighSchool] });
