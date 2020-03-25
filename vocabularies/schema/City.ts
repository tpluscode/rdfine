import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AdministrativeAreaMixin from './AdministrativeArea';

export interface City extends Schema.AdministrativeArea, RdfResource {
}

export default function CityMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CityClass extends AdministrativeAreaMixin(Resource) implements City {
  }
  return CityClass
}

class CityImpl extends CityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<City>) {
    super(arg)
    this.types.add(schema.City)
    initializeProperties<City>(this, init)
  }
}
CityMixin.shouldApply = (r: RdfResource) => r.types.has(schema.City)
CityMixin.Class = CityImpl
