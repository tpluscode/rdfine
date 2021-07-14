import '../extensions/rdf/Property';
import { PropertyMixinEx } from '../extensions/rdf/Property';
import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface FunctionalProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, RdfResource<D> {
}

export function FunctionalPropertyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FunctionalProperty> & RdfResourceCore> & Base {
  @namespace(owl)
  class FunctionalPropertyClass extends PropertyMixinEx(RdfPropertyMixin(Resource)) implements Partial<FunctionalProperty> {
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

export const fromPointer = createFactory<FunctionalProperty>([RdfPropertyMixin, FunctionalPropertyMixin], { types: [owl.FunctionalProperty] });
