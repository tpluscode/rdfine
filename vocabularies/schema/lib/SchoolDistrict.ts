import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AdministrativeAreaMixin } from './AdministrativeArea.js';

export interface SchoolDistrict<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AdministrativeArea<D>, rdfine.RdfResource<D> {
}

export function SchoolDistrictMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SchoolDistrict & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SchoolDistrictClass extends AdministrativeAreaMixin(Resource) {
  }
  return SchoolDistrictClass as any
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
