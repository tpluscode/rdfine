import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { ExtentMixin } from './Extent';

export interface InstantiationExtent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Extent<D>, RdfResource<D> {
}

export function InstantiationExtentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InstantiationExtent> & RdfResourceCore> & Base {
  @namespace(rico)
  class InstantiationExtentClass extends ExtentMixin(Resource) implements Partial<InstantiationExtent> {
  }
  return InstantiationExtentClass
}

class InstantiationExtentImpl extends InstantiationExtentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InstantiationExtent>) {
    super(arg, init)
    this.types.add(rico.InstantiationExtent)
  }

  static readonly __mixins: Mixin[] = [InstantiationExtentMixin, ExtentMixin];
}
InstantiationExtentMixin.appliesTo = rico.InstantiationExtent
InstantiationExtentMixin.Class = InstantiationExtentImpl

export const fromPointer = createFactory<InstantiationExtent>([ExtentMixin, InstantiationExtentMixin], { types: [rico.InstantiationExtent] });
