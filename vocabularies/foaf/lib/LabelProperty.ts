import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';

export interface LabelProperty<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function LabelPropertyMixin<Base extends Constructor>(Resource: Base): Constructor<LabelProperty> & Base {
  @namespace(foaf)
  class LabelPropertyClass extends Resource implements LabelProperty {
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
