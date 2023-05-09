import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ProvenanceRelationMixin } from './ProvenanceRelation.js';

export interface ActivityDocumentationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.ProvenanceRelation<D>, rdfine.RdfResource<D> {
  activityDocumentationRelationHasSource: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  activityDocumentationRelationHasTarget: Rico.Activity<D> | undefined;
}

export function ActivityDocumentationRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ActivityDocumentationRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class ActivityDocumentationRelationClass extends ProvenanceRelationMixin(Resource) implements Partial<ActivityDocumentationRelation> {
    @rdfine.property.resource()
    activityDocumentationRelationHasSource: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Activity] })
    activityDocumentationRelationHasTarget: Rico.Activity | undefined;
  }
  return ActivityDocumentationRelationClass
}

class ActivityDocumentationRelationImpl extends ActivityDocumentationRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ActivityDocumentationRelation>) {
    super(arg, init)
    this.types.add(rico.ActivityDocumentationRelation)
  }

  static readonly __mixins: Mixin[] = [ActivityDocumentationRelationMixin, ProvenanceRelationMixin];
}
ActivityDocumentationRelationMixin.appliesTo = rico.ActivityDocumentationRelation
ActivityDocumentationRelationMixin.Class = ActivityDocumentationRelationImpl

export const fromPointer = createFactory<ActivityDocumentationRelation>([ProvenanceRelationMixin, ActivityDocumentationRelationMixin], { types: [rico.ActivityDocumentationRelation] });
