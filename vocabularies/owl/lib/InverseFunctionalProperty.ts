import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import { ObjectPropertyMixin } from './ObjectProperty.js';

export interface InverseFunctionalProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Owl.ObjectProperty<D>, RdfResource<D> {
}

export function InverseFunctionalPropertyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InverseFunctionalProperty> & RdfResourceCore> & Base {
  @namespace(owl)
  class InverseFunctionalPropertyClass extends ObjectPropertyMixin(Resource) implements Partial<InverseFunctionalProperty> {
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

export const fromPointer = createFactory<InverseFunctionalProperty>([ObjectPropertyMixin, InverseFunctionalPropertyMixin], { types: [owl.InverseFunctionalProperty] });
