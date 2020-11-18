import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import { ObjectPropertyMixin } from './ObjectProperty';

export interface InverseFunctionalProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Owl.ObjectProperty<D>, RdfResource<D> {
}

export function InverseFunctionalPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class InverseFunctionalPropertyClass extends ObjectPropertyMixin(Resource) implements InverseFunctionalProperty {
  }
  return InverseFunctionalPropertyClass
}

class InverseFunctionalPropertyImpl extends InverseFunctionalPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InverseFunctionalProperty>) {
    super(arg, init)
    this.types.add(owl.InverseFunctionalProperty)
  }

  static readonly __mixins: Mixin[] = [InverseFunctionalPropertyMixin, ObjectPropertyMixin];
}
InverseFunctionalPropertyMixin.appliesTo = owl.InverseFunctionalProperty
InverseFunctionalPropertyMixin.Class = InverseFunctionalPropertyImpl
