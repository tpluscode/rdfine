import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface InternetCafe extends Schema.LocalBusiness, RdfResource {
}

export default function InternetCafeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InternetCafeClass extends LocalBusinessMixin(Resource) implements InternetCafe {
  }
  return InternetCafeClass
}

class InternetCafeImpl extends InternetCafeMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.InternetCafe)
  }
}
InternetCafeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InternetCafe)
InternetCafeMixin.Class = InternetCafeImpl
