import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LodgingBusinessMixin from './LodgingBusiness';

export interface Motel extends Schema.LodgingBusiness, RdfResource {
}

export default function MotelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MotelClass extends LodgingBusinessMixin(Resource) implements Motel {
  }
  return MotelClass
}

class MotelImpl extends MotelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Motel>) {
    super(arg)
    this.types.add(schema.Motel)
    initializeProperties<Motel>(this, init)
  }
}
MotelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Motel)
MotelMixin.Class = MotelImpl
