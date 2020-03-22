import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.City)
  }
}
CityMixin.shouldApply = (r: RdfResource) => r.types.has(schema.City)
CityMixin.Class = CityImpl
