import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface ManagesBlock<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  object: Hydra.Class<D> | undefined;
  property: Rdf.Property<D> | undefined;
  subject: Hydra.Resource<D> | undefined;
}

export function ManagesBlockMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ManagesBlock> & RdfResourceCore> & Base {
  @namespace(hydra)
  class ManagesBlockClass extends Resource implements Partial<ManagesBlock> {
    @property.resource()
    object: Hydra.Class | undefined;
    @property.resource({ as: [RdfPropertyMixin] })
    property: Rdf.Property | undefined;
    @property.resource({ implicitTypes: [hydra.Resource] })
    subject: Hydra.Resource | undefined;
  }
  return ManagesBlockClass
}

class ManagesBlockImpl extends ManagesBlockMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ManagesBlock>) {
    super(arg, init)
    this.types.add(hydra.ManagesBlock)
  }

  static readonly __mixins: Mixin[] = [ManagesBlockMixin];
}
ManagesBlockMixin.appliesTo = hydra.ManagesBlock
ManagesBlockMixin.Class = ManagesBlockImpl

export const fromPointer = createFactory<ManagesBlock>([ManagesBlockMixin], { types: [hydra.ManagesBlock] });
