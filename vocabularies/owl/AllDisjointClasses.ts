import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';

export interface AllDisjointClasses extends Rdfs.Resource, RdfResource {
}

export function AllDisjointClassesMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class AllDisjointClassesClass extends RdfsResourceMixin(Resource) implements AllDisjointClasses {
  }
  return AllDisjointClassesClass
}

class AllDisjointClassesImpl extends AllDisjointClassesMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AllDisjointClasses>) {
    super(arg, init)
    this.types.add(owl.AllDisjointClasses)
  }

  static readonly __mixins: Mixin[] = [AllDisjointClassesMixin, RdfsResourceMixin];
}
AllDisjointClassesMixin.appliesTo = owl.AllDisjointClasses
AllDisjointClassesMixin.Class = AllDisjointClassesImpl
