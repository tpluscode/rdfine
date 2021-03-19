import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ObjectMixin } from './Object';

export interface Collection<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
  current: As.CollectionPage<D> | As.Link<D> | undefined;
  first: As.CollectionPage<D> | As.Link<D> | undefined;
  items: As.OrderedItems<D> | undefined;
  last: As.CollectionPage<D> | As.Link<D> | undefined;
  totalItems: number | undefined;
}

export function CollectionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Collection> & RdfResourceCore> & Base {
  @namespace(as)
  class CollectionClass extends ObjectMixin(Resource) implements Partial<Collection> {
    @property.resource()
    current: As.CollectionPage | As.Link | undefined;
    @property.resource()
    first: As.CollectionPage | As.Link | undefined;
    @property.resource({ implicitTypes: [as.OrderedItems] })
    items: As.OrderedItems | undefined;
    @property.resource()
    last: As.CollectionPage | As.Link | undefined;
    @property.literal({ type: Number })
    totalItems: number | undefined;
  }
  return CollectionClass
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
