import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { InteractActionMixin } from './InteractAction.js';

export interface LeaveAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.InteractAction<D>, rdfine.RdfResource<D> {
  event: Schema.Event<D> | undefined;
}

declare global {
  interface SchemaVocabulary {
    LeaveAction: Factory<Schema.LeaveAction>;
  }
}

export function LeaveActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<LeaveAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LeaveActionClass extends InteractActionMixin(Resource) {
    @rdfine.property.resource()
    event: Schema.Event | undefined;
  }
  return LeaveActionClass as any
}
LeaveActionMixin.appliesTo = schema.LeaveAction
LeaveActionMixin.createFactory = (env: RdfineEnvironment) => createFactory<LeaveAction>([InteractActionMixin, LeaveActionMixin], { types: [schema.LeaveAction] }, env)
