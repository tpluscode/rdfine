import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StoreMixin } from './Store.js';

export interface BookStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, rdfine.RdfResource<D> {
}

export function BookStoreMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<BookStore & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BookStoreClass extends StoreMixin(Resource) {
  }
  return BookStoreClass as any
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

export const fromPointer = createFactory<BookStore>([StoreMixin, BookStoreMixin], { types: [schema.BookStore] });
