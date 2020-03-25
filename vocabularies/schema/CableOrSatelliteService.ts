import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ServiceMixin from './Service';

export interface CableOrSatelliteService extends Schema.Service, RdfResource {
}

export default function CableOrSatelliteServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CableOrSatelliteServiceClass extends ServiceMixin(Resource) implements CableOrSatelliteService {
  }
  return CableOrSatelliteServiceClass
}

class CableOrSatelliteServiceImpl extends CableOrSatelliteServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<CableOrSatelliteService>) {
    super(arg)
    this.types.add(schema.CableOrSatelliteService)
    initializeProperties<CableOrSatelliteService>(this, init)
  }
}
CableOrSatelliteServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CableOrSatelliteService)
CableOrSatelliteServiceMixin.Class = CableOrSatelliteServiceImpl
