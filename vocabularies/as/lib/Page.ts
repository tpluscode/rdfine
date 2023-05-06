import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Page<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
}

export function PageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Page> & RdfResourceCore> & Base {
  @namespace(as)
  class PageClass extends ObjectMixin(Resource) implements Partial<Page> {
  }
  return PageClass
}

class PageImpl extends PageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Page>) {
    super(arg, init)
    this.types.add(as.Page)
  }

  static readonly __mixins: Mixin[] = [PageMixin, ObjectMixin];
}
PageMixin.appliesTo = as.Page
PageMixin.Class = PageImpl

export const fromPointer = createFactory<Page>([ObjectMixin, PageMixin], { types: [as.Page] });
