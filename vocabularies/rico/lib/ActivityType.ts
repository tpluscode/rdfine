import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { TypeMixin } from './Type.js';

export interface ActivityType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, rdfine.RdfResource<D> {
  isActivityTypeOf: Rico.Activity<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    ActivityType: Factory<Rico.ActivityType>;
  }
}

export function ActivityTypeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ActivityType & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class ActivityTypeClass extends TypeMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Activity] })
    isActivityTypeOf: Rico.Activity | undefined;
  }
  return ActivityTypeClass as any
}
ActivityTypeMixin.appliesTo = rico.ActivityType
ActivityTypeMixin.createFactory = (env: RdfineEnvironment) => createFactory<ActivityType>([TypeMixin, ActivityTypeMixin], { types: [rico.ActivityType] }, env)
