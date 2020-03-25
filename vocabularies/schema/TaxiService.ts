import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ServiceMixin from './Service';

export interface TaxiService extends Schema.Service, RdfResource {
}

export default function TaxiServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TaxiServiceClass extends ServiceMixin(Resource) implements TaxiService {
  }
  return TaxiServiceClass
}

class TaxiServiceImpl extends TaxiServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TaxiService>) {
    super(arg)
    this.types.add(schema.TaxiService)
    initializeProperties<TaxiService>(this, init)
  }
}
TaxiServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TaxiService)
TaxiServiceMixin.Class = TaxiServiceImpl
