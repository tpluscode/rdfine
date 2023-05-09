import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import { ObjectPropertyMixin } from './ObjectProperty.js';

export interface SymmetricProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Owl.ObjectProperty<D>, rdfine.RdfResource<D> {
}

export function SymmetricPropertyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SymmetricProperty> & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class SymmetricPropertyClass extends ObjectPropertyMixin(Resource) implements Partial<SymmetricProperty> {
  }
  return SymmetricPropertyClass
}

class SymmetricPropertyImpl extends SymmetricPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SymmetricProperty>) {
    super(arg, init)
    this.types.add(owl.SymmetricProperty)
  }

  static readonly __mixins: Mixin[] = [SymmetricPropertyMixin, ObjectPropertyMixin];
}
SymmetricPropertyMixin.appliesTo = owl.SymmetricProperty
SymmetricPropertyMixin.Class = SymmetricPropertyImpl

export const fromPointer = createFactory<SymmetricProperty>([ObjectPropertyMixin, SymmetricPropertyMixin], { types: [owl.SymmetricProperty] });
