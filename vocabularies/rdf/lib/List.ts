import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rdf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '../index.js';

export interface List<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  first: RDF.Term | undefined;
  rest: Rdf.List<D> | undefined;
}

export function ListMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<List & RdfResourceCore> & Base {
  @rdfine.namespace(rdf)
  class ListClass extends Resource {
    @rdfine.property()
    first: RDF.Term | undefined;
    @rdfine.property.resource({ as: [ListMixin] })
    rest: Rdf.List | undefined;
  }
  return ListClass as any
}

class ListImpl extends ListMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<List>) {
    super(arg, init)
    this.types.add(rdf.List)
  }

  static readonly __mixins: Mixin[] = [ListMixin];
}
ListMixin.appliesTo = rdf.List
ListMixin.Class = ListImpl

export const fromPointer = createFactory<List>([ListMixin], { types: [rdf.List] });
