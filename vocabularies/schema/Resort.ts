import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LodgingBusinessMixin from './LodgingBusiness';

export interface Resort extends Schema.LodgingBusiness, RdfResource {
}

export default function ResortMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ResortClass extends LodgingBusinessMixin(Resource) implements Resort {
  }
  return ResortClass
}

class ResortImpl extends ResortMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Resort>) {
    super(arg)
    this.types.add(schema.Resort)
    initializeProperties<Resort>(this, init)
  }
}
ResortMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Resort)
ResortMixin.Class = ResortImpl
