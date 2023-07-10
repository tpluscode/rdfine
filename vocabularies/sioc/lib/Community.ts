import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sioc } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '../index.js';

export interface Community<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
}

export function CommunityMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Community & RdfResourceCore> & Base {
  @rdfine.namespace(sioc)
  class CommunityClass extends Resource {
  }
  return CommunityClass as any
}

class CommunityImpl extends CommunityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Community>) {
    super(arg, init)
    this.types.add(sioc.Community)
  }

  static readonly __mixins: Mixin[] = [CommunityMixin];
}
CommunityMixin.appliesTo = sioc.Community
CommunityMixin.Class = CommunityImpl

export const fromPointer = createFactory<Community>([CommunityMixin], { types: [sioc.Community] });
