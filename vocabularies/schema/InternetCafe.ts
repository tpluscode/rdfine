import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<InternetCafe>) {
    super(arg)
    this.types.add(schema.InternetCafe)
    initializeProperties<InternetCafe>(this, init)
  }
}
InternetCafeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InternetCafe)
InternetCafeMixin.Class = InternetCafeImpl
