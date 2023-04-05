import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import { ObjectPropertyMixin } from './ObjectProperty';

export interface IrreflexiveProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends Owl.ObjectProperty<D>, RdfResource<D> {
}

export function IrreflexivePropertyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<IrreflexiveProperty> & RdfResourceCore> & Base {
  @namespace(owl)
  class IrreflexivePropertyClass extends ObjectPropertyMixin(Resource) implements Partial<IrreflexiveProperty> {
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

export const fromPointer = createFactory<IrreflexiveProperty>([ObjectPropertyMixin, IrreflexivePropertyMixin], { types: [owl.IrreflexiveProperty] });
