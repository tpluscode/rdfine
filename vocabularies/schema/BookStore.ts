import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BookStore)
  }
}
BookStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BookStore)
BookStoreMixin.Class = BookStoreImpl
