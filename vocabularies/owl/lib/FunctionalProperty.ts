import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface FunctionalProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, RdfResource<D> {
}

export function FunctionalPropertyMixin<Base extends Constructor>(Resource: Base): Constructor<FunctionalProperty> & Base {
  @namespace(owl)
  class FunctionalPropertyClass extends RdfPropertyMixin(Resource) implements Partial<FunctionalProperty> {
  }
  return FunctionalPropertyClass
}

class FunctionalPropertyImpl extends FunctionalPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FunctionalProperty>) {
    super(arg, init)
    this.types.add(owl.FunctionalProperty)
  }

  static readonly __mixins: Mixin[] = [FunctionalPropertyMixin, RdfPropertyMixin];
}
FunctionalPropertyMixin.appliesTo = owl.FunctionalProperty
FunctionalPropertyMixin.Class = FunctionalPropertyImpl
