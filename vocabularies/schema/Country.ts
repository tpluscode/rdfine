import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Country>) {
    super(arg, init)
    this.types.add(schema.Country)
  }
}
CountryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Country)
CountryMixin.Class = CountryImpl
