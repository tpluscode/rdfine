import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Rdf from '@rdfine/rdf';
import { SuggestionMixin } from './Suggestion';
import { StatementMixin as RdfStatementMixin } from '@rdfine/rdf/lib/Statement';

export interface GraphUpdate<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Suggestion<D>, RdfResource<D> {
  addedTriple: Rdf.Statement<D> | undefined;
  deletedTriple: Rdf.Statement<D> | undefined;
}

export function GraphUpdateMixin<Base extends Constructor>(Resource: Base) {
  @namespace(dash)
  class GraphUpdateClass extends SuggestionMixin(Resource) implements Partial<GraphUpdate> {
    @property.resource({ as: [RdfStatementMixin] })
    addedTriple: Rdf.Statement | undefined;
    @property.resource({ as: [RdfStatementMixin] })
    deletedTriple: Rdf.Statement | undefined;
  }
  return GraphUpdateClass
}

class GraphUpdateImpl extends GraphUpdateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GraphUpdate>) {
    super(arg, init)
    this.types.add(dash.GraphUpdate)
  }

  static readonly __mixins: Mixin[] = [GraphUpdateMixin, SuggestionMixin];
}
GraphUpdateMixin.appliesTo = dash.GraphUpdate
GraphUpdateMixin.Class = GraphUpdateImpl
