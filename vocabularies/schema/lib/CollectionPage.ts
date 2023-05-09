import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageMixin } from './WebPage.js';

export interface CollectionPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, rdfine.RdfResource<D> {
}

export function CollectionPageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<CollectionPage> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CollectionPageClass extends WebPageMixin(Resource) implements Partial<CollectionPage> {
  }
  return CollectionPageClass
}

class CollectionPageImpl extends CollectionPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CollectionPage>) {
    super(arg, init)
    this.types.add(schema.CollectionPage)
  }

  static readonly __mixins: Mixin[] = [CollectionPageMixin, WebPageMixin];
}
CollectionPageMixin.appliesTo = schema.CollectionPage
CollectionPageMixin.Class = CollectionPageImpl

export const fromPointer = createFactory<CollectionPage>([WebPageMixin, CollectionPageMixin], { types: [schema.CollectionPage] });
