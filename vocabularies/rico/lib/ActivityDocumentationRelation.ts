import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { ProvenanceRelationMixin } from './ProvenanceRelation.js';

export interface ActivityDocumentationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.ProvenanceRelation<D>, rdfine.RdfResource<D> {
  activityDocumentationRelationHasSource: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  activityDocumentationRelationHasTarget: Rico.Activity<D> | undefined;
}

export function ActivityDocumentationRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ActivityDocumentationRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class ActivityDocumentationRelationClass extends ProvenanceRelationMixin(Resource) {
    @rdfine.property.resource()
    activityDocumentationRelationHasSource: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Activity] })
    activityDocumentationRelationHasTarget: Rico.Activity | undefined;
  }
  return ActivityDocumentationRelationClass as any
}
ActivityDocumentationRelationMixin.appliesTo = rico.ActivityDocumentationRelation
ActivityDocumentationRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<ActivityDocumentationRelation>([ProvenanceRelationMixin, ActivityDocumentationRelationMixin], { types: [rico.ActivityDocumentationRelation] }, env)
