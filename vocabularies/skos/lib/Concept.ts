import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { skos } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Skos from '../index.js';

export interface Concept<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  semanticRelation: Array<Skos.Concept<D>>;
  topConceptOf: Array<Skos.ConceptScheme<D>>;
}

export function ConceptMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Concept> & RdfResourceCore> & Base {
  @namespace(skos)
  class ConceptClass extends Resource implements Partial<Concept> {
    @property.resource({ values: 'array', as: [ConceptMixin] })
    semanticRelation!: Array<Skos.Concept>;
    @property.resource({ values: 'array', implicitTypes: [skos.ConceptScheme] })
    topConceptOf!: Array<Skos.ConceptScheme>;
  }
  return ConceptClass
}

class ConceptImpl extends ConceptMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Concept>) {
    super(arg, init)
    this.types.add(skos.Concept)
  }

  static readonly __mixins: Mixin[] = [ConceptMixin];
}
ConceptMixin.appliesTo = skos.Concept
ConceptMixin.Class = ConceptImpl

export const fromPointer = createFactory<Concept>([ConceptMixin], { types: [skos.Concept] });
