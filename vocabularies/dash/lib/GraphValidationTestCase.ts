import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import { ValidationTestCaseMixin } from './ValidationTestCase';

export interface GraphValidationTestCase<D extends RDF.DatasetCore = RDF.DatasetCore> extends Dash.ValidationTestCase<D>, RdfResource<D> {
  validateShapes: boolean | undefined;
}

export function GraphValidationTestCaseMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GraphValidationTestCase> & RdfResourceCore> & Base {
  @namespace(dash)
  class GraphValidationTestCaseClass extends ValidationTestCaseMixin(Resource) implements Partial<GraphValidationTestCase> {
    @property.literal({ type: Boolean })
    validateShapes: boolean | undefined;
  }
  return GraphValidationTestCaseClass
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
