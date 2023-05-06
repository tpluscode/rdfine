import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface Library<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function LibraryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Library> & RdfResourceCore> & Base {
  @namespace(schema)
  class LibraryClass extends LocalBusinessMixin(Resource) implements Partial<Library> {
  }
  return LibraryClass
}

class LibraryImpl extends LibraryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Library>) {
    super(arg, init)
    this.types.add(schema.Library)
  }

  static readonly __mixins: Mixin[] = [LibraryMixin, LocalBusinessMixin];
}
LibraryMixin.appliesTo = schema.Library
LibraryMixin.Class = LibraryImpl

export const fromPointer = createFactory<Library>([LocalBusinessMixin, LibraryMixin], { types: [schema.Library] });
