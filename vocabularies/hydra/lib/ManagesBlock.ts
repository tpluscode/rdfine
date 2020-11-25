import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface ManagesBlock<ID extends ResourceNode = ResourceNode> extends RdfResource<ID> {
  object: Hydra.Class<SiblingNode<ID>> | undefined;
  property: Rdf.Property<SiblingNode<ID>> | undefined;
  subject: Hydra.Resource<SiblingNode<ID>> | undefined;
}

export function ManagesBlockMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class ManagesBlockClass extends Resource implements ManagesBlock {
    @property.resource()
    object: Hydra.Class | undefined;
    @property.resource({ as: [RdfPropertyMixin] })
    property: Rdf.Property | undefined;
    @property.resource({ implicitTypes: [hydra.Resource] })
    subject: Hydra.Resource | undefined;
  }
  return ManagesBlockClass
}

class ManagesBlockImpl extends ManagesBlockMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ManagesBlock>) {
    super(arg, init)
    this.types.add(hydra.ManagesBlock)
  }

  static readonly __mixins: Mixin[] = [ManagesBlockMixin];
}
ManagesBlockMixin.appliesTo = hydra.ManagesBlock
ManagesBlockMixin.Class = ManagesBlockImpl
