import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import { AbstractResultMixin as ShaclAbstractResultMixin } from '@rdfine/shacl/lib/AbstractResult';

export interface SuccessResult<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.AbstractResult<D>, RdfResource<D> {
}

export function SuccessResultMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SuccessResult> & RdfResourceCore> & Base {
  @namespace(dash)
  class SuccessResultClass extends ShaclAbstractResultMixin(Resource) implements Partial<SuccessResult> {
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
