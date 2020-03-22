import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HealthClub)
  }
}
HealthClubMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HealthClub)
HealthClubMixin.Class = HealthClubImpl