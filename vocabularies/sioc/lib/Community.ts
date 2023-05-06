import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sioc } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '../index.js';

export interface Community<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function CommunityMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Community> & RdfResourceCore> & Base {
  @namespace(sioc)
  class CommunityClass extends Resource implements Partial<Community> {
  }
  return CommunityClass
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
