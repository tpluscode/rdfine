import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import { ObjectPropertyMixin } from './ObjectProperty.js';

export interface ReflexiveProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Owl.ObjectProperty<D>, RdfResource<D> {
}

export function ReflexivePropertyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ReflexiveProperty> & RdfResourceCore> & Base {
  @namespace(owl)
  class ReflexivePropertyClass extends ObjectPropertyMixin(Resource) implements Partial<ReflexiveProperty> {
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

export const fromPointer = createFactory<ReflexiveProperty>([ObjectPropertyMixin, ReflexivePropertyMixin], { types: [owl.ReflexiveProperty] });
