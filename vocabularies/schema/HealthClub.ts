import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HealthAndBeautyBusinessMixin from './HealthAndBeautyBusiness';
import SportsActivityLocationMixin from './SportsActivityLocation';

export interface HealthClub extends Schema.HealthAndBeautyBusiness, Schema.SportsActivityLocation, RdfResource {
}

export default function HealthClubMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HealthClubClass extends SportsActivityLocationMixin(HealthAndBeautyBusinessMixin(Resource)) implements HealthClub {
  }
  return HealthClubClass
}

class HealthClubImpl extends HealthClubMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HealthClub>) {
    super(arg, init)
    this.types.add(schema.HealthClub)
  }
}
HealthClubMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HealthClub)
HealthClubMixin.Class = HealthClubImpl
