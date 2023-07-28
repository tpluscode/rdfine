import '../extensions/rdfs/Resource.js';
import { ResourceMixinEx } from '../extensions/rdfs/Resource.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface AllDisjointProperties<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
}

export function AllDisjointPropertiesMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AllDisjointProperties & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class AllDisjointPropertiesClass extends ResourceMixinEx(RdfsResourceMixin(Resource)) {
  }
  return AllDisjointPropertiesClass as any
}

class AllDisjointPropertiesImpl extends AllDisjointPropertiesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AllDisjointProperties>) {
    super(arg, init)
    this.types.add(owl.AllDisjointProperties)
  }

  static readonly __mixins: Mixin[] = [AllDisjointPropertiesMixin, RdfsResourceMixin];
}
AllDisjointPropertiesMixin.appliesTo = owl.AllDisjointProperties
AllDisjointPropertiesMixin.Class = AllDisjointPropertiesImpl

export const fromPointer = createFactory<AllDisjointProperties>([RdfsResourceMixin, AllDisjointPropertiesMixin], { types: [owl.AllDisjointProperties] });
