import { ResourceMixinEx } from '../extensions/rdfs';
import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface AllDisjointProperties<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function AllDisjointPropertiesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AllDisjointProperties> & RdfResourceCore> & Base {
  @namespace(owl)
  class AllDisjointPropertiesClass extends ResourceMixinEx(RdfsResourceMixin(Resource)) implements Partial<AllDisjointProperties> {
  }
  return AllDisjointPropertiesClass
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
