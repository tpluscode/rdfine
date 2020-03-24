import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface BookStore extends Schema.Store, RdfResource {
}

export default function BookStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BookStoreClass extends StoreMixin(Resource) implements BookStore {
  }
  return BookStoreClass
}

class BookStoreImpl extends BookStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BookStore>) {
    super(arg)
    this.types.add(schema.BookStore)
    initializeProperties(this, init)
  }
}
BookStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BookStore)
BookStoreMixin.Class = BookStoreImpl
