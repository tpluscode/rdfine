import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface AppellationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  appellationRelationHasSource: Rico.Appellation<D> | undefined;
  appellationRelationHasTarget: Rico.Thing<D> | undefined;
}

export function AppellationRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<AppellationRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class AppellationRelationClass extends RelationMixin(Resource) implements Partial<AppellationRelation> {
    @rdfine.property.resource({ implicitTypes: [rico.Appellation] })
    appellationRelationHasSource: Rico.Appellation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    appellationRelationHasTarget: Rico.Thing | undefined;
  }
  return AppellationRelationClass
}

class AppellationRelationImpl extends AppellationRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AppellationRelation>) {
    super(arg, init)
    this.types.add(rico.AppellationRelation)
  }

  static readonly __mixins: Mixin[] = [AppellationRelationMixin, RelationMixin];
}
AppellationRelationMixin.appliesTo = rico.AppellationRelation
AppellationRelationMixin.Class = AppellationRelationImpl

export const fromPointer = createFactory<AppellationRelation>([RelationMixin, AppellationRelationMixin], { types: [rico.AppellationRelation] });
