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
import type * as Rdf from '@rdfine/rdf';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';
import { ListMixin as RdfListMixin } from '@rdfine/rdf/lib/List';

export interface AllDifferent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, rdfine.RdfResource<D> {
  distinctMembers: Rdf.List<D> | undefined;
}

export function AllDifferentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AllDifferent> & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class AllDifferentClass extends ResourceMixinEx(RdfsResourceMixin(Resource)) implements Partial<AllDifferent> {
    @rdfine.property.resource({ as: [RdfListMixin] })
    distinctMembers: Rdf.List | undefined;
  }
  return AllDifferentClass
}

class AllDifferentImpl extends AllDifferentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AllDifferent>) {
    super(arg, init)
    this.types.add(owl.AllDifferent)
  }

  static readonly __mixins: Mixin[] = [AllDifferentMixin, RdfsResourceMixin];
}
AllDifferentMixin.appliesTo = owl.AllDifferent
AllDifferentMixin.Class = AllDifferentImpl

export const fromPointer = createFactory<AllDifferent>([RdfsResourceMixin, AllDifferentMixin], { types: [owl.AllDifferent] });
