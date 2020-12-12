import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdf } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rdf from '..';

export interface Statement<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  object: RDF.Term | undefined;
  predicate: RDF.Term | undefined;
  subject: RDF.Term | undefined;
}

export function StatementMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Statement> & RdfResourceCore> & Base {
  @namespace(rdf)
  class StatementClass extends Resource implements Partial<Statement> {
    @property()
    object: RDF.Term | undefined;
    @property()
    predicate: RDF.Term | undefined;
    @property()
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
