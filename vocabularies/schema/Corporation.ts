import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Corporation>) {
    super(arg)
    this.types.add(schema.Corporation)
    initializeProperties<Corporation>(this, init)
  }
}
CorporationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Corporation)
CorporationMixin.Class = CorporationImpl
