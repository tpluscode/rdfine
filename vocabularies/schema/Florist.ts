import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Florist>) {
    super(arg, init)
    this.types.add(schema.Florist)
  }
}
FloristMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Florist)
FloristMixin.Class = FloristImpl
