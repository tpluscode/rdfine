import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdf } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '..';

export interface List<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  first: RDF.Term | undefined;
  rest: Rdf.List<D> | undefined;
}

export function ListMixin<Base extends Constructor>(Resource: Base): Constructor<List> & Base {
  @namespace(rdf)
  class ListClass extends Resource implements List {
    @property()
    first: RDF.Term | undefined;
    @property.resource({ as: [ListMixin] })
    rest: Rdf.List | undefined;
  }
  return ListClass
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
