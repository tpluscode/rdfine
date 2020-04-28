import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import RdfsResourceMixin from '@rdfine/rdfs/Resource';
import RdfListMixin from '@rdfine/rdf/List';

export interface AllDifferent extends Rdfs.Resource, RdfResource {
  distinctMembers: Rdf.List;
}

export default function AllDifferentMixin<Base extends Constructor>(Resource: Base) {
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
}
AllDifferentMixin.shouldApply = (r: RdfResource) => r.types.has(owl.AllDifferent)
AllDifferentMixin.Class = AllDifferentImpl
