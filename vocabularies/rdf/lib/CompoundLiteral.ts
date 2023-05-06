import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rdf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '../index.js';

export interface CompoundLiteral<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  direction: RDF.Term | undefined;
  language: RDF.Term | undefined;
}

export function CompoundLiteralMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CompoundLiteral> & RdfResourceCore> & Base {
  @namespace(rdf)
  class CompoundLiteralClass extends Resource implements Partial<CompoundLiteral> {
    @property()
    direction: RDF.Term | undefined;
    @property()
    language: RDF.Term | undefined;
  }
  return CompoundLiteralClass
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
