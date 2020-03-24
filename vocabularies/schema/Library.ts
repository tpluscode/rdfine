import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface Library extends Schema.LocalBusiness, RdfResource {
}

export default function LibraryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LibraryClass extends LocalBusinessMixin(Resource) implements Library {
  }
  return LibraryClass
}

class LibraryImpl extends LibraryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Library>) {
    super(arg)
    this.types.add(schema.Library)
    initializeProperties(this, init)
  }
}
LibraryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Library)
LibraryMixin.Class = LibraryImpl
