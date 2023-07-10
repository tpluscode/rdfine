import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import { ValidationTestCaseMixin } from './ValidationTestCase.js';

export interface GraphValidationTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.ValidationTestCase<D>, rdfine.RdfResource<D> {
  validateShapes: boolean | undefined;
}

export function GraphValidationTestCaseMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GraphValidationTestCase & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class GraphValidationTestCaseClass extends ValidationTestCaseMixin(Resource) {
    @rdfine.property.literal({ type: Boolean })
    validateShapes: boolean | undefined;
  }
  return GraphValidationTestCaseClass as any
}

class GraphValidationTestCaseImpl extends GraphValidationTestCaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GraphValidationTestCase>) {
    super(arg, init)
    this.types.add(dash.GraphValidationTestCase)
  }

  static readonly __mixins: Mixin[] = [GraphValidationTestCaseMixin, ValidationTestCaseMixin];
}
GraphValidationTestCaseMixin.appliesTo = dash.GraphValidationTestCase
GraphValidationTestCaseMixin.Class = GraphValidationTestCaseImpl

export const fromPointer = createFactory<GraphValidationTestCase>([ValidationTestCaseMixin, GraphValidationTestCaseMixin], { types: [dash.GraphValidationTestCase] });
