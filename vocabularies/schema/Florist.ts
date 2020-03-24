import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface Florist extends Schema.Store, RdfResource {
}

export default function FloristMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FloristClass extends StoreMixin(Resource) implements Florist {
  }
  return FloristClass
}

class FloristImpl extends FloristMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Florist>) {
    super(arg)
    this.types.add(schema.Florist)
    initializeProperties(this, init)
  }
}
FloristMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Florist)
FloristMixin.Class = FloristImpl
