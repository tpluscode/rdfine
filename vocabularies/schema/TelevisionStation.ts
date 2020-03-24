import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface TelevisionStation extends Schema.LocalBusiness, RdfResource {
}

export default function TelevisionStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TelevisionStationClass extends LocalBusinessMixin(Resource) implements TelevisionStation {
  }
  return TelevisionStationClass
}

class TelevisionStationImpl extends TelevisionStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TelevisionStation>) {
    super(arg)
    this.types.add(schema.TelevisionStation)
    initializeProperties(this, init)
  }
}
TelevisionStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TelevisionStation)
TelevisionStationMixin.Class = TelevisionStationImpl
