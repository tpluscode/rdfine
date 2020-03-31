import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Book extends Schema.CreativeWork, RdfResource {
  bookEdition: string;
  bookFormat: Schema.BookFormatType;
  illustrator: Schema.Person;
  isbn: string;
  numberOfPages: number;
}

export default function BookMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BookClass extends CreativeWorkMixin(Resource) implements Book {
    @property.literal()
    bookEdition!: string;
    @property()
    bookFormat!: Schema.BookFormatType;
    @property.resource()
    illustrator!: Schema.Person;
    @property.literal()
    isbn!: string;
    @property.literal({ type: Number })
    numberOfPages!: number;
  }
  return BookClass
}

class BookImpl extends BookMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Book>) {
    super(arg, init)
    this.types.add(schema.Book)
  }
}
BookMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Book)
BookMixin.Class = BookImpl
