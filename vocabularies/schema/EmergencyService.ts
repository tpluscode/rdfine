import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface EmergencyService extends Schema.LocalBusiness, RdfResource {
}

export default function EmergencyServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EmergencyServiceClass extends LocalBusinessMixin(Resource) implements EmergencyService {
  }
  return EmergencyServiceClass
}

class EmergencyServiceImpl extends EmergencyServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EmergencyService>) {
    super(arg, init)
    this.types.add(schema.EmergencyService)
  }
}
EmergencyServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EmergencyService)
EmergencyServiceMixin.Class = EmergencyServiceImpl
