import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import { ObjectPropertyMixin } from './ObjectProperty';

export interface IrreflexiveProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Owl.ObjectProperty<D>, RdfResource<D> {
}

export function IrreflexivePropertyMixin<Base extends Constructor>(Resource: Base): Constructor<IrreflexiveProperty> & Base {
  @namespace(owl)
  class IrreflexivePropertyClass extends ObjectPropertyMixin(Resource) implements IrreflexiveProperty {
  }
  return IrreflexivePropertyClass
}

class IrreflexivePropertyImpl extends IrreflexivePropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IrreflexiveProperty>) {
    super(arg, init)
    this.types.add(owl.IrreflexiveProperty)
  }

  static readonly __mixins: Mixin[] = [IrreflexivePropertyMixin, ObjectPropertyMixin];
}
IrreflexivePropertyMixin.appliesTo = owl.IrreflexiveProperty
IrreflexivePropertyMixin.Class = IrreflexivePropertyImpl
