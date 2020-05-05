import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness';

export interface AdultEntertainment extends Schema.EntertainmentBusiness, RdfResource {
}

export function AdultEntertainmentMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [AdultEntertainmentMixin, EntertainmentBusinessMixin];
}
AdultEntertainmentMixin.appliesTo = schema.AdultEntertainment
AdultEntertainmentMixin.Class = AdultEntertainmentImpl
