import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { GrantMixin } from './Grant.js';

export interface MonetaryGrant<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Grant<D>, rdfine.RdfResource<D> {
  amount: Schema.MonetaryAmount<D> | undefined;
  amountLiteral: number | undefined;
  funder: Schema.Organization<D> | Schema.Person<D> | undefined;
}

declare global {
  interface SchemaVocabulary {
    MonetaryGrant: Factory<Schema.MonetaryGrant>;
  }
}

export function MonetaryGrantMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MonetaryGrant & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MonetaryGrantClass extends GrantMixin(Resource) {
    @rdfine.property.resource()
    amount: Schema.MonetaryAmount | undefined;
    @rdfine.property.literal({ path: schema.amount, type: Number })
    amountLiteral: number | undefined;
    @rdfine.property.resource()
    funder: Schema.Organization | Schema.Person | undefined;
  }
  return MonetaryGrantClass as any
}
MonetaryGrantMixin.appliesTo = schema.MonetaryGrant
MonetaryGrantMixin.createFactory = (env: RdfineEnvironment) => createFactory<MonetaryGrant>([GrantMixin, MonetaryGrantMixin], { types: [schema.MonetaryGrant] }, env)
