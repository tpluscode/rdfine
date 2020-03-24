import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';
import LodgingBusinessMixin from './LodgingBusiness';

export interface Campground extends Schema.CivicStructure, Schema.LodgingBusiness, RdfResource {
}

export default function CampgroundMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CampgroundClass extends LodgingBusinessMixin(CivicStructureMixin(Resource)) implements Campground {
  }
  return CampgroundClass
}

class CampgroundImpl extends CampgroundMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Campground)
  }
}
CampgroundMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Campground)
CampgroundMixin.Class = CampgroundImpl
