import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdf } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '..';

export interface Alt<ID extends ResourceNode = ResourceNode> extends RdfResource<ID> {
}

export function AltMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdf)
  class AltClass extends Resource implements Alt {
  }
  return AltClass
}

class AltImpl extends AltMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Alt>) {
    super(arg, init)
    this.types.add(rdf.Alt)
  }

  static readonly __mixins: Mixin[] = [AltMixin];
}
AltMixin.appliesTo = rdf.Alt
AltMixin.Class = AltImpl
