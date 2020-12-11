import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EducationalOrganizationMixin } from './EducationalOrganization';

export interface HighSchool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, RdfResource<D> {
}

export function HighSchoolMixin<Base extends Constructor>(Resource: Base): Constructor<HighSchool> & Base {
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
