import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AdministrativeAreaMixin } from './AdministrativeArea';

export interface City<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AdministrativeArea<D>, RdfResource<D> {
}

export function CityMixin<Base extends Constructor>(Resource: Base): Constructor<City> & Base {
  @namespace(schema)
  class CityClass extends AdministrativeAreaMixin(Resource) implements City {
  }
  return CityClass
}

class CityImpl extends CityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<City>) {
    super(arg, init)
    this.types.add(schema.City)
  }

  static readonly __mixins: Mixin[] = [CityMixin, AdministrativeAreaMixin];
}
CityMixin.appliesTo = schema.City
CityMixin.Class = CityImpl
