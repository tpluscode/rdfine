import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface TouristInformationCenter extends Schema.LocalBusiness, RdfResource {
}

export function TouristInformationCenterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TouristInformationCenterClass extends LocalBusinessMixin(Resource) implements TouristInformationCenter {
  }
  return TouristInformationCenterClass
}

class TouristInformationCenterImpl extends TouristInformationCenterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TouristInformationCenter>) {
    super(arg, init)
    this.types.add(schema.TouristInformationCenter)
  }
}
TouristInformationCenterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TouristInformationCenter)
TouristInformationCenterMixin.Class = TouristInformationCenterImpl
