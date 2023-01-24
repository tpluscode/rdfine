import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { RelationMixin } from './Relation';

export interface AppellationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, RdfResource<D> {
  appellationRelationHasSource: Rico.Appellation<D> | undefined;
  appellationRelationHasTarget: Rico.Thing<D> | undefined;
}

export function AppellationRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AppellationRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class AppellationRelationClass extends RelationMixin(Resource) implements Partial<AppellationRelation> {
    @property.resource({ implicitTypes: [rico.Appellation] })
    appellationRelationHasSource: Rico.Appellation | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
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
