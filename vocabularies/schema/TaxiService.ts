import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ServiceMixin } from './Service';

export interface TaxiService extends Schema.Service, RdfResource {
}

export function TaxiServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TaxiServiceClass extends ServiceMixin(Resource) implements TaxiService {
  }
  return TaxiServiceClass
}

class TaxiServiceImpl extends TaxiServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TaxiService>) {
    super(arg, init)
    this.types.add(schema.TaxiService)
  }
}
TaxiServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TaxiService)
TaxiServiceMixin.Class = TaxiServiceImpl
