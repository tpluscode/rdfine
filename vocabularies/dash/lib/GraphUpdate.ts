import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Rdf from '@rdfine/rdf';
import { SuggestionMixin } from './Suggestion.js';
import { StatementMixin as RdfStatementMixin } from '@rdfine/rdf/lib/Statement';

export interface GraphUpdate<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.Suggestion<D>, rdfine.RdfResource<D> {
  addedTriple: Rdf.Statement<D> | undefined;
  deletedTriple: Rdf.Statement<D> | undefined;
}

export function GraphUpdateMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<GraphUpdate> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class GraphUpdateClass extends SuggestionMixin(Resource) implements Partial<GraphUpdate> {
    @rdfine.property.resource({ as: [RdfStatementMixin] })
    addedTriple: Rdf.Statement | undefined;
    @rdfine.property.resource({ as: [RdfStatementMixin] })
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

export const fromPointer = createFactory<GraphUpdate>([SuggestionMixin, GraphUpdateMixin], { types: [dash.GraphUpdate] });
