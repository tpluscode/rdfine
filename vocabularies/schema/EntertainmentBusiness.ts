import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface EntertainmentBusiness extends Schema.LocalBusiness, RdfResource {
}

export default function EntertainmentBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EntertainmentBusinessClass extends LocalBusinessMixin(Resource) implements EntertainmentBusiness {
  }
  return EntertainmentBusinessClass
}

class EntertainmentBusinessImpl extends EntertainmentBusinessMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EntertainmentBusiness)
  }
}
EntertainmentBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EntertainmentBusiness)
EntertainmentBusinessMixin.Class = EntertainmentBusinessImpl
