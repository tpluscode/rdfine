import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';
import { LodgingBusinessMixin } from './LodgingBusiness';

export interface Campground extends Schema.CivicStructure, Schema.LodgingBusiness, RdfResource {
}

export function CampgroundMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CampgroundClass extends LodgingBusinessMixin(CivicStructureMixin(Resource)) implements Campground {
  }
  return CampgroundClass
}

class CampgroundImpl extends CampgroundMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Campground>) {
    super(arg, init)
    this.types.add(schema.Campground)
  }

  static readonly __mixins: Mixin[] = [CampgroundMixin, CivicStructureMixin, LodgingBusinessMixin];
}
CampgroundMixin.appliesTo = schema.Campground
CampgroundMixin.Class = CampgroundImpl
