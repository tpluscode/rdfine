import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<InternetCafe>) {
    super(arg, init)
    this.types.add(schema.InternetCafe)
  }
}
InternetCafeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InternetCafe)
InternetCafeMixin.Class = InternetCafeImpl
