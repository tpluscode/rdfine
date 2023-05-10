import '../extensions/rdf/Property.js';
import { PropertyMixinEx } from '../extensions/rdf/Property.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface DatatypeProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, rdfine.RdfResource<D> {
}

export function DatatypePropertyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<DatatypeProperty> & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class DatatypePropertyClass extends PropertyMixinEx(RdfPropertyMixin(Resource)) implements Partial<DatatypeProperty> {
  }
  return DatatypePropertyClass
}

class DatatypePropertyImpl extends DatatypePropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DatatypeProperty>) {
    super(arg, init)
    this.types.add(owl.DatatypeProperty)
  }

  static readonly __mixins: Mixin[] = [DatatypePropertyMixin, RdfPropertyMixin];
}
DatatypePropertyMixin.appliesTo = owl.DatatypeProperty
DatatypePropertyMixin.Class = DatatypePropertyImpl

export const fromPointer = createFactory<DatatypeProperty>([RdfPropertyMixin, DatatypePropertyMixin], { types: [owl.DatatypeProperty] });
