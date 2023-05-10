import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { CollectionMixin } from './Collection.js';

export interface CollectionPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Collection<D>, rdfine.RdfResource<D> {
  next: As.CollectionPage<D> | As.Link<D> | undefined;
  partOf: As.Collection<D> | As.Link<D> | undefined;
  prev: As.CollectionPage<D> | As.Link<D> | undefined;
}

export function CollectionPageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<CollectionPage> & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class CollectionPageClass extends CollectionMixin(Resource) implements Partial<CollectionPage> {
    @rdfine.property.resource()
    next: As.CollectionPage | As.Link | undefined;
    @rdfine.property.resource()
    partOf: As.Collection | As.Link | undefined;
    @rdfine.property.resource()
    prev: As.CollectionPage | As.Link | undefined;
  }
  return CollectionPageClass
}

class CollectionPageImpl extends CollectionPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CollectionPage>) {
    super(arg, init)
    this.types.add(as.CollectionPage)
  }

  static readonly __mixins: Mixin[] = [CollectionPageMixin, CollectionMixin];
}
CollectionPageMixin.appliesTo = as.CollectionPage
CollectionPageMixin.Class = CollectionPageImpl

export const fromPointer = createFactory<CollectionPage>([CollectionMixin, CollectionPageMixin], { types: [as.CollectionPage] });
