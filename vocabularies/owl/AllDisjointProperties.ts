import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';

export interface AllDisjointProperties extends Rdfs.Resource, RdfResource {
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
}
AllDisjointPropertiesMixin.shouldApply = (r: RdfResource) => r.types.has(owl.AllDisjointProperties)
AllDisjointPropertiesMixin.Class = AllDisjointPropertiesImpl
