import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import OrganizationMixin from './Organization';

export interface Corporation extends Schema.Organization, RdfResource {
  tickerSymbol: string;
}

export default function CorporationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CorporationClass extends OrganizationMixin(Resource) implements Corporation {
    @property.literal()
    tickerSymbol!: string;
  }
  return CorporationClass
}

class CorporationImpl extends CorporationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Corporation)
  }
}
CorporationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Corporation)
CorporationMixin.Class = CorporationImpl
