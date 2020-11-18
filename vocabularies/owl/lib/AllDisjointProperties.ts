import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface AllDisjointProperties<ID extends ResourceNode = ResourceNode> extends Rdfs.Resource<ID>, RdfResource<ID> {
}

export function AllDisjointPropertiesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class AllDisjointPropertiesClass extends RdfsResourceMixin(Resource) implements AllDisjointProperties {
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
