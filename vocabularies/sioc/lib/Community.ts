import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sioc } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '..';

export interface Community<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
}

export function CommunityMixin<Base extends Constructor>(Resource: Base): Constructor<Community> & Base {
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
