import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rdf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '../index.js';

export interface Statement<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  object: RDF.Term | undefined;
  predicate: RDF.Term | undefined;
  subject: RDF.Term | undefined;
}

export function StatementMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Statement> & RdfResourceCore> & Base {
  @rdfine.namespace(rdf)
  class StatementClass extends Resource implements Partial<Statement> {
    @rdfine.property()
    object: RDF.Term | undefined;
    @rdfine.property()
    predicate: RDF.Term | undefined;
    @rdfine.property()
    subject: RDF.Term | undefined;
  }
  return StatementClass
}

class StatementImpl extends StatementMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Statement>) {
    super(arg, init)
    this.types.add(rdf.Statement)
  }

  static readonly __mixins: Mixin[] = [StatementMixin];
}
StatementMixin.appliesTo = rdf.Statement
StatementMixin.Class = StatementImpl

export const fromPointer = createFactory<Statement>([StatementMixin], { types: [rdf.Statement] });
