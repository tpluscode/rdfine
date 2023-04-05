import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AdministrativeAreaMixin } from './AdministrativeArea.js';

export interface SchoolDistrict<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AdministrativeArea<D>, RdfResource<D> {
}

export function SchoolDistrictMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SchoolDistrict> & RdfResourceCore> & Base {
  @namespace(schema)
  class SchoolDistrictClass extends AdministrativeAreaMixin(Resource) implements Partial<SchoolDistrict> {
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

export const fromPointer = createFactory<SchoolDistrict>([AdministrativeAreaMixin, SchoolDistrictMixin], { types: [schema.SchoolDistrict] });
