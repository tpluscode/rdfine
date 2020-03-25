import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AccommodationMixin from './Accommodation';

export interface CampingPitch extends Schema.Accommodation, RdfResource {
}

export default function CampingPitchMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CampingPitchClass extends AccommodationMixin(Resource) implements CampingPitch {
  }
  return CampingPitchClass
}

class CampingPitchImpl extends CampingPitchMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<CampingPitch>) {
    super(arg)
    this.types.add(schema.CampingPitch)
    initializeProperties<CampingPitch>(this, init)
  }
}
CampingPitchMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CampingPitch)
CampingPitchMixin.Class = CampingPitchImpl
