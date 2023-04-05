import '../extensions/rdfs/Resource.js';
import { ResourceMixinEx } from '../extensions/rdfs/Resource.js';
import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource.js';

export interface AllDisjointClasses<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function AllDisjointClassesMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AllDisjointClasses> & RdfResourceCore> & Base {
  @namespace(owl)
  class AllDisjointClassesClass extends ResourceMixinEx(RdfsResourceMixin(Resource)) implements Partial<AllDisjointClasses> {
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

export const fromPointer = createFactory<AllDisjointClasses>([RdfsResourceMixin, AllDisjointClassesMixin], { types: [owl.AllDisjointClasses] });
