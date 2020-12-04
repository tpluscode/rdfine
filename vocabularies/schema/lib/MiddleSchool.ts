import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EducationalOrganizationMixin } from './EducationalOrganization';

export interface MiddleSchool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, RdfResource<D> {
}

export function MiddleSchoolMixin<Base extends Constructor>(Resource: Base): Constructor<MiddleSchool> & Base {
  @namespace(schema)
  class MiddleSchoolClass extends EducationalOrganizationMixin(Resource) implements MiddleSchool {
  }
  return MiddleSchoolClass
}

class MiddleSchoolImpl extends MiddleSchoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MiddleSchool>) {
    super(arg, init)
    this.types.add(schema.MiddleSchool)
  }

  static readonly __mixins: Mixin[] = [MiddleSchoolMixin, EducationalOrganizationMixin];
}
MiddleSchoolMixin.appliesTo = schema.MiddleSchool
MiddleSchoolMixin.Class = MiddleSchoolImpl
