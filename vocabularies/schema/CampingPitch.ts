import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AccommodationMixin } from './Accommodation';

export interface CampingPitch extends Schema.Accommodation, RdfResource {
}

export function CampingPitchMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CampingPitchClass extends AccommodationMixin(Resource) implements CampingPitch {
  }
  return CampingPitchClass
}

class CampingPitchImpl extends CampingPitchMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CampingPitch>) {
    super(arg, init)
    this.types.add(schema.CampingPitch)
  }

  static readonly __mixins: Mixin[] = [CampingPitchMixin, AccommodationMixin];
}
CampingPitchMixin.appliesTo = schema.CampingPitch
CampingPitchMixin.Class = CampingPitchImpl
