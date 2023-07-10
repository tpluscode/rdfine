import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Collection<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, rdfine.RdfResource<D> {
  current: As.CollectionPage<D> | As.Link<D> | undefined;
  first: As.CollectionPage<D> | As.Link<D> | undefined;
  items: As.OrderedItems<D> | undefined;
  last: As.CollectionPage<D> | As.Link<D> | undefined;
  totalItems: number | undefined;
}

export function CollectionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Collection & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class CollectionClass extends ObjectMixin(Resource) {
    @rdfine.property.resource()
    current: As.CollectionPage | As.Link | undefined;
    @rdfine.property.resource()
    first: As.CollectionPage | As.Link | undefined;
    @rdfine.property.resource({ implicitTypes: [as.OrderedItems] })
    items: As.OrderedItems | undefined;
    @rdfine.property.resource()
    last: As.CollectionPage | As.Link | undefined;
    @rdfine.property.literal({ type: Number })
    totalItems: number | undefined;
  }
  return CollectionClass as any
}

class CollectionImpl extends CollectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Collection>) {
    super(arg, init)
    this.types.add(as.Collection)
  }

  static readonly __mixins: Mixin[] = [CollectionMixin, ObjectMixin];
}
CollectionMixin.appliesTo = as.Collection
CollectionMixin.Class = CollectionImpl

export const fromPointer = createFactory<Collection>([ObjectMixin, CollectionMixin], { types: [as.Collection] });
