import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CableOrSatelliteService)
  }
}
CableOrSatelliteServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CableOrSatelliteService)
CableOrSatelliteServiceMixin.Class = CableOrSatelliteServiceImpl
