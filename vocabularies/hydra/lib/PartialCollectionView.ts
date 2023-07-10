import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '../index.js';
import { ResourceMixin } from './Resource.js';

export interface PartialCollectionView<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, rdfine.RdfResource<D> {
}

export function PartialCollectionViewMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PartialCollectionView & RdfResourceCore> & Base {
  @rdfine.namespace(hydra)
  class PartialCollectionViewClass extends ResourceMixin(Resource) {
  }
  return PartialCollectionViewClass as any
}

class PartialCollectionViewImpl extends PartialCollectionViewMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PartialCollectionView>) {
    super(arg, init)
    this.types.add(hydra.PartialCollectionView)
  }

  static readonly __mixins: Mixin[] = [PartialCollectionViewMixin, ResourceMixin];
}
PartialCollectionViewMixin.appliesTo = hydra.PartialCollectionView
PartialCollectionViewMixin.Class = PartialCollectionViewImpl

export const fromPointer = createFactory<PartialCollectionView>([ResourceMixin, PartialCollectionViewMixin], { types: [hydra.PartialCollectionView] });
