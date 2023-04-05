import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EducationalOrganizationMixin } from './EducationalOrganization.js';

export interface HighSchool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, RdfResource<D> {
}

export function HighSchoolMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HighSchool> & RdfResourceCore> & Base {
  @namespace(schema)
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
