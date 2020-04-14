import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { rdf } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Rdf from '.';

export interface List<T = RDF.Term> extends RdfResource {
  first: T;
  rest: Rdf.List<T>;
}

export default function ListMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdf)
  class ListClass extends Resource implements List {
    @property()
    first!: RDF.Term;
    @property.resource({ as: [ListMixin] })
    rest!: Rdf.List;
  }
  return ListClass
}

class ListImpl extends ListMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<List>) {
    super(arg, init)
    this.types.add(rdf.List)
  }
}
ListMixin.shouldApply = (r: RdfResource) => r.types.has(rdf.List)
ListMixin.Class = ListImpl
