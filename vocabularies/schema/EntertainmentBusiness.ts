import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface EntertainmentBusiness extends Schema.LocalBusiness, RdfResource {
}

export function EntertainmentBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EntertainmentBusinessClass extends LocalBusinessMixin(Resource) implements EntertainmentBusiness {
  }
  return EntertainmentBusinessClass
}

class EntertainmentBusinessImpl extends EntertainmentBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EntertainmentBusiness>) {
    super(arg, init)
    this.types.add(schema.EntertainmentBusiness)
  }

  static readonly __mixins: Mixin[] = [EntertainmentBusinessMixin, LocalBusinessMixin];
}
EntertainmentBusinessMixin.appliesTo = schema.EntertainmentBusiness
EntertainmentBusinessMixin.Class = EntertainmentBusinessImpl
