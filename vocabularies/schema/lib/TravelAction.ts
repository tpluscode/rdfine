import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { MoveActionMixin } from './MoveAction.js';

export interface TravelAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MoveAction<D>, rdfine.RdfResource<D> {
  distance: Schema.Distance<D> | undefined;
}

declare global {
  interface SchemaVocabulary {
    TravelAction: Factory<Schema.TravelAction>;
  }
}

export function TravelActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TravelAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TravelActionClass extends MoveActionMixin(Resource) {
    @rdfine.property.resource()
    distance: Schema.Distance | undefined;
  }
  return TravelActionClass as any
}
TravelActionMixin.appliesTo = schema.TravelAction
TravelActionMixin.createFactory = (env: RdfineEnvironment) => createFactory<TravelAction>([MoveActionMixin, TravelActionMixin], { types: [schema.TravelAction] }, env)
