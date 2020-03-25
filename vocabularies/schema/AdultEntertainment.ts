import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EntertainmentBusinessMixin from './EntertainmentBusiness';

export interface AdultEntertainment extends Schema.EntertainmentBusiness, RdfResource {
}

export default function AdultEntertainmentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AdultEntertainmentClass extends EntertainmentBusinessMixin(Resource) implements AdultEntertainment {
  }
  return AdultEntertainmentClass
}

class AdultEntertainmentImpl extends AdultEntertainmentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AdultEntertainment>) {
    super(arg, init)
    this.types.add(schema.AdultEntertainment)
  }
}
AdultEntertainmentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AdultEntertainment)
AdultEntertainmentMixin.Class = AdultEntertainmentImpl
