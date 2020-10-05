import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdf } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '.';

export interface CompoundLiteral<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  direction: RDF.Term | undefined;
  language: RDF.Term | undefined;
}

export function CompoundLiteralMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdf)
  class CompoundLiteralClass extends Resource implements CompoundLiteral {
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
