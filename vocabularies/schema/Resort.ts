import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import LodgingBusinessMixin from './LodgingBusiness';

export interface Resort extends Schema.LodgingBusiness, RdfResource {
}

export default function ResortMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ResortClass extends LodgingBusinessMixin(Resource) implements Resort {
  }
  return ResortClass
}

class ResortImpl extends ResortMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Resort>) {
    super(arg, init)
    this.types.add(schema.Resort)
  }
}
ResortMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Resort)
ResortMixin.Class = ResortImpl
