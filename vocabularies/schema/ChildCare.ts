import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface ChildCare extends Schema.LocalBusiness, RdfResource {
}

export default function ChildCareMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ChildCareClass extends LocalBusinessMixin(Resource) implements ChildCare {
  }
  return ChildCareClass
}

class ChildCareImpl extends ChildCareMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ChildCare>) {
    super(arg)
    this.types.add(schema.ChildCare)
    initializeProperties<ChildCare>(this, init)
  }
}
ChildCareMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ChildCare)
ChildCareMixin.Class = ChildCareImpl
