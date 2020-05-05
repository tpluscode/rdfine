import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';
import { ListMixin as RdfListMixin } from '@rdfine/rdf/List';

export interface AllDifferent extends Rdfs.Resource, RdfResource {
  distinctMembers: Rdf.List;
}

export function AllDifferentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class AllDifferentClass extends RdfsResourceMixin(Resource) implements AllDifferent {
    @property.resource({ as: [RdfListMixin] })
    distinctMembers!: Rdf.List;
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
