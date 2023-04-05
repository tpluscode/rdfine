import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MediaObjectMixin } from './MediaObject.js';

export interface _3DModel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MediaObject<D>, RdfResource<D> {
  isResizable: boolean | undefined;
}

export function _3DModelMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<_3DModel> & RdfResourceCore> & Base {
  @namespace(schema)
  class _3DModelClass extends MediaObjectMixin(Resource) implements Partial<_3DModel> {
    @property.literal({ type: Boolean })
    isResizable: boolean | undefined;
  }
  return _3DModelClass
}

class _3DModelImpl extends _3DModelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<_3DModel>) {
    super(arg, init)
    this.types.add(schema['3DModel'])
  }

  static readonly __mixins: Mixin[] = [_3DModelMixin, MediaObjectMixin];
}
_3DModelMixin.appliesTo = schema['3DModel']
_3DModelMixin.Class = _3DModelImpl

export const fromPointer = createFactory<_3DModel>([MediaObjectMixin, _3DModelMixin], { types: [schema['3DModel']] });
