import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface BookStore extends Schema.Store, RdfResource {
}

export function BookStoreMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [BookStoreMixin, StoreMixin];
}
BookStoreMixin.appliesTo = schema.BookStore
BookStoreMixin.Class = BookStoreImpl
