import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '.';
import { ResourceMixin } from './Resource';

export interface PartialCollectionView extends Hydra.Resource, RdfResource {
}

export function PartialCollectionViewMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class PartialCollectionViewClass extends ResourceMixin(Resource) implements PartialCollectionView {
  }
  return PartialCollectionViewClass
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
