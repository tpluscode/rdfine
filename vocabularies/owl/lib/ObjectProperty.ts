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
import { ListMixin as RdfListMixin } from '@rdfine/rdf/lib/List';

export interface ObjectProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, rdfine.RdfResource<D> {
  inverseOf: Owl.ObjectProperty<D> | undefined;
  propertyChainAxiom: Rdf.List<D> | undefined;
}

export function ObjectPropertyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ObjectProperty> & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class ObjectPropertyClass extends PropertyMixinEx(RdfPropertyMixin(Resource)) implements Partial<ObjectProperty> {
    @rdfine.property.resource({ as: [ObjectPropertyMixin] })
    inverseOf: Owl.ObjectProperty | undefined;
    @rdfine.property.resource({ as: [RdfListMixin] })
    propertyChainAxiom: Rdf.List | undefined;
  }
  return ObjectPropertyClass
}

class ObjectPropertyImpl extends ObjectPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ObjectProperty>) {
    super(arg, init)
    this.types.add(owl.ObjectProperty)
  }

  static readonly __mixins: Mixin[] = [ObjectPropertyMixin, RdfPropertyMixin];
}
ObjectPropertyMixin.appliesTo = owl.ObjectProperty
ObjectPropertyMixin.Class = ObjectPropertyImpl

export const fromPointer = createFactory<ObjectProperty>([RdfPropertyMixin, ObjectPropertyMixin], { types: [owl.ObjectProperty] });
