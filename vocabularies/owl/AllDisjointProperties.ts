import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface AllDisjointProperties extends Rdfs.Resource, RdfResource {
}

export function AllDisjointPropertiesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class AllDisjointPropertiesClass extends Rdfs.ResourceMixin(Resource) implements AllDisjointProperties {
  }
  return AllDisjointPropertiesClass
}

class AllDisjointPropertiesImpl extends AllDisjointPropertiesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AllDisjointProperties>) {
    super(arg, init)
    this.types.add(owl.AllDisjointProperties)
  }

  static readonly __mixins: Mixin[] = [AllDisjointPropertiesMixin, Rdfs.ResourceMixin];
}
AllDisjointPropertiesMixin.appliesTo = owl.AllDisjointProperties
AllDisjointPropertiesMixin.Class = AllDisjointPropertiesImpl
