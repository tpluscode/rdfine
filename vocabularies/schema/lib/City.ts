import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AdministrativeAreaMixin } from './AdministrativeArea.js';

export interface City<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AdministrativeArea<D>, rdfine.RdfResource<D> {
}

export function CityMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<City & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CityClass extends AdministrativeAreaMixin(Resource) {
  }
  return CityClass as any
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

export const fromPointer = createFactory<City>([AdministrativeAreaMixin, CityMixin], { types: [schema.City] });
