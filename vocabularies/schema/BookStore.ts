import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<BookStore>) {
    super(arg, init)
    this.types.add(schema.BookStore)
  }
}
BookStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BookStore)
BookStoreMixin.Class = BookStoreImpl
