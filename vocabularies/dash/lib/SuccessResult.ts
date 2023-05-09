import '../extensions/sh/AbstractResult.js';
import { AbstractResultMixinEx } from '../extensions/sh/AbstractResult.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Shacl from '@rdfine/shacl';
import { AbstractResultMixin as ShaclAbstractResultMixin } from '@rdfine/shacl/lib/AbstractResult';

export interface SuccessResult<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.AbstractResult<D>, rdfine.RdfResource<D> {
}

export function SuccessResultMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SuccessResult> & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class SuccessResultClass extends AbstractResultMixinEx(ShaclAbstractResultMixin(Resource)) implements Partial<SuccessResult> {
  }
  return SuccessResultClass
}

class SuccessResultImpl extends SuccessResultMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SuccessResult>) {
    super(arg, init)
    this.types.add(dash.SuccessResult)
  }

  static readonly __mixins: Mixin[] = [SuccessResultMixin, ShaclAbstractResultMixin];
}
SuccessResultMixin.appliesTo = dash.SuccessResult
SuccessResultMixin.Class = SuccessResultImpl

export const fromPointer = createFactory<SuccessResult>([ShaclAbstractResultMixin, SuccessResultMixin], { types: [dash.SuccessResult] });
