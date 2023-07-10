import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { skos } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Skos from '../index.js';

export interface ConceptScheme<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  hasTopConcept: Skos.Concept<D> | undefined;
}

export function ConceptSchemeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ConceptScheme & RdfResourceCore> & Base {
  @rdfine.namespace(skos)
  class ConceptSchemeClass extends Resource {
    @rdfine.property.resource({ implicitTypes: [skos.Concept] })
    hasTopConcept: Skos.Concept | undefined;
  }
  return ConceptSchemeClass as any
}

class ConceptSchemeImpl extends ConceptSchemeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConceptScheme>) {
    super(arg, init)
    this.types.add(skos.ConceptScheme)
  }

  static readonly __mixins: Mixin[] = [ConceptSchemeMixin];
}
ConceptSchemeMixin.appliesTo = skos.ConceptScheme
ConceptSchemeMixin.Class = ConceptSchemeImpl

export const fromPointer = createFactory<ConceptScheme>([ConceptSchemeMixin], { types: [skos.ConceptScheme] });
