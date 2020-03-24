import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CampingPitch)
  }
}
CampingPitchMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CampingPitch)
CampingPitchMixin.Class = CampingPitchImpl
