import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface MathSolver<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  mathExpression: Schema.SolveMathAction<D> | undefined;
  mathExpressionLiteral: string | undefined;
}

export function MathSolverMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MathSolver> & RdfResourceCore> & Base {
  @namespace(schema)
  class MathSolverClass extends CreativeWorkMixin(Resource) implements Partial<MathSolver> {
    @property.resource()
    mathExpression: Schema.SolveMathAction | undefined;
    @property.literal({ path: schema.mathExpression })
    mathExpressionLiteral: string | undefined;
  }
  return MathSolverClass
}

class MathSolverImpl extends MathSolverMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MathSolver>) {
    super(arg, init)
    this.types.add(schema.MathSolver)
  }

  static readonly __mixins: Mixin[] = [MathSolverMixin, CreativeWorkMixin];
}
MathSolverMixin.appliesTo = schema.MathSolver
MathSolverMixin.Class = MathSolverImpl

export const fromPointer = createFactory<MathSolver>([CreativeWorkMixin, MathSolverMixin], { types: [schema.MathSolver] });
