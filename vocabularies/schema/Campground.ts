import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Campground>) {
    super(arg)
    this.types.add(schema.Campground)
    initializeProperties<Campground>(this, init)
  }
}
CampgroundMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Campground)
CampgroundMixin.Class = CampgroundImpl
