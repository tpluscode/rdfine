import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Relation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, rdfine.RdfResource<D> {
  certainty: RDF.Literal | undefined;
  hasSource: Rico.Agent<D> | Rico.RecordResource<D> | undefined;
  relationConnects: Rico.Thing<D> | undefined;
  relationHasContext: Rico.Thing<D> | undefined;
  relationHasSource: Rico.Thing<D> | undefined;
  relationHasTarget: Rico.Thing<D> | undefined;
  relationState: RDF.Literal | undefined;
  source: RDF.Literal | undefined;
}

export function RelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Relation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RelationClass extends ThingMixin(Resource) {
    @rdfine.property()
    certainty: RDF.Literal | undefined;
    @rdfine.property.resource()
    hasSource: Rico.Agent | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    relationConnects: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    relationHasContext: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    relationHasSource: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    relationHasTarget: Rico.Thing | undefined;
    @rdfine.property()
    relationState: RDF.Literal | undefined;
    @rdfine.property()
    source: RDF.Literal | undefined;
  }
  return RelationClass as any
}

class RelationImpl extends RelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Relation>) {
    super(arg, init)
    this.types.add(rico.Relation)
  }

  static readonly __mixins: Mixin[] = [RelationMixin, ThingMixin];
}
RelationMixin.appliesTo = rico.Relation
RelationMixin.Class = RelationImpl

export const fromPointer = createFactory<Relation>([ThingMixin, RelationMixin], { types: [rico.Relation] });
