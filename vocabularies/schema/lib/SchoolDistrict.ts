import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AdministrativeAreaMixin } from './AdministrativeArea';

export interface SchoolDistrict<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AdministrativeArea<D>, RdfResource<D> {
}

export function SchoolDistrictMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SchoolDistrictClass extends AdministrativeAreaMixin(Resource) implements SchoolDistrict {
  }
  return SchoolDistrictClass
}

class SchoolDistrictImpl extends SchoolDistrictMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SchoolDistrict>) {
    super(arg, init)
    this.types.add(schema.SchoolDistrict)
  }

  static readonly __mixins: Mixin[] = [SchoolDistrictMixin, AdministrativeAreaMixin];
}
SchoolDistrictMixin.appliesTo = schema.SchoolDistrict
SchoolDistrictMixin.Class = SchoolDistrictImpl
