import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { ThingMixin } from './Thing';

export interface Relation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, RdfResource<D> {
  certainty: RDF.Literal | undefined;
  hasSource: Rico.Agent<D> | Rico.RecordResource<D> | undefined;
  relationConnects: Rico.Thing<D> | undefined;
  relationHasContext: Rico.Thing<D> | undefined;
  relationHasSource: Rico.Thing<D> | undefined;
  relationHasTarget: Rico.Thing<D> | undefined;
  relationState: RDF.Literal | undefined;
  source: RDF.Literal | undefined;
}

export function RelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Relation> & RdfResourceCore> & Base {
  @namespace(rico)
  class RelationClass extends ThingMixin(Resource) implements Partial<Relation> {
    @property()
    certainty: RDF.Literal | undefined;
    @property.resource()
    hasSource: Rico.Agent | Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    relationConnects: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    relationHasContext: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    relationHasSource: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    relationHasTarget: Rico.Thing | undefined;
    @property()
    relationState: RDF.Literal | undefined;
    @property()
    source: RDF.Literal | undefined;
  }
  return RelationClass
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
