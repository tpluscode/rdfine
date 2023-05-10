import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import { ObjectPropertyMixin } from './ObjectProperty.js';

export interface AsymmetricProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Owl.ObjectProperty<D>, rdfine.RdfResource<D> {
}

export function AsymmetricPropertyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AsymmetricProperty> & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class AsymmetricPropertyClass extends ObjectPropertyMixin(Resource) implements Partial<AsymmetricProperty> {
  }
  return AsymmetricPropertyClass
}

class AsymmetricPropertyImpl extends AsymmetricPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AsymmetricProperty>) {
    super(arg, init)
    this.types.add(owl.AsymmetricProperty)
  }

  static readonly __mixins: Mixin[] = [AsymmetricPropertyMixin, ObjectPropertyMixin];
}
AsymmetricPropertyMixin.appliesTo = owl.AsymmetricProperty
AsymmetricPropertyMixin.Class = AsymmetricPropertyImpl

export const fromPointer = createFactory<AsymmetricProperty>([ObjectPropertyMixin, AsymmetricPropertyMixin], { types: [owl.AsymmetricProperty] });
