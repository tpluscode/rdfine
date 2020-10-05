import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdfs from '@rdfine/rdfs';
import * as Rdf from '@rdfine/rdf';

export interface AllDifferent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  distinctMembers: Rdf.List<D> | undefined;
}

export function AllDifferentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class AllDifferentClass extends Rdfs.ResourceMixin(Resource) implements AllDifferent {
    @property.resource({ as: [Rdf.ListMixin] })
    distinctMembers: Rdf.List | undefined;
  }
  return AllDifferentClass
}

class AllDifferentImpl extends AllDifferentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AllDifferent>) {
    super(arg, init)
    this.types.add(owl.AllDifferent)
  }

  static readonly __mixins: Mixin[] = [AllDifferentMixin, Rdfs.ResourceMixin];
}
AllDifferentMixin.appliesTo = owl.AllDifferent
AllDifferentMixin.Class = AllDifferentImpl
