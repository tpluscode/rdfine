import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import AdministrativeAreaMixin from './AdministrativeArea';

export interface Country extends Schema.AdministrativeArea, RdfResource {
}

export default function CountryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CountryClass extends AdministrativeAreaMixin(Resource) implements Country {
  }
  return CountryClass
}

class CountryImpl extends CountryMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Country)
  }
}
CountryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Country)
CountryMixin.Class = CountryImpl
