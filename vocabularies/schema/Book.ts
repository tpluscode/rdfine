import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Book extends Schema.CreativeWork, RdfResource {
  bookEdition: string | undefined;
  bookFormat: Schema.BookFormatType | undefined;
  illustrator: Schema.Person | undefined;
  isbn: string | undefined;
  numberOfPages: number | undefined;
}

export function BookMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BookClass extends CreativeWorkMixin(Resource) implements Book {
    @property.literal()
    bookEdition: string | undefined;
    @property()
    bookFormat: Schema.BookFormatType | undefined;
    @property.resource()
    illustrator: Schema.Person | undefined;
    @property.literal()
    isbn: string | undefined;
    @property.literal({ type: Number })
    numberOfPages: number | undefined;
  }
  return BookClass
}

class BookImpl extends BookMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Book>) {
    super(arg, init)
    this.types.add(schema.Book)
  }

  static readonly __mixins: Mixin[] = [BookMixin, CreativeWorkMixin];
}
BookMixin.appliesTo = schema.Book
BookMixin.Class = BookImpl
