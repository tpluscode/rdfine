import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface AllDisjointClasses<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function AllDisjointClassesMixin<Base extends Constructor>(Resource: Base): Constructor<AllDisjointClasses> & Base {
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
