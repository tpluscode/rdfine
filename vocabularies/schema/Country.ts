import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Country>) {
    super(arg)
    this.types.add(schema.Country)
    initializeProperties(this, init)
  }
}
CountryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Country)
CountryMixin.Class = CountryImpl
