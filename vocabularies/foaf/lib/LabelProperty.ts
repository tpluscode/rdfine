import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';

export interface LabelProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function LabelPropertyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LabelProperty> & RdfResourceCore> & Base {
  @namespace(foaf)
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
