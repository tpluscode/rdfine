import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EducationalOrganizationMixin } from './EducationalOrganization';

export interface MiddleSchool<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EducationalOrganization<D>, RdfResource<D> {
}

export function MiddleSchoolMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MiddleSchool> & RdfResourceCore> & Base {
  @namespace(schema)
  class MiddleSchoolClass extends EducationalOrganizationMixin(Resource) implements Partial<MiddleSchool> {
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

export const fromPointer = createFactory<MiddleSchool>([EducationalOrganizationMixin, MiddleSchoolMixin], { types: [schema.MiddleSchool] });
