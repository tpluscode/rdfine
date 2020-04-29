import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ServiceMixin } from './Service';

export interface CableOrSatelliteService extends Schema.Service, RdfResource {
}

export function CableOrSatelliteServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CableOrSatelliteServiceClass extends ServiceMixin(Resource) implements CableOrSatelliteService {
  }
  return CableOrSatelliteServiceClass
}

class CableOrSatelliteServiceImpl extends CableOrSatelliteServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CableOrSatelliteService>) {
    super(arg, init)
    this.types.add(schema.CableOrSatelliteService)
  }
}
CableOrSatelliteServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CableOrSatelliteService)
CableOrSatelliteServiceMixin.Class = CableOrSatelliteServiceImpl
