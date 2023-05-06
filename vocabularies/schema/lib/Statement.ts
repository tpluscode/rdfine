import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Statement<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
}

export function StatementMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Statement> & RdfResourceCore> & Base {
  @namespace(schema)
  class StatementClass extends CreativeWorkMixin(Resource) implements Partial<Statement> {
  }
  return StatementClass
}

class StatementImpl extends StatementMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Statement>) {
    super(arg, init)
    this.types.add(schema.Statement)
  }

  static readonly __mixins: Mixin[] = [StatementMixin, CreativeWorkMixin];
}
StatementMixin.appliesTo = schema.Statement
StatementMixin.Class = StatementImpl

export const fromPointer = createFactory<Statement>([CreativeWorkMixin, StatementMixin], { types: [schema.Statement] });
