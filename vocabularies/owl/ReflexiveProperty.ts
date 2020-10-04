import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import { ObjectPropertyMixin } from './ObjectProperty';

export interface ReflexiveProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Owl.ObjectProperty<D>, RdfResource<D> {
}

export function ReflexivePropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class ReflexivePropertyClass extends ObjectPropertyMixin(Resource) implements ReflexiveProperty {
  }
  return ReflexivePropertyClass
}

class ReflexivePropertyImpl extends ReflexivePropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReflexiveProperty>) {
    super(arg, init)
    this.types.add(owl.ReflexiveProperty)
  }

  static readonly __mixins: Mixin[] = [ReflexivePropertyMixin, ObjectPropertyMixin];
}
ReflexivePropertyMixin.appliesTo = owl.ReflexiveProperty
ReflexivePropertyMixin.Class = ReflexivePropertyImpl
