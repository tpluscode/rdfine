import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdf from '@rdfine/rdf';

export interface ObjectProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdf.Property<D>, RdfResource<D> {
  inverseOf: Owl.ObjectProperty<D> | undefined;
  propertyChainAxiom: Rdf.List<D> | undefined;
}

export function ObjectPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class ObjectPropertyClass extends Rdf.PropertyMixin(Resource) implements ObjectProperty {
    @property.resource({ as: [ObjectPropertyMixin] })
    inverseOf: Owl.ObjectProperty | undefined;
    @property.resource({ as: [Rdf.ListMixin] })
    propertyChainAxiom: Rdf.List | undefined;
  }
  return ObjectPropertyClass
}

class ObjectPropertyImpl extends ObjectPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ObjectProperty>) {
    super(arg, init)
    this.types.add(owl.ObjectProperty)
  }

  static readonly __mixins: Mixin[] = [ObjectPropertyMixin, Rdf.PropertyMixin];
}
ObjectPropertyMixin.appliesTo = owl.ObjectProperty
ObjectPropertyMixin.Class = ObjectPropertyImpl
