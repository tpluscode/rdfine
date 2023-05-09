import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '../index.js';

export interface LabelProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function LabelPropertyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<LabelProperty> & RdfResourceCore> & Base {
  @rdfine.namespace(foaf)
  class LabelPropertyClass extends Resource implements Partial<LabelProperty> {
  }
  return LabelPropertyClass
}

class LabelPropertyImpl extends LabelPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LabelProperty>) {
    super(arg, init)
    this.types.add(foaf.LabelProperty)
  }

  static readonly __mixins: Mixin[] = [LabelPropertyMixin];
}
LabelPropertyMixin.appliesTo = foaf.LabelProperty
LabelPropertyMixin.Class = LabelPropertyImpl

export const fromPointer = createFactory<LabelProperty>([LabelPropertyMixin], { types: [foaf.LabelProperty] });
