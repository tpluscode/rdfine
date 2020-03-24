import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface TouristInformationCenter extends Schema.LocalBusiness, RdfResource {
}

export default function TouristInformationCenterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TouristInformationCenterClass extends LocalBusinessMixin(Resource) implements TouristInformationCenter {
  }
  return TouristInformationCenterClass
}

class TouristInformationCenterImpl extends TouristInformationCenterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TouristInformationCenter>) {
    super(arg)
    this.types.add(schema.TouristInformationCenter)
    initializeProperties(this, init)
  }
}
TouristInformationCenterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TouristInformationCenter)
TouristInformationCenterMixin.Class = TouristInformationCenterImpl
