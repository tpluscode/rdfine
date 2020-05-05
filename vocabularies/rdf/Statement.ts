import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { rdf } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '.';

export interface Statement extends RdfResource {
  object: RDF.Term;
  predicate: RDF.Term;
  subject: RDF.Term;
}

export function StatementMixin<Base extends Constructor>(Resource: Base) {
  @namespace(rdf)
  class StatementClass extends Resource implements Statement {
    @property()
    object!: RDF.Term;
    @property()
    predicate!: RDF.Term;
    @property()
    subject!: RDF.Term;
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
