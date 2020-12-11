import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EducationalOrganizationMixin } from './EducationalOrganization';

export interface School<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, RdfResource<D> {
}

export function SchoolMixin<Base extends Constructor>(Resource: Base): Constructor<School> & Base {
  @namespace(schema)
  class SchoolClass extends EducationalOrganizationMixin(Resource) implements Partial<School> {
  }
  return SchoolClass
}

class SchoolImpl extends SchoolMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<School>) {
    super(arg, init)
    this.types.add(schema.School)
  }

  static readonly __mixins: Mixin[] = [SchoolMixin, EducationalOrganizationMixin];
}
SchoolMixin.appliesTo = schema.School
SchoolMixin.Class = SchoolImpl
