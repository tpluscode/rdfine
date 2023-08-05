import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness.js';

export interface MotorcycleDealer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    MotorcycleDealer: Factory<Schema.MotorcycleDealer>;
  }
}

export function MotorcycleDealerMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MotorcycleDealer & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MotorcycleDealerClass extends AutomotiveBusinessMixin(Resource) {
  }
  return MotorcycleDealerClass as any
}
MotorcycleDealerMixin.appliesTo = schema.MotorcycleDealer
MotorcycleDealerMixin.createFactory = (env: RdfineEnvironment) => createFactory<MotorcycleDealer>([AutomotiveBusinessMixin, MotorcycleDealerMixin], { types: [schema.MotorcycleDealer] }, env)
