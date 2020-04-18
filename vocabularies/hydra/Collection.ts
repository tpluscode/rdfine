import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Hydra from '.';
import ResourceMixin from './Resource';

export interface Collection extends Hydra.Resource, RdfResource {
  manages: Array<RDF.Term>;
  member: Array<Hydra.Resource>;
  totalItems: number;
}

export default function CollectionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class CollectionClass extends ResourceMixin(Resource) implements Collection {
    @property({ values: 'array' })
    manages!: Array<RDF.Term>;
    @property.resource({ values: 'array', as: [ResourceMixin] })
    member!: Array<Hydra.Resource>;
    @property.literal({ type: Number })
    totalItems!: number;
  }
  return CollectionClass
}

class CollectionImpl extends CollectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Collection>) {
    super(arg, init)
    this.types.add(hydra.Collection)
  }
}
CollectionMixin.shouldApply = (r: RdfResource) => r.types.has(hydra.Collection)
CollectionMixin.Class = CollectionImpl
