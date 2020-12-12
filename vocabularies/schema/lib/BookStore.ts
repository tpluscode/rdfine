import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface BookStore<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Store<D>, RdfResource<D> {
}

export function BookStoreMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BookStore> & RdfResourceCore> & Base {
  @namespace(schema)
  class BookStoreClass extends StoreMixin(Resource) implements Partial<BookStore> {
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

export const fromPointer = createFactory<BookStore>([StoreMixin, BookStoreMixin], { types: [schema.BookStore] });
