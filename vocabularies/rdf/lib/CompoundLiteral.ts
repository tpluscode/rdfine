import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rdf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '../index.js';

export interface CompoundLiteral<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  direction: RDF.Term | undefined;
  language: RDF.Term | undefined;
}

export function CompoundLiteralMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CompoundLiteral & RdfResourceCore> & Base {
  @rdfine.namespace(rdf)
  class CompoundLiteralClass extends Resource {
    @rdfine.property()
    direction: RDF.Term | undefined;
    @rdfine.property()
    language: RDF.Term | undefined;
  }
  return CompoundLiteralClass as any
}

class CompoundLiteralImpl extends CompoundLiteralMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CompoundLiteral>) {
    super(arg, init)
    this.types.add(rdf.CompoundLiteral)
  }

  static readonly __mixins: Mixin[] = [CompoundLiteralMixin];
}
CompoundLiteralMixin.appliesTo = rdf.CompoundLiteral
CompoundLiteralMixin.Class = CompoundLiteralImpl

export const fromPointer = createFactory<CompoundLiteral>([CompoundLiteralMixin], { types: [rdf.CompoundLiteral] });
