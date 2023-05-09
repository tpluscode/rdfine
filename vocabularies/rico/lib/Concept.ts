import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Concept<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, RdfResource<D> {
}

export function ConceptMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Concept> & RdfResourceCore> & Base {
  @namespace(rico)
  class ConceptClass extends ThingMixin(Resource) implements Partial<Concept> {
  }
  return ConceptClass
}

class ConceptImpl extends ConceptMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Concept>) {
    super(arg, init)
    this.types.add(rico.Concept)
  }

  static readonly __mixins: Mixin[] = [ConceptMixin, ThingMixin];
}
ConceptMixin.appliesTo = rico.Concept
ConceptMixin.Class = ConceptImpl

export const fromPointer = createFactory<Concept>([ThingMixin, ConceptMixin], { types: [rico.Concept] });
